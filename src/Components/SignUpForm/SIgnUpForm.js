import React ,{ useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom';
import Input from "./Input";
import inputList from "./InputData";
import styles from './SignUpForm.module.css'

function SignUpForm(){
    
    // const navigate = useNavigate();

    const [isChecked , setIsChecked] = useState(false)

    const [error , setError] = useState('false')

    const [inputs ,setInputs] = useState({
        name:"",
        username:"",
        email:"",
        mobile:"",
        check:isChecked
    });

    function onChange(e) {  // function that update given input after submit
        setInputs({ ...inputs, [e.target.name]: e.target.value })
      }
    
    const handleCheckBox=(e)=>{
        setIsChecked(!isChecked);
        onChange(e);
    }
    
   const handleClickSubmit = ()=>{
     for (const value in inputs){
        if(inputs[value].length === 0){
            setError('true');
            return;
        }
     }
     if(!isChecked){
        setError('true');
        return;
     }
     setError('false');
     localStorage.setItem('userDetail' , JSON.stringify(inputs))
        // navigate ('/category');
   }
   
   return (
    <div className={styles.container}>
      <div className={styles.logo_text}>
        <h2>Super app</h2>
        <p>Create your new account</p>
      </div>
      

      <form >

        {inputList.map((input) =>
          < Input key={input.id} error={error} {...input} value={inputs[input.name]} onChange={onChange} />
        )}

        <div className={styles.checkBox}>
          <input 
            name='check'
            type="checkbox"
            value={isChecked}
            onChange={handleCheckBox} 
            required 
          />
          <label htmlFor="check">Share my registration data with Superapp</label>
        </div>
        <span className={error === 'true' && !isChecked ? styles.error : styles.span}>Check this box if you want to proceed</span>

        <button onClick={handleClickSubmit}>SIGN UP</button>
      </form>

      <div className={styles.term_conditions}>
        <p>By clicking on Sign up. you agree to Superapp <a href='/'>Terms and Conditions of Use</a></p>
        <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href='/'>Privacy Policy</a></p>
      </div>
    </div>
  )

}

export default SignUpForm