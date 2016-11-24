dragging = false;
proporcaoX = 1024; // proporcao da imagem para o scroll
proporcaoY = 768; // proporcao da imagem para o scroll

imgX = null; // posicao da imagem na tela
imgY = null; // posicao da imagem na tela

stateX = null; // local inicial do click e arraste
stateY = null; // local inicial do click e arraste

difX = null;
difY = null;


$(document).ready(function(){

    $(document.body).on('wheel', '.img-materia-cut', function(event){

       scroll = event.originalEvent.deltaY
       if ( scroll < 0 ){ //diminui
            proporcaoX = proporcaoX - 3
            proporcaoY = proporcaoY - 2
            $('.img-materia-cut').css('width', ''+proporcaoX+'px')
            $('.img-materia-cut').css('height', ''+proporcaoY+'px')
       }
       if ( scroll > 0 ){ //aumenta
            proporcaoX = proporcaoX + 3
            proporcaoY = proporcaoY + 2
            $('.img-materia-cut').css('width', ''+proporcaoX+'px')
            $('.img-materia-cut').css('height', ''+proporcaoY+'px')
       }

    });

    $(document.body).on('mousemove', '.img-materia-cut', function(event){
        imagem = $('.img-materia-cut')[0]
        imgX = imagem.x
        imgY = imagem.y
        if(dragging){
            difX = (stateX-event.originalEvent.clientX-((stateX-event.originalEvent.clientX)*2))
            difY = (stateY-event.originalEvent.clientY-((stateY-event.originalEvent.clientY)*2))

            $(imagem).css('top', ''+difY+'px')
            $(imagem).css('left', ''+difX+'px')
        }

    });

    $(document.body).on('mousedown', '.img-materia-cut', function(event){
        this.draggable = false
        stateX = event.originalEvent.clientX
        stateY = event.originalEvent.clientY
        dragging = true
    });

    $(document.body).on('mouseup', '.img-materia-cut', function(event){
        dragging = false
    });

    $(document.body).on('mouseenter', '.img-materia, .cut-img', function(event){
        $(this).closest('.box-img').find('.cut-img').toggle();
    });
    $(document.body).on('mouseleave', '.img-materia, .cut-img', function(event){
        $(this).closest('.box-img').find('.cut-img').toggle();
    });
    $(document.body).on('click', '.cut-img', function(event){
        debugger
        $(this).closest('.box-img').find('.img-materia').toggleClass('img-materia-cut')
    });

});