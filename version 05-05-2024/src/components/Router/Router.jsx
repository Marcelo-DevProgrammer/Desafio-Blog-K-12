import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Posts, SingIn, Login, PostDetail } from '../../../../Desafaio Xgrow/src/pages';
import { Layouts } from '../../components';

const Router = () => {
  return (
    <BrowserRouter>
      <Layouts>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singin" element={<SingIn />} />
          <Route path="/post/:id" element={<PostDetail />} /> 
        </Routes>
      </Layouts>
    </BrowserRouter>
  );
}

export default Router;
