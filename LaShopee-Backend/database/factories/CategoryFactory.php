<?php

namespace Database\Factories;
//gi add ang model
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */

    protected $model = Category::class;
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'description' => $this->faker->sentence()
        ];
    }
}
