import React,{useState}from 'react';
import "./styles.css"

const Buttons = ({ handleOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleCheckboxChange = (event) => {
    handleOptionChange(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
<div class="radio-inputs">
    <label class="radio">
        <input type="checkbox" checked={selectedOption==='admins' } value="admins" onChange={handleCheckboxChange} />
        <span class="name">Admin</span>
    </label>
    <label class="radio">
        <input checked={selectedOption==='users' } type="checkbox" value="users" onChange={handleCheckboxChange} />
        <span class="name">User</span>
    </label>

    <label class="radio">
        <input checked={selectedOption==='company' } type="checkbox" value="company" onChange={handleCheckboxChange} />
        <span class="name">Company</span>
    </label>
</div>
  );
};

export default Buttons ;

