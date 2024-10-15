import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const PriceComparisonPage = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone X",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      platforms: [
        {
          name: "TechStore",
          logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          price: "$599",
          link: "https://techstore.com/smartphone-x"
        },
        {
          name: "GadgetWorld",
          logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          price: "$619",
          link: "https://gadgetworld.com/smartphone-x"
        },
        {
          name: "ElectroMart",
          logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          price: "$589",
          link: "https://electromart.com/smartphone-x"
        }
      ]
    },
    {
      id: 2,
      name: "Laptop Pro",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      platforms: [
        {
          name: "TechStore",
          logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          price: "$1299",
          link: "https://techstore.com/laptop-pro"
        },
        {
          name: "GadgetWorld",
          logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          price: "$1349",
          link: "https://gadgetworld.com/laptop-pro"
        },
        {
          name: "ElectroMart",
          logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          price: "$1279",
          link: "https://electromart.com/laptop-pro"
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Price Comparison</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
              <div className="space-y-4">
                {product.platforms.map((platform, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        className="w-8 h-8 object-contain rounded-full"
                      />
                      <span className="font-medium">{platform.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-bold">{platform.price}</span>
                      <a
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center space-x-2"
                        aria-label={`Buy ${product.name} from ${platform.name}`}
                      >
                        <span>Buy</span>
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceComparisonPage;