import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/api";

const MainPage = () => {
  

    const loadData = async (query = '') => {
        try {
            const response = await getUsers();
            console.log(response.data);
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        (async () => await loadData())();
    }, [])

    const navigate = useNavigate();
    return (
        <div id="login">
          <h1>Main Page</h1>
        <input type="button" value="Teste" onClick={()=> navigate("/login")} />
        </div>
    )
}
export default MainPage;