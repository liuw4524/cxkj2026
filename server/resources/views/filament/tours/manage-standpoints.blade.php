<div>
    <style>
        .standpoint-layout { display: grid; grid-template-columns: minmax(0, 1fr) 360px; gap: 16px; align-items: start; }
        .standpoint-side, .standpoint-list { background: #fff; border: 1px solid #e7e5e4; border-radius: 16px; padding: 16px; }
        .standpoint-side h3, .standpoint-list h3 { margin: 0 0 8px; font-size: 16px; }
        .standpoint-side p, .standpoint-list p { margin: 0 0 12px; color: #57534e; font-size: 13px; line-height: 1.5; }
        .standpoint-side label { display: block; margin: 10px 0 4px; font-size: 13px; font-weight: 600; }
        .standpoint-side input[type="text"], .standpoint-side input[type="number"], .standpoint-side input[type="file"] { width: 100%; border: 1px solid #d6d3d1; border-radius: 10px; padding: 8px 10px; background: #fff; }
        .standpoint-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .standpoint-actions, .standpoint-item-actions { display: flex; gap: 8px; margin-top: 14px; flex-wrap: wrap; }
        .standpoint-actions button, .standpoint-item-actions button { border: 0; border-radius: 999px; padding: 8px 12px; cursor: pointer; }
        .standpoint-primary { background: #0f766e; color: #fff; }
        .standpoint-muted { background: #f5f5f4; color: #44403c; }
        .standpoint-danger { background: #fee2e2; color: #991b1b; }
        .standpoint-items { display: flex; flex-direction: column; gap: 8px; }
        .standpoint-item { display: flex; justify-content: space-between; gap: 8px; align-items: center; padding: 8px; border-radius: 10px; background: #fafaf9; }
        .standpoint-error { color: #b91c1c; font-size: 12px; margin-top: 4px; }
        .standpoint-back { display: inline-block; margin-bottom: 12px; color: #0f766e; }
        .standpoint-check { display: flex; align-items: center; gap: 8px; margin-top: 12px; font-size: 13px; }
        @media (max-width: 900px) { .standpoint-layout { grid-template-columns: 1fr; } }
    </style>

    <a class="standpoint-back" href="{{ \App\Filament\Resources\TourResource::getUrl('edit', ['record' => $this->tour]) }}">返回作品</a>

    <div class="standpoint-layout">
        <section class="standpoint-list">
            <h3>这个场景的站位</h3>
            <p>访客从初始站位开始。点地面上的箭头会用大约一秒的位移和淡入淡出，走到目标站位。底部缩略图仍然用来换场景。</p>
            <div class="standpoint-items">
                @forelse ($scene->standpoints()->orderBy('sort_order')->orderBy('id')->get() as $standpoint)
                    <div class="standpoint-item">
                        <div>
                            <strong>{{ $standpoint->name }}</strong>
                            @if ($standpoint->is_entry)
                                <span style="font-size:12px;color:#0f766e;">初始站位</span>
                            @endif
                            <div style="font-size:12px;color:#78716c;">
                                X {{ $standpoint->position_x }} / Y {{ $standpoint->position_y }}
                                · 朝向 {{ $standpoint->yaw }}
                            </div>
                        </div>
                        <div class="standpoint-item-actions">
                            @unless ($standpoint->is_entry)
                                <button type="button" class="standpoint-muted" wire:click="markEntry({{ $standpoint->id }})">设为初始</button>
                            @endunless
                            <button type="button" class="standpoint-muted" wire:click="edit({{ $standpoint->id }})">编辑</button>
                            <button type="button" class="standpoint-danger" wire:click="deleteStandpoint({{ $standpoint->id }})" wire:confirm="删除后，指向这个站位的热点会提示「目标站位已不存在」。确定删除？">删除</button>
                        </div>
                    </div>
                @empty
                    <p>还没有站位。保存后会自动有一个初始站位。</p>
                @endforelse
            </div>
        </section>

        <aside class="standpoint-side">
            <h3>{{ $editingId ? '编辑站位' : '新站位' }}</h3>
            <p>X 向右、Y 向前，单位米。到达朝向和俯仰用弧度，0 表示正对全景图中央。不上传图片时沿用场景全景图。</p>

            <label for="standpoint-name">站位名称</label>
            <input id="standpoint-name" type="text" maxlength="40" wire:model="standpointName" placeholder="例如：门口">
            @error('standpointName') <div class="standpoint-error">{{ $message }}</div> @enderror

            <div class="standpoint-grid">
                <div>
                    <label for="standpoint-x">平面坐标 X</label>
                    <input id="standpoint-x" type="number" step="0.1" wire:model="positionX">
                    @error('positionX') <div class="standpoint-error">{{ $message }}</div> @enderror
                </div>
                <div>
                    <label for="standpoint-y">平面坐标 Y</label>
                    <input id="standpoint-y" type="number" step="0.1" wire:model="positionY">
                    @error('positionY') <div class="standpoint-error">{{ $message }}</div> @enderror
                </div>
            </div>

            <div class="standpoint-grid">
                <div>
                    <label for="standpoint-yaw">到达朝向 yaw</label>
                    <input id="standpoint-yaw" type="number" step="0.01" wire:model="yaw">
                    @error('yaw') <div class="standpoint-error">{{ $message }}</div> @enderror
                </div>
                <div>
                    <label for="standpoint-pitch">到达俯仰 pitch</label>
                    <input id="standpoint-pitch" type="number" step="0.01" wire:model="pitch">
                    @error('pitch') <div class="standpoint-error">{{ $message }}</div> @enderror
                </div>
            </div>

            <label class="standpoint-check">
                <input type="checkbox" wire:model="isEntry">
                作为这个场景的初始站位
            </label>

            <label for="standpoint-image">站位全景图（可选）</label>
            <input id="standpoint-image" type="file" accept="image/jpeg,image/png" wire:model="panorama">
            <p>JPG / PNG，单张不超过 20MB。建议最长边不超过 8192 像素。</p>
            @error('panorama') <div class="standpoint-error">{{ $message }}</div> @enderror
            <div wire:loading wire:target="panorama" class="standpoint-error">正在读取图片…</div>

            <div class="standpoint-actions">
                <button type="button" class="standpoint-primary" wire:click="save" wire:loading.attr="disabled">保存站位</button>
                @if ($editingId)
                    <button type="button" class="standpoint-muted" wire:click="prepareNew">改为新建</button>
                @endif
            </div>
        </aside>
    </div>
</div>
