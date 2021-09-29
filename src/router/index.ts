import { BankOutlined, ContainerOutlined, HomeOutlined, PlusSquareOutlined, UsergroupAddOutlined, UserSwitchOutlined } from "@ant-design/icons";
import React from "react";
import { Admins, Consultaions, Diagnosis, Doctors, HospitalHome, Hospitals, Kvp, Ministir } from "../pages";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import News from "../pages/News";

interface IRoute {
    path: string;
    component: React.ComponentType;
    exact: boolean;
    title?: string;
    icon?: any 
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
    {path: RouteNames.HOME, component: Home, exact: true, title: 'Bosh sahifa',icon: HomeOutlined},
    {path: RouteNames.NEWS, component: News, exact: true, title: 'Yangiliklar', icon: PlusSquareOutlined},
    {path: RouteNames.HOSPITALS, component: Hospitals, exact: true, title: 'Shifoxonalar', icon: ContainerOutlined},
    {path: RouteNames.CONSULTATIONS, component: Consultaions, exact: true, title: 'Konsultatsiya', icon: UserSwitchOutlined},
    {path: RouteNames.MINISTERS, component: Ministir, exact: true, title: 'Vazirlik',icon: BankOutlined},
    {path: RouteNames.ADMINS, component: Admins, exact: true, title: 'Adminlar', icon: UsergroupAddOutlined}
]

export const hospitalAdmin:IRoute[] = [
    {path: RouteNames.HOME, component: HospitalHome, exact: true, title: 'Bosh sahifa',icon: HomeOutlined},
    {path: RouteNames.DOCTORS, component: Doctors, exact: true, title: 'Shifokorlar',icon: UsergroupAddOutlined},
    {path: RouteNames.DIAGNOSIS, component: Diagnosis, exact: true, title: '086', icon: PlusSquareOutlined},
    {path: RouteNames.KVP, component: Kvp, exact: true, title: 'KVP', icon: ContainerOutlined}
]