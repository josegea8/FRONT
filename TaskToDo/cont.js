//Get Input Value
function changeText(){

    var headTitle = document.getElementById("titleInput").value.trim();

    if (headTitle=="") {
         var popup = document.getElementById("myPopup");
         popup.classList.toggle("show");
    }else{
        var popup = document.getElementById("myPopup");
        popup.remove();
        
        var stylesTitle = document.getElementById("titleInput");
        stylesTitle.style.color = 'white';
        stylesTitle.style.backgroundColor = 'transparent';
        stylesTitle.style.textDecorationLine = 'underline';
        stylesTitle.style.fontSize = '36px';

        var editBtn = document.getElementById("inputBtn").style.visibility =  'hidden';
    }
    
}


//Validate Formulario
function validateForm (){

    var setTitle = document.getElementById('getTitle').value.trim();
    var setCont = document.getElementById('getCont').value.trim();
    var setAutor = document.getElementById('getAut').value.trim();
    
    if (setTitle=='' || setCont=='' || setAutor=='') {
        Swal.fire({
          icon: "error",
          title: "Error!",
          width: 500, 
          color: "#4f4f4f",
          confirmButtonColor: "#4f4f4f",
          text: "Todos los campos son Obligatorios!"
        });

        return false;
    }else if (setTitle.length>25) {
        Swal.fire("El Titulo es demasiado largo!");
        return false;
    }else if (setCont.length>30) {
        Swal.fire("El Contenido es demasiado largo!");
        return false;
    }else if (setAutor.length>12) {
        Swal.fire("El Autor es demasiado largo!");
        return false;
    }else{
        //Add Tasks with innerHTML
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tarea añadida con exito!",
          showConfirmButton: false,
          timer: 1500
        });

        //para evitar que una página se refresque automáticamente al momento de llamar al evento submit
        event.preventDefault();

        var containerBox = document.querySelector(".container");
        let card=document.createElement('div');
        card.style.backgroundColor = 'white';
        card.style.boxShadow = '5px 5px 10px #0008';
        card.style.marginBottom = '4%';
        card.style.height = '40%';
        card.style.padding = '4%';
        card.style.width = '100%';
        card.style.boxSizing = 'border-box';
     
        var title=document.createElement('h1');
        title.textContent = setTitle;
       
        var cont=document.createElement('p');
        cont.textContent = setCont;
        
        var autor=document.createElement('span');
        autor.textContent = setAutor;
 
        card.append(title,cont,autor);
        containerBox.append(card);

        console.log(containerBox).innerHTML;
    }
}


 