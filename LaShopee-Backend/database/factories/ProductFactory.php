<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'product_name'=> $this->faker->name(),
            'product_description'=> $this->faker->name(),
            'category_id'=> \App\Models\Category::factory(),
            'product_price'=> $this->faker->numberBetween(1,20),
            'avatar' => $this->faker->imageUrl()
        ];
    }
}
