import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pagse/Home.jsx'
import Book from './Pagse/Book.jsx'
import Bookmark from './Pagse/Bookmark.jsx'
import MainLaout from './Laouts/MainLaout.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobs.json')
      },
      {
        path: '/books/:id',
        element: <Book></Book>,
        loader: () => fetch('../jobs.json')
      },

      {
        path: '/bookmarks',
        element: <Bookmark></Bookmark>,
      },
    ]
  },



])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
