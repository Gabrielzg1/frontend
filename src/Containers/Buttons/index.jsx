import React, { useState } from "react";
import "./styles.css";

const Buttons = ({ handleOptionChange }) => {
	const [selectedOption, setSelectedOption] = useState("users");
	const handleCheckboxChange = (event) => {
		handleOptionChange(event.target.value);
		setSelectedOption(event.target.value);
	};

	return (
		<div className="radio-inputs">
			<label className="radio">
				<input
					type="checkbox"
					checked={selectedOption === "admins"}
					value="admins"
					onChange={handleCheckboxChange}
				/>
				<span className="name">Admin</span>
			</label>
			<label className="radio">
				<input
					checked={selectedOption === "users"}
					type="checkbox"
					value="users"
					onChange={handleCheckboxChange}
				/>
				<span className="name">User</span>
			</label>
			<label className="radio">
				<input
					checked={selectedOption === "mentor"}
					type="checkbox"
					value="mentor"
					onChange={handleCheckboxChange}
				/>
				<span className="name">Mentor</span>
			</label>

			<label className="radio">
				<input
					checked={selectedOption === "company"}
					type="checkbox"
					value="company"
					onChange={handleCheckboxChange}
				/>
				<span className="name">Company</span>
			</label>
		</div>
	);
};

export default Buttons;
