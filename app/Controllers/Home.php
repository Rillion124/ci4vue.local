<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        echo view('header');
        echo view('VUE_STORES');
        echo view('VUE_COMPONENTS');
        echo view('VUE_DIRECTIVES');
        echo view('body');
        echo view('VUE_PAGES');
        echo view('footer');
    }
}
