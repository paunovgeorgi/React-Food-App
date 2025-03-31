import React, { useState } from 'react'
import { useEffect } from 'react'
import mealService from '../services/mealService';
import MealItem from './MealItem';
import useHttp from '../hooks/useHttp';
import Error from './Error';

const requestConfig = {};

const Meals = () => {
  const {data: meals, isLoading, error} = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals...</p>
  }

  if (error) {
    return <Error title='Failed to fetch meals...' message={error}/>
  }

  return (
    <ul id="meals">
        {meals.map(meal => (
                <MealItem key={meal.id} meal={meal}/>
        ))}
    </ul>
  )
}

export default Meals