<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('memorials', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('token', 32)->unique();
            $table->string('name');
            $table->date('death_anniversary');
            $table->string('photo_url')->nullable();
            $table->unsignedInteger('incense_count')->default(0);
            $table->unsignedInteger('candle_count')->default(0);
            $table->unsignedInteger('flower_count')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('memorials');
    }
};
