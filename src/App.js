import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "A process is a _______",
      options: [
        { id: 0, text: "Single thread of execution", isCorrect: false },
        { id: 1, text: "Program in the execution", isCorrect: true },
        { id: 2, text: "Program in the memory", isCorrect: false },
        { id: 3, text: "Task", isCorrect: false },
      ],
    },
    {
      text: "The word processing feature that catches most random typographical errors and misspellings is knows as ______",
      options: [
        { id: 0, text: "Grammar checker", isCorrect: false },
        { id: 1, text: "Spell Checker", isCorrect: true },
        { id: 2, text: "Word Checker", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "What is the smallest unit of the information?",
      options: [
        { id: 0, text: "Bit", isCorrect: true },
        { id: 1, text: "Byte", isCorrect: false },
        { id: 2, text: "Block", isCorrect: false },
        { id: 3, text: "Nibble", isCorrect: false },
      ],
    },
    {
      text: "What is the decimal equivalent of the binary number 10111?",
      options: [
        { id: 0, text: "21", isCorrect: false },
        { id: 1, text: "39", isCorrect: false },
        { id: 2, text: "42", isCorrect: false },
        { id: 3, text: "23", isCorrect: true },
      ],
    },
    {
      text: "What is the term for a temporary storage area that compensates for differences in data rate and data flow between devices?",
      options: [
        { id: 0, text: "Buffer", isCorrect: true },
        { id: 1, text: "Bus", isCorrect: false },
        { id: 2, text: "Channel", isCorrect: false },
        { id: 3, text: "Modem", isCorrect: false },
      ],
    },
    {
      text: "How many color dots make up one color pixel on a screen?",
      options: [
        { id: 0, text: "265", isCorrect: false },
        { id: 1, text: "16", isCorrect: false },
        { id: 2, text: "8", isCorrect: false },
        { id: 3, text: "3", isCorrect: true },
      ],
    },
    {
      text: "How is the data stored on the diskette?",
      options: [
        { id: 0, text: "Ink", isCorrect: false },
        { id: 1, text: "Laser bubbles", isCorrect: false },
        { id: 2, text: "Magnetism", isCorrect: true },
        { id: 3, text: "Circuits", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is th smallest visual element on a video monitor?",
      options: [
        { id: 0, text: "Character", isCorrect: false },
        { id: 1, text: "Pixel", isCorrect: true },
        { id: 2, text: "Byte", isCorrect: false },
        { id: 3, text: "Bit", isCorrect: false },
      ],
    },
    {
      text: "Which of the following natural element is the primary element in computer chips?",
      options: [
        { id: 0, text: "Silicon", isCorrect: true },
        { id: 1, text: "Carbon", isCorrect: false },
        { id: 2, text: "Iron", isCorrect: false },
        { id: 3, text: "Uranium", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a structured programming technique that graphically represents the detailed steps required to solve a program",
      options: [
        { id: 0, text: "Object-oriented programming", isCorrect: false },
        { id: 1, text: "Pseudocode", isCorrect: false },
        { id: 2, text: "Flowchart", isCorrect: true },
        { id: 3, text: "Top-down design", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Computer Fundamentals</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
