<?php ini_set('display_errors', 'on');
    error_reporting(E_ALL); ?>

<html>
    <body>
        <?php 
        
            require 'Cliente.php';
            $client = new Cliente();
               
        ?>

        <p><?php echo "Nombre:". $client->generarNom() ?></p>
        <p><?php echo "Usuario:".$client->generarUsuari() ?></p>
        <p><?php echo "Email:".$client->generarEmail() ?></p>
        <p><?php echo "DNI:".$client->generarDNI() ?></p>
        <p><?php echo "Direcció:".$client->generarDireccio() ?></p>
        <p><?php echo "Targeta:".$client->generarTargeta() ?></p>
</body>
</html>