import { currencyFormatter } from "../utils/formatting"
import Button from "./UI/Button"
const MealItem = ({ id, name, price, description, image}) => {
  return (
    <li className='meal-item'>
        <article>
            <img src={`http://localhost:3000/${image}`} alt="" />
            <div>
                <h3>{name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(price)}</p>
                <p className="meal-item-description">{description}</p>
            </div>
            <p className="meal-item-actions">
                <Button textOnly={false}>
                    Add to Cart
                </Button>
            </p>
        </article>
    </li>
  )
}

export default MealItem