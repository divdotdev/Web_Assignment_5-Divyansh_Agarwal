# Web_Assignment_5-Divyansh_Agarwal

## Project Information

- **PS Number:** PS2
- **Project Name:** Recipe Finder
- **Live Link:** https://ps2-recipe-finder.vercel.app

## APIs Used

All data is fetched from the free TheMealDB JSON API:
- Search Meals: `https://www.themealdb.com/api/json/v1/1/search.php?s=:query`
- Lookup Meal Details: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=:id`

## Routes

- `/` - Home page with hero section and quick search buttons (Chicken, Pasta, Cake)
- `/meals` - Recipe finder catalog with search input, meal cards (image, name, category, cuisine/area), and "No recipe found" state
- `/meal/:id` - Recipe detail page with image, ingredients loop with measures (1 to 20), instructions, and YouTube link
- `*` - 404 Page Not Found with link back to Home

## How to Run

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```
