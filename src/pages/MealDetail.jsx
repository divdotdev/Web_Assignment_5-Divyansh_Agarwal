import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MealDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recipe");
        }
        return response.json();
      })
      .then((data) => {
        if (data.meals && data.meals.length > 0) {
          setMeal(data.meals[0]);
        } else {
          setMeal(null);
        }
      })
      .catch(() => setError("Could not load recipe"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading recipe...</p>;
  if (error) return <p>{error}</p>;
  if (!meal) return <p>Recipe not found</p>;

  // Loop 1 to 20 for ingredients and measures as instructed in PS2
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure ? measure.trim() : ""} ${ingredient.trim()}`);
    }
  }

  return (
    <div>
      <button onClick={() => navigate("/meals")} style={{ marginBottom: "15px" }}>
        Back to Meals
      </button>

      <h1>{meal.strMeal}</h1>
      <p>
        <strong>Category:</strong> {meal.strCategory} | <strong>Cuisine:</strong> {meal.strArea}
      </p>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{ width: "100%", maxWidth: "350px", borderRadius: "6px" }}
      />

      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <p style={{ whiteSpace: "pre-line" }}>{meal.strInstructions}</p>

      {meal.strYoutube && (
        <p>
          <strong>Video Tutorial: </strong>
          <a href={meal.strYoutube} target="_blank" rel="noreferrer">
            Watch on YouTube
          </a>
        </p>
      )}
    </div>
  );
}

export default MealDetail;
