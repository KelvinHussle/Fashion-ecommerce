<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../config/db.php';
include_once '../models/items.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $db = new Database();
    $db = $db->connect();

    $item = new Items($db);

    $res = $item->fetchAll();
    $resCount = $res->rowCount();

    if ($resCount > 0) {

        $items = array();

        while ($row = $res->fetch(PDO::FETCH_ASSOC)) {

            extract($row);
            array_push($items, array('id' => $id, 'name' => $name, 'price' => $price));
        }

        echo json_encode($items);
    } else {
        echo json_encode(array('message' => "No records found!"));
    }
} else {
    echo json_encode(array('message' => "Error: incorrect Method!"));
}
