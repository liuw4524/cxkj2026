<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('scenes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tour_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('image_path');
            $table->string('image_url', 2048)->nullable();
            $table->string('thumbnail_path')->nullable();
            $table->string('thumbnail_url', 2048)->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_entry')->default(false);
            $table->unsignedInteger('width')->nullable();
            $table->unsignedInteger('height')->nullable();
            $table->timestamps();

            $table->index(['tour_id', 'sort_order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('scenes');
    }
};
