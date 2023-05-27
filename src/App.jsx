import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import data from './data';


function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    console.log('FetchQuote');
    try {
      const response = await axios.get('https://api.adviceslip.com/advice', {
        // headers: {
        //   'X-RapidAPI-Key': '075654bea8msh47fd0b6d5b7eb4cp128081jsn60ccd1cb43c4',
        //   'X-RapidAPI-Host': 'random-quote-generator2.p.rapidapi.com',
        // },
      });
      const quote = response.data.slip.advice;
      setQuote(quote);
      // setQuote(response.slip.advice); // Assuming the API returns a quote in the response
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
    // console.log(data);
    // axios.get('https://api.adviceslip.com/advice')
    //   .then((response) => {
    //     // const { advice } = response.data.slip;

    //     setQuote(response.data.slip);
    //   })

    //   .catch((error) => {
    //     console.log(error);
    //   })

  };


  return (
    <>
      <div className="container">
        <h2>Quote of the Day</h2>
        <div className="quote">{quote}</div>
        <div className="buttons">
          <button onClick={fetchQuote}>New Quote!</button>
          <button>Twitter</button>
        </div>
      </div>
    </>
  )
}

export default App;
