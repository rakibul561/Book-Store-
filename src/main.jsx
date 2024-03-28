import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pagse/Home.jsx'
import Book from './Pagse/Book.jsx'
import Bookmark from './Pagse/Bookmark.jsx'
import MainLaout from './Laouts/MainLaout.jsx'
import { Toaster } from 'react-hot-toast';
import Link from './Pagse/Link.jsx'
import Content from './component/Content.jsx'
import Author from './component/Author.jsx'
// import Link from './Pagse/Link.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: '/books',
        element: <Book></Book>,
        children: [
          {
            index: true,
            element: <Content></Content>
          },
          {
            path: 'author',
            element: <Author></Author>
          }

        ]
      },
      {
        path: '/link/:id',
        element: <Link></Link>,
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
    <Toaster></Toaster>
  </React.StrictMode>,
)
