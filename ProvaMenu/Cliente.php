<?php

    class Cliente {
        private array $nomClient;
        private array $nomUsuari;
        private array $email;
        private string $dni;
        private array $direccio;
        private string $targeta;


        public function __construct() {
            $this->nomClient=["Pedro","Manolo","Pepito","Juan","Antonio","Luís"];
            $this->nomUsuari=["Tron","Machupichu","Pepinillo","Slash","Slim","Alfalfa"];
            $this->email=["a@hotmail.com","b@hotmail.com","c@hotmail.com","d@hotmail.com","d@hotmail.com","e@hotmail.com"];
            $this->dni= $this->crearDNI();
            $this->direccio=["La Vega","Fontanejos","Alcala","Puerta del Sol","Les Fonts","Brooklin"];
            $this->targeta=rand(000000000000,999999999999);
        }

        public function crearDNI(){
        return $this->randNums(8) .$this->randLetter(1);
        }
        public function generarNom():string{
            return $this->nomClient[array_rand($this->nomClient)];
        }
        public function generarUsuari():string{
            return $this->nomUsuari[array_rand($this->nomUsuari)];
        }
        public function generarEmail():string{
            return $this->email[array_rand($this->email)];
        }
        public function generarDNI():string{
            return $this->dni;
        }
        public function generarDireccio():string{
            return $this->direccio[array_rand($this->direccio)];
        }
        public function generarTargeta():string{
            return $this->targeta;
        }

        //Genera Els numeros i la lletra de dni
        function randNums($i) : string{
            return rand(00000000,99999999);
        }
        function randLetter($i) : string{
            $lletres = chr(rand(65,90));
            return $lletres;
        }
    }
    
    /*class Cliente{
        private string $nomClient;
        private string $nomusuari;
        private string $email;
        private string $dni;
        private string $direccio;
        private string $targeta;

    public function __construct($nomClient,$nomusuari,$email,$dni,$direccio,$targeta){
        $this->$nomClient = ["Pedro","Manolo","Pepito","Juan","Antonio","Luís"];
        $this->$nomusuari=$nomusuari;
        $this->$email=$email;
        $this->$dni=$dni;
        $this->$direccio=$direccio;
        $this->$targeta=$targeta;
    }

    
    $nomusuari=["Tron","Machupichu","Pepinillo","Slash","Slim","Alfalfa"];
    $email=["a@hotmail.com","b@hotmail.com","c@hotmail.com","d@hotmail.com","d@hotmail.com","e@hotmail.com"];
    $dni=randNums(8).randLetter(1);
    $direccio=["La Vega,Fontanejos,Alcala","Puerta del Sol","Les Fonts","Brooklin"];
    $targeta=rand(000000000000,999999999999);
    $client=[];

    function plenaClient($dni,$nomClient,$email,$direccio,$targeta):array{
        $client[0] = $dni;
        $client[1] = $nomClient[rand(0,6)];
        $client[2] = $email[rand(0,6)];
        $client[3] = $direccio[rand(0,6)];
        $client[4] = $targeta;  
        return $client;
    }

    public function posarNom(): array {
        return $this->$nomClient[array_rand($this->nomClient)];
    }
    
    public function randNums($i) : string{
        //return rand(00000000,99999999);
        return $this->dni;
    }
    
    function randLetter($i) : string{
        $lletres = chr(rand(65,90));
        return $lletres;
    }

}*/
?>