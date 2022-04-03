

        //****GLOBALES*** */

let contador=0, 
 fig = ['Cuadrado','Triangulo','Circulo'] ;



                /***CUADRADO*** */
let botonPerimetro = document.getElementById('botonCalcular');

botonPerimetro.addEventListener('click', ()=> {   
    let valorLado = document.getElementById("input-cuadrado").value,
    figura= fig[0] ;
    if(valorLado==""){
           alertError();
    }else{
        valorCuadrado(valorLado,figura);
    }
});

function valorCuadrado(valorLado,fig){
    contador++;
if(contador>1){
contador = 1;
borrarDiv();
}
    area= valorLado*valorLado,
    perimetro= valorLado*4;
    
    crearDiv(fig,area,perimetro);
}





                /***TRIANGULO*** */
    let botonTriangulo = document.getElementById('botonCalcularT');
    botonTriangulo.addEventListener('click',()=>{
     
        let base = document.getElementById("input-trianguloBase").value,
         lado1 = document.getElementById("input-trianguloLado1").value,
         lado2 = document.getElementById("input-trianguloLado2").value,
         altura = document.getElementById("input-Altura").value;
         

         if(base==""||lado1==""||lado2==""||altura==""){
            alertError();
     }else{
        valorTriangulo(base,lado1,lado2,altura);
     }

         

    });

    const valorTriangulo = (base,lado1,lado2,altura)=>{
        contador++;
        if(contador>1){
            contador = 1;
            borrarDiv();
        }
        let perimetro = Number(base)+Number(lado1)+Number(lado2),
        area = (Number(base)*Number(altura))/2;

        crearDiv(fig[1],area,perimetro);
        
    };



  




                    /***CIRCULO*** */
                    //VARIABLES-CIRCULO
let botonCalcularCir = document.getElementById('botonCalcularCir');

botonCalcularCir.addEventListener('click',()=>{

    let radio = document.getElementById('input-radioCirculo').value;
    

    if(radio==""){
        alertError();
 }else{
    valorCirculo(radio);
 }
    
});

const valorCirculo =(radio)=>{
    contador++;
    if(contador>1){
        contador = 1;
        borrarDiv();
    }
    perimetro = Number(radio)*Math.PI*2,
    area = Number(radio)*Number(radio)*Math.PI;
    crearDiv(fig[2],area,perimetro);

};

          //**DOM** */
        
          const crearDiv= (fig,area,perimetro)=>{

            const main = document.querySelector('.main');
            const newDiv = document.createElement('div');
            newDiv.classList.add('nuevoDiv');
            newDiv.classList.add('nuevo-div');
            newDiv.innerText = `El Perimetro del ${fig} es de ${perimetro}cm y el Area de ${area}cm^2`;
    
            main.appendChild(newDiv);
          
        }
    
        const borrarDiv = ()=>{
    const div = document.querySelector('.nuevo-div');
    div.remove();
        }
    
const alertError = ()=> alert("ERROR, ALGUN CAMPO NECESARIO ESTA VACIO");