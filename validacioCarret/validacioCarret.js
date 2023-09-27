"use strict";


function main(){
    let table       = document.querySelector('body>table'); //Seleccionem la taula del document html
    let imatges     = ['img/rollsRoyce.jpeg','img/ferrari.jpeg','img/buggati.jpeg','img/maserati.webp','img/mercedes.jpeg','img/porsche.jpeg'];
    let preuCarret  = document.querySelector('#preuCarret>h1'); 
    let carret = [];

    createThs(table);
    createTds(table);
    createTds(table);
    createTds(table);

    /**
     * Mètode que crea els títols de cada cel·la de la taula
     * @param {*} table la taula en la que volen que s'inserten els Th's
     */
    function createThs(table){
        let tr = document.createElement('tr');
        createTh("",tr);
        createTh("",tr);
        createTh("Preu",tr);
        createTh("Cantitat",tr);
        createTh("Total",tr);
        createTh("",tr);
        table.append(tr);
    }

    /**
     * Mètode que crea les cel·les de contingut de la taula i les emplena del seu corresponent contingut 
     * @param {*} table la taula en la que volen que s'inserten els Td's
     */
    function createTds(table){
        let tr = document.createElement('tr');
        var cantitat = 1;                                       //Cantitat de cotxes del mateix tipus
        let importe = parseInt(Math.random()*200000+100000);    //Preu de venta d'un cotxe 
        let img = document.createElement('img');                //Imatge del vehicle
        img.setAttribute('src',imatges[parseInt(Math.random()*imatges.length)]);
        img.setAttribute('width','100px');

        let div = document.createElement('div');                
        let buttonDel = document.createElement('button');       //Botó per eliminar el producte del carret
        buttonDel.innerHTML = "Eliminar";                       

        let buttonResta = document.createElement('button');     //Botó per disminuir la cantitat de vehicles  
        buttonResta.innerHTML = "-";

        let buttonSuma = document.createElement('button');      //Botó per incrementar la cantitat de vehicles 
        buttonSuma.innerHTML = "+";

        div.append(buttonResta);
        div.append(cantitat);
        div.append(buttonSuma);

        
        
        createTd("imagenV",img,tr);
        createTd("nombreV","Coche",tr);
        createTd("importe",importe+"$",tr);
        createTd("cantidad",div,tr);
        createTd("total",calculaTotalProducte(cantitat,importe)+"$",tr);
        createTd("del",buttonDel,tr);

        let vehicle = {
            image:img,
            nom:"coche",
            import:importe,
            cantitat:cantitat,
        }

        carret.push(vehicle);
        preuCarret.textContent = calculaTotalCarret();


        table.append(tr);                                       //S'anyadeix el la fila a la taula


        /**
         * Aquest event fa que quan es clicke en el botó de suma incremente la cantitat del mateix producte 
         */
        buttonSuma.addEventListener('click',function(){
            cantitat++;
            div.textContent = "";
            div.append(buttonResta);
            div.append(cantitat);
            div.append(buttonSuma);

            let total = tr.querySelector('.total');
            total.textContent = "";
            total.textContent = calculaTotalProducte(cantitat,importe)+"$";

            preuCarret.textContent = "";
            preuCarret.textContent = calculaTotalProducte(cantitat,importe)+"$";

        });

        /**
         * Aquest event fa que quan es clicke en el botó de resta disminueixca la cantitat del mateix producte 
         */
        buttonResta.addEventListener('click',function(){
            if(cantitat > 1){
                cantitat--;
                div.textContent = "";
                div.append(buttonResta);
                div.append(cantitat);
                div.append(buttonSuma);

                let total = tr.querySelector('.total');
                total.textContent = "";
                total.textContent = calculaTotalProducte(cantitat,importe)+"$";
                
            }
        });

        /**
         * Aquest event fa que quan es clicke en el botó de eliminar, s'esborre el producte del carret 
         */
        buttonDel.addEventListener('click',function(){
            tr.remove(tr);
        });
    }

    /**
    * Aquest mètode s'encarrega de calcular l'import total del producte 
    */
    function calculaTotalProducte(cantitat, importe){
        return cantitat*importe;
    }

    /**
    * Aquest mètode crea els th's de la taula, afegint el contingut desitjat
    */
    function createTh(content,tr){
        let th = document.createElement('th');
        th.append(content);
        tr.append(th);
    }

    /**
    * Aquest mètode crea els td's de la taula, afegint el contingut desitjat 
    */
    function createTd(clase,content,tr){
        let td = document.createElement('td');
        td.setAttribute('class',clase);
        td.append(content);
        tr.append(td);
    }

    function calculaTotalCarret(){
        let suma=0;
        for(let i = 0;i<carret.length;i++){
            suma += carret[i].cantitat;
        };
        return suma;
    }
}

document.addEventListener('DOMContentLoaded',main());