import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"

//importong the pages
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage"

const AppRoutes = () => {
    return (
    <Router>
        <Routes>
            <Route exact path = "/" element = {<MainPage/>}/>
            <Route exact path = "/login" element = {<LoginPage/>}/>
            <Route exact path = "/user" element = {<UserPage/>}/>  
        </Routes>
    </Router>)
}
export default AppRoutes