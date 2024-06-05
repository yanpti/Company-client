import {Component} from 'react'
import News from "./pages/News"
import NewsPage from "./pages/NewsPage"
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REG_ROUTE, NEWS_ROUTE, NEWSPAGE_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes=[
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REG_ROUTE,
        Component: Auth
    },
    {
        path: NEWSPAGE_ROUTE + '/:id',
        Component: NewsPage
    }

]