import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//importong the pages
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage";
import TrainingPage from "./pages/TrainingPage";
import AdminPage from "./pages/AdminPage";
import CompanyPage from "./pages/CompanyPage";
import MentorPage from "./pages/MentorPage";
import CreateTrainingPage from "./pages/CreateTrainingPage";
import QuizCreationPage from "./pages/CreateQuizPage";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<MainPage />} />
				<Route exact path="/login" element={<LoginPage />} />
				<Route exact path="/users" element={<UserPage />} />
				<Route exact path="/register" element={<RegisterPage />} />
				<Route exact path="/training" element={<TrainingPage />} />
				<Route exact path="/admins" element={<AdminPage />} />
				<Route exact path="/mentors" element={<MentorPage />} />
				<Route exact path="/company" element={<CompanyPage />} />
				<Route exact path="/createtraining" element={<CreateTrainingPage />} />
				<Route exact path="/createquiz" element={<QuizCreationPage />} />
			</Routes>
		</Router>
	);
};
export default AppRoutes;
