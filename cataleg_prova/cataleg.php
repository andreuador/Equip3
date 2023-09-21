<html>
    <body>
        <?php
        
        $imatges = ["ferrari.jpeg","buggati.jpeg","mercedes.jpeg","porsche.jpeg","maserati.webp","rollsRoyce.jpeg"];//Array que conté les imatges dels cotxes
        $marques = ["buggati","mercedes","ferrari","porsche","maserati","rolls royce"];                             //Array que conté les marques dels cotxes
        $modelo  = ["aveiro","benz-A8","festa","911","poseidon","space-deyumn"];                                    //Array que conté els models dels cotxes
        $vehicle = plenaVehicle($marques,$modelo,$imatges);                                                         //Array que conté les caratcerístiques del vehicle
        $cataleg = [plenaVehicle($marques,$modelo,$imatges),plenaVehicle($marques,$modelo,$imatges)];               //Array que conté els vehicles disponibles
        plenaCataleg();
        
        /**
        * Mètode que plena el vehicle amb les seves característiques de manera aleatoria
        *
        * @param mar    array de les marques de cotxe
        * @param mod    array dels modelos de cotxe
        * @param img    array de les imatges dels cotxes
        * @return retorna l'array de vehicle amb les seves característiques generades aleatoriament
        */
        function plenaVehicle($mar,$mod,$img):array{
            $vehicle[0] = randNums(4).randLetter(3);
            $vehicle[1-] = $marques[rand(0,5)];
            $vehicle[2] = $mod[rand(0,5)];
            $vehicle[3] = rand(100000,2000000)."€";
            $vehicle[4] = $img[rand(0,5)];    
            return $vehicle;
        }
        
        /**
        * Mètode que plena el catàleg de vehicles
        */
        function plenaCataleg(){
            for($i=0;$i<4;$i++){
                $cataleg[$i] = plenaVehicle($marques,$modelo,$imatges);
            }
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
        ?>
        
        //Títol
        <?php echo "<h1>Vehicles</h1>";?>
        
        <?php 
            //Bucle que mostra les especificacions de cada vehicle del catàleg
            for($i=0;$i<5;$i++){
                echo "<img src=". $cataleg[$i][4] . "/>";
                echo "<p>".$cataleg[$i][0]."</p>";
                echo "<p>".$cataleg[$i][1]."</p>";
                echo "<p>".$cataleg[$i][2]."</p>";
                echo "<p>".$cataleg[$i][3]."</p>";
            }
        ?>
    </body>
</html>
