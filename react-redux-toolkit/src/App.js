import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<DashboardPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
