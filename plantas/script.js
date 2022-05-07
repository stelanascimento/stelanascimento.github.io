 const imagensGaleria = document.querySelectorAll('.container img');
const imagemModal = document.querySelector('.modal img');
const modal = document.querySelector('.modal');


//Funcao que vai abrir a imagem
function abrirModal(src){
    modal.style.display = 'flex';
    imagemModal.src = src ; //vai ser igual ao src recebido pela funcao

}

imagensGaleria.forEach(function(imagem){
    imagem.addEventListener('click',function(event){
        abrirModal(event.target.src);  //event target em quem a gente clicou
        //vamos pegar o src dessa imagem que clicamos e vai chamar a funcao abrirModal
    } )
})


//Para sair do Modal
modal.addEventListener('click',function(){
    modal.style.display = 'none';
})
