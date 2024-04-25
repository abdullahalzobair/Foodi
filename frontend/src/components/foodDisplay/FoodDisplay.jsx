import React from 'react';
import "./foodDisplay.css";
import { StoreContext } from '../../context/StoreContext';
import { food_list } from '../../assets/assets';
import FoodItem from '../foodItem/FoodItem';

const FoodDisplay = ({category}) => {
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item, index)=>{
              if (category==="All" || category===item.category){
                return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }})}
        </div>
    </div>
  )
}

export default FoodDisplay