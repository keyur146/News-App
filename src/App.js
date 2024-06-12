import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <News key="general" pageSize={6} country={"in"} category={"general"} />
      </div>
    ),
  },
  {
    path: "business",
    element: (
      <div>
        <Navbar />
        <News key="business" pageSize={6} country={"in"} category={"business"} />
      </div>
    ),
  },
  {
    path: "entertainment",
    element: (
      <div>
        <Navbar />
        <News key="entertainment" pageSize={6} country={"in"} category={"entertainment"} />
      </div>
    ),
  },
  {
    path: "general",
    element: (
      <div>
        <Navbar />
        <News key="general" pageSize={6} country={"in"} category={"general"} />
      </div>
    ),
  },
  {
    path: "health",
    element: (
      <div>
        <Navbar />
        <News key="health" pageSize={6} country={"in"} category={"health"} />
      </div>
    ),
  },
  {
    path: "science",
    element: (
      <div>
        <Navbar />
        <News key="science" pageSize={6} country={"in"} category={"science"} />
      </div>
    ),
  },
  {
    path: "sports",
    element: (
      <div>
        <Navbar />
        <News key="sports" pageSize={6} country={"in"} category={"sports"} />
      </div>
    ),
  },
  {
    path: "technology",
    element: (
      <div>
        <Navbar />
        <News key="technology" pageSize={6} country={"in"} category={"technology"} />
      </div>
    ),
  },
]);

export default class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}
