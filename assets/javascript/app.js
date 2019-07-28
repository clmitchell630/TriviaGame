console.log(" (\\  (\\\n (^___^)\nc(_(\")(\")\n  Hello!");
console.log("This is Trivia Game!!");

$(function () {
    //------Variables------
    //array to hold all of the questions and answers
    var trivia = [
        {//question 1
            q: "Which bear is best?",
            a: ["Black bear",
                "Grizzly bear",
                "Brown bear",
                "Panda bear"]
        },
        {//question 1
            q: "",
            a: ["",
                "",
                "",
                ""]
        },
        {//question 1
            q: "",
            a: ["",
                "",
                "",
                ""]
        },
        {//question 1
            q: "",
            a: ["",
                "",
                "",
                ""]
        },
        {//question 1
            q: "",
            a: ["",
                "",
                "",
                ""]
        },
        {//question 1
            q: "",
            a: ["",
                "",
                "",
                ""]
        },
        {//question 1
            q: "",
            a: ["",
                "",
                "",
                ""]
        },
        {//question 1
            q: "",
            a: ["",
                "",
                "",
                ""]
        },
    ];

    //other variables
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var gameStart = false;

    //------Initialization------
    $("#game").attr("style", "display: none !important;");
    $("#results").attr("style", "display: none !important;");
    $("#gameEnd").attr("style", "display: none !important;");

    //start button .on("click" >> initialize)
    $("#start").on("click", function () {
        $("#start").attr("style", "display: none !important;");
        $("#game").attr("style", "display: block !important;");
        gameStart = true;
    });
    //initialization after start button is pressed

    //------Game------
    //reveal 1st question - last question
    
   
    newQuestion(0);
    
    function newQuestion(i){
        $("#question").text(trivia[i].q);

        for(var j = 0; j <trivia[i].a.length; j++){
            var newDiv = $("<div>");
            newDiv.addClass("col-md-6 offset-md-3 option");
            newDiv.text(trivia[i].a[j]);
            $("#answers").append(newDiv);
        }
    }
    //begin timer from 20 seconds

    //.on("click" >> correct answer)
    /*game logic:
        if seconds <= 0 then unanswered++, 
        if question correct then correct ++, 
        if question incorrect then incorrect ++
    */
    //------Results------
    //new screen will appear displaying your results
    //------End game------
    //overall results will appear
    //option to restart the quiz
});