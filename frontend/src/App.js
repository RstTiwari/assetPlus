import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryList from "./Pages/GalleryList";
import Posts from "./Posts"; // Make sure this import is used somewhere or remove it.
import CreateContent from "./Pages/CreateContent";

function App() {
    return (
        <Router>
            <Routes>
                {/* Define the route for the Gallery List */}
                <Route path="/" element={<GalleryList />} />

                {/* Define the route for the Create Content */}
                <Route path="/contnet" element={<CreateContent />} />

                {/* You can add more routes here as your app grows */}
            </Routes>
        </Router>
    );
}

export default App;
