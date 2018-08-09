import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import ProductActionPage from './pages/ProductAction/ProductActionPage';
import ProductListPage from './pages/Productlist/ProductListPage';

const routes =[
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage/>
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path: '/product/:id/update',
        exact: false,
        main: ({match,history}) => <ProductActionPage match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound/>
    }
];
export default routes;