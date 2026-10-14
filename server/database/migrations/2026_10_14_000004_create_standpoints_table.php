<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('standpoints', function (Blueprint $table) {
            $table->id();
            $table->foreignId('scene_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('image_path')->nullable();
            $table->string('image_url', 2048)->nullable();
            $table->string('thumbnail_path')->nullable();
            $table->string('thumbnail_url', 2048)->nullable();
            $table->decimal('position_x', 8, 3)->default(0);
            $table->decimal('position_y', 8, 3)->default(0);
            $table->decimal('yaw', 10, 6)->default(0);
            $table->decimal('pitch', 10, 6)->default(0);
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_entry')->default(false);
            $table->unsignedInteger('width')->nullable();
            $table->unsignedInteger('height')->nullable();
            $table->timestamps();

            $table->index(['scene_id', 'sort_order']);
        });

        Schema::table('hotspots', function (Blueprint $table) {
            $table->foreignId('standpoint_id')->nullable()->constrained()->cascadeOnDelete();
            $table->foreignId('target_standpoint_id')->nullable()->constrained('standpoints')->nullOnDelete();
            $table->string('target_kind', 32)->default('scene');
        });

        $now = now();

        DB::table('scenes')->orderBy('id')->select('id')->each(function (object $scene) use ($now): void {
            $standpointId = DB::table('standpoints')->insertGetId([
                'scene_id' => $scene->id,
                'name' => '默认站位',
                'position_x' => 0,
                'position_y' => 0,
                'yaw' => 0,
                'pitch' => 0,
                'sort_order' => 0,
                'is_entry' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            DB::table('hotspots')
                ->where('scene_id', $scene->id)
                ->whereNull('standpoint_id')
                ->update([
                    'standpoint_id' => $standpointId,
                    'target_kind' => 'scene',
                ]);
        });
    }

    public function down(): void
    {
        Schema::table('hotspots', function (Blueprint $table) {
            $table->dropConstrainedForeignId('standpoint_id');
            $table->dropConstrainedForeignId('target_standpoint_id');
            $table->dropColumn('target_kind');
        });

        Schema::dropIfExists('standpoints');
    }
};
