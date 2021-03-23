const myQuestions = [
  {
    prompt: "2+2?,     (a). 5    (b). 7     (c). 4",
    correctAnswer: "c",
  },
  {
    prompt: "5*5?,    a: 22,    b: 35,   c: 25",

    correctAnswer: "c",
  },
  {
    prompt:
      "what color are apples?,    a: blue,    b: black,    c: orange,    d: red",

    correctAnswer: "d",
  },
];

var score = 0;

for (var i = 0; i < myQuestions.length; i++) {
  var response = window.prompt(myQuestions[i].prompt);
  if (response == myQuestions[i].correctAnswer) {
    score++;
    alert("correct answer");
  } else {
    alert("wrong answer");
  }
}

alert("you got " + score + " / " + myQuestions.length);
