var  loader = {
    linha(currentTarget, currentDrag) {
        altura = $('.container-jornal').height()
        if (heightPage(altura)){
            $.ajax({
                url: 'js/json/html/conteudo.html',
                type: 'GET',
                success: function(res){
                    var content = document.createElement('DIV')
                    content.innerHTML = res
                    var row = $(content).find(".line-grid")[0]
                    $(currentTarget).append(row)
                }
            });
        } else {
            $(".erroSizePage-js").slideToggle()
            setTimeout(function(){
                $(".erroSizePage-js").slideToggle()
            }, 2000);
        }
    },
    coluna(currentTarget, currentDrag) {
        altura = $('.container-jornal').height()
        if (heightPage(altura)){
            $.ajax({
                url: 'js/json/html/conteudo.html',
                type: 'GET',
                success: function(res){
                    var content = document.createElement('DIV')
                    content.innerHTML = res
                    var col = $(content).find(".column-default")[0]
                    $(currentTarget).append(col)
                }
            });
        } else {
            $(".erroSizePage-js").slideToggle()
            setTimeout(function(){
                $(".erroSizePage-js").slideToggle()
            }, 2000);
        }
    }
};

function heightPage(currentHeight) {
    // page = 3300
    page = 1000
    var state;
    if (currentHeight > page){
        state = false
    }else {
        state = true
    }
    return state
}