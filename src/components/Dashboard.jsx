import React from "react";
import { useState, useEffect } from 'react';
import './Dashboard.css';
import Total from './Total';
import Last from './Last';
import Panel from './Panel';

function Dashboard(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState({});
    const [productTotal, setProductTotal] = useState(0);
    const [userTotal, setUserTotal] = useState(0);
    const [categoryTotal, setCategoryTotal] = useState(0);
    const [lastUser, setLastUser] = useState({});
    const [lastProduct, setLastProduct] = useState({});

    const getUsersData = async function(){
        let response = await fetch('http://localhost:4000/api/users');
        let data = await response.json();
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
        let usersList = await fetch('http://localhost:4000/api/users?order=ASC');
        let usersListJSON = await usersList.json();
        let response = await fetch(usersListJSON.users[0].detail);
        let data = await response.json();
        data = {
            ...data,
            name: data.first_name + ' ' + data.last_name
        }
        setLastUser(data);
    }

    const getLastProduct = async function(){
        let productList = await fetch('http://localhost:4000/api/products?order=DESC');
        let productListJSON = await productList.json();
        let response = await fetch(productListJSON.products[6].detail);
        let data = await response.json();
        setLastProduct(data);
    }

    useEffect(() => {
        getUsersData();
        getProductsData();
        getLastUser();
        getLastProduct();
    }, []);

    return(
        <main className='principal'>
            <div className='left-panel'>
                {/* Panel de total de campos */}
                <Panel>
                    <Total field='productos' total={productTotal}/>
                    <Total field='usuarios' total={userTotal}/>
                    <Total field='categorías' total={categoryTotal}/>
                </Panel>

                {/* Panel de último productos creado */}
                <Panel>
                    <Last field='producto' item={lastProduct}/>
                </Panel>

                {/* Panel de último usuario creado */}
                <Panel>
                    <Last field='usuario' item={lastUser}/>
                </Panel>
            </div>

            {/* Panel de lista de productos */}
            <div className='panel panel-principal'>
                <h3>Productos</h3>
                <ul>
                {
                    products.map((product, i) => <li key={i} className='product'><p>{product.id} - {product.name}</p></li>)
                }
                </ul>
            </div>

            {/* Panel de lista de categorías */}
            <Panel>
                <h3>Categorías</h3>
                <ul>
                {
                    Object.keys(categories).map((key, i) => <li key={i} className='category'><h4>{key}:&nbsp;</h4> {categories[key]}</li>)
                }
                </ul>
            </Panel>
        </main>
    )
}

export default Dashboard
