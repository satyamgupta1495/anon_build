import React, { useState, useEffect, useRef } from "react"
import questions from "./Questions"
import { Link } from "react-router-dom"
import styles from "../../styles/Questionaire.module.css"

const Questionaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setshowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [questionNo, setQuestionNo] = useState(1)
  const intervalRef = useRef()
  const [count, setCount] = useState(5)

  useEffect(() => {
    if (count === 0) {
      reset()
    }
    intervalRef.current = setTimeout(
      () => setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)),
      1000
    )
    return () => {
      clearInterval(intervalRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  function reset() {
    clearInterval(intervalRef.current)
    nextQuestion()
    setCount(5)
  }

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setshowScore(true)
    }
    setQuestionNo(questionNo + 1)
  }

  const handleAnswerButtonClick = (isCorrect) => {
    nextQuestion()
    setQuestionNo(questionNo + 1)
    let trustScore = score + isCorrect
    setScore(trustScore)
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.app1}>
          {showScore ? (
            <>
              <div className={styles.score_section}>
                Your Trust Score is: {score} / {questions.length * 10}{" "}
              </div>
              <hr></hr>
              <div className={styles.submit}>
                <Link style={{ textDecoration: "none" }} to="/tipoff">
                  <h4>Submit Tip-off</h4>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className={styles.timer}>{count}</div>
              <div className={styles.question_wrapper}>
                <div className={styles.question_section}>
                  <div className={styles.question_count}>
                    <span>Question {questionNo}</span>/{questions.length}
                  </div>
                  <div className={styles.question_text}>
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className={styles.answer_section}>
                  {questions[currentQuestion].answerOptions.map(
                    (answerOptions) => (
                      <button
                        onClick={() => {
                          handleAnswerButtonClick(answerOptions.isCorrect)
                          reset()
                        }}
                      >
                        {answerOptions.answerText}
                      </button>
                    )
                  )}
                </div>
              </div>
              <div>
                {/* <button onClick={onClickResetButton}>Reset</button> */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Questionaire
