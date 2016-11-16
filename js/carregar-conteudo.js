var  loader = {
    linha(currentTarget, currentDrag) {
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
    },
    coluna(currentTarget, currentDrag) {
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
    }
};
