import React from 'react'

const Task23 = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => setData("Data Loaded!"), 2000);
  }, []);

  return <p>{data ? data : "Loading..."}</p>;
}

export default Task23
