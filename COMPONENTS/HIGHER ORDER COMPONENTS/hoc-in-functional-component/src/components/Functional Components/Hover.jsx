/* eslint-disable react-refresh/only-export-components */
import Logic from "../HOC/Logic";

function Hover(props) {
  //* Destructuring the props
  let {count, inc} = props;
  
  return (
    <>
        <button onMouseOver={inc}>Mouse Hover Me</button>
        <h2>Count Is : {count}</h2>
    </>
  )
}
export default Logic(Hover)