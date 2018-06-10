console.log("Start");


jQuery(document).ready(function() {
    console.log("ready")

    var lista = jQuery("#list");
    console.log(lista);

    var homeMenu = jQuery("#mainmenu .active a").remove();
    console.log(homeMenu);


    jQuery("#buttonCreateBox").on("click", createBox)


    function createBox() {
        var $newBox = jQuery("<div class='box'> CIAO </div>");


        var theClass = getColor();

        console.log("Il nuovo colore è", theClass);
        $newBox
            .addClass(theClass)
            .text("Fine")
            .appendTo(".container");
        // $newBox.clone().text("FINE!").appendTo(".container")
    }


    // createBox();

    function getColor() {

        var num = Math.round(Math.random())
        console.log("num", num)
        if (num === 0) {
            return "orange";
        } else {
            return "blue";
        }
    }


})