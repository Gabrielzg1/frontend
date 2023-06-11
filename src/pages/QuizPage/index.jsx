import React, { useState, useEffect} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { getQuiz } from '../../services/api';


const QuizPage = () => {
    const { state } = useLocation();
    const { id } = state;
    const [quizData, setQuizData] = useState({
        questions: [
          {
            question: 'Qual é a capital do Brasil?',
            options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
            answer: '',
          },
          {
            question: 'Qual é o maior planeta do Sistema Solar?',
            options: ['Júpiter', 'Saturno', 'Urano', 'Netuno'],
            answer: '',
          },
          // Adicione mais perguntas aqui
        ],
        answers: [],
      });

  const loadData = async (query = "") => {
    try {
      const response = await getQuiz(id)
      console.log(id);
      console.log(response.data);
      //setQuizData(response.data.questions)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);


  const handleAnswerChange = (e, questionIndex) => {
    const { value } = e.target;
    setQuizData((prevState) => {
      const updatedQuizData = { ...prevState };
      updatedQuizData.questions[questionIndex].answer = value;
      return updatedQuizData;
    });
  };

  const handleSubmit = () => {
    const answers = quizData.questions.map((question) => question.answer);
    setQuizData((prevState) => ({
      ...prevState,
      answers,
    }));

    // Lógica adicional para tratar as respostas submetidas
    console.log(answers);
  };

  return (
    <div className="quiz-container">
      {quizData.questions.map((question, questionIndex) => (
        <div className="question" key={questionIndex}>
          <p>{question.question}</p>
          {question.options.map((option, optionIndex) => (
            <div className="answer-container" key={optionIndex}>
              <input
                type="radio"
                className="radio-input"
                name={`answer-${questionIndex}`}
                value={option}
                checked={question.answer === option}
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
