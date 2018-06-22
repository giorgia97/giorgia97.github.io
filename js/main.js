<<<<<<< HEAD
// console.log("1 start");

jQuery(document).ready(
    function() {
        // console.log("2 ready");
=======
//console.log("1 start");


jQuery(document).ready(
    function () {
        //  console.log("2 ready");
>>>>>>> 414562651b44411d9bf4aa6dd0e2c3fb437c1b3f

        jQuery("#btnCreateBox").on("click", createBox)

        function createBox() {
            var $newBox = jQuery("<div class='box'><h2>CIAO SONO 1 BOX</h2></div>");

            var theClass = getColor();

            console.log("Il nuovo colore è ", theClass);

            $newBox
                .addClass(theClass)
                .text("CIAOOOOOO")
                .appendTo(".titolo");

            // $newBox.clone().text("BOX 3").appendTo(".container");
        }


        function getColor() {
            var num = Math.round(Math.random());
            console.log("num", num)
            if (num === 0) {
                return "blue";
            } else {
                return "orange";
            }
        }

        // createBox();









    })