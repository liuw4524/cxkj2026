<?php

namespace App\Filament\Resources;

use App\Enums\TourStatus;
use App\Filament\Resources\TourResource\Pages\CreateTour;
use App\Filament\Resources\TourResource\Pages\EditTour;
use App\Filament\Resources\TourResource\Pages\ListTours;
use App\Filament\Resources\TourResource\Pages\ManageSceneHotspots;
use App\Filament\Resources\TourResource\RelationManagers\ScenesRelationManager;
use App\Models\Tour;
use App\Support\EmbedGuide;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Text;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Validation\ValidationException;

class TourResource extends Resource
{
    protected static ?string $model = Tour::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedMap;

    protected static ?string $navigationLabel = '作品';

    protected static ?string $modelLabel = '作品';

    protected static ?string $pluralModelLabel = '作品';

    protected static ?int $navigationSort = 1;

    public static function form(Schema $schema): Schema
    {
        return $schema->components([
            TextInput::make('name')
                ->label('作品名称')
                ->required()
                ->maxLength(80),
            Textarea::make('description')
                ->label('简介')
                ->rows(3)
                ->maxLength(500)
                ->columnSpanFull(),
            Section::make('分享与嵌入')
                ->columnSpanFull()
                ->components([
                    TextInput::make('share_link')
                        ->label('分享链接')
                        ->disabled()
                        ->dehydrated(false)
                        ->copyable(copyMessage: '链接已复制')
                        ->hiddenOn('create')
                        ->afterStateHydrated(function (TextInput $component, ?Tour $record): void {
                            if ($record) {
                                $component->state($record->shareUrl());
                            }
                        }),
                    Text::make(fn (?Tour $record): string => $record
                        ? EmbedGuide::text($record->share_code)
                        : '保存作品后会生成分享链接。业务方只嵌这条链接，不用改播放器。')
                        ->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->label('名称')->searchable(),
                TextColumn::make('status')
                    ->label('状态')
                    ->badge()
                    ->formatStateUsing(function (TourStatus|string $state): string {
                        $status = $state instanceof TourStatus ? $state : TourStatus::from($state);

                        return $status->label();
                    })
                    ->color(function (TourStatus|string $state): string {
                        $status = $state instanceof TourStatus ? $state : TourStatus::from($state);

                        return $status === TourStatus::Published ? 'success' : 'gray';
                    }),
                TextColumn::make('scenes_count')->counts('scenes')->label('场景'),
                TextColumn::make('share_url')
                    ->label('分享链接')
                    ->state(fn (Tour $record): string => $record->shareUrl())
                    ->copyable()
                    ->copyMessage('链接已复制')
                    ->limit(36),
                TextColumn::make('updated_at')->label('更新')->dateTime('Y-m-d H:i'),
            ])
            ->defaultSort('id', 'desc')
            ->recordActions([
                EditAction::make()->label('编辑'),
                Action::make('publish')
                    ->label('发布')
                    ->color('success')
                    ->visible(fn (Tour $record): bool => $record->status === TourStatus::Draft)
                    ->action(function (Tour $record): void {
                        if ($record->scenes()->count() === 0) {
                            Notification::make()->danger()->title('无法发布')->body('请至少上传一个场景后再发布')->send();

                            return;
                        }

                        try {
                            $record->publish();
                        } catch (ValidationException) {
                            Notification::make()->danger()->title('无法发布')->body('请至少上传一个场景后再发布')->send();

                            return;
                        }

                        Notification::make()->success()->title('已发布')->body($record->shareUrl())->send();
                    }),
                Action::make('unpublish')
                    ->label('下架')
                    ->color('warning')
                    ->visible(fn (Tour $record): bool => $record->status === TourStatus::Published)
                    ->requiresConfirmation()
                    ->modalHeading('下架作品')
                    ->modalDescription('下架后，原分享链接将提示「作品未发布」。')
                    ->action(function (Tour $record): void {
                        $record->unpublish();
                        Notification::make()->success()->title('已下架')->send();
                    }),
                DeleteAction::make()->label('删除'),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            ScenesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListTours::route('/'),
            'create' => CreateTour::route('/create'),
            'edit' => EditTour::route('/{record}/edit'),
            'hotspots' => ManageSceneHotspots::route('/{record}/scenes/{scene}/hotspots'),
        ];
    }
}
