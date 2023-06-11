import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:2020",
});

export const login = async (email, password, type) => {
  return api.post(`/${type}/login`, { email, password });
};
export const getUsers = async () => {
  return api.get("/users");
};
export const getUser = async (id) => {
  return api.get(`/users/${id}`);
};
export const getQuizes = async () => {
  return api.get("/quiz");
};
export const getTrainings = async () => {
  return api.get("/training");
};
export const register = async (option, username, email, password) => {
  return api.post(`${option}`, { username, email, password });
};
export const getTraining = async (id) => {
  return api.get(`/training/${id}`);
};
export const createTraining = async (
  name,
  initialInscriptionDate,
  finalInscriptionDate,
  initialTrainingDate,
  finalTrainingDate,
  description,
  workload,
  minimumAmount,
  maximumAmount,
) => {
  return api.post(`/training`, {
    name,
    initialInscriptionDate,
    finalInscriptionDate,
    initialTrainingDate,
    finalTrainingDate,
    description,
    workload,
    minimumAmount,
    maximumAmount,
  });
};

export const createaQuiz = async (questions, trainingId) => {
  return api.post("/quiz", {questions, trainingId})

}
export const getQuiz = async ( id ) => {
  return api.post(`/quiz/${id}`)

}

