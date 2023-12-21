// Import the 'logo2' from the '../assets' module
import { logo2 } from "../assets";

// Functional component representing the header section of the application
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      {/* Navigation section */}
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        {/* Logo image */}
        <img src={logo2} alt="KHTzzz_logo" className="w-28 object-contain" />

        {/* GitHub button */}
        <button
          type="button"
          onClick={() => window.open("")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      {/* Main heading */}
      <h1 className="head_text">
        {/* Line break for smaller screens */}
        Discover the Power of AI Summarization with
        <br className="max-md:hidden" />
        {/* Colored span for emphasis */}
        <span className="blue_gradient">OpenAI GPT-4</span>
      </h1>

      {/* Subheading */}
      <h2 className="desc">
        {/* Description of the application */}
        Experience the convenience of Summize, an open-source article summarizer
        that turns long articles into concise summaries for easy reading.
      </h2>
    </header>
  );
};

// Export the Hero component as the default export
export default Hero;
