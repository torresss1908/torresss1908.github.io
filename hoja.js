function mostrarFormacion() {

    if (document.getElementById("experiencia").style.display == "block") {
      document.getElementById("experiencia").style.display = "none";
      document.getElementById("formacion").style.display = "block";
      document.getElementById("experienciaTitulo").style.backgroundColor = "transparent";
      document.getElementById("experienciaTitulo").style.color = "#fff";
      document.getElementById("formacionTitulo").style.backgroundColor = "#fff";
      document.getElementById("formacionTitulo").style.color = "#000";

    } else {
      document.getElementById("experiencia").style.display = "none"
      document.getElementById("experienciaTitulo").style.color = "#fff";
      document.getElementById("experienciaTitulo").style.backgroundColor = "transparent";
      document.getElementById("formacion").style.display = "block";
      document.getElementById("formacionTitulo").style.backgroundColor = "#fff";
      document.getElementById("formacionTitulo").style.color = "#000";
    }
  
}

function mostrarExperiencia() {

    if (document.getElementById("formacion").style.display == "block") {
      document.getElementById("formacion").style.display = "none";
      document.getElementById("experiencia").style.display = "block";
      document.getElementById("experienciaTitulo").style.backgroundColor = "#fff";
      document.getElementById("experienciaTitulo").style.color = "#000";
      document.getElementById("formacionTitulo").style.backgroundColor = "transparent";
      document.getElementById("formacionTitulo").style.color = "#fff";

    } else {
      document.getElementById("experiencia").style.display = "block";
    }
  
}