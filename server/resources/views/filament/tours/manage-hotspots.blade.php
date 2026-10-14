<div>
    <style>
        .hotspot-layout { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 16px; align-items: start; }
        .hotspot-stage { min-height: 420px; height: 68vh; background: #111; border-radius: 16px; overflow: hidden; }
        .hotspot-side { background: #fff; border: 1px solid #e7e5e4; border-radius: 16px; padding: 16px; }
        .hotspot-side h3 { margin: 0 0 8px; font-size: 16px; }
        .hotspot-side p { margin: 0 0 12px; color: #57534e; font-size: 13px; line-height: 1.5; }
        .hotspot-side label { display: block; margin: 10px 0 4px; font-size: 13px; font-weight: 600; }
        .hotspot-side input, .hotspot-side select { width: 100%; border: 1px solid #d6d3d1; border-radius: 10px; padding: 8px 10px; background: #fff; }
        .hotspot-actions { display: flex; gap: 8px; margin-top: 14px; }
        .hotspot-actions button, .hotspot-list button, .standpoint-switch button { border: 0; border-radius: 999px; padding: 8px 12px; cursor: pointer; }
        .hotspot-primary { background: #0f766e; color: #fff; }
        .hotspot-muted { background: #f5f5f4; color: #44403c; }
        .hotspot-danger { background: #fee2e2; color: #991b1b; }
        .hotspot-list { margin-top: 18px; display: flex; flex-direction: column; gap: 8px; }
        .hotspot-item { display: flex; justify-content: space-between; gap: 8px; align-items: center; padding: 8px; border-radius: 10px; background: #fafaf9; }
        .hotspot-error { color: #b91c1c; font-size: 12px; margin-top: 4px; }
        .hotspot-back { display: inline-block; margin-bottom: 12px; color: #0f766e; }
        .standpoint-switch { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
        .standpoint-switch button.is-active { background: #0f766e; color: #fff; }
        @media (max-width: 900px) { .hotspot-layout { grid-template-columns: 1fr; } .hotspot-stage { height: 52vh; } }
    </style>

    <a class="hotspot-back" href="{{ \App\Filament\Resources\TourResource::getUrl('edit', ['record' => $this->tour]) }}">返回作品</a>

    <div class="hotspot-layout">
        <div wire:ignore>
            @if ($this->currentImageUrl())
                <link rel="stylesheet" href="{{ asset('player/assets/player.css') }}">
                <div id="pano-editor" class="hotspot-stage"></div>
                <script type="module">
                    const boot = () => {
                        if (window.__panoEditorMounted) return;
                        window.__panoEditorMounted = true;
                        const wire = window.Livewire.find(@js($this->getId()));
                        import(@js(asset('player/assets/editor.js'))).then(({ mountEditor }) => {
                            const editor = mountEditor(document.getElementById('pano-editor'), {
                                imageUrl: @js($this->currentImageUrl()),
                                hotspots: @js($this->markerPayload()),
                                onPlace(position) { wire.prepareNew(position.yaw, position.pitch); },
                                onSelect(id) { wire.edit(Number(id)); },
                            });
                            window.addEventListener('hotspots-updated', (event) => {
                                const hotspots = event.detail?.hotspots ?? [];
                                editor.setMarkers(hotspots);
                            });
                            window.addEventListener('standpoint-changed', (event) => {
                                const imageUrl = event.detail?.imageUrl;
                                const hotspots = event.detail?.hotspots ?? [];
                                if (imageUrl) {
                                    editor.setPanorama(imageUrl, hotspots);
                                } else {
                                    editor.setMarkers(hotspots);
                                }
                            });
                        });
                    };
                    if (window.Livewire) boot();
                    else document.addEventListener('livewire:init', boot);
                </script>
            @else
                <div class="hotspot-stage" style="display:flex;align-items:center;justify-content:center;color:#fff;">全景图还没有准备好</div>
            @endif
        </div>

        <aside class="hotspot-side">
            <h3>{{ $editingId ? '编辑热点' : '新热点' }}</h3>
            <p>先选择当前站位，再点击左侧全景放置箭头。保存后，访客点它会平移并淡入到目标站位。标题可以留空。</p>

            @if (count($this->sceneStandpoints()) > 1)
                <label>当前站位</label>
                <div class="standpoint-switch">
                    @foreach ($this->sceneStandpoints() as $standpoint)
                        <button
                            type="button"
                            class="hotspot-muted {{ $currentStandpointId === $standpoint->id ? 'is-active' : '' }}"
                            wire:click="selectStandpoint({{ $standpoint->id }})"
                        >{{ $standpoint->name }}</button>
                    @endforeach
                </div>
            @endif

            @if ($this->targetStandpoints()->count() <= 1 && count($this->targetScenes()) === 0)
                <p>请先添加另一个站位或其他场景，才能标注跳转热点。</p>
            @endif

            <label for="hotspot-title">标题（可选）</label>
            <input id="hotspot-title" type="text" maxlength="40" wire:model="hotspotTitle" placeholder="例如：向前走">
            @error('hotspotTitle') <div class="hotspot-error">{{ $message }}</div> @enderror

            <label for="hotspot-target">跳转目标</label>
            <select id="hotspot-target" wire:model="targetRef">
                <option value="">请选择</option>
                <optgroup label="站位">
                    @foreach ($this->targetStandpoints() as $target)
                        @continue($target->id === $currentStandpointId)
                        <option value="standpoint:{{ $target->id }}">{{ $target->scene?->name }} · {{ $target->name }}</option>
                    @endforeach
                </optgroup>
                @if (count($this->targetScenes()) > 0)
                    <optgroup label="整个场景">
                        @foreach ($this->targetScenes() as $target)
                            <option value="scene:{{ $target->id }}">{{ $target->name }}（初始站位）</option>
                        @endforeach
                    </optgroup>
                @endif
            </select>
            @error('targetRef') <div class="hotspot-error">{{ $message }}</div> @enderror

            <label>位置（点击全景自动填入）</label>
            <input type="text" readonly value="{{ $yaw === null ? '尚未放置' : 'yaw '.$yaw.' / pitch '.$pitch }}">
            @error('yaw') <div class="hotspot-error">{{ $message }}</div> @enderror

            <div class="hotspot-actions">
                <button type="button" class="hotspot-primary" wire:click="save">保存热点</button>
                @if ($editingId)
                    <button type="button" class="hotspot-danger" wire:click="deleteHotspot({{ $editingId }})" wire:confirm="确定删除这个热点？">删除</button>
                @endif
            </div>

            <div class="hotspot-list">
                @forelse ($this->visibleHotspots() as $hotspot)
                    <div class="hotspot-item">
                        <div>
                            <strong>{{ $hotspot->title !== '' ? $hotspot->title : '未命名热点' }}</strong>
                            <div style="font-size:12px;color:#78716c;">{{ $this->targetSummary($hotspot) }}</div>
                        </div>
                        <button type="button" class="hotspot-muted" wire:click="edit({{ $hotspot->id }})">编辑</button>
                    </div>
                @empty
                    <p>这个站位还没有热点。</p>
                @endforelse
            </div>
        </aside>
    </div>
</div>
