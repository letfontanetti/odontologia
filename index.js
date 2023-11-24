botao = document.getElementById("btn")

botao.addEventListener("click", function(){
    form = document.getElementById("formulario1")

    if (form.style.display === "block"){
        form.style.display = "none"
    }

    else{
        form.style.display = "block" 
    }
} )