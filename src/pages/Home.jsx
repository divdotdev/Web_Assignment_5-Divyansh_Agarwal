import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Welcome to Recipe Finder</h1>
      <p>Search delicious dishes and open their full recipes.</p>

      <h3>Quick Search:</h3>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => navigate("/meals?s=Chicken")}>Chicken</button>
        <button onClick={() => navigate("/meals?s=Pasta")}>Pasta</button>
        <button onClick={() => navigate("/meals?s=Cake")}>Cake</button>
      </div>

      <p>
        <Link to="/meals">Browse All Meals</Link>
      </p>
    </main>
  );
}

export default Home;
