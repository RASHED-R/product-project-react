import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Login from '../Pages/Login/Login';
import Favorites from '../Pages/Favorites/Favorites';
import ProductPage from '../Pages/ProductPage/ProductPage';

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/favorites',
                element: <Favorites></Favorites>,

            },
            {
                path: '/product/:id',
                element: <ProductPage></ProductPage>,
                loader: () => fetch(`https://dummyjson.com/products`)

            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default myCreatedRouter;