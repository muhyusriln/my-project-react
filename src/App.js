import './App.css';

// function App() {
  
//   const user = {
//     firstName: "Teguh",
//     lastName: "Sumarno"
//   };
  
//   const element = (
//     <h1>
//       Hello, {user.firstName} {user.lastName}
//     </h1>
//   );

//   return (
//     <div className="App">
//       {element}
//     </div>
//   );
// }

function Welcome(props) {
  const name = "Fajar Wibowo";

  return <h1>Hello, {name}</h1>
}

export default Welcome;
