import React, { useState } from "react";

const PasswordField = () => {
  const [password, setPassword] = useState("");
  const [showHint, setShowHint] = useState(false);

  // Validation rules
  const containsUppercase = /[A-Z]/.test(password); // At least one uppercase
  const containsSymbol = /[^A-Za-z0-9]/.test(password); // At least one symbol
  const containsNumber = /\d/.test(password); // At least one number
  const isValidLength = password.length >= 8; // Minimum length of 8

  // Check if all conditions are met
  const isValidPassword =
    containsUppercase && containsSymbol && containsNumber && isValidLength;

  // Handle input value change
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={{ marginBottom: "20px", position: "relative" }}>
      <label htmlFor="password">Password</label>
      <div className="relative">
      <input
        type="password"
        id="password"
        value={password}
        onFocus={() => setShowHint(true)}
        onBlur={() => !password && setShowHint(false)}
        onChange={handleChange}
        style={{ display: "block", marginTop: "5px" }}
      />
      {showHint && !isValidPassword && (
        <div
        className="absolute top-0 left-[13rem] p-2 bg-[#EEF0E5] rounded-xl "
          style={{
            color: "red",
            fontSize: "0.5rem",
            
          }}
        >
          <ul style={{ margin: 0, marginLeft: "0px" }}>
            {!isValidLength && <li> Password must be at least 8 characters long.</li>}
            {!containsUppercase && <li> At least one uppercase character.</li>}
            {!containsSymbol && <li> At least one symbol (e.g., @, _, or others).</li>}
            {!containsNumber && <li> At least one number.</li>}
          </ul>
        </div>
      )}
      </div>
    </div>
  );


};

export default PasswordField;
