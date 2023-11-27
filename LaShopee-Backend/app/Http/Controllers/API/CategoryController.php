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
        
    //     $validated = $request->validated([
    //         'name' => 'required|string',
    //         'description' => 'required|string',
    //         'avatar' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
    //     ]);

    //     $category = new Category();
    //     $category->name = $validated['name'];
    //     $category->description = $validated['description'];
       
    //     if($request->hasFile('avatar')){
    //         $avatar = $request->file('avatar');
    //         $filename = time() .'.'. $avatar->getClientOriginalExtension();
    //         $avatar->storeAs('public/categories', $filename);
    //         $category->avatar = $filename;
    //     }

    //     $category->save();

    //     return response()->json([
    //         'success' => true,
    //         'message'=> 'Category created successfully!',
    //         'category' => $category
    //     ], 201);
    
    // }

    //GANA PERO GI COMMENT!
    // public function store(Request $request)
    // {
    //     $validated = $request->validate([
    //         'name' => 'required|string|unique:categories', // Add unique validation rule
    //         'description' => 'required|string',
    //         'avatar' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Validate the uploaded image
    //     ], [
    //         'name.unique' => 'This name has already been taken.',
    //     ]);

    //     $category = new Category();
    //     $category->name = $validated['name'];
    //     $category->description = $validated['description'];
       

    //     if ($request->hasFile('avatar')) {
    //         $avatar = $request->file('avatar');
    //         $filename = time() . '.' . $avatar->getClientOriginalExtension();
    //         $avatar->storeAs('public/categories_img', $filename);
    //         $category->avatar = $filename;
    //     }

    //     $category->save();

    //     return response()->json([
    //         'success' => true,
    //         'message' => 'Category created successfully!',
    //         'category' => $category,
    //     ], 201);
    // }

    
    public function store(Request $request)
    {
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
        }        

        $category->save();

        return response()->json([
            'success' => true,
            'message' => 'Category created successfully!',
            'category' => $category,
        ], 201);
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
                'error' => 'Category id has not found!' 
            ]);
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
