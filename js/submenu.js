$(document).ready(function(){

    $(document.body).on('click', '.sair-js', function(event){
        $(".barra-sub-menu").slideToggle(100);
        $('.submenu-open').removeClass('submenu-open')
        $('#edicaoAtual').removeAttr('id')
    });

    //----------------------------------------------------------//
    //----- Funcionalidade para diminuir tamanho da coluna -----//
    //----------------------------------------------------------//
    $(document.body).on('click', '.diminuir-js', function(event){
        colunaAtual = $('#edicaoAtual')[0].classList[1].substr(7)
        if ( colunaAtual != 3 ) {
            $('#edicaoAtual').removeClass('col-md-'+colunaAtual+'')
            colunaNova = parseInt(colunaAtual)-1
            $('#edicaoAtual').addClass('col-md-'+colunaNova+'')
        } else {
            $(".erroMinColuna-js").slideToggle()
            setTimeout(function(){
                $(".erroMinColuna-js").slideToggle()
            }, 2000);
        }
    });

    //----------------------------------------------------------//
    //----- Funcionalidade para aumentar tamanho da coluna -----//
    //----------------------------------------------------------//
    $(document.body).on('click', '.aumentar-js', function(event){
        colunaAtual = $('#edicaoAtual')[0].classList[1].substr(7)
        if ( colunaAtual != 12 ) {
            $('#edicaoAtual').removeClass('col-md-'+colunaAtual+'')
            colunaNova = parseInt(colunaAtual)+1
            $('#edicaoAtual').addClass('col-md-'+colunaNova+'')
        } else {
            $(".erroMaxColuna-js").slideToggle()
            setTimeout(function(){
                $(".erroMaxColuna-js").slideToggle()
            }, 2000);
        }
    });

    //----------------------------------------------------------//
    //-----       Funcionalidade para excluir coluna       -----//
    //----------------------------------------------------------//
    $(document.body).on('click', '.excluir-js', function(event){
        $(".barra-sub-menu").slideToggle(100)
        $('#edicaoAtual').remove()
    });

    //----------------------------------------------------------//
    //-----   Funcionalidade para inserir bordas coluna    -----//
    //----------------------------------------------------------//
    $(document.body).on('click', '.borda-js', function(event){
        elemento = $('#edicaoAtual').find('.column-grid')[0]
        posicao = this.getAttribute('data-position')
        $(elemento).css("border-"+posicao+"", '3px solid #0095DA')
    });

    //----------------------------------------------------------//
    //-----   Funcionalidade para inserir bordas coluna    -----//
    //----------------------------------------------------------//
    $(document.body).on('change', '.bcolor-js', function(event){
        cor = event.target.value
        $('#edicaoAtual').find('.column-grid').css("background-color", "#"+cor+"")
    });

    //----------------------------------------------------------//
    //-----  Funcionalidade para inserir as redes sociais  -----//
    //----------------------------------------------------------//
    $(document.body).on('click', '.icon-social', function(event){
        social = this.getAttribute('data-social')
        $('.field-socials').find('.social-'+social+'').slideToggle()
    });
    // $( ".icon-social" ).mouseover(function() {
    //     $(this).css('display', 'none')
    //     iconColor = $(this.parentNode).find('.icon-color')
    //     $(iconColor).css('display', 'block')
    // }).mouseout(function() {
    //     $(this).css('display', 'block')
    //     iconColor = $(this.parentNode).find('.icon-color')
    //     $(iconColor).css('display', 'none')
    // });

});