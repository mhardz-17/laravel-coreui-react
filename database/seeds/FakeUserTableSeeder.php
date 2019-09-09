<?php

use Illuminate\Database\Seeder;

class FakeUserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i=1; $i < 50; $i++) {
            DB::table('users')->insert([
                'name' => 'User_' . $i,
                'email' => 'user_'.$i.'@admin.com',
                'password' => bcrypt('123456'),
            ]);
        }
    }
}
