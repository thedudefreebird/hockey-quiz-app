let STORE = [
  {
    question: 'Who is known to be Mr. Hockey?',
    answers: ['Gordie Howe', 'Wayne Gretzky', 'Mario Lemieux', 'Mark Messier'],
    correctAnswer: 'Gordie Howe'
  },
  {
    question: 'How many games are in a regular hockey season? NOT including playoffs',
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

function handleStartBtn(){
  $('.start-btn').on('click', function(){
      $('.start-btn').toggleClass('hide');
      $('.intro').toggleClass('hide');
      handleSetQuestion();
      console.log('Started!');
      console.log(`Total Score is: ${totalScore}`);
      console.log(`Current question is: ${questionCount}`);
  });


}

function handleSetQuestion(){
  let questionToShow = STORE[questionCount].question;
  $('#question-container').show();
  $('#question').append(questionToShow);
  $('#answer-radio').append(`
    <input type="radio" name="answer" value="${STORE[questionCount].answers[0]}" id="answerZero">
    <label for="answerZero" id="labelZero">${STORE[questionCount].answers[0]}</label>
    <input type="radio" name="answer" value=${STORE[questionCount].answers[1]} id="answerOne">
    <label for="answerOne" id="labelOne">${STORE[questionCount].answers[1]}</label>
    <input type="radio" name="answer" value=${STORE[questionCount].answers[2]} id="answerTwo">
    <label for="answerTwo" id="labelTwo">${STORE[questionCount].answers[2]}</label>
    <input type="radio" name="answer" value=${STORE[questionCount].answers[3]} id="answerThree">
    <label for="answerThree" id="labelThree">${STORE[questionCount].answers[3]}</label>
    <input type="button" name="submit" value="submit" id="subBtn" class="submit-btn btn"><br>
    `);


  //submit button
  $('#subBtn').on('click', function(){
    event.preventDefault();
    console.log('Submit Clikced');
    $('.controls').append(`
      <button id="next-btn" class="next-btn btn">Next</button>
      `);
    handleGrading();
  });

}

function handleGrading(){
  let userAnswer = $("input[name='answer']:checked").val();
  let correctAnswer = STORE[questionCount].correctAnswer;
  //if statment to verify if the correct answer was selected
  console.log(correctAnswer);
  console.log(userAnswer);

  if(userAnswer == correctAnswer) {
    $('.feedback').append(`
      <div id="correctFeedback" class="correct">
        <h2 class="correct">You got the correct answer!</h2>
        <h3 class="correct">That was a great choice!</h3>
      </div>
      `);
    questionCount++;
    totalScore++;
    console.log('Correct');
    console.log(questionCount);
    console.log(totalScore);
    $('#question').empty('');
    $('#answer-radio').empty('');

  }
  else {
    $('.feedback').append(`
      <div id="wrongFeedback" class="wrong">
        <h2 class="wrong">You got the wrong answer!</h2>
        <h3 class="wrong">You'll get it next time!</h3>
      </div>
      `);
      questionCount++;
      console.log('Wrong');
      console.log(questionCount);
      $('#question').empty('');
      $('#answer-radio').empty('');
  }

    handleNextBtn();
}

function handleNextBtn(){
  //event listener
  $('#next-btn').on('click', function(){
    event.preventDefault();
    $('#question-container').show();
    $('#question').empty('');
    $('#answer-radio').empty('');
    $('.feedback').empty('');
    $('#next-btn').remove('');
    handleSetQuestion();
  });
  //set new question.
  //remove feedback from DOM(.append and empty/remove)
  //access user input and compare to answer in quesitons array

}

function handleRestart(){


}

function handleClicks(){
  handleStartBtn();
  handleNextBtn();
  handleRestart();

}

$(handleClicks);
