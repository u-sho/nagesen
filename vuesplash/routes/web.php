<?php

Route::prefix('nagesen')->group(function () {
    Route::get('/{path}', function () {
        return view('index');
    })->where('path', '.*');
});
