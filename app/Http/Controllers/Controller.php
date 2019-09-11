<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Used to build json output
     * @param $data
     * @param int $status
     * @param array $header
     * @param int $options
     * @return \Illuminate\Http\JsonResponse
     */
    public function buildJson($data, $status = 200, $header = array(), $options = 0)
    {
        $default_data = ['is_error' => false, 'msg' => ''];
        return \Response::json(array_merge($default_data, $data), $status, $header, $options);
    }

    public function buildJsonWithCookie($data, $status = 200, $header = array(), $options = 0, $cookie = [])
    {
        $default_data = ['is_error' => false, 'msg' => ''];
        $response = \Response::json(array_merge($default_data, $data), $status, $header, $options);
        if($cookie) {
            $response->withCookie($cookie);
        }
        return $response;
    }

    /**
     * Will create a json response without specifying is_error value.
     *
     * @param $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function buildErrorJson($data)
    {
        $error_data = ['is_error' => true];
        if (is_string($data)) {
            $error_data['msg'] = $data;
        } else {
            $error_data = array_merge($error_data, $data);
        }
        return $this->buildJson($error_data);
    }
}
