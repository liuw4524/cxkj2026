<?php

namespace App\Filament\Resources\TourResource\Pages;

use App\Enums\TourStatus;
use App\Filament\Resources\TourResource;
use Filament\Actions\Action;
use Filament\Actions\DeleteAction;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Validation\ValidationException;

class EditTour extends EditRecord
{
    protected static string $resource = TourResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('publish')
                ->label('发布')
                ->color('success')
                ->visible(fn (): bool => $this->getRecord()->status === TourStatus::Draft)
                ->requiresConfirmation()
                ->modalHeading('发布作品')
                ->modalDescription('发布后，分享链接即可被访客打开。')
                ->action(function (): void {
                    $tour = $this->getRecord();

                    if ($tour->scenes()->count() === 0) {
                        Notification::make()
                            ->danger()
                            ->title('无法发布')
                            ->body('请至少上传一个场景后再发布')
                            ->send();

                        return;
                    }

                    try {
                        $tour->publish();
                    } catch (ValidationException) {
                        Notification::make()->danger()->title('无法发布')->body('请至少上传一个场景后再发布')->send();

                        return;
                    }

                    Notification::make()->success()->title('已发布')->body($tour->shareUrl())->send();
                    $this->redirect(static::getUrl(['record' => $tour]));
                }),
            Action::make('unpublish')
                ->label('下架')
                ->color('warning')
                ->visible(fn (): bool => $this->getRecord()->status === TourStatus::Published)
                ->requiresConfirmation()
                ->modalHeading('下架作品')
                ->modalDescription('下架后，原分享链接将无法播放，并提示「作品未发布」。')
                ->action(function (): void {
                    $tour = $this->getRecord();
                    $tour->unpublish();
                    Notification::make()->success()->title('已下架')->send();
                    $this->redirect(static::getUrl(['record' => $tour]));
                }),
            DeleteAction::make()->label('删除作品'),
        ];
    }
}
