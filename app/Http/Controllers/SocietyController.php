<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SocietyController extends Controller
{
    public function index()
    {
        $societies = DB::table('societies')->get();

        return response()->json($societies);
    }
    public function store(Request $request)
    {
        $data = $request->validate([
            'company_name' => 'required|string',
            'address' => 'required|string',
            'company_email' => 'required|email',
            'nif' => 'required|string',
            'stat' => 'required|string',
            'logo' => 'nullable|string',
        ]);
    
        $data['created_at'] = now(); // Add the current date and time
    
        DB::table('societies')->insert($data);
    
        return response()->json(['message' => 'Society created successfully'], 201);
    }
    
}
