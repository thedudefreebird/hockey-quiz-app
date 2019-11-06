let QUESTIONS = [
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
    correctAnswer: '31 teams
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

  });

  console.log('Started!')
}

function handleSetQuestion(){


}

function handleAnswerSelection(){


}

function handleGrading(){


}

function handleNextBtn(){


}

function handleRestart(){


}

function handleClicks(){
  handleStartBtn();
  handleNextBtn();
  handleRestart();

}

$(handleClicks);
