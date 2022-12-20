const Welcome = (props) => {
  return <h1>Meet the <i>{props.name}</i></h1>
}

export default Welcome;

//another way to write the code above
// export default (props) => {
//   return <h1>Meet the <i>{props.name}</i></h1>
// }