import React from "react";
import { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard(){
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState({});
    const [productTotal, setProductTotal] = useState([]);
    const [userTotal, setUserTotal] = useState([]);
    const [categoryTotal, setCategoryTotal] = useState([]);
    const [lastUser, setLastUser] = useState([]);
    const [lastProduct, setLastProduct] = useState([]);

    const getUsersData = async function(){
        let response = await fetch('http://localhost:4000/api/users');
        let data = await response.json();
        setUsers(data.users);
        setUserTotal(data.count);
    }

    const getProductsData = async function(){
        let response = await fetch('http://localhost:4000/api/products');
        let data = await response.json();
        setProducts(data.products);
        setProductTotal(data.count);
        setCategories(data.countByCategory);
        setCategoryTotal(Object.keys(data.countByCategory).length);
    }

    const getLastUser = async function(){
        let response = await fetch('http://localhost:4000/api/users?order=DESC');
        let data = await response.json();
        setLastUser(data.users[0]);
    }

    const getLastProduct = async function(){
        let response = await fetch('http://localhost:4000/api/products?order=DESC');
        let data = await response.json();
        setLastProduct(data.products[0]);
    }

    useEffect(() => {
        getUsersData();
        getProductsData();
        getLastUser();
        getLastProduct();
    }, []);

    return(
        <main className='principal'>
            <div className='left-panels'>
                <div className='panel'>
                    <div className='total'>
                        Total de productos: {productTotal}
                    </div>
                    <div className='total'>
                        Total de usuarios: {userTotal}
                    </div>
                    <div className='total'>
                        Total de categorías: {categoryTotal}
                    </div>
                </div>
                <div className='panel'>
                    Último producto creado: {lastProduct.name}
                </div>
                <div className='panel'>
                    Último usuario creado: {lastUser.name}
                </div>
            </div>
            <div className='panel'>
                <h3>Productos</h3>
                <ul>
                    {
                        products.map((product, i) => {
                            return <li key={i}>{product.name}</li>
                        })
                    }
                </ul>
            </div>
            <div className='panel'>
                <h3>Categorías</h3>
                <ul>
                    {
                        Object.keys(categories).map((key, i) => {
                            return <li key={i}>{key}: {categories[key]}</li>
                        })
                    }
                </ul>
            </div>
        </main>
    )
}

export default Dashboard
