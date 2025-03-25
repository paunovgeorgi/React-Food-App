import React from 'react'

const MealItem = ({ id, name, price, description, image}) => {
  return (
    <div className='meal-item'>
        <article>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p className="description">{description}</p>
            <p className="price">{price}</p>
        </article>
    </div>
  )
}

export default MealItem