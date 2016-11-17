

function carregaMaterias() {
    for ( i = 0 ; i <= materiasList.length ; i++ ) {
        box = document.createElement('DIV')
        box.classList = 'materia drag-js'
        box.setAttribute('data-type', 'materia')
        box.draggable = true

        uid = document.createElement('INPUT')
        uid.type = 'hidden'
        uid.value = materiasList[i].uid

        link = document.createElement('A')
        link.href = '#'
        link.innerText = materiasList[i].titulo

        $(box).append(uid, link)
        $('#sidebar-materias').append(box)

    }
}


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $(document.body).on('click', '#menu-toggle', function(e){
        e.preventDefault();
        $("#container-page").toggleClass("revezar");
        $(".pesquisa-materias").slideToggle();
    });

    $(document.body).on('click', '.pesquisa-materias', function(event){
        $(".input-pesquisa").slideToggle();
    });

    $(document.body).on('click', '.config', function(event){
        if ( $(".barra-sub-menu").attr('style') === 'display: block;') {
            $(".erroSubmenu-js").slideToggle()
            setTimeout(function(){
                $(".erroSubmenu-js").slideToggle()
            }, 2000);
        } else {
            $(event.target).closest('.column-default').attr( 'id', 'edicaoAtual' )
            $(".barra-sub-menu").slideToggle(100);
            $(event.target).closest('.drop-js').toggleClass('submenu-open')
        }
    });

    $(document.body).on('click', '.action-drop', function(event){
        $(this).find('.drop-submenu').slideToggle(300)
    });
});