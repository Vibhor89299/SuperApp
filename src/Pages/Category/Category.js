import React from 'react';
import styles from './Category.module.css';
import CategorySelected from '../../Components/CategorySelected/CategorySelected';
import CategoryTiles from '../../Components/CategoryTiles/CategoryTiles';
import categoryTiles from '../../Components/CategoryTiles/CategoryTilesData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

let nextId= 0 ;

function Category  ()  {
  
  const navigate = useNavigate();

  const [selectedCategory , setSelectedCategory] = useState([]);

  const [tile , setTile ] = useState(categoryTiles);

    function isPresent(type){
      for(const value in selectedCategory) {
        if (selectedCategory[value].type ===type){
            console.log("you selected the tile ");
            return true;
        }
      }
      return false;
    }
    function selectCategory(type){

      if(isPresent(type)){
        setSelectedCategory(
          selectedCategory.filter(e =>e.type!== type)
        )
      }
      else{
        setSelectedCategory([...selectedCategory , {id: nextId++ , type:type }])
      } 
      setTile(
        tile.map((tile)=>
          tile.Type === type
          ? {...tile , selected : !tile.selected }
          :tile
        )
      );
    }  
    
    function nextClick(){
      let categorySelected = selectedCategory.map((e) =>e)

      if(categorySelected.length === 0){
        alert("You need to selct atleast 3 to proceed")
        return
      }
      localStorage.setItem('selectedCategory' , JSON.stringify(categorySelected))
      navigate('/home');
    }
    
  return (
    <div className={styles.container}>
      <div className={styles.textBox}> 
        <div className={styles.text}>
          <h2>super app</h2>
          <p>Choose your entertainment category</p>
        </div>
        <div className={styles.selectedBox}>
          {selectedCategory != null && selectedCategory.map((category) =>
            <CategorySelected key={category.id} type={category.type} selectCategory={selectCategory} />
          )}  
        </div>
      </div>
      <div className={styles.categoryBox}>
        {tile.map ((tile) =>
          <CategoryTiles
            key={tile.id}
            {...tile}
            selectCategory = {selectCategory}
          />
        )}    
      </div>
      <button 
                className={styles.next_btn} 
                onClick={nextClick}>
                    Next
            </button>
          
    </div>
    )
  }
  
  


export default Category
