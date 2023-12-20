var tema = document.getElementById("tema-select");
var body = document.getElementById("body");

let localTema = localStorage.getItem("temas");

body.classList.remove("theme-light");
body.classList.remove("theme-dark");
body.classList.remove("theme-american");
body.classList.add(localTema);


function cambiarTema(){

    console.log(tema);
    if(tema.value == "light"){ //light
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-american");
        

    }

    else if(tema.value  == "dark"){ //dark
        body.classList.add("theme-dark")
        body.classList.remove("theme-light");
        body.classList.remove("theme-american");
    }

    else if(tema.value  == "usa"){ //american
        body.classList.add("theme-american");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-light");
    }

    localStorage.setItem("temas", tema.value);
    
   

    //     /*Limpiando los campos o inputs*/
    // document.getElementById("nombretxt").value = "";
    // document.getElementById("apellidotxt").value = "";
}

console.log("hola");




// try{
//     const localTema = localStorage.getItem("temas");


//     if(localTema == "light"){ //light
//         body.classList.add("theme-light");
//         body.classList.remove("theme-dark");
//         body.classList.remove("theme-american");
//     }

//     else if(localTema == "dark"){ //dark
//         body.classList.add("theme-dark")
//         body.classList.remove("theme-light");
//         body.classList.remove("theme-american");
//     }

//     else if(localTema == "usa"){ //american
//         body.classList.add("theme-american");
//         body.classList.remove("theme-dark");
//         body.classList.remove("theme-light");
//     }
// }catch (error){}