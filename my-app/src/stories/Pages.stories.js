import React,{useState} from 'react';
import EditProfile from '../comps/EditProfile';
import MainPage from '../pages/main';

export default {
    title: 'Pages',
    component: EditProfile,
    component: MainPage,
  };
  
  
  export const MyEditProfile = () =>  <EditProfile />
  export const MyMainPage = () => <MainPage />
  