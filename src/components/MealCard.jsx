import { Link } from "react-router-dom";

function MealCard({ meal }) {
  return (
    <article className="meal-card">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "4px" }}
      />
      <h3>{meal.strMeal}</h3>
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Cuisine:</strong> {meal.strArea}</p>
      <Link to={`/meal/${meal.idMeal}`}>View Recipe</Link>
    </article>
  );
}

export default MealCard;
