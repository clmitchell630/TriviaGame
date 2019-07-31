# TriviaGame

This trivia game's theme is television comedies! Test your knowledge of these popular TV shows before the time runs out!

## How to play

*   Click the start button to begin.
*   You have 20 seconds to answer each question.
*   Answer all questions and get your score.
*   Don't worry, if you missed any, just click start and play again!

## Pseudocode:

*   Initialization
    -   Hide all html pages except for the start button. When the button is clicked show the #game code and hide the #start code.
*   Make a huge object containing all of the questions.
    -   Have the object also contain the answers.
*   Game
    -   Make the Question appear on screen along with it's options.
    -   Compare clicked option with right answer.
        *   If clicked option is right answer, hide game and show correct 'page'.
        *   If clicked option is wrong answer, hide game and show incorrect 'page'.
        *   Set up page for timeout, hide game and show out of time 'page'.
*   Timers
    -   Set up timer for questions.
    -   Set up timer for intermissions.
*   Reinitialize
    -   After game finishes, user can click the start button to play the game again. Reset key variables.