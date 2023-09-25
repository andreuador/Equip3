"use strict";


function main(){

    let table = document.querySelector('body>table');

    createThs(table);
    createTds(table);
    createTds(table);
    createTds(table);

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

    function createTds(table){
        let tr = document.createElement('tr');
        var cantitat = 1;
        let importe = parseInt(Math.random()*200000+100000);
        let img = document.createElement('img');
        img.setAttribute('src','rollsRoyce.webp');
        img.setAttribute('width','100px');

        let div = document.createElement('div');
        let buttonDel = document.createElement('button');
        buttonDel.innerHTML = "Eliminar";

        let buttonResta = document.createElement('button');
        buttonResta.innerHTML = "-";

        let buttonSuma = document.createElement('button');
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
        table.append(tr);

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