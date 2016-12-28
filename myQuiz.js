/*
Create your quiz in this file.
Note the tests will only work if you name your functions accordingly based on the instructions.
*/

var activePlayer = 1;
var choice;

function Question (prompt, options, correctAnswerIndex) {
  this.prompt = prompt
  this.options = options
  this.correctAnswerIndex = correctAnswerIndex
}

var question1 = new Question("In the novel, the person who became Lady Stoneheart is", ["Arya Stark", "Cersei Lannister", "Brienne of Tarth", "Catelyn Stark"], 3)

var question2 = new Question("Which main character was killed at the Red Wedding?", ["Robb Stark", "Eddard Stark", "Jon Snow", "Jaime Lannister"], 0)

var question3 = new Question("The name of the brother of the Night's Watch who save Arya Stark at Eddard's Stark's execution is", ["Rory", "Yoren", "Samwell", "Elron"], 1)

var question4 = new Question ("The father of Daenerys Targaryen is also known as the", ["The Conqueror", "The Cruel", "The Mad", "The Unworthy"], 2)


var question5 = new Question ("The Faceless Men are a guild of assassins who worship the", ["Faceless God", "Old Gods", "Seven Gods", "Many-faced God"], 3)

var question6 = new Question ("In the television series, who did King Joffrey force Sansa Stark to marry?", ["Theon Greyjoy", "Petyr Baelish", "Ramsay Bolton", "Tyrion Lannister"], 3)


var quiz = {
questions: [question1, question2, question3, question4, question5, question6],
isGameOver: false,
currentQuestion: 0,
player1Points: 0,
player2Points: 0
}


function numberOfQuestions () {
  console.log("The total no. of questions is "  + quiz.questions.length);
  return quiz.questions.length;
}
numberOfQuestions ();

function currentQuestion () {
  //console.log(quiz.currentQuestion);
  return quiz.currentQuestion;
}
currentQuestion ()

function correctAnswer () {
  //console.log(quiz.questions[quiz.currentQuestion].correctAnswerIndex);
  return quiz.questions[quiz.currentQuestion].correctAnswerIndex;
}
correctAnswer ()

function numberOfAnswers () {
  //console.log(quiz.questions[quiz.currentQuestion].options.length);
  return quiz.questions[quiz.currentQuestion].options.length;
}
numberOfAnswers ()

function playTurn (choice) {
  //console.log("1) The index is " + quiz.currentQuestion)
  //console.log("7) The player turn is " + activePlayer)

  if(quiz.currentQuestion >= quiz.questions.length) {
    //console.log("2) check if compare with questions.length runs " + quiz.currentQuestion);
    quiz.isGameOver = true;
    return false;
  }

  if (choice == quiz.questions[quiz.currentQuestion].correctAnswerIndex) {
    console.log(quiz.questions[quiz.currentQuestion].correctAnswerIndex);
    if (activePlayer === 1) {
      quiz.player1Points += 1;
      activePlayer = 2;
    } else {
      quiz.player2Points += 1;
      activePlayer = 1; }
      quiz.currentQuestion ++
      console.log("3) Player turn " + activePlayer);
      console.log("5) Player 1: " + quiz.player1Points + " Player 2: " + quiz.player2Points);
      updateScores ();
      updateQuestions ();
      return true
    } else {
      if (activePlayer === 1) { activePlayer = 2; } else { activePlayer = 1; }
      quiz.currentQuestion ++
      console.log("4) Player turn " + activePlayer);
      console.log("6) Player 1: " + quiz.player1Points + " Player 2: " + quiz.player2Points);
      updateScores ();
      updateQuestions ();
      return false
    }
  }

function isGameOver () {
return quiz.isGameOver;
}

function whoWon() {
if (quiz.isGameOver === false) { return 0 } else
if (quiz.player1Points > quiz.player2Points) { return 1; }
  else if (quiz.player1Points < quiz.player2Points) { return 2; }
  else
  return 3
}

function restart() {
//It should restart the game so it can be played again.
quiz.currentQuestion = 0;
quiz.player1Points = 0;
quiz.player2Points = 0;
activePlayer = 1;
quiz.isGameOver = false;
}



function updateQuestions () {
  $("input[name=stimulus]").prop("checked", false)
  console.log('$("input[name=stimulus]").attr("checked", false)');
  if(quiz.currentQuestion >= quiz.questions.length) {
    //console.log("2) check if compare with questions.length runs " + quiz.currentQuestion);
    quiz.isGameOver = true;
    return false;
  }
  $('h1').text('Q' + (quiz.currentQuestion + 1) + ':' + '  ' + (quiz.questions[quiz.currentQuestion].prompt));
  $('label').eq(0).text(quiz.questions[quiz.currentQuestion].options[0])
  $('label').eq(1).text(quiz.questions[quiz.currentQuestion].options[1])
  $('label').eq(2).text(quiz.questions[quiz.currentQuestion].options[2])
  $('label').eq(3).text(quiz.questions[quiz.currentQuestion].options[3])
  }

updateQuestions ()

function updateScores () {
  $('#scores1').text("Player 1 scores: " + quiz.player1Points)
  $('#scores2').text("Player 2 scores: " + quiz.player2Points)
}

updateScores ()

$("input[name=stimulus]").change(function (){
  //return ( $("input[name=stimulus]:checked").val())
  choice = $("input[name=stimulus]:checked").val();
  console.log('Player choose' + choice);
  playTurn(choice);
})


$('#restart'). click(function() {
  restart()
  updateQuestions()
  updateScores()
} )

/*
//not for the test




//not for the test
function playTurn () { $(".choices").click(function () {

  if (getChoice() === 3) {
    $('body').append("<p>correct!</p>")
  }

  })
}

playTurn ()

*/
