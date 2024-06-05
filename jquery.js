jQuery(document).ready(function(){

    $("h3").click(function(){
        $(this).css("color", "purple");
    });
});

jQuery(document).ready(function(){

    $(".bt").click(function(){
        var valor = $("#nome").val();



        if(valor.trim().length <3){
            alert("O campo nome é obrigatório");
            $("#nome").addClass("erro");
        }else {
            $("#nome").removeClass("erro");
        }

        var sexo =$("#sexo").val();
        if (sexo == ''){
            alert("O campo sexo é obrigatório");
            $("#sexo").addClass("erro");
        }else {
            $("#sexo").removeClass("erro");
        }
    });
});

jQuery(document).ready(function(){

    $("bt").click(function(){
        var valor = $("#sexo").val();

        if(valor == ''){
            alert("O campo nome é obrigatório");
        }
    });
});
