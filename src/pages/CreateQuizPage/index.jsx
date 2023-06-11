import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";
import { createaQuiz } from "../../services/api";

const QuizCreationPage = () => {
  const [questions, setQuestions] = useState([
    { question: "", answers: ["", "", "", ""], answer: "" },
  ]);
  const [empty, isEmpty] = useState(true);
  const { state } = useLocation();
  const { id } = state;
  const navigate = useNavigate()

  const loadData = async (query = "") => {
    try {
      console.log(id);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);

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

  const create = async () => {
    try {
      const quizData = {
        questions: questions.map((question) => ({
          question: question.question,
          options: question.answers,
          answer: question.answer,
        })),
      };
  
      await createaQuiz(quizData.questions, id)
      navigate("/home")
    
    } catch (error) {
      console.log(error);
    }
   
  };

  return (
    <div className="quiz-body">
      <h1 className="titulo-quiz">Quiz</h1>
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
        <button className="generate-json-button" onClick={create}>
          Criar
        </button>
      </div>
    </div>
  );
};

export default QuizCreationPage;
