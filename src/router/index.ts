import React from "react";
import { Admins, Consultaions, Diagnosis, Doctors, Hospitals, Kvp, Ministir } from "../pages";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import News from "../pages/News";

interface IRoute {
    path: string;
    component: React.ComponentType;
    exact: boolean;
    title?: string;
    icon?: React.ComponentType 
}
export enum RouteNames  {
    LOGIN = '/login',
    HOME = '/',
    NEWS = '/news',
    HOSPITALS = '/hospitals',
    CONSULTATIONS = '/consultations',
    MINISTERS = '/ministers',
    ADMINS = '/admins',
    DOCTORS = '/doctors',
    DIAGNOSIS = '/diagnosis',
    KVP = '/kvp'
}


export const login: IRoute[] = [
    {path: RouteNames.LOGIN, component: Login, exact: true}
]
export const superAdmin:IRoute[] = [
    {path: RouteNames.HOME, component: Home, exact: true, title: 'Bosh sahifa'},
    {path: RouteNames.NEWS, component: News, exact: true, title: 'Yangiliklar'},
    {path: RouteNames.HOSPITALS, component: Hospitals, exact: true, title: 'Shifoxonalar'},
    {path: RouteNames.CONSULTATIONS, component: Consultaions, exact: true, title: 'Konsultatsiya'},
    {path: RouteNames.MINISTERS, component: Ministir, exact: true, title: 'Vazirlik'},
    {path: RouteNames.ADMINS, component: Admins, exact: true, title: 'Adminlar'}
]

export const hospitalAdmin:IRoute[] = [
    {path: RouteNames.DOCTORS, component: Doctors, exact: true, title: 'Shifokorlar'},
    {path: RouteNames.DIAGNOSIS, component: Diagnosis, exact: true, title: '086'},
    {path: RouteNames.KVP, component: Kvp, exact: true, title: 'KVP'}
]