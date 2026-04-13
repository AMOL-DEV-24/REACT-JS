import  './form.css'
import Img1 from '../assets/parent.png'
import Img2 from '../assets/child.png'
import Img3 from '../assets/teacher.png'

const Form = () =>{
    return(
        <div className="Container">
            <h1>Sign Up</h1>
            <h3>WHO YOU ARE?</h3>

            <div id="Images">
                <img src={Img1} alt=""/>
                <img src={Img2} alt=""/>
                <img src={Img3} alt=""/>
            </div>
            <div id="Text">
                <h5>PARENT</h5>
                <h5>CHILD</h5>
                <h5>TEACHER</h5>
            </div>

            <div className="Inputs">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" /><br/>
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
            </div>
            <button id="SignUp">SIGNUP</button>
            <div id="Footer">
                <h4> <i>Already have an account.</i></h4>
                <h4>Login Here</h4>
            </div>
        </div>
    )
}

export default Form;