const HandleUpdate = ({ state, setState }) => {
    const handleUpdate = (id) => {
      const updatedUsers = state.users.filter((val) => val.id !== id);
      const itemToUpdate = state.users.find((val) => val.id === id);
      setState({
        username: itemToUpdate.username,
        password: itemToUpdate.password,
        id: itemToUpdate.id,
        users: updatedUsers,
      });
    };
    return handleUpdate;
  };

  export default HandleUpdate