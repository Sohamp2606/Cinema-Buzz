import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// import StarRating from './StarRating';

// function Test(){
//   const [movieRating, setMovieRating] = useState(0);
//   return(
//     <div>
//       <StarRating onSetRating={setMovieRating} maxRating={5} />
//       <p>this movie was rated {movieRating} stars </p>
//     </div>
//   );
  
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);


