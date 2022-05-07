document.querySelectorAll(".drop-zone-input").forEach(inputElement => 
    {
    
        const dropZoneElement = inputElement.closest(".drop-zone");

        //Acao = clicar para Upload
        dropZoneElement.addEventListener("click", e => {
            inputElement.click(); // ou seja quando clicamos no .drop-zone estamos tbm clicando no input
        });

        inputElement.addEventListener("change", e => {
            if(inputElement.files.length){
                updateThumbnail(dropZoneElement, inputElement.files[0]);
            }
        });

        //Acao => arrastar um arquivo pra  drop-zone
        dropZoneElement.addEventListener('dragover', e =>{
            e.preventDefault();
            dropZoneElement.classList.add('drop-zone-border');
        });

        //Acao => tirar o arquivo da drop-zone
        const tiposDeAcoes = ["dragleave", "dragend"];
        tiposDeAcoes.forEach( type => {
            dropZoneElement.addEventListener(type, e => {
                dropZoneElement.classList.remove('drop-zone-border');
            });
        });

        //Acao = drop o arquivo na drop-zone
        dropZoneElement.addEventListener("drop", e => {
            e.preventDefault();
            
            if(e.dataTransfer.files.length){
                inputElement.files = e.dataTransfer.files;
                console.log(inputElement.files); // Mostra a lista de arquivos 
                updateThumbnail(dropZoneElement, e.dataTransfer.files[0]); //so vai mostrar o primeiro arquivo na preview
            }

            dropZoneElement.classList.remove("drop-zone-border");
        })
    });

    function updateThumbnail(dropZoneElement, file){
        let previewImagem = dropZoneElement.querySelector(".drop-zone-thumb");
        
        //Remover Instrucoes escritas na tela de como fazer Upload
        if(dropZoneElement.querySelector(".drop-zone-prompt")){
            dropZoneElement.querySelector(".drop-zone-prompt").remove();
        }
        
        //Se nao existir a Imagem Pequena vamos criar.
        if(!previewImagem){
            previewImagem = document.createElement("div");
            previewImagem.classList.add("drop-zone-thumb");
            dropZoneElement.appendChild(previewImagem);
        }

        //colocar o nome do arquivo na preview
        previewImagem.dataset.label = file.name;

        //Mostrar Preview da Imagem do Arquivo
        if(file.type.startsWith("image/")){
            const reader = new FileReader();

            //ler o aqruivo como data url
            reader.readAsDataURL(file);
            reader.onload = () => { 
                previewImagem.style.backgroundImage = `url('${reader.result}')`;
            };
        } else{
            previewImagem.style.backgroundImage = null;
        }




    }