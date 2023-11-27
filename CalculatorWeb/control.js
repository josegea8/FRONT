//Window
const fram = document.querySelector('.fram');

//Btns (QueryAll para llamar a * clases)
const buttons = document.querySelectorAll('.btn');

buttons.forEach(b =>{
	b.addEventListener("click", () =>{
		const pressBtn = b.textContent;

		//BOTON C
		if (b.id == "c") {
			fram.textContent = 0;
			return; //Se ejecuta solo este if 
		}

		//BOTON DEL
		if (b.id=="delete") {
			if (fram.textContent.length == 1 || fram.textContent.length === "Error!") {
				fram.textContent = "0";
			}else{
				fram.textContent = fram.textContent.slice(0,-1);
			}
			
			return;
		}

		//BOTON IGUAL
		if (b.id == "igual") {
			try {
				fram.textContent = eval(fram.textContent); //Eval nos detecta simbolos matematicos y numeros y nos da rdo
			} catch(e) {
				fram.textContent = "Error!";
			}
			return;
		}

		if (fram.textContent == "0" || fram.textContent === "Error!") {
			fram.textContent = pressBtn;
		}else{
			fram.textContent += pressBtn;
		}
	})
});