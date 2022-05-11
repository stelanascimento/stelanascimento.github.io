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

async function getConteudo(){
    
    try {
        const response = await fetch('http://localhost:6969/users') 
        // console.log(response)
        const data = await response.json()
        console.log(data)
        console.log(data[3].name)

        document.getElementById('nomePlanta').textContent
            = data[3].nomeDaPlanta;

        document.getElementById('nomePopular').textContent
            = data[3].nomePopular;

        document.getElementById('nomeCientifico').textContent
            = data[3].nomeCientifico;

        document.getElementById('nomeOrigem').textContent
            = data[3].origem;

        document.getElementById('climas').textContent
            = data[3].climas;

        document.getElementById('folhas').textContent
            = data[3].folhas;

        document.getElementById('caule').textContent
            = data[3].caule;

        document.getElementById('flores').textContent
            = data[3].flores;

        document.getElementById('frutos').textContent
            = data[3].frutos;

        document.getElementById('ondePlantar').textContent
            = data[3].frutos;

        document.getElementById('reproducao').textContent
            = data[3].reproducao;

        document.getElementById('adubo').textContent
            = data[3].adubo;

        document.getElementById('luz').textContent
            = data[3].luz;

        document.getElementById('toxicidade').textContent
            = data[3].toxicidade;


    } catch (error) {
        console.log(error)
    }
}

getConteudo()
