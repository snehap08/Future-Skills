import React, { useState, useEffect } from "react";
import Abstract from "../assets/Abstract.svg";

const HelpCenter = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newCard, setNewCard] = useState ({title:"", description:""});

  useEffect(() => {

    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/cards');
        const data = await response.json();
        console.log(data);        
        setCards(data.items);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCards();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("Card created:", data);
      setCards([...cards, data]);
      setShowForm(false);
      setNewCard({ title: "", description: "" });
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };
  

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  


  return (
    <div className="min-h-screen flex flex-col bg-indigo-100">
          <header className="bg-black text-white p-4 flex w-[98%] m-auto mt-2 justify-between items-center rounded-t-2xl">
      <div className="flex items-center space-x-2">
        <img src={Abstract} alt="Abstract" className="h-8 w-24 sm:w-24 " />
        <span className="text-sm sm:text-sm lg:text-lg tracking-wider">
          <span className="text-white">|</span> Help Center
        </span>
      </div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="text-sm sm:text-sm lg:text-md bg-zinc-800/80 hover:bg-white hover:text-black border border-white text-white py-2 px-3 rounded transition-colors duration-300"
      >
        {showForm ? "Close Form" : "Submit a request"}
      </button>
    </header>

      {/* Main content */}
<main className="flex-1 bg-white">
  <section className="bg-indigo-100 py-16 text-center">
    <h1 className="text-4xl mb-4">How can we help?</h1>
    <div className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="w-11/12 sm:w-11/12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black hover:border-black"
      />
    </div>
  </section>

  {showForm && (
    <section className="py-12">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Create New Card</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 mb-2">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={newCard.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={newCard.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )}

  <section className="py-12">
    <div className="w-11/12 sm:w-11/12 lg:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
      {Array.isArray(filteredCards) && filteredCards.length > 0 ? (
        filteredCards.map((items) => (
          <div
            key={items.id}
            className="bg-gray-300/30 p-6 rounded-xl shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300"
          > 
            <h2 className="text-lg font-semibold mb-2 border-b border-gray-300">{items.title}</h2>
            <p className="text-gray-700">{items.description}</p>
          </div>
        ))
      ) : (
        <p>No cards available</p>
      )}
    </div>
  </section>
</main>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
      <div>
        <h3 className="font-semibold mb-4 text-lg">Abstract</h3>
        <ul className="space-y-2">
          <li className="hover:underline">Branches</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-lg">Resources</h3>
        <ul className="space-y-2">
          <li className="hover:underline">Blog</li>
          <li className="hover:underline">Help Center</li>
          <li className="hover:underline">Release Notes</li>
          <li className="hover:underline">Status</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-lg">Community</h3>
        <ul className="space-y-2">
          <li className="hover:underline">Twitter</li>
          <li className="hover:underline">LinkedIn</li>
          <li className="hover:underline">Facebook</li>
          <li className="hover:underline">Dribbble</li>
          <li className="hover:underline">Podcast</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-lg">Company</h3>
        <ul className="space-y-2">
          <li className="hover:underline">About Us</li>
          <li className="hover:underline">Careers</li>
          <li className="hover:underline">Legal</li>
        </ul>
      </div>
    </div>

    <div className="mt-10 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left">
        <h3 className="font-semibold mb-1 text-lg">Contact Us</h3>
        <ul className="space-y-2">
          <li className="hover:underline">info@abstract.com</li>
        </ul>
      </div>

      <div className="flex flex-col items-center mt-8 md:mt-0">
        <img src={Abstract} alt="Company Logo" className="h-8 w-auto mb-4" />
        <p className="text-sm text-gray-400">
          &copy; Copyright 2022 Abstract Studio Design, Inc.
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default HelpCenter;
