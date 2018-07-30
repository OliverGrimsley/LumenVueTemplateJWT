<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

use App\Models\User;

class AdminController extends Controller
{
    
    public function appStatus()
    {
        if ( count(User::all()) > 0 ) {
            return 1;
        }
        return 0; 
    }

    public function appInitialize(Request $request)
    {
        $this->validate($request, [
            'payload.email' => 'required|email',
            'payload.password' => 'required|min:6',
            'payload.name' => 'required'
        ]);

        $user = User::create([
            'name' => $request->input('payload.name'),
            'email' => $request->input('payload.email'),
            'password' => Hash::make($request->input('payload.password'))
        ]);
        
        return response($user,200);
        
    }

}