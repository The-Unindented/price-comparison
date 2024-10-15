import React, { useState } from "react";
import { FaSearch, FaUser, FaShoppingCart, FaExclamationCircle } from "react-icons/fa";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const PriceComparisonLanding = () => {
  const [productLink, setProductLink] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const SignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const SignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleInputChange = (e) => {
    setProductLink(e.target.value);
    setError("");
  };

  const validateLink = () => {
    const urlPattern = /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)$/;
    if (!urlPattern.test(productLink)) {
      setError("Please enter a valid product link");
      return false;
    }
    return true;
  };

  const handleCompare = () => {
    if (validateLink()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        alert("Price comparison initiated!");
      }, 2000);
    }
  };

  const handleSignIn = () => {
    setShowSignIn(false);
    // Optionally perform other actions after successful sign-in
  };

  const handleSignUp = () => {
    setShowSignUp(false);
    // Optionally perform other actions after successful sign-up
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1607004468138-e7e23ea26947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nb3x8fHx8fDE2ODQ0OTcyMjc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              alt="Price Comparison Logo"
              className="h-8 w-auto"
            />
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={SignInClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
              <FaUser className="mr-2" /> Sign In
            </button>
            <button onClick={SignUpClick} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center">
              <FaShoppingCart className="mr-2" /> Sign Up
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Compare Prices Across Multiple Platforms</h1>
          <p className="text-xl text-gray-600 mb-8">Find the best deals on your favorite products with our advanced price comparison tool.</p>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Paste your product link here"
              className={`w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-500 border-red-500' : 'focus:ring-blue-500'}`}
              value={productLink}
              onChange={handleInputChange}
              aria-label="Product link input"
            />
            {error && (
              <div className="absolute -bottom-6 left-0 text-red-500 text-sm flex items-center" role="alert">
                <FaExclamationCircle className="mr-1" />
                {error}
              </div>
            )}
          </div>
          <button
            onClick={handleCompare}
            className={`mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Comparing...
              </>
            ) : (
              <>Compare Prices</>
            )}
          </button>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Real-time price comparisons across multiple platforms</li>
              <li>Comprehensive product information and reviews</li>
              <li>Personalized deal alerts and notifications</li>
              <li>User-friendly interface for easy navigation</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How It Works</h2>
            <ol className="list-decimal list-inside text-gray-600">
              <li>Paste the product link in the search bar</li>
              <li>Click on "Compare Prices" button</li>
              <li>View a list of prices from different retailers</li>
              <li>Choose the best deal and make your purchase</li>
            </ol>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Start Saving Today!</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of smart shoppers who save money every day using our price comparison tool.</p>
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
            Sign Up for Free
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Price Comparison Website. All rights reserved.</p>
        </div>
      </footer>

      {showSignUp && <SignUp onSignUp={handleSignUp} />}
      {showSignIn && <SignIn onSignIn={handleSignIn} />}
    </div>
  );
};

export default PriceComparisonLanding;
