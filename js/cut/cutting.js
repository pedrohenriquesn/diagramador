dragging = false;
dragresize = false;

proporcaoX = 1024; // proporcao da imagem para o scroll
proporcaoY = 768; // proporcao da imagem para o scroll

imgX = null; // posicao da imagem na tela
imgY = null; // posicao da imagem na tela

stateX = null; // local inicial do click e arraste
stateY = null; // local inicial do click e arraste

difX = null;
difY = null;

alturaClick = null;
alturaImagem = null;


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
        zero()
        $(this).closest('.box-img').find('.img-materia').removeClass('img-responsive')
        $(this).closest('.box-img').find('.img-materia').toggleClass('img-materia-cut')
        $(this).closest('.box-img').find('.ctrl-height').toggle()
        $(this).closest('.box-img').toggleClass('box-img-cut')
        $(document.body).toggleClass('no-overflow')
    });

    $(document.body).on('mousedown', '.ctrl-height', function(event){
        dragresize = true;
        alturaImagem = $(this).closest('.box-img').find('.img-materia').height()
        alturaClick = event.originalEvent.clientY
    });

    $(document.body).on('mouseup', '.box-img', function(event){
        dragresize = false;
    });

    $(document.body).on('mousemove', '.box-img-cut', function(event){
        if (dragresize) {
            // altura do local que foi clicado
            altura = event.originalEvent.clientY
            difMove = alturaClick-altura
            newAltura = ((alturaImagem-difMove)+30)
            resizeBar = ((difMove-(difMove*2))+15)
            $(this).css('height', ''+newAltura+'px')
            $(this).find('.ctrl-height').css('top', ''+resizeBar+'px')
        }
    });

});

function zero(){

    dragging = false;
    dragresize = false;

    proporcaoX = 1024; // proporcao da imagem para o scroll
    proporcaoY = 768; // proporcao da imagem para o scroll

    imgX = null; // posicao da imagem na tela
    imgY = null; // posicao da imagem na tela

    stateX = null; // local inicial do click e arraste
    stateY = null; // local inicial do click e arraste

    difX = null;
    difY = null;

    alturaClick = null;
    alturaImagem = null;

}