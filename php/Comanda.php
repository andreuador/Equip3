<?php
    /**
    *   En aquesta classe estaràn els atributs i funcions del client 
    *   per tal d'emmagatzemar les seves dades en el sistema i oferir-lu una millor experiencia en ell
    *   
    *   @name Equip3-Cataleg i Procés de Venta
    *   @since 02-10-2023
    *   @version 1.0
    */
    class Comanda {
        private array $vehicles;
        private array $codiComanda;
        private array $estat;

        //constructor
        public function __construct() {
            $this->vehicles = ["Ferrari", "Aston Martin", "Bugatti", "Mclaren", "Bentley"];
            $this->codiComanda = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            $this->estat = ["Nou", "Ocasió", "Seminou"];
        }

        /**
        * Mètode que retorna aleatoriament un nom de vehicle  
        * @return retorna el nom de un vehicle  
        */
        public function afegirVehicles(): string {
            return $this->vehicles[array_rand($this->vehicles)];
        }

        /**
        * Mètode que retorna un codi de comanda aleatori
        * @return retorna un codi de la comanda
        */
        public function generarCodi(): int {
            return $this->codiComanda[array_rand($this->codiComanda)];
        }

        /**
        * Mètode que genera retrna un estat del vehicle aleatori
        * @return retorna l'estat del vehicle  
        */
        public function generarEstat(): string {
            return $this->estat[array_rand($this->estat)];
        }
    }
?>
