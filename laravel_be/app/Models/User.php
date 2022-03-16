<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Scope;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $perPage = 10;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'name',
        'email',
        'group_role',
        'is_active',
        'is_delete',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Method scopeName
     *
     * @param $query $query [explicite description]
     * @param $request $request [explicite description]
     *
     * @return void
     */
    public function scopeName($query, $request){
        if($request->has('name') && $request->name != ''){
            $query->where('name', 'like', '%'.$request->name.'%');
        }
    }

    /**
     * Method scopeEmail
     *
     * @param $query $query [explicite description]
     * @param $request $request [explicite description]
     *
     * @return void
     */
    public function scopeEmail($query, $request){
        if($request->has('email') && $request->email != ''){
            $query->where('email', 'like', '%'.$request->email.'%');
        }
    }

    /**
     * Method scopeGroup
     *
     * @param $query $query [explicite description]
     * @param $request $request [explicite description]
     *
     * @return void
     */
    public function scopeGroup($query, $request){
        if($request->has('group') && $request->group != ''){
            $query->where('group_role', $request->group);
        }
    }

    /**
     * Method scopeIsActive
     *
     * @param $query $query [explicite description]
     * @param $request $request [explicite description]
     *
     * @return void
     */
    public function scopeIsActive($query, $request){
        if($request->has('status') && $request->status != ''){
            $query->where('is_active', $request->status);
        }
    }
}
