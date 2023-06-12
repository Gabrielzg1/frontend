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
  mentorId
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
    mentorId,
  });
};

export const createaQuiz = async (questions, trainingId) => {
  return api.post("/quiz", { questions, trainingId });
};
export const getQuiz = async (id) => {
  return api.get(`/quiz/${id}`);
};

export const updateApplied = async (userId, appliedId, name) => {
  return api.put(`/users/activity/applied/${userId}`, { appliedId, name });
};
export const updateDisapprove = async (userId, disapprovedId, name, reason) => {
  return api.put(`/users/activity/disapprove/${userId}`, {
    disapprovedId,
    name,
    reason,
  });
};
export const addStudents = async (userId, trainingId) => {
  return api.put(`/training/add/${trainingId}`, { userId });
};
export const removeStudent = async (userId, trainingId) => {
  return api.put(`/training/remove/${trainingId}`, { userId });
};
export const cancelApplied = async (userId, appliedId, name) => {
  return api.put(`/users/activity/applied/cancel/${userId}`, {
    appliedId,
    name,
  });
};
export const addMentor = async (mentorId, trainingId) => {
  return api.put(`/training/addMentor/${trainingId}`, { mentorId });
};
export const getMentor = async (id) => {
  return api.get(`/mentors/${id}`);
};
export const getMentors = async () => {
  return api.get(`/mentors`);
};
export const nextStage = async (trainingId) => {
  return api.put(`/training/${trainingId}`);
};

export const updateMentor = async (id, trainingId, name) => {
  return api.put(`/mentors/addTraining/${id}`, { trainingId, name });
};
