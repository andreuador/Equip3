<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Factura</title>
        <meta charset="utf-8">
    </head>
    <body>
        <?php
        /**
        * Aquest document genera una factura aleatoria 
        * amb les dades generades de la classe Factura
        * 
        */
            ini_set("display_errors", "on");
            require 'Factura.php';
            $factura = new Factura();

            $preu = $factura->generarPreu();
            $producte = $factura->generarProducte();
            $cantitat = $factura->generarCantitat();
            $numFactura = $factura->generarNumFactura();
            $total = $factura->calcularTotal($preu, $cantitat);
            $data = $factura->generarDataActual();
            $client = $factura->posarProveidor();
            $remitent = $factura->posarClient();
        ?>

        <h1>FACTURA</h1>
        <div>
            <li><a href="index.php">Inici</a></li>
            <li><a href="generarClient.php">Client</a></li>
            <li><a href="cataleg.php">Catàleg</a></li>
        </div>

        <p><strong>Nº Factura: </strong><?php echo $numFactura ?></p>

        <p><strong>Client: </strong><?php echo $client ?></p>

        <p><strong>Remitent: </strong><?php echo $remitent ?></p>

        <p><strong>Data: </strong> <?php echo $data ?></p>

        <p><strong>Producte: </strong><?php echo $producte ?></p>

        <p><strong>Cantitat: </strong><?php echo $cantitat ?></p>

        <p><strong>Preu: </strong> <?php echo $preu ?></p>

        <p><strong>Preu Total: </strong> <?php echo number_format($total, 2, ',', '.') . " €" ?> </p>
    </body>
</html>
