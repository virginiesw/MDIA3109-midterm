import React,{useState} from 'react';
import EditProfile from '../comps/EditProfile';
import MainPage from '../pages/main';
import ProfileEditPage from '../pages/profile';
import HomePage from '../pages/home';


export default {
    title: 'Pages',
    component: MainPage,
    component: ProfileEditPage,
    component: HomePage,
  };
  
  
  export const MyEditProfilePage = () =>  <ProfileEditPage />
  export const MyMainPage = () => <MainPage />
  export const MyHomePage = () => <HomePage />
  