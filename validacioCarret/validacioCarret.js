"use strict";


function main(){
    let table = document.querySelector('body>table'); //Seleccionem la taula del document html

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
        img.setAttribute('src','/cataleg_prova/rollsRoyce.jpeg');
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
        createTd("total",calculaTotal(cantitat,importe)+"$",tr);
        createTd("del",buttonDel,tr);


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
            total.textContent = calculaTotal(cantitat,importe)+"$";


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
                total.textContent = calculaTotal(cantitat,importe)+"$";
            }
        });

        /**
         * Aquest event fa que quan es clicke en el botó de eliminar, s'esborre el producte del carret 
         */
        buttonDel.addEventListener('click',function(){
            tr.remove(tr);
        });
    }

    function calculaTotal(cantitat, importe){
        return cantitat*importe;
    }

    function createTh(content,tr){
        let th = document.createElement('th');
        th.append(content);
        tr.append(th);
    }

    function createTd(clase,content,tr){
        let td = document.createElement('td');
        td.setAttribute('class',clase);
        td.append(content);
        tr.append(td);
    }
}

document.addEventListener('DOMContentLoaded',main());