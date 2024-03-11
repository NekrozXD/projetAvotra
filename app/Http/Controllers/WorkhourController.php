<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WorkhourController extends Controller
{
    public function index()
    {
        $societies = DB::table('workhours')->get();

        return response()->json($societies);
    }
}
