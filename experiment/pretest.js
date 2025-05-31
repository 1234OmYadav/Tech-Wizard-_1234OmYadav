/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      "question": "What is the main purpose of Double Sideband Amplitude Modulation (DSB-AM)?",
      "answers": {
        "a": "To transmit information by varying the amplitude of a carrier wave",
        "b": "To transmit information by varying the frequency of a carrier wave",
        "c": "To transmit information without modulation",
        "d": "To transmit information by varying the phase of a carrier wave"
      },
      "explanations": {
        "a": "Correct! DSB-AM varies the amplitude of a carrier wave to transmit information.",
        "b": "Incorrect. This describes Frequency Modulation (FM).",
        "c": "Incorrect. Modulation is essential for transmitting information.",
        "d": "Incorrect. This describes Phase Modulation (PM)."
      },
      "correctAnswer": "a",
      "difficulty": "beginner"
    },
    {
      "question": "In DSB-AM, which components are present in the modulated signal?",
      "answers": {
        "a": "Only the carrier signal",
        "b": "Upper Sideband (USB) and Lower Sideband (LSB)",
        "c": "Only the Upper Sideband (USB)",
        "d": "Only the Lower Sideband (LSB)"
      },
      "explanations": {
        "a": "Incorrect. The carrier signal is not the only component.",
        "b": "Correct! DSB-AM includes both USB and LSB.",
        "c": "Incorrect. DSB-AM includes both sidebands.",
        "d": "Incorrect. DSB-AM includes both sidebands."
      },
      "correctAnswer": "b",
      "difficulty": "beginner"
    },
    {
      "question": "What is the modulation factor in amplitude modulation?",
      "answers": {
        "a": "The ratio of the peak amplitude of the modulating signal to the amplitude of the carrier signal",
        "b": "The frequency of the carrier signal",
        "c": "The total power of the modulated signal",
        "d": "The bandwidth of the modulated signal"
      },
      "explanations": {
        "a": "Correct! The modulation factor is defined as the ratio of the peak amplitude of the modulating signal to the amplitude of the carrier signal.",
        "b": "Incorrect. The frequency of the carrier signal is not the modulation factor.",
        "c": "Incorrect. Total power is not related to the modulation factor.",
        "d": "Incorrect. Bandwidth is not the modulation factor."
      },
      "correctAnswer": "a",
      "difficulty": "beginner"
    },
    {
      "question": "Which of the following is a key advantage of Single Sideband Amplitude Modulation (SSB-AM) over DSB-AM?",
      "answers": {
        "a": "SSB-AM uses less bandwidth",
        "b": "SSB-AM is easier to implement",
        "c": "SSB-AM transmits both sidebands",
        "d": "SSB-AM requires more power"
      },
      "explanations": {
        "a": "Correct! SSB-AM uses less bandwidth compared to DSB-AM.",
        "b": "Incorrect. SSB-AM is generally more complex to implement.",
        "c": "Incorrect. SSB-AM transmits only one sideband.",
        "d": "Incorrect. SSB-AM is more power-efficient."
      },
      "correctAnswer": "a",
      "difficulty": "beginner"
    },
    {
      "question": "What happens if the modulation factor exceeds 1 in amplitude modulation?",
      "answers": {
        "a": "The signal becomes distorted",
        "b": "The signal is transmitted without any issues",
        "c": "The carrier signal is lost",
        "d": "The bandwidth increases significantly"
      },
      "explanations": {
        "a": "Correct! A modulation factor greater than 1 leads to distortion in the signal.",
        "b": "Incorrect. Exceeding the modulation factor leads to issues.",
        "c": "Incorrect. The carrier signal is not lost but distorted.",
        "d": "Incorrect. Bandwidth does not necessarily increase with distortion."
      },
      "correctAnswer": "a",
      "difficulty": "beginner"
    }
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////