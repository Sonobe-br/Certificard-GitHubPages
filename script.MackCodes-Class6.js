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

nome = '+ Daniel Sonobe Silveira';
birthDate = ' - Ano: 1978';
facebook = '<br>+ Facebook: @letsgotomars_official';
instagram = '<br>+ Instagram: @letsgotomars_official';
twitter = '<br>+ Twitter: @letsgotomars_official';
linkedin = '<br>+ Linkedin: @letsgotomars_official';
gitHub = '<br>+ GitHub: @letsgotomars_official';
sex = '<br>+ Sex: Masculine';
Localization = '<br>+ Localization: São Paulo/SP';
Pole = '<br>+ Pole: Higienópolis';

document.write(nome);
document.write(birthDate);
document.write(facebook);
document.write(instagram);
document.write(twitter);
document.write(linkedin);
document.write(gitHub);
document.write(sex);
document.write(Localization);
document.write(Pole);