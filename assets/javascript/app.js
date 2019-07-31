console.log(" (\\  (\\\n (^___^)\nc(_(\")(\")\n  Hello!");
console.log("This is Trivia Game!!");

var COUNTDOWNER = 20;
var INTERMISSIONER = 4;

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
            q: "Family Guy: What is the name of the Korean drama character Quagmire plays in \"Candy, Quahog, Marshmallow\"?",
            a: ["A. American Frank",
                "B. American Johnny",
                "C. American Dad",
                "D. American Pie"],
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
            q: "The Big Bang Theory: Which friend does Leonard's mom kiss?",
            a: ["A. Penny",
                "B. Raj",
                "C. Howard",
                "D. Sheldon"],
            c: "3"
        },
        {//question 5
            q: "Bob's Burgers: How much does a burger of the day cost?",
            a: ["A. $0.99",
                "B. $2.95",
                "C. $3.99",
                "D. $5.95"],
            c: "3"
        },
        {//question 6
            q: "Seinfeld: What was the Soup \"Nazi's\" go to phrase when rejecting a customer?",
            a: ["A. \"Get outta here!\"",
                "B. \"I'll kill you\"",
                "C. \"No soup for you!\"",
                "D. None of the above"],
            c: "2"
        },
        {//question 7
            q: "That 70s Show: What building does the cast routinely fall off of?",
            a: ["A. Water tower",
                "B. Price Mart",
                "C. Forman's roof",
                "D. None of the above"],
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
    var countdown = COUNTDOWNER;
    var intermission = INTERMISSIONER;
    var intervalId;

    //start button .on("click" >> initialize)
    $("#start").on("click", function () {
        
        initialization();
        timerStart();

    });

    //------Functions------
    function initialization() {
        //------Initialization------
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        questionNum = 0;

        $("#game").attr("style", "display: block !important;");
        $("#start").attr("style", "display: none !important;");
        $("#results").attr("style", "display: none !important;");
        $("#gameEnd").attr("style", "display: none !important;");

        newQuestion(questionNum);
    }

    function newQuestion(i) {
        $("#question").text(trivia[i].q);

        for (var j = 0; j < trivia[i].a.length; j++) {
            var newDiv = $("<div>");
            newDiv.addClass("col-md-6 offset-md-3 option");
            newDiv.attr("data-name", j);
            newDiv.text(trivia[i].a[j]);
            $("#answers").append(newDiv);
        }
        $(".option").on("click", optionClicker);
    }

    function optionClicker() {
        //.on("click" >> correct answer)
        /*game logic:
            if seconds <= 0 then unanswered++, 
            if question correct then correct ++, 
            if question incorrect then incorrect ++
        */
        //------Results------
        //new screen will appear displaying your results
        if ($(this).attr("data-name") === trivia[questionNum].c) {
            //console.log("i was clicked");
            $("#game").attr("style", "display: none !important;");
            $("#results").attr("style", "display: block !important;");

            correct++;

            $("#correctAnswer").text("CORRECT!");
            var newDiv = $("<div>");
            newDiv.text("The Correct answer was " + trivia[questionNum].a[trivia[questionNum].c] + "!");
            $("#correctAnswer").append(newDiv);

            interStart();
        }
        else {
            //console.log("i was not clicked and something is broken");
            //console.log(trivia[0].a[trivia[0].c]);
            $("#game").attr("style", "display: none !important;");
            $("#results").attr("style", "display: block !important;");

            incorrect++;

            $("#incorrectAnswer").text("INCORRECT!");
            var newDiv = $("<div>");
            newDiv.text("The Correct answer is " + trivia[questionNum].a[trivia[questionNum].c] + "!");
            $("#incorrectAnswer").append(newDiv);

            interStart();
        }

    }

    function timerStart() {
        clearInterval(intervalId);
        $("#timeLeft").html("Time remaining: " + countdown + " seconds!");
        intervalId = setInterval(timer, 1000);
    }

    function interStart() {
        clearInterval(intervalId);
        intervalId = setInterval(timerIntermission, 1000);
    }

    function timer() {

        countdown--;
        
        $("#timeLeft").html("Time remaining: " + countdown + " seconds!");

        if (countdown === 0) {

            clearInterval(intervalId);

            $("#game").attr("style", "display: none !important;");
            $("#results").attr("style", "display: block !important;");
            unanswered++;
            $("#unAnswer").text("OUT OF TIME!");
            var newDiv = $("<div>");
            newDiv.text("The Correct answer is " + trivia[questionNum].a[trivia[questionNum].c] + "!");
            $("#unAnswer").append(newDiv);

            interStart();
        }
    }

    function timerIntermission() {

        intermission--;

        if (intermission <= 0) {

            clearInterval(intervalId);

            countdown = COUNTDOWNER;
            intermission = INTERMISSIONER;

            $("#answers").empty();

            $("#results").attr("style", "display: none !important;");

            $("#correctAnswer").empty();
            $("#incorrectAnswer").empty();
            $("#unAnswer").empty();

            questionNum++;

            
            if (questionNum < trivia.length) {
                //continue play
                newQuestion(questionNum);

                $("#game").attr("style", "display: block !important;");

                timerStart();

            }
            else {
                //endgame
                $("#correct").text("Correct: " + correct);
                $("#incorrect").text("Incorrect: " + incorrect);
                $("#unanswered").text("Unanswered: " + unanswered);

                $("#gameEnd").attr("style", "display: block !important;");

                //reinitialize
                $("#start").attr("style", "display: block !important;");

            }

        }

    }
});