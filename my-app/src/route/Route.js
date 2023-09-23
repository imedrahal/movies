import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Description from "../pages/Description ";
import Search from "../pages/search";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<MainPage />}></Route>
          <Route path="/description/:id" element={<Description />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;