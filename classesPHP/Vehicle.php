<?php

class Vehicle {
    private String  $matricula; 
    private int     $id;
    private String  $color;
    private String  $danys;
    private String  $model;
    private String  $carburant;
    private long    $km;
    private String  $marca;
    private String  $descripcio;
    private float   $iva;
    private String  $n_bast;
    private String  $canvi_m;
    private long    $preu_venta;
    private long    $preu_compra;
    private char    $nou_ocasio;

    public function __construct($id,$matricula,$marca,$model,$n_bast,$canvi_m,$km,$color,$carburant,$nou_ocasio,$danys,$descripcio,$preu_compra,$preu_venta){
        $dt = new DateTime();
        $this->$id          = $id;
        $this->$matricula   = $matricula;
        $this->$marca       = $marca;
        $this->$model       = $model;
        $this->$n_bast      = $n_bast;
        $this->$canvi_m     = $canvi_m;
        $this->$km          = $km;
        $this->$color       = $color;
        $this->$carburant   = $carburant;
        $this->$nou_ocasio  = $nou_ocasio;
        $this->$danys       = $danys;
        $this->$descripcio  = $descripcio;
        $this->$preu_compra = $preu_compra;
        $this->$preu_venta  = $preu_venta;

    }
}
?>
