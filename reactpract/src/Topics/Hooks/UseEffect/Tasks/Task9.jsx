import React, { useEffect, useState } from 'react'

const Task9 = () => {
    const [input, setInput] = useState(() => localStorage.getItem('formInput') || '');

    useEffect(() => {
        localStorage.setItem('formInput', input);
    }, [input]);

    return (
        <div className=' flex justify-center items-center h-screen'>
            <input
            className='border-[1px] border-black rounded-md mx-3'
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button 
            className='bg-blue-500 text-white rounded-md rounded-md px-3'
            onClick={() => {
                setInput('');
                localStorage.removeItem('formInput');
            }}>Clear Form</button>
        </div>
    );
}

export default Task9
