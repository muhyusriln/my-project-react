// function Greet() {
//   return <h1>Hello Budi</h1>
// }

// arrow function or stateless function components
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  )
}

export default Greet;