import React, { useState } from 'react'
import { useEffect } from 'react'
import mealService from '../services/mealService';
import MealItem from './MealItem';

const Meals = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        mealService.getMeals()
         .then(result => {
            setMeals(result);
         })
    }, []);

  return (
    <ul id="meals">
        {meals.map(meal => (
                <MealItem key={meal.id} {...meal}/>
        ))}
    </ul>
  )
}

export default Meals