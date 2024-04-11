var box = document.querySelectorAll('.box');
var resetButton = document.querySelector('#resetBtn');
let botones = Array.from(document.getElementsByTagName('box'));
        
var winBox = document.querySelector(".gameBoard");
var winRdo = document.querySelector(".gameHeader");
var omitir = [];

let turn = 'X';
var tiradaPc;

function playGame(nP) {
    var numPlayers = nP.toString();
    //alert("---- JUGADORES A JUGAR: "+numPlayers);
    resetButton.onclick = () => reset();

    if (numPlayers=="1"){
        //Usuario Vs Maquina
        //alert("Usuario Vs Maquina");
        Swal.fire({
            confirmButtonText: "COMIENZA",
            confirmButtonColor: "#2154fd",
            imageUrl: "assets/back1.jpg",
            imageWidth: 400,
            imageHeight: 200,

            imageAlt: "Custom image"
          });

           
            var posOcup;

             box.forEach(e=>{
               e.onclick = () => {
                
               //Verify complete box
               if(e.innerText==''){
                
                if(turn=='X'){
                   e.innerText = turn;
                   turn = "O";
                   //alert(e.getAttribute('id')); 
                   posOcup=e.getAttribute('id');

                }else if(turn=='O'){
                    //alert("Le toca al PC");
                    PcTurn(posOcup);
                }
              
                }
               } //END ON CLICK
             })
             
             function PcTurn(posOcup){
               alert("Esperando a que el pc tire..."); 
             }

             
             function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
              }

            
    }else if (numPlayers=="2"){
        //Usuario Vs Usuario 2
        //alert("Usuario Vs Usuario 2");
        Swal.fire({
            confirmButtonText: "COMIENZA",
            confirmButtonColor: "#2154fd",
            imageUrl: "assets/back2.jpg",
            imageWidth: 400,
            imageHeight: 200,

            imageAlt: "Custom image"
          });


          box.forEach(e=>{
            e.onclick = () => {
            
            //Verify complete box
            if(e.innerText==''){
                e.innerText = turn;
                turn == 'X' ? turn = 'O' : turn = 'X';
                winner();

            }
            } //END ON CLICK
        }) //END FOR EACH
    }
}

       
function reset(){
    // box.forEach(e=>e.innerText='');
    window.location.reload();
 }

function winner(){
    
    const winCombination = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6]
     ]
 
     var pos=0;
     //Recorre todo el diccionario y la condicion sera que 
     //Si el diccionario(0.1.2...)
     //Si el diccionario(0) cuya posicion 0 es identica a la 1 && la 1 es identica a la 2 (Ganaste)
     winCombination.forEach(e => {
         var valueBox;
         var box1,box2,box3;
       

         if(box[e[0]].innerText===box[e[1]].innerText &&
             box[e[1]].innerText===box[e[2]].innerText && box[e[0]].innerText){
                 console.log("Gano el jugador"+box[e[0]].textContent);

                 if(box[e[0]].textContent=='X'){
                    //alert("GANO X");
                    valueBox=winCombination[pos];
                    //console.log(valueBox);
                    box1 = valueBox[0];
                    box2 = valueBox[1];
                    box3 = valueBox[2];
                    
                    //console.log(box1 + "." + box2 + "." + box3);
                    winBox.children[box1].style.backgroundColor="white";
                    winBox.children[box1].style.color="#4f4f4f";
                    winBox.children[box1].style.animation = "demo1 1s 1";
                    
                    
                    winBox.children[box2].style.backgroundColor="white";
                    winBox.children[box2].style.color="#4f4f4f";
                    winBox.children[box2].style.animation = "demo1 1s 1";
                    
                    winBox.children[box3].style.backgroundColor="white";
                    winBox.children[box3].style.color="#4f4f4f";
                    winBox.children[box3].style.animation = "demo1 1s 1";
                    
                    winRdo.style.display="block";
                    winRdo.children[0].textContent="GANO EL USUARIO 1";

                    setTimeout(bottomRdos,1000);
                    
                    
                    
                    function bottomRdos(){
                        window.scrollTo(0, document.body.scrollHeight);
                    }
                    
                    

                 }else if(box[e[0]].textContent=='O'){
                    //alert("GANO O");
                    valueBox=winCombination[pos];
                    //console.log(valueBox);
                    box1 = valueBox[0];
                    box2 = valueBox[1];
                    box3 = valueBox[2];
                    
                    //console.log(box1 + "." + box2 + "." + box3);
                    winBox.children[box1].style.backgroundColor="white";
                    winBox.children[box1].style.color="#4f4f4f";
                    winBox.children[box1].style.animation = "demo1 1s 1";
                    
                    
                    winBox.children[box2].style.backgroundColor="white";
                    winBox.children[box2].style.color="#4f4f4f";
                    winBox.children[box2].style.animation = "demo1 1s 1";
                    
                    winBox.children[box3].style.backgroundColor="white";
                    winBox.children[box3].style.color="#4f4f4f";
                    winBox.children[box3].style.animation = "demo1 1s 1";

                    winRdo.style.display="block";
                    winRdo.children[0].textContent="GANO EL USUARIO 2";
                    
                    setTimeout(bottomRdos,1000);
                    
                    function bottomRdos(){
                        window.scrollTo(0, document.body.scrollHeight);
                    }
                    
                 }

             } else{
                    pos++;
             } 

             
     })

     if(box[0].innerText!='' && box[1].innerText!='' && box[2].innerText!='' && box[3].innerText!='' && box[4].innerText!='' && box[5].innerText!='' && box[6].innerText!='' && box[7].innerText!='' && box[8].innerText!=''){
        console.log("lleno");  
        if(winRdo.style.display="none"){
            setTimeout(bottomRdos,1000);

            console.log("EMPATE");
            winRdo.style.display="block";
            winRdo.children[0].textContent="¡EMPATE!";
        }else{

        }

        
        function bottomRdos(){
            window.scrollTo(0, document.body.scrollHeight);
        }
     } else {
        console.log("vacio");
     }

 
 } 

 


 

