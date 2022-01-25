import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
} from "./components";
import Contents from "./components/Contents";
import {Footer} from"./components/Footer";


ReactDOM.render(
  <Router>
    <Navigation />
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path=":postSlug" element={<Post />} />
      
      <Route path="/blog" element={<Blog />}>
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();