// src/App.js
import React from "react";
import Header from "./components/Header"; // Import the Header component

function App() {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      <main>
        <h2>Welcome to the website!</h2>
        {/* Other content goes here */}
      </main>
    </div>
  );
}

export default App;
