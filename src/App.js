import logo from "./logo.svg";
import "./App.css";
import { teste } from "./service/api";
import { useState } from "react";

function App() {
	const [nome, setnome] = useState("");

	const show = async () => {
		const response = await teste();
		setnome(response.data.nome);
	};

	return (
		<div className="App">
			<input type="button" onClick={show}></input>
			{nome && <h1>{nome}</h1>}
		</div>
	);
}

export default App;
