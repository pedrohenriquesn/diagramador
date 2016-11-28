dragimage = false;

dragresize = false; // habilitador do move da barra de controle de altura
barraclick= null; // altura inicial do click para arrastar a barra
alturabox = null;

proporcao = 100; // proporcao da imagem para o scroll

stateX = null; // local inicial do click e arraste
stateY = null; // local inicial do click e arraste
currentleft = null; // valor da posicao atual da imagem
currenttop = null; // valor da posicao atual da imagem

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
        $(this).toggleClass('color-red')
        $(this).closest('.box-img-crop').parent().find('.ctrl-height').toggle()
    });

    //-------------------------------------------------//
    //        controlador do ZOOM IN e ZOOM OUT        //
    //-------------------------------------------------//
    $(document.body).on('wheel', '.img-materia-cut', function(event){
        event.preventDefault()
        sizeBox = $(this.parentNode).width()
        sizeImg = $(this).width()

        scroll = event.originalEvent.deltaY
        if ( scroll < 0 ){ //aumenta
            proporcao = (proporcao+0.5)
            $(this).css('width' , ''+proporcao+'%')
            $(this).css('height', ''+proporcao+'%')
        }
        if ( scroll > 0 ){ //diminui
            if ( sizeImg > sizeBox ) {
                proporcao = (proporcao-0.5)
                $(this).css('width' , ''+proporcao+'%')
                $(this).css('height', ''+proporcao+'%')
            }
        }
    });

    //-------------------------------------------------//
    //          Controlador da BARRA DE CORTE          //
    //-------------------------------------------------//
    $(document.body).on('mousedown', '.ctrl-height', function(event){
        dragresize = true
        barraclick = event.pageY
        alturabox = $(this.parentNode).find('.box-img-crop').height()
        $(this).css('height', '20px')
    });

    $(document.body).on('mousemove', '.container-jornal', function(event){
        if ( dragresize ) {
            atual = alturabox - (barraclick - event.pageY)
            $(this.parentNode).find('.img-materia-cut').closest('.box-img-crop').css('height', ''+atual+'px')
        }
    });

    $(document.body).on('mouseup', '.ctrl-height', function(event){
        dragresize = false
        $(this).css('height', '10px')
    });

    //-------------------------------------------------//
    //         Controlador para MOVER A IMAGEM         //
    //-------------------------------------------------//

    $(document.body).on('mousedown', '.img-materia-cut', function(event){
        this.draggable = false
        stateX = event.originalEvent.clientX
        stateY = event.originalEvent.clientY
        dragimage = true
        currentleft = parseInt(this.style.left)
        currenttop = parseInt(this.style.top)
    });

    $(document.body).on('mousemove', '.img-materia-cut', function(event){

        if(dragimage){
            moveX = event.originalEvent.clientX
            moveY = event.originalEvent.clientY

            newleft = currentleft+(stateX - moveX)-((stateX - moveX)*2)
            newtop = currenttop+(stateY - moveY)-((stateY - moveY)*2)

            larguraimg = this.width
            largurabox = $(this.parentNode).width() + 10

            if ( larguraimg >= largurabox ){
                $(this).css('top', ''+newtop+'px')
                $(this).css('left', ''+newleft+'px')
            }else {
                $(this).css('top', ''+newtop+'px')
            }

        }

    });

    $(document.body).on('mouseup', '.img-materia-cut', function(event){
        dragimage = false
    });

});
