import React from "react";

const HandleChange = ({ state, setState }) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
    };
    return handleChange;
  };

  export default HandleChange