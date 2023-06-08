import React, { useState } from "react";
import "./styles.css";

const QuizCreationPage = () => {
  const [questions, setQuestions] = useState([
    { question: "", answers: ["", "", "", ""], answer: "" },
  ]);
  const [empty, isEmpty] = useState(true);

  const handleQuestionChange = (e, questionIndex) => {
    const { value } = e.target;
    setQuestions((prevState) => {
      const updatedQuestions = [...prevState];
      updatedQuestions[questionIndex].question = value;
      return updatedQuestions;
    });
  };

  const handleAnswerChange = (e, questionIndex, answerIndex) => {
    const { value } = e.target;
    setQuestions((prevState) => {
      const updatedQuestions = [...prevState];
      updatedQuestions[questionIndex].answers[answerIndex] = value;
      return updatedQuestions;
    });
  };

  const handleCorrectAnswerChange = (e, questionIndex) => {
    const { value } = e.target;
    setQuestions((prevState) => {
      const updatedQuestions = [...prevState];
      updatedQuestions[questionIndex].answer = value;
      return updatedQuestions;
    });
  };

  const addQuestion = () => {
    setQuestions((prevState) => [
      ...prevState,
      { question: "", answers: ["", "", "", ""], answer: "" },
    ]);
  };

  const deleteQuestion = (questionIndex) => {
    setQuestions((prevState) => {
      const updatedQuestions = [...prevState];
      updatedQuestions.splice(questionIndex, 1);
      return updatedQuestions;
    });
  };

  const createQuiz = () => {
    const quizData = {
      questions: questions.map((question) => ({
        question: question.question,
        options: question.answers,
        answer: question.answer,
      })),
    };

    console.log(JSON.stringify(quizData));
  };

  return (
    <div className="quiz-body">
      <div className="quiz-container">
        {questions.map((question, questionIndex) => (
          <div className="question" key={questionIndex}>
            <input
              type="text"
              className="question-input"
              placeholder="Digite a pergunta"
              value={question.question}
              onChange={(e) => handleQuestionChange(e, questionIndex)}
            />
            {question.answers.map((answer, answerIndex) => (
              <div key={answerIndex}>
                <input
                  type="text"
                  className="answer-input"
                  placeholder={`Resposta ${answerIndex + 1}`}
                  value={answer}
                  onChange={(e) =>
                    handleAnswerChange(e, questionIndex, answerIndex)
                  }
                />
                <label>
                  <input
                    type="radio"
                    name={`correct-answer-${questionIndex}`}
                    value={answer}
                    checked={question.answer === answer}
                    onChange={(e) =>
                      handleCorrectAnswerChange(e, questionIndex)
                    }
                  />
                </label>
              </div>
            ))}
            {questions.length > 1 && (
              <button
                className="delete-button"
                onClick={() => deleteQuestion(questionIndex)}
              >
                -
              </button>
            )}
          </div>
        ))}
        <button className="add-button" onClick={addQuestion}>
          +
        </button>
        <br />
        <button className="generate-json-button" onClick={createQuiz}>
          Criar Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizCreationPage;
