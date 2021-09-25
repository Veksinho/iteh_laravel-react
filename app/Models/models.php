<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class models extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $guarded=[];

    public function proizvodjac(){
        return $this->belongsTo(Proizvodjac::class);
    }

}