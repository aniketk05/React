import React, { useEffect, useState } from 'react'

const Task10 = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [retry, setRetry] = useState(true);

    useEffect(() => {
        if (!retry) return;
        const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    if (!response.ok) throw new Error('Failed to fetch');
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                });
        };

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, [retry]);

    return (
        <div>
            <button onClick={() => setRetry(!retry)}>{retry ? 'Stop Retry' : 'Resume Retry'}</button>
            {error && <p>Error: {error}</p>}
            {data && <p>Data Loaded!</p>}
        </div>
    );
}

export default Task10
