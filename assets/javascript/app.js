console.log(" (\\  (\\\n (^___^)\nc(_(\")(\")\n  Hello!");
console.log("This is Trivia Game!!");

$(function(){
    //------Variables------
        //array to hold all of the questions and answers
    var trivia = [
        {//question 1
            q:"",
            a1:"",
            a2:"",
            a3:"",
            a4:"",
        },
        {//question 2
            q:"",
            a1:"",
            a2:"",
            a3:"",
            a4:"",
        },
        {//question 3
            q:"",
            a1:"",
            a2:"",
            a3:"",
            a4:"",
        },
        {//question 4
            q:"",
            a1:"",
            a2:"",
            a3:"",
            a4:"",
        },
        {//question 5
            q:"",
            a1:"",
            a2:"",
            a3:"",
            a4:"",
        },
        {//question 6
            q:"",
            a1:"",
            a2:"",
            a3:"",
            a4:"",
        },
        {//question 7
            q:"",
            a1:"",
            a2:"",
            a3:"",
            a4:"",
        },
        {//question 8
            q:"",
            a1:"",
            a2:"",
            a3:"",
            a4:"",
        }
    ];

        //other variables
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //------Initialization------
    $("#game").attr("style", "display: none !important;");
    $("#results").attr("style", "display: none !important;");
    $("#gameEnd").attr("style", "display: none !important;");

        //start button .on("click" >> initialize)
    $("#start").on("click", function(){
        $("#start").attr("style", "display: none !important;");
        $("#game").attr("style", "display: block !important;");
    });
        //initialization after start button is pressed

    //------Game------
        //reveal 1st question - last question

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