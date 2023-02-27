const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const inputOriginal = document.getElementById("input-original");
const cifrador = document.getElementById("cifrador")
const resultado = document.getElementById("resultado")
const rango = document.getElementById("rango")

const shiftMessage = () => {
    const wordArray = [...inputOriginal.value.toUpperCase()]
    printChar(0,wordArray)
}

const printChar = (currentIndex, Array) => {
    if (Array.length === currentIndex) return               //Caso base de la función recursiva
        
    inputOriginal.value = inputOriginal.value.substring(1)  //Este método elimina el substring que queramos(el 1º en este caso)
    
    const spanChar = document.createElement("span")
    resultado.appendChild(spanChar)

    const charSinCodificar = Array[currentIndex]

    spanChar.innerHTML = alfabeto.includes(charSinCodificar)
        ? alfabeto[(alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) % alfabeto.length]
        : charSinCodificar

        printChar(currentIndex + 1, Array)
}

const submit = (e) => {
    e.preventDefault();            //Evita el comportamiento por defecto del evento al dar intro en el formulario
    resultado.innerHTML = "";      //Borramos el contenido al dar intro
    shiftMessage()
}

cifrador.onsubmit = submit