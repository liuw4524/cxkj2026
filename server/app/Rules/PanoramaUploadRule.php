<?php

namespace App\Rules;

use App\Support\PanoramaLimits;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Http\UploadedFile;

class PanoramaUploadRule implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (! $value instanceof UploadedFile) {
            $fail(PanoramaLimits::INVALID_TYPE_MESSAGE);

            return;
        }

        if ($value->getSize() > PanoramaLimits::MAX_KILOBYTES * 1024) {
            $fail(PanoramaLimits::OVERSIZE_MESSAGE);

            return;
        }

        $extension = strtolower($value->getClientOriginalExtension());

        if (! in_array($extension, ['jpg', 'jpeg', 'png'], true)) {
            $fail(PanoramaLimits::EXTENSION_MESSAGE);

            return;
        }

        $info = @getimagesize($value->getPathname());
        $type = $info[2] ?? 0;

        if (! in_array($type, [IMAGETYPE_JPEG, IMAGETYPE_PNG], true)) {
            $fail(PanoramaLimits::INVALID_TYPE_MESSAGE);
        }
    }
}
