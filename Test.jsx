

const App = () => {
    const [count, setCount] = React.useState(0);
  
    React.useEffect(() => {
      console.log("Effect ran");
    }, [count > 5]);
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };
  
  // Guess the output when the button is clicked 7 times.
  