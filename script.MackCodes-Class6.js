function adicionarCurso(){
    let campoCursoFavorito = document.getElementById("cursos").value;
   
    if(campoCursoFavorito.endsWith(".txt")){
        let cursoEscolhido = campoCursoFavorito;
        let elementoListaCursos = document.getElementById("listaCursos");
        elementoListaCursos.innerHTML = elementoListaCursos.innerHTML + cursoEscolhido;
    } 
        console.log(campoCursoFavorito);
    
    
    document.getElementById("cursos").value = "";
}
