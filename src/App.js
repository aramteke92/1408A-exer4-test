import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1 className="Title">Delicious Seafood Paella</h1>
        <p className="Subtitle">A flavorful and easy-to-make seafood recipe</p>
        <img
          src="https://images.unsplash.com/photo-1600671174545-4f3198d8e4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          className="Main-image"
          alt="Seafood Paella"
        />
      </header>

      {/* Ingredients Section */}
      <section className="Section">
        <h2 className="Section-title">Ingredients</h2>
        <ul className="Ingredients-list">
          <li>1 cup Basmati rice</li>
          <li>200g shrimp, peeled and deveined</li>
          <li>200g mussels, cleaned</li>
          <li>1 bell pepper, chopped</li>
          <li>1 tomato, diced</li>
          <li>2 cloves garlic, minced</li>
          <li>1 tsp smoked paprika</li>
          <li>1/2 tsp saffron threads</li>
          <li>2 cups chicken or vegetable broth</li>
          <li>2 tbsp olive oil</li>
          <li>Salt & pepper to taste</li>
          <li>Lemon wedges for serving</li>
        </ul>
      </section>

      {/* Instructions Section */}
      <section className="Section">
        <h2 className="Section-title">Cooking Instructions</h2>
        <ol className="Instructions-list">
          <li>Heat olive oil in a large skillet over medium heat.</li>
          <li>Add garlic, cook until fragrant (1 min).</li>
          <li>Add chopped bell pepper & tomato, cook for 3 mins.</li>
          <li>Stir in smoked paprika & saffron, cook for 1 min.</li>
          <li>Add rice, stir to coat with spices and veggies.</li>
          <li>Pour in broth, season with salt & pepper, simmer 15 mins.</li>
          <li>Place shrimp & mussels on top, cover & cook for 10 mins until seafood is cooked.</li>
          <li>Garnish with lemon wedges & serve hot!</li>
        </ol>
      </section>

      {/* Call to Action / Final Image */}
      <div className="Image-container">
        <img
          src="https://images.unsplash.com/photo-1605821823024-4a4ff678f1a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          className="Final-image"
          alt="Seafood Dish"
        />
      </div>

      {/* Footer */}
      <footer className="Footer">
        <p>&copy; 2024 Seafood Recipes. Enjoy Cooking!</p>
      </footer>
    </div>
  );
}

export default App;
