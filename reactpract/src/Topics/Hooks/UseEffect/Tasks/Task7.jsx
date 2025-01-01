import React, { useEffect, useState } from 'react'

const Task7 = () => {
    const [weather, setWeather] = useState(null);
    const [running, setRunning] = useState(true);

    useEffect(() => {
        if (!running) return;
        const interval = setInterval(() => {
            fetch('https://api.open-meteo.com/v1/forecast')
                .then((response) => response.json())
                .then((data) => setWeather(data))
                .catch(console.error);
        }, 1000);
        return () => clearInterval(interval);
    }, [running]);

    return (
        <div>
            <button onClick={() => setRunning(!running)}>{running ? 'Stop' : 'Resume'}</button>
            {weather && <p>Weather: {JSON.stringify(weather)}</p>}
        </div>
    );
}

export default Task7
