import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Home/Home';
import Speakers from '../Speakers/Speakers';
import SchedulePlan from '../SchedulePlan/SchedulePlan';
import Speakersdetails from '../Speakersdetails/Speakersdetails';
import Details from '../Details/Details';
import Schedule from '../Schedule/Schedule';
import SchedulePlandetails from '../SchedulePlandetails/SchedulePlandetails';
import Contactus from '../Contactus/Contactus';
import Blog from '../Blog/Blog';

const createrouting =createBrowserRouter([
                        {
                            path:"/",
                            element:<MainLayout></MainLayout>,
                            children:[
                                {
                                    path:"/",
                                    element:<Home></Home>,
                                    loader:()=> fetch('/sperkers.json')
                                

                                },
                                {
                                    path:"/speakersdetails",
                                    element:<Speakersdetails></Speakersdetails>,
                                    
                                },
                                {
                                    path:"/SchedulePlan",
                                    element:<SchedulePlan></SchedulePlan>
                                },
                                {
                                    path:"speakersDetails/:id",
                                    element:<Details></Details>,
                                    loader:()=>fetch('/sperkers.json')
                                },
                                {
                                    path:"/schedule",
                                    element:<Schedule></Schedule>
                                },
                                {
                                    path:"/SchedulePlan/:id",
                                    element:<SchedulePlandetails></SchedulePlandetails>,
                                    loader:()=>fetch('sperkers.json')
                                },
                                {
                                
                                path:"/contactus",
                                element:<Contactus></Contactus>

                                },
                                {
                                    path:"/blog",
                                    element:<Blog></Blog>
                                }
                            ]
                        }
])

export default createrouting;