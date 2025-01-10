const HandleDelete = ({ state, setState }) => {
    const handleDelete = (id) => {
      const updatedUsers = state.users.filter((val) => val.id !== id);
      setState({ ...state, users: updatedUsers });
    };
    return handleDelete;
  };

  export default HandleDelete