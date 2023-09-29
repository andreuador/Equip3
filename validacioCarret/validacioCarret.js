"use strict";

function main(){
    let table       = document.querySelector('body>table'); //Seleccionem la taula del document html
    let imatges     = ['img/rollsRoyce.jpeg','img/ferrari.jpeg','img/buggati.jpeg','img/maserati.webp','img/mercedes.jpeg','img/porsche.jpeg'];
    let marques     = ['Rolls Royce','Ferrari','Buggati','Maserati','Mercedes','Porsche'];
    let preuCarret  = document.querySelector('#preuCarret>h1'); 
    let carret = [];
    let id = 1;
    let totalCarret = 0;

    createThs(table);
    createTds(table);
    createTds(table);
    createTds(table);

    preuCarret.textContent = totalCarret;

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

        let vehicle = {
            image:img,
            nom:marques[parseInt(Math.random()*marques.length)],
            import:importe,
            cantitat:cantitat,
        }

        calculaTotalCarret(vehicle.import);

        let div = document.createElement('div');                
        let buttonDel = document.createElement('button');       //Botó per eliminar el producte del carret
        buttonDel.setAttribute('id',id);
        buttonDel.innerHTML = "Eliminar";                       

        let buttonResta = document.createElement('button');     //Botó per disminuir la cantitat de vehicles  
        buttonResta.innerHTML = "-";

        let buttonSuma = document.createElement('button');      //Botó per incrementar la cantitat de vehicles 
        buttonSuma.innerHTML = "+";


        div.append(buttonResta);
        div.append(vehicle.cantitat);
        div.append(buttonSuma);

        

        createTd("imagenV",vehicle.image,tr);
        createTd("nombreV",vehicle.nom,tr);
        createTd("importe",vehicle.import,tr);
        createTd("cantidad",div,tr);
        createTd("total",calculaTotalProducte(vehicle.cantitat,vehicle.import),tr);
        createTd("del",buttonDel,tr);

        carret.push(vehicle);
        localStorage.setItem('vehicle'+id,vehicle);
        
        
        table.append(tr);                                       //S'anyadeix el la fila a la taula
        id += 1;

        

        /**
         * Aquest event fa que quan es clicke en el botó de suma incremente la cantitat del mateix producte 
         */
        buttonSuma.addEventListener('click',function(){
            vehicle.cantitat++;
            div.textContent = "";
            div.append(buttonResta);
            div.append(vehicle.cantitat);
            div.append(buttonSuma);

            let total = tr.querySelector('.total');
            total.textContent = "";
            total.textContent = calculaTotalProducte(vehicle.cantitat,vehicle.import);

            preuCarret.textContent = "";
            preuCarret.textContent = calculaTotalCarret(vehicle.import);

        });

        /**
         * Aquest event fa que quan es clicke en el botó de resta disminueixca la cantitat del mateix producte 
         */
        buttonResta.addEventListener('click',function(){
            if(vehicle.cantitat > 1){
                vehicle.cantitat--;
                div.textContent = "";
                div.append(buttonResta);
                div.append(vehicle.cantitat);
                div.append(buttonSuma);

                let total = tr.querySelector('.total');
                total.textContent = "";
                total.textContent = calculaTotalProducte(vehicle.cantitat,vehicle.import);

                preuCarret.textContent = "";
                preuCarret.textContent = resta(vehicle.import);
            }
        });

        /**
         * Aquest event fa que quan es clicke en el botó de eliminar, s'esborre el producte del carret 
         */
        buttonDel.addEventListener('click',function(){
            tr.remove(tr);
            
            localStorage.removeItem('vehicle'+buttonDel.getAttribute('id'));
            if(buttonDel.getAttribute('id') == id){
                localStorage.removeItem('vehicle'+id);
            }
            preuCarret.textContent = "";
            preuCarret.textContent = resta(calculaTotalProducte(vehicle.cantitat,vehicle.import));

        });
    }

    /**
    * Aquest mètode s'encarrega de calcular l'import total del producte 
    */
    function calculaTotalProducte(cant, imp){
        return cant*imp;
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

    function calculaTotalCarret(imp){
        return totalCarret += imp;
      
    }

    function resta(imp){
        return totalCarret -= imp;
    }
    
}


document.addEventListener('DOMContentLoaded',main());