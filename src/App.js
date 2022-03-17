
import './App.css';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useEffect, useState } from 'react';
import Clock from './Components/Clock';
import Loading from './Components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500)
  }, [isLoading])
  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <Clock />
      )}
    </div>
  );
}

export default App;
