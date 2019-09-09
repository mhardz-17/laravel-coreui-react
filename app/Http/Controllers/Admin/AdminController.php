<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

/**
 * Class AdminController
 * main class for admin related controllers
 * @package App\Http\Controllers
 */
class AdminController extends Controller
{
    protected $active_page = 'Admin';
    protected $active_submenu = 'admin';
    /**
     * Initializer.
     */
    public function __construct()
    {
//        parent::__construct();
//        $this->middleware('auth');
//        $this->middleware('admin');
    }

    protected function setData($data) {
        $default_data = [
            'active_page' => $this->active_page,
            'active_submenu' => $this->active_submenu,
        ];
        return array_merge($default_data,$data);
    }
}
