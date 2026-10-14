<?php

namespace App\Filament\Resources\TourResource\RelationManagers;

use App\Filament\Resources\TourResource\Pages\ManageSceneHotspots;
use App\Models\Scene;
use App\Rules\PanoramaUploadRule;
use App\Support\PanoramaLimits;
use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Notifications\Notification;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ScenesRelationManager extends RelationManager
{
    protected static string $relationship = 'scenes';

    protected static ?string $title = '场景';

    public function form(Schema $schema): Schema
    {
        return $schema->components([
            TextInput::make('name')
                ->label('场景名称')
                ->required()
                ->maxLength(40),
            FileUpload::make('image_path')
                ->label('全景图')
                ->required(fn (string $operation): bool => $operation === 'create')
                ->disk(fn (): string => (string) config('panorama.disk'))
                ->directory('panoramas')
                ->visibility('public')
                ->acceptedFileTypes(['image/jpeg', 'image/png'])
                ->maxSize(PanoramaLimits::MAX_KILOBYTES)
                ->rules([new PanoramaUploadRule])
                ->validationMessages([
                    'max' => PanoramaLimits::OVERSIZE_MESSAGE,
                ])
                ->helperText('支持 JPG / PNG，单张不超过 20MB。建议最长边不超过 8192 像素，以获得更好的加载速度。')
                ->imagePreviewHeight('160')
                ->columnSpanFull(),
        ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->modelLabel('场景')
            ->pluralModelLabel('场景')
            ->defaultSort('sort_order')
            ->reorderable('sort_order')
            ->columns([
                ImageColumn::make('thumbnail_url')
                    ->label('缩略图')
                    ->checkFileExistence(false)
                    ->height(48),
                TextColumn::make('name')->label('名称'),
                IconColumn::make('is_entry')->label('初始场景')->boolean(),
                TextColumn::make('sort_order')->label('排序'),
                TextColumn::make('width')
                    ->label('尺寸')
                    ->formatStateUsing(fn (Scene $record): string => $record->width
                        ? $record->width.' × '.$record->height
                        : '—'),
            ])
            ->headerActions([
                CreateAction::make()
                    ->label('上传场景')
                    ->after(function (Scene $record): void {
                        $this->notifyEdge($record);
                    }),
            ])
            ->recordActions([
                Action::make('entry')
                    ->label('设为初始场景')
                    ->visible(fn (Scene $record): bool => ! $record->is_entry)
                    ->action(function (Scene $record): void {
                        $record->markAsEntry();
                        Notification::make()->success()->title('已设为初始场景')->send();
                    }),
                Action::make('hotspots')
                    ->label('标注热点')
                    ->visible(fn (Scene $record): bool => filled($record->image_url))
                    ->url(fn (Scene $record): string => ManageSceneHotspots::getUrl([
                        'record' => $record->tour_id,
                        'scene' => $record->id,
                    ])),
                EditAction::make()
                    ->label('编辑')
                    ->after(function (Scene $record): void {
                        $this->notifyEdge($record);
                    }),
                DeleteAction::make()->label('删除'),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->emptyStateHeading('还没有场景')
            ->emptyStateDescription('上传 JPG 或 PNG 全景图。单张不超过 20MB，建议最长边不超过 8192 像素。');
    }

    private function notifyEdge(Scene $record): void
    {
        $record->refresh();
        $warning = PanoramaLimits::edgeWarning($record->width, $record->height);

        if ($warning) {
            Notification::make()->warning()->title('分辨率偏高')->body($warning)->send();
        }
    }
}
