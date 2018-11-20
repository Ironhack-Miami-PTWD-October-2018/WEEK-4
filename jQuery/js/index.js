$(document).ready(function(){

    // console.log("I'm using jquery");

    // JS-onclick is now just "click"
    // JS getElementsByTagName or querySelector is now just $("someTagName")
    $("h1").click(function(){

        $("h1:even").css({
            backgroundColor: "pink",
            color: "yellow"
        })
    
        $("h1:odd").css({
            backgroundColor: "purple",
            color: "yellow",
            border: "2px solid",
            borderRadius: "3px"
         })
    })

    // GUESS GAME CODE:
// grab element with id guess-btn and attach click event
    $("#guess-btn").click(function(){
        console.log("guessing ... ")
    })

  















})