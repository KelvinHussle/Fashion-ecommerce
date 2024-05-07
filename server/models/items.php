<?php

class Items
{

    private $conn;

    public $id;
    public $name;
    public $price;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function fetchAll()
    {

        $stmt = $this->conn->prepare('SELECT * FROM items');
        $stmt->execute();
        return $stmt;
    }

    public function fetchOne()
    {

        $stmt = $this->conn->prepare('SELECT  * FROM items WHERE id = ?');
        $stmt->bindParam(1, $this->id);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {

            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->id = $row['id'];
            $this->name = $row['name'];
            $this->price = $row['price'];

            return TRUE;
        }

        return FALSE;
    }

    public function postData()
    {

        $stmt = $this->conn->prepare('INSERT INTO items SET name = :name, price = :price');

        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':price', $this->price);


        if ($stmt->execute()) {
            return TRUE;
        }

        return FALSE;
    }

    public function putData()
    {

        $stmt = $this->conn->prepare('UPDATE items SET name = :name, price = :price WHERE id = :id');

        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':price', $this->price);
        $stmt->bindParam(':id', $this->id);

        if ($stmt->execute()) {
            return TRUE;
        }

        return FALSE;
    }

    public function delete()
    {

        $stmt = $this->conn->prepare('DELETE FROM items WHERE id = :id');
        $stmt->bindParam(':id', $this->id);

        if ($stmt->execute()) {
            return TRUE;
        }

        return FALSE;
    }
}
