<?php

class Vehicle {
    private string  $matricula; 
    private int     $id;
    private string  $color;
    private string  $danys;
    private string  $model;
    private string  $carburant;
    private long    $km;
    private string  $marca;
    private string  $descripcio;
    private float   $iva;
    private string  $n_bast;
    private string  $canvi_m;
    private int    $preu_venta;
    private int    $preu_compra;
    private string    $nou_ocasio;
    private string  $imatge; 

    public function __construct(string $marca, string $model, string $image, string $matricula){
            $this->matricula = $matricula;
            $this->marca = $marca;
            $this->model = $model;
            $this->preu_venta = rand(100000,2000000);
            $this->imatge = $image;
    }
    
    static function generaMatricula(){
        return randNums(4).randLetter(3);
    }
    
    /**
        * Mètode que genera 4 números de manera aleatoria del 0 al 9
        *
        * @return retorna un conjunt de 4 números en tipus String
        */
        function randNums($i) : string{
            return rand(0000,9999);
        }
        
        /**
        * Mètode que genera 3 lletres de manera aleatoria
        *
        * @return retorna un String de 3 lletres que seràn les lletres de la matrícula
        */
        function randLetter($i) : string{
            $lletres = chr(rand(65,90)).chr(rand(65,90)).chr(rand(65,90));
            return $lletres;
        }
    
    
    static function generaImatge($imatges):string{
        return $imatges[array_rand($imatges)]; 
    }
    
    static function generaMarca($marques):string{
        return $marques[array_rand($marques)];
    }
    
    static function generaModel($models):string{
        return $models[array_rand($models)];           
    }
    
    /**
    * Mètode que plena el vehicle amb les seves característiques de manera aleatoria
    *
    * @param mar    array de les marques de cotxe
    * @param mod    array dels modelos de cotxe
    * @param img    array de les imatges dels cotxes
    * @return retorna l'array de vehicle amb les seves característiques generades aleatoriament
    */
    function getMatricula(): string{    
        return $this->matricula;
    }
    
    function getImatge(){    
        return $this->imatge;
    }
    
    /**
    * Mètode que plena el vehicle amb les seves característiques de manera aleatoria
    *
    * @param mar    array de les marques de cotxe
    * @param mod    array dels modelos de cotxe
    * @param img    array de les imatges dels cotxes
    * @return retorna l'array de vehicle amb les seves característiques generades aleatoriament
    */
    function getMarca(){    
        return $this->marca;
    }
    
    /**
    * Mètode que plena el vehicle amb les seves característiques de manera aleatoria
    *
    * @param mar    array de les marques de cotxe
    * @param mod    array dels modelos de cotxe
    * @param img    array de les imatges dels cotxes
    * @return retorna l'array de vehicle amb les seves característiques generades aleatoriament
    */
    function getModel(){    
        return $this->model;
    }
    
    /**
    * Mètode que plena el vehicle amb les seves característiques de manera aleatoria
    *
    * @param mar    array de les marques de cotxe
    * @param mod    array dels modelos de cotxe
    * @param img    array de les imatges dels cotxes
    * @return retorna l'array de vehicle amb les seves característiques generades aleatoriament
    */
    function getPreuVenta(){    
        return $this->preu_venta;
    }
    
}
?>
