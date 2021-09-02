<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class proizvodjacController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result=proizvodjac::all();
        return $result;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $proizvodjac=new proizvodjac();
        $proizvodjac->naziv=$request->naziv;
        $proizvodjac->zemlja=$request->zemlja;
        $proizvodjac->godina_osnivanja=$request->godina_osnivanja;
        $proizvodjac->prodatih_2020=$request->prodatih_2020;
        $proizvodjac->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result=\DB::table('proizvodjacs')
        ->join('models', function ($join) use($id){
            $join->on('proizvodjacs.id', '=', 'models.proizvodjacs_id')
                 ->where('proizvodjacs.id', '=', $id);
        })
        ->get();

        return $result;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
