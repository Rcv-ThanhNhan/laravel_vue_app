<?php
use App\Models\Product;

if(!function_exists('createIdProduct')){
    function createIdProduct($name_product){
        $firstCharacter = strtoupper($name_product[0]);
        $newId = $firstCharacter.'000000001';
        $newProduct = Product::orderBy('created_at', 'DESC')->first();
        if($newProduct) {
            $indexProduct = substr($newProduct->product_id, 2) + 1;
            switch ($indexProduct){
                case $indexProduct < 10:
                    $newId = $firstCharacter.'00000000'.$indexProduct;
                    break;
                case $indexProduct < 100:
                    $newId = $firstCharacter.'0000000'.$indexProduct;
                    break;
                case $indexProduct < 1000:
                    $newId = $firstCharacter.'000000'.$indexProduct;
                    break;
                case $indexProduct < 10000:
                    $newId = $firstCharacter.'00000'.$indexProduct;
                    break;
                case $indexProduct < 100000:
                    $newId = $firstCharacter.'0000'.$indexProduct;
                    break;
                case $indexProduct < 1000000:
                    $newId = $firstCharacter.'000'.$indexProduct;
                    break;
                case $indexProduct < 10000000:
                    $newId = $firstCharacter.'00'.$indexProduct;
                    break;
                case $indexProduct < 100000000:
                    $newId = $firstCharacter.'0'.$indexProduct;
                    break;
                default:
                    $newId = $firstCharacter.$indexProduct;
            }
        }
        return $newId;
    }
}

function getUrlImage($file_name, $url = 'upload/images/'){
    $image = $file_name;
    if($file_name == 'no_image.png' || $file_name == ''){
        $url = 'img/';
        $image = 'no_image.png';
    } else if(filter_var($file_name, FILTER_VALIDATE_URL)){
        $url = '';
        $image = $file_name;
    }
    return $url.$image;
}

function versioned_asset($path, $secure = null){
    $timestamp = @filemtime(public_path($path)) ?: 0;

    return asset($path, $secure) . '?v=' . $timestamp;
}
