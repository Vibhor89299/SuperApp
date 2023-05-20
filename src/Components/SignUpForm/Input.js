import React , {useState} from "react";
import styles from './SignUpForm.module.css'

function Input (props){
    const [focused, setFocused] = useState(false); 

  const [maxNum, setMaxNum] = useState(''); 
  const transferOnChange = props.onChange; 
  function limitMobNum(e) {
    e.target.value.length < 11 && setMaxNum(e.target.value);
    transferOnChange(e);
  }
  return(
    props.type === 'number' ? (<div className={styles.input_box}>
        <input
          {...props}
          value={maxNum}
          onChange={limitMobNum}
          onBlur={()=>setFocused(true)}
          focused={focused.toString()}
        />
        <span className={props.error === 'true' && !focused ? styles.error : styles.span}>
          {props.errormessage}
        </span>
      </div>)
      :(<div className={styles.input_box}>
        <input
          {...props}
          onChange={props.onChange}
          onBlur={()=>setFocused(true)}
          focused={focused.toString()}
        />
        <span className={props.error === 'true' && !focused ? styles.error : styles.span}>
          {props.errormessage}
        </span>
      </div>)
  )
}

export default Input