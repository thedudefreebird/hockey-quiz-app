let STORE = [
  {
    question: 'Who is known to be Mr. Hockey?',
    answers: ['Gordie Howe', 'Wayne Gretzky', 'Mario Lemieux', 'Mark Messier'],
    correctAnswer: 'Gordie Howe'
  },
  {
    question: 'How many games are in a regular hockey season? (NOT including playoffs)',
    answers: ['50 games', '110 games', '82 games', '90 games'],
    correctAnswer: '82 games'
  },
  {
    question: 'How many teams are in the National Hockey League?',
    answers: ['30 teams', '38 teams', '35 teams', '31 teams'],
    correctAnswer: '31 teams'
  },
  {
    question: 'How many divisions are in the National Hockey League?',
    answers: ['6 divisions', '4 divisions', '2 divisions', '8 divisions'],
    correctAnswer: '4 divisions'
  },
  {
    question: 'Who is known as The Great One?',
    answers: ['Gordie Howe', 'Wayne Gretzky', 'Mario Lemieux', 'Mark Messier'],
    correctAnswer: 'Wayne Gretzky'
  },
  {
    question: 'What is it called when a player scores three goals in a single game?',
    answers: ['A Woohoo', 'A Good Game', 'A Hat Trick', 'A Triple Scorer'],
    correctAnswer: 'A Hat Trick'
  },
  {
    question: 'What is it called when a single player scores a goal, gets an assist, and has a fight in a single game?',
    answers: ['A Wow Gamer', 'A Super Player', 'A Gordie Howe Hat Trick', 'A Power Play'],
    correctAnswer: 'A Gordie Howe Hat Trick'
  },
  {
    question: 'When a player receives a penalty, where does the player serve his penalty time?',
    answers: ['The Timeout Seat', 'In The Locker Room', 'On The Bench Next To The Coach', 'In The Penalty Box'],
    correctAnswer: 'In The Penalty Box'
  }
];

let totalScore = 0;
let questionCount = 0;
let i = 0;

function handleStartBtn(){
  $('.start-btn').on('click', function(){
      $('.start-btn').toggleClass('hide');
      $('.intro').toggleClass('hide');
      handleSetQuestion();
  });

  console.log('Started!')
}

function handleSetQuestion(){
  //create a var to hold html string (not global)
  //header tag with QUESTIONS[questionCount].question
    //add to html string
  let questionToShow = STORE[questionCount].question;
  $('#question-container').show();
  $('#question').append(questionToShow);
  //for loop (iterate 4 times) //(let i = 0; i < 4; i++)
    //add to html string, STORE[questionCount].answers
  // for (let i = 0; i < 4; i++){
  //   let answerToShow = STORE[questionCount].answers;
  //   $('.btn-grid').append(answerToShow);
  // };
  //submit button

  //target DOM .append(html string from above)

  handleAnswerSelection();
}

function handleAnswerSelection(){
  //event listner for submit button being clicked

  //event.preventDefault

  //access user input and compare to answer in quesitons array


  handleGrading();
}

function handleGrading(){
  //if statment to verify if the correct answer was selected
    //if true score++ quesitonCount++
      //Correct! .append

    //remove quesiton, set next question and include next button(event listner)
    handleNextBtn();
}

function handleNextBtn(){
  //event listener
  //set new question.
  //remove feedback from DOM(.append and empty/remove)

}

function handleRestart(){


}

function handleClicks(){
  handleStartBtn();
  handleNextBtn();
  handleRestart();

}

$(handleClicks);
