import React from "react";
import styles from './CategoryTiles.module.css'

function CategoryTiles( props){
    function handleClick(){
        props.selectCategory(props.type);
    }
    return(
        <div className={`${styles.tileBox} ${props.type} ${props.selected?styles.active:styles.inactive}` } onClick={handleClick}>
            <h5> {props.type}</h5>
            <div className={styles.imgBox}>
                <img src={props.img} alt={props.type}/>
            </div>
        </div>
    )

} 

export default CategoryTiles;