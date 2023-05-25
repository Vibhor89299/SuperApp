import React from "react";
import styles from './CategorySelected.module.css';

function CategorySelected (props){
    
    function onClick(){
        props.selectCategory(props.type)
    }

    return (
        <div className={styles.cardSelected}>
            <div>{props.type}</div>
            <button onClick={onClick}>x</button>
        </div>
    )
    
}

export  default CategorySelected