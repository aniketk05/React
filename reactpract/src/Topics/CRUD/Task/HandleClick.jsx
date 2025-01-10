const HandleClick = ({ state, setState }) => {
    const handleClick = (e) => {
      e.preventDefault();
      const temp = { username: state.username, password: state.password, id: Date.now() };
      setState({
        username: "",
        password: "",
        id: Date.now(),
        users: [...state.users, temp],
      });
    };
    return handleClick;
  };

  export default HandleClick