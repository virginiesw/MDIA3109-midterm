import React from 'react';
import AddItem from '../comps/AddItem';
import Indicator from '../comps/indicator'; 
import TreatIndicator from '../comps/TreatIndicator';
import Profile from '../comps/Profile';
// import Modal from '../comps/Modal';
import DateComp from '../comps/DateComp';
import FilterComp from '../comps/FilterComp';

export default {
  title: 'Components',
  component: AddItem,
  component: Indicator,
  component: TreatIndicator,
  component: Profile,
  // component: Modal,
  component: DateComp,
  component: FilterComp,
};


export const MyAddItem = () =>  <AddItem />
export const MyMealIndicator= () =>  <Indicator />
export const MyTreatIndicator= () =>  <TreatIndicator />
export const MyProfile= () =>  <Profile />
// export const MyModal= () => <Modal />
export const MyDateComp= () => <DateComp />
export const MyFilterComp= () => <FilterComp />


