import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Posts, SingIn, Login, PostDetail } from '../../pages';
import { NavBar, Footer } from '..';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar /> 
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singin" element={<SingIn />} />
                <Route path="/post/:id" element={<PostDetail />} />
            </Routes>
            <Footer /> 
        </BrowserRouter>
    );
}

export default Router;
