<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMessageRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        if ($this->exists('content') && is_string($this->input('content'))) {
            $this->merge(['content' => trim($this->input('content'))]);
        }
    }

    public function rules(): array
    {
        return [
            'content' => ['required', 'string', 'max:200'],
        ];
    }

    public function messages(): array
    {
        return [
            'content.required' => '请填写留言',
            'content.max' => '留言不能超过200字',
        ];
    }
}
