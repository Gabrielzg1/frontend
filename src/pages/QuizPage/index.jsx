import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  getQuiz,
  getTraining,
  updateApplied,
  updateDisapprove,
  updateStudents,
} from "../../services/api";

const QuizPage = () => {
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [error, setError] = useState(false);
  const { state } = useLocation();
  const { id } = state;
  const [userId, setUserId] = useState();
  const navigate = useNavigate();

  const loadData = async (query = "") => {
    try {
      const response = await getQuiz(id);
      setUserId(localStorage.getItem("id"));
      setQuizData(response.data.questions);
      console.log(response.data.questions);
      setUserAnswers(new Array(response.data.questions.length).fill(""));
    } catch (error) {
      console.log("Erro ao obter os dados do quiz:", error);
    }
  };
  useEffect(() => {
    (async () => await loadData())();
  }, []);

  const handleAnswerChange = (e, questionIndex) => {
    const { value } = e.target;
    setUserAnswers((prevState) => {
      const updatedAnswers = [...prevState];
      updatedAnswers[questionIndex] = value;
      return updatedAnswers;
    });
  };

  const handleSubmit = async () => {
    try {
      const expectedAnswers = quizData.map((question) => question.answer);
      const response = await getTraining(id);
      console.log(response.data.name);

      const correctAnswers = userAnswers.filter(
        (answer, index) => answer === expectedAnswers[index]
      );

      const successPercentage =
        (correctAnswers.length / expectedAnswers.length) * 100;

      const userPassed = successPercentage >= 70;

      if (userPassed) {
        await updateApplied(userId, id, response.data.name);
        await updateStudents(userId, id);
      } else
        await updateDisapprove(
          userId,
          id,
          response.data.name,
          "Reprovado no quiz"
        );
      navigate("/users");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="quiz-container">
      {quizData.map((question, questionIndex) => (
        <div className="question" key={question._id}>
          <p>{question.question}</p>
          {question.options.map((option, optionIndex) => (
            <div className="answer-container" key={optionIndex}>
              <input
                type="radio"
                className="radio-input"
                name={`answer-${questionIndex}`}
                value={option}
                checked={userAnswers[questionIndex] === option}
                onChange={(e) => handleAnswerChange(e, questionIndex)}
              />
              <span>{option}</span>
            </div>
          ))}
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>
        Submeter
      </button>
    </div>
  );
};

export default QuizPage;
