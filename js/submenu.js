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
    $(document.body).on('click', '.excluir-js', function(event){
        $(".barra-sub-menu").slideToggle(100)
        $('#edicaoAtual').remove()
    });

});