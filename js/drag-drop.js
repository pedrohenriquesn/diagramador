var dragged;
var currentDrag;
/*----------------------------------------------------------------*/
/*------- Aciona o evento e steps de milisegundos enquanto -------*/
/*------- o usuario estuver arastando o elemento           -------*/
/*----------------------------------------------------------------*/
document.addEventListener("drag", function( event ) {

}, false);


document.addEventListener("dragstart", function( event ) {
    dragged = $(event.target).closest('.drag-js')[0]
    $(dragged).addClass('moved-target')
    currentDrag = dragged.getAttribute('data-type')
}, false);

document.addEventListener("dragend", function( event ) {
    $(dragged).removeClass('moved-target')
}, false);

/*-----------------------------------------------------------------*/
/*--- O dragover evento é acionado quando um elemento ou seleção --*/
/*--- de texto está sendo arrastado ao longo de um destino de    --*/
/*--- soltar válido (em algumas centenas de milissegundos).      --*/
/*--             SEMPRE QUE ESTA EM UM LOCAL VALIDO              --*/
/*-----------------------------------------------------------------*/
document.addEventListener("dragover", function( event ) {
    event.preventDefault();
}, false);

/*----------------------------------------------------------------*/
/*-- O dragenter evento é acionado quando um elemento arrastado --*/
/*-- ou seleção de texto entra em um destino de soltar válido.  --*/
/*--           APENAS QUANDO ENTRA EM UM LOCAL VALIDO           --*/
/*----------------------------------------------------------------*/
document.addEventListener("dragenter", function( event ) {
    if ( event.target.className === 'container-jornal drop-js'){
        $(event.target).addClass('droped-target-campo')
    }
    if ( event.target.className === 'row line-grid drop-js'){
        $(event.target).addClass('droped-target-linha')
    }
    if ( event.target.className === 'column-grid drop-js' ) {
        $(event.target).addClass('droped-target-coluna')
    }
}, false);

/*----------------------------------------------------------------*/
/*-- O dragleave evento é acionado quando um elemento arrastado --*/
/*-- ou seleção de texto deixa um destino de soltar válido.    ---*/
/*----------------------------------------------------------------*/
document.addEventListener("dragleave", function( event ) {
    $(event.target).removeClass('droped-target-campo droped-target-linha droped-target-coluna')
}, false);

document.addEventListener("drop", function( event ) {
    currentTarget = $(event.target).closest('.drop-js')[0]
    typeDrop = currentTarget.getAttribute('data-type')

    switch (currentDrag) {
        case 'linha':
            if ( typeDrop === 'col' || typeDrop === 'jornal'){
                console.log("A linha pode ser inserida")
            } else {
                $(".erroLinha-js").slideToggle()
                setTimeout(timeOutShow, 2000);
            }
            break;
        case 'row':
            debugger
            break;
        case 'materia':
            debugger
            break;
        // case '':
        //     debugger
        //     break;
    }
}, false);


function timeOutShow() {
$(".erroLinha-js").slideToggle()
}