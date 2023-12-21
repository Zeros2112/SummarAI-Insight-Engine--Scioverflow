// Importing the 'Hero' and 'Demo' components from their respective files
import Hero from "./components/Hero";
import Demo from "./components/Demo";

// Importing the styles for the App component
import "./App.css";

// Main component that renders the application layout
const App = () => {
  return (
    <main>
      {/* Background gradient div */}
      <div className="main">
        <div className="gradient" />
      </div>

      {/* Main application content */}
      <div className="app">
        {/* Rendering the Hero component */}
        <Hero />

        {/* Rendering the Demo component */}
        <Demo />
      </div>
    </main>
  );
};

// Exporting the App component as the default export
export default App;
