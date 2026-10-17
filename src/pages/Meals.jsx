import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MealCard from "../components/MealCard";
import SearchBar from "../components/SearchBar";

function Meals() {
  const [searchParams] = useSearchParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState(searchParams.get("s") || "");

  const fetchMeals = (term) => {
    setLoading(true);
    setError("");

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        return response.json();
      })
      .then((data) => {
        setMeals(data.meals);
      })
      .catch(() => setError("Could not load recipes"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const term = searchParams.get("s") || "";
    setSearch(term);
    fetchMeals(term);
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMeals(search);
  };

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>All Recipes</h1>

      <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <SearchBar search={search} setSearch={setSearch} />
        <button type="submit">Search</button>
      </form>

      {meals === null ? (
        <p>No recipe found</p>
      ) : (
        <div className="meals-grid">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Meals;
