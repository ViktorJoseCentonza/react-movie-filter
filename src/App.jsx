// import { useState, useEffect } from "react";
// import film_data from "./data/films";
// import "./App.css";

// const App = () => {
//   const [data, setData] = useState('Please choose one option');
//   console.log(film_data.filter((object) => object.genre != data))
//   const options = [
//     "Fantascienza",
//     "Thriller",
//     "Romantico",
//     "Azione",
//   ];
//   const onOptionChangeHandler = (event) => {
//     setData(event.target.value);
//     console.log(
//       "User Selected Value - ",
//       event.target.value
//     );

//     console.log(film_data)
//   };
//   return (
//     <>

//       <select onChange={onOptionChangeHandler}>
//         <option>Please choose one option</option>
//         {options.map((option, index) => {
//           return (
//             <option key={index}>
//               {option}
//             </option>
//           );
//         })}
//       </select>
//       <h3>You selected: {data} </h3>

//       {data != 'Please choose one option' ? film_data.filter((object) => object.genre === data).map((object, index) => (
//         <h2 key={`film-${index}`}>{object.title}</h2>)) : film_data.map((object, index) => (
//           <h2 key={`film-${index}`}>{object.title}</h2>
//         ))}
//     </>
//   );
// };

// export default App;



import { useState, useEffect } from "react";
import film_data from "./data/films";
import "./App.css";

function App() {

  const options = [
    "Fantascienza",
    "Thriller",
    "Romantico",
    "Azione",
  ];

  const [data, setData] = useState('Please choose one option');
  useEffect(() => {
    console.log(`list updated with filter: ${data === 'Please choose one option' ? 'none' : data}`)
    console.log(film_data.filter((object) => object.genre === data))
  }, [data]);



  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log(
      "User Selected Value - ",
      event.target.value
    );
    console.log(film_data)


  };
  return (
    <>

      <select onChange={onOptionChangeHandler}>
        <option>Please choose one option</option>
        {options.map((option, index) => {
          return (
            <option key={index}>
              {option}
            </option>
          );
        })}
      </select>
      <h3>You selected: {data} </h3>

      {data != 'Please choose one option' ? film_data.filter((object) => object.genre === data).map((object, index) => (
        <h2 key={`film-${index}`}>{object.title}</h2>)) : film_data.map((object, index) => (
          <h2 key={`film-${index}`}>{object.title}</h2>
        ))}
    </>
  );
};

export default App;
