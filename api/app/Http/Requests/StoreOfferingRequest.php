<?php

namespace App\Http\Requests;

use App\Models\Offering;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreOfferingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'type' => ['required', 'string', Rule::in(Offering::TYPES)],
        ];
    }

    public function messages(): array
    {
        return [
            'type.required' => '请选择供奉类型',
            'type.in' => '供奉类型须为 incense、candle 或 flower',
        ];
    }
}
