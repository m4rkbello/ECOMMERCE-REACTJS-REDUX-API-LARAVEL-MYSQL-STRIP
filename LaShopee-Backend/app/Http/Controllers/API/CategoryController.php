<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // //get all the categories
        $categories = Category::with('products')->get();
        return response()->json($categories);
        // return "GANA KOL!";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
    //  */

    
    // public function store(Request $request)
    // {
    //     $validated = $request->validate([
    //         'name' => 'required|string|unique:categories',
    //         'description' => 'required|string',
    //         'avatar' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    //     ], [
    //         'name.unique' => 'This name has already been taken.',
    //     ]);
    //     // $validated = $request->validate();



    //     $category = new Category();
    //     $category->name = $validated['name'];
    //     $category->description = $validated['description'];

    //     if ($request->hasFile('avatar')) {
    //         $avatar = $request->file('avatar');
    //         $filename = time() . '.' . $avatar->getClientOriginalExtension();
    //         $avatar->storePublicly('public/categories');
    //         $category->avatar = $filename;
    //     }        

    //     // if($category->save());
    //     // return response()->json([
    //     //     'success' => true,
    //     //     'message' => 'Category created successfully!',
    //     //     'category' => $category,
    //     // ], 201);
    //     if($category->save()){
    //     return response()->json([
    //         'success' => true,
    //         'message' => 'Category created successfully!',
    //         'category' => $category,
    //     ], 201);

    //     }else{
    //         return response()->json([
    //             'error' => true,
    //             'message' => 'Failed to saved category!',
       
    //         ], 500);
    //     }
    // }

    public function store(Request $request)
{
    try {
        $validated = $request->validate([
            'name' => 'required|string|unique:categories',
            'description' => 'required|string',
            'avatar' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ], [
            'name.unique' => 'This name has already been taken.',
        ]);

        $category = new Category();
        $category->name = $validated['name'];
        $category->description = $validated['description'];

        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            $avatar->storePublicly('public/categories');
            $category->avatar = $filename;
        } else {
            return response()->json([
                'error' => 'Avatar file is required!',
            ], 400);
        }

        if ($category->save()) {
            return response()->json([
                'success' => true,
                'message' => 'Category created successfully!',
                'category' => $category,
            ], 201);
        } else {
            return response()->json([
                'error' => 'Failed to save the category.',
            ], 500);
        }
    } catch (ValidationException $e) {
        // Return a JSON response with a 422 status code and validation error messages
        return response()->json([
            'error' => $e->errors(),
        ], 422);
    }
}

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

     public function show($id)
    {
        $category=Category::with('products')->where('id', $id)->first();
        if(!$category){
            return response()->json([
                'error' => 'Category not found!' 
            ], 404);
        }
        return response()->json($category);


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
