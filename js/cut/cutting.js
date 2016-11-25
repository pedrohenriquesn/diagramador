dragging = false;
firstDrag = false;
dragresize = false;

proporcao = 100; // proporcao da imagem para o scroll

imgX = null; // posicao da imagem na tela
imgY = null; // posicao da imagem na tela

stateX = null; // local inicial do click e arraste
stateY = null; // local inicial do click e arraste

DIFX = null;
DIFY = null;

alturaClick = null;
alturaImagem = null;


$(document).ready(function(){

    // Houvers para habilitar icone para corte
    $(document.body).on('mouseenter', '.img-materia', function(event){
        $(this).closest('.box-img').find('.cut-img').toggle();
    });
    $(document.body).on('mouseleave', '.img-materia', function(event){
        $(this).closest('.box-img').find('.cut-img').toggle();
    });

    $(document.body).on('mouseenter', '.cut-img', function(event){
        $(this).closest('.box-img').find('.cut-img').toggle();
    });
    $(document.body).on('mouseleave', '.cut-img', function(event){
        $(this).closest('.box-img').find('.cut-img').toggle();
    });

    // click para hablitar a edicao do corte
    $(document.body).on('click', '.cut-img', function(event){
        $(this).closest('.box-img').find('.img-materia').toggleClass('img-materia-cut')
        $(this).css('color', 'red')
    });

    // controlador do ZOOM IN e ZOOM OUT
    $(document.body).on('wheel', '.img-materia-cut', function(event){
        event.preventDefault()

        scroll = event.originalEvent.deltaY
        if ( scroll < 0 ){ //diminui
            proporcao = (proporcao+0.5)
            $(this).css('width' , ''+proporcao+'%')
            $(this).css('height', ''+proporcao+'%')
        }
        if ( scroll > 0 ){ //aumenta
            proporcao = (proporcao-0.5)
            $(this).css('width' , ''+proporcao+'%')
            $(this).css('height', ''+proporcao+'%')
        }

    });



    // $(document.body).on('mousemove', '.img-materia-cut', function(event){
    //     imagem = $('.img-materia-cut')[0]

    //     // imgX = imagem.x
    //     // imgY = imagem.y
    //     larguraMax = $(this).closest('.box-img').width()

    //     if(this.width > larguraMax){
    //         imgX = parseInt(imagem.style.top)
    //         imgY = parseInt(imagem.style.left)
    //         if(dragging){
    //             dragX = event.originalEvent.clientX
    //             dragY = event.originalEvent.clientY

    //             stepX = stateX-dragX
    //             stepY = stateY-dragY

    //             DIFX = (stepX-(stepX*2))
    //             DIFY = (stepY-(stepY*2))

    //             $(imagem).css('top', ''+DIFY+'px')
    //             $(imagem).css('left', ''+DIFX+'px')
    //         }
    //     }

    // });

    // // controlador do local do click e abilita mover a imagem
    // $(document.body).on('mousedown', '.img-materia-cut', function(event){
    //     this.draggable = false
    //     stateX = event.originalEvent.clientX
    //     stateY = event.originalEvent.clientY
    //     dragging = true
    // });

    // $(document.body).on('mouseup', '.img-materia-cut', function(event){
    //     dragging = false
    // });













    // $(document.body).on('mousedown', '.ctrl-height', function(event){
    //     dragresize = true;
    //     alturaImagem = $(this).closest('.box-img').find('.img-materia').height()
    //     alturaClick = event.originalEvent.clientY
    // });

    // $(document.body).on('mouseup', '.box-img', function(event){
    //     dragresize = false;
    // });

    // $(document.body).on('mousemove', '.box-img-cut', function(event){
    //     if (dragresize) {
    //         // altura do local que foi clicado
    //         altura = event.originalEvent.clientY
    //         difMove = alturaClick-altura
    //         newAltura = ((alturaImagem-difMove)+30)
    //         resizeBar = ((difMove-(difMove*2))+15)
    //         $(this).css('height', ''+newAltura+'px')
    //     }
    // });

});

// function zero(){

//     dragging = false;
//     dragresize = false;

//     proporcaoX = 1024; // proporcao da imagem para o scroll
//     proporcaoY = 768; // proporcao da imagem para o scroll

//     imgX = null; // posicao da imagem na tela
//     imgY = null; // posicao da imagem na tela

//     stateX = null; // local inicial do click e arraste
//     stateY = null; // local inicial do click e arraste

//     difX = null;
//     difY = null;

//     alturaClick = null;
//     alturaImagem = null;

// }