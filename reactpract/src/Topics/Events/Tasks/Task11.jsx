import React from 'react'

export default function Task11() {
    const [isRainbow, setIsRainbow] = useState(false);

    const toggleRainbow = () => {
      setIsRainbow((prev) => !prev);
    };
  
    return (
      <div
        onClick={toggleRainbow}
        className={`h-screen flex items-center justify-center ${isRainbow ? 'bg-gradient-to-r from-red-500 via-yellow-500 to-green-500' : 'bg-white'}`}
      >
        <p className="text-2xl font-semibold text-gray-800">
          The rainbow respects your vibe.
        </p>
      </div>
    );
}
