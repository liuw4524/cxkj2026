<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMemorialRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        foreach (['name', 'death_anniversary'] as $field) {
            if ($this->exists($field) && is_string($this->input($field))) {
                $this->merge([$field => trim($this->input($field))]);
            }
        }
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:50'],
            'death_anniversary' => ['required', 'date'],
            'photo_url' => ['nullable', 'string', 'max:2048'],
            'photo' => ['nullable', 'image', 'max:4096'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => '请填写逝者姓名',
            'death_anniversary.required' => '请填写忌日',
            'death_anniversary.date' => '忌日格式无效',
            'photo.image' => '照片须为图片文件',
        ];
    }
}
