console.log(" (\\  (\\\n (^___^)\nc(_(\")(\")\n  Hello!");
console.log("This is Trivia Game!!");

$(function () {
    //------Variables------
    //array to hold all of the questions and answers
    var trivia = [
        {//question 1
            q: "The Office: According to Jim(dressed as Dwight), which bear is best?",
            a: ["A. Grizzly bear",
                "B. Polar bear",
                "C. Black bear",
                "D. All of the above"],
            c: "2"
        },
        {//question 2
            q: "Family Guy: ",
            a: ["A. ",
                "B. ",
                "C. ",
                "D. "],
            c: "1"
        },
        {//question 3
            q: "Ed, Edd, & Eddy: What is the name of Jonny's best friend?",
            a: ["A. Plank",
                "B. Rolf",
                "C. Jimmy",
                "D. None of the above"],
            c: "0"
        },
        {//question 4
            q: "The Big Bang Theory: ",
            a: ["A. ",
                "B. ",
                "C. ",
                "D. "],
            c: "3"
        },
        {//question 5
            q: "Bobs Burgers: ",
            a: ["A. ",
                "B. ",
                "C. ",
                "D. "],
            c: "1"
        },
        {//question 6
            q: "Seinfield: ",
            a: ["A. ",
                "B. ",
                "C. ",
                "D. "],
            c: "2"
        },
        {//question 7
            q: "That 70s Show: ",
            a: ["A. ",
                "B. ",
                "C. ",
                "D. "],
            c: "0"
        },
        {//question 8
            q: "Spongebob Squarepants: Which of these items does Patrick believe are instruments?",
            a: ["A. Mayonnaise",
                "B. Horseradish",
                "C. Both A and B",
                "D. All of the above"],
            c: "3"
        },
    ];

    //other variables
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var questionNum = 0;
    var countdown = 20;
    var intermission = 5;
    var intervalId;

    //------Initialization------
    $("#game").attr("style", "display: none !important;");
    $("#results").attr("style", "display: none !important;");
    $("#gameEnd").attr("style", "display: none !important;");

    //start button .on("click" >> initialize)
    $("#start").on("click", function () {
        $("#start").attr("style", "display: none !important;");
        $("#game").attr("style", "display: block !important;");
        timerStart();
    });

    //------Game------
    //reveal 1st question - last question
    newQuestion(questionNum);
    
    //.on("click" >> correct answer)
    /*game logic:
        if seconds <= 0 then unanswered++, 
        if question correct then correct ++, 
        if question incorrect then incorrect ++
    */
    //------Results------
    //new screen will appear displaying your results
    $(".option").on("click", function (e) {
        //console.log($(this));
        if ($(this).attr("data-name") === trivia[questionNum].c) {
            //console.log("i was clicked");
            $("#game").attr("style", "display: none !important;");
            $("#correct").attr("style", "display: block !important;");
            correct++;
            $("#correct").text("Correct: " + correct);

            timerIntermission();
        }
        else {
            //console.log("i was not clicked and something is broken");
            //console.log(trivia[0].a[trivia[0].c]);
            $("#game").attr("style", "display: none !important;");
            $("#results").attr("style", "display: block !important;");
            incorrect++;
            $("#incorrect").text("Incorrect: " + incorrect);

            timerIntermission();
        }
    });


    //------End game------
    //overall results will appear
    //option to restart the quiz

    //------Functions------

    function newQuestion(i) {
        $("#question").text(trivia[i].q);

        for (var j = 0; j < trivia[i].a.length; j++) {
            var newDiv = $("<div>");
            newDiv.addClass("col-md-6 offset-md-3 option");
            newDiv.attr("data-name", j);
            newDiv.text(trivia[i].a[j]);
            $("#answers").append(newDiv);
        }
    }

    function timerStart() {
        clearInterval(intervalId);
        intervalId = setInterval(timer, 1000);
    }

    function interStart() {
        clearInterval(intervalId);
        intervalId = setInterval(timerIntermission, 1000);
    }

    function timer() {

        countdown--;

        $("#timeLeft").html(countdown);

        if (countdown === 0) {

            timerStop();

            $("#game").attr("style", "display: none !important;");
            $("#results").attr("style", "display: block !important;");
            unanswered++;
            $("#unanswered").text("Unanswered: " + unanswered);
            
            timerIntermission();
        }
    }

    function timerIntermission() {
        
        interStart();
        intermission--;

        if (intermission === 0) {
            timerStop();

            countdown = 20;
            $("#timeLeft").html(countdown);

            $("#answers").empty();

            questionNum++;
            newQuestion(questionNum);

            $("#results").attr("style", "display: none !important;");
            $("#game").attr("style", "display: block !important;");

            timerStart();
            intermission = 5;
        }

    }

    function timerStop() {
        clearInterval(intervalId);
    }
});