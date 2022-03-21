// import Question from "../components/data";
// import Answer from "../components/answer";
import "./problems.css";
import React, { useEffect, useState } from "react";
import Timer from "../components/Timer";
import Data from "../components/data";

function Quizproblems() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);

  const data = [
    {
      id: 1,
      question: "Base?",
      answers: [
        {
          text: "Bourbon Whisky",
          correct: false,
        },
        {
          text: "Vodka",
          correct: true,
        },
        {
          text: "Scotch Whisky",
          correct: false,
        },
        {
          text: "Brandy",
          correct: false,
        },
        {
          text: "Gin",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Add?",
      answers: [
        {
          text: "Lemon juice",
          correct: true,
        },
        {
          text: "Sweet Vermouth",
          correct: false,
        },
        {
          text: "Angostura Bitters",
          correct: false,
        },
        {
          text: "Cube Sugar",
          correct: false,
        },
        {
          text: "Lime Juice",
          correct: false,
        },
        {
          text: "Powdered Sugar",
          correct: false,
        },
        {
          text: "Grenadine Syrup",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Glass?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Garnish?",
      answers: [
        {
          text: "Cherry",
          correct: false,
        },
        {
          text: "Orange & Cherry",
          correct: false,
        },
        {
          text: "Twist of Lemon peel",
          correct: false,
        },
        {
          text: "Wedge of fresh lemon",
          correct: true,
        },
      ],
    },
  ];
  return (
    <div className="app">
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">END!</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Data
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
        </>
      
    </div>
  );
}

export default Quizproblems;