<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class proizvodjac extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function getModels(){
        return $this->hasMany(Models::class) ;
    }
}
