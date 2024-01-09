function cambiarTema(){

    let tema = document.getElementById("tema-select").value;
    let body = document.getElementById("body");
    let localTema = localStorage.getItem("temas");

    body.classList.remove("theme-light");
    body.classList.remove("theme-dark");
    body.classList.remove("theme-american");

    body.classList.add(localTema);
    console.log(tema);

    if(tema == "light"){ //light
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-american");

    }

    else if(tema  == "dark"){ //dark
        body.classList.add("theme-dark")
        body.classList.remove("theme-light");
        body.classList.remove("theme-american");
    }

    else if(tema == "american"){ //american
        body.classList.add("theme-american");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-light");
    }

    localStorage.setItem("temas", tema);
    console.log(localStorage);
    
}

console.log("hola");


try{
    const localTema = localStorage.getItem("temas");


    if(localTema == "light"){ //light
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-american");
    }

    else if(localTema == "dark"){ //dark
        body.classList.add("theme-dark")
        body.classList.remove("theme-light");
        body.classList.remove("theme-american");
    }

    else if(localTema == "usa"){ //american
        body.classList.add("theme-american");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-light");
    }
}catch (error){}

function cambiarLanguage(){

    let langaugesValue = document.getElementById("languages").value;

    console.log(langaugesValue);

    if(langaugesValue == "español"){
        location.href = "index.html"
    }
    else{
        location.href = "./html/index_english.html"
    }
}