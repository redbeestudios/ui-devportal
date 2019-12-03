import React from 'react';
import {Redirect} from 'react-router-dom';
import Landing from "./pages/landing/Landing";

export default [
    {
      path: '/specs/:id?',
      component: Landing,
      exact: false
    },
    {
      path: "/",
      component: Landing,
      exact: true,
    }
];
