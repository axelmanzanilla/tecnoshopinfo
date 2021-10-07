import React from "react";
import { useState, useEffect } from 'react';
import Total from '../Total/Total';
import Last from '../Last/Last';
import Panel from '../Panel/Panel';
import { Main, LeftPanel, PrincipalPanel, RightPanel, Ul, Li } from './DashboardStyles';

function Dashboard(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState({});
    const [productTotal, setProductTotal] = useState(0);
    const [userTotal, setUserTotal] = useState(0);
    const [categoryTotal, setCategoryTotal] = useState(0);
    const [lastUser, setLastUser] = useState({});
    const [lastProduct, setLastProduct] = useState({});

    const getUsersData = async function(){
        try {
            let response = await fetch('https://tecnoshop2.herokuapp.com/api/users');
            let data = await response.json();
            setUserTotal(data.count);
        } catch (error) {
            console.log(error);
        }
    }

    const getProductsData = async function(){
        try {
            let response = await fetch('https://tecnoshop2.herokuapp.com/api/products');
            let data = await response.json();
            setProducts(data.products);
            setProductTotal(data.count);
            setCategories(data.countByCategory);
            setCategoryTotal(Object.keys(data.countByCategory).length);
        } catch (error) {
            console.log(error);
        }
    }

    const getLastUser = async function(){
        try {
            let usersList = await fetch('https://tecnoshop2.herokuapp.com/api/users?order=ASC');
            let usersListJSON = await usersList.json();
            let response = await fetch(usersListJSON.users[0].detail);
            let data = await response.json();
            data = {
                ...data,
                name: data.first_name + ' ' + data.last_name
            }
            setLastUser(data);
        } catch (error) {
            console.log(error);
        }
        
    }

    const getLastProduct = async function(){
        try {
            let productList = await fetch('https://tecnoshop2.herokuapp.com/api/products?order=DESC');
            let productListJSON = await productList.json();
            let response = await fetch(productListJSON.products[0].detail);
            let data = await response.json();
            setLastProduct(data);
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        getUsersData();
        getProductsData();
        getLastUser();
        getLastProduct();
    }, []);

    return(
        <Main>
            <LeftPanel>
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
            </LeftPanel>

            {/* Panel de lista de productos PRINCIPAL */}
            <PrincipalPanel>
                <h3>Productos</h3>
                <Ul>
                {
                    products.map((product, i) => <li key={i} className='product'><p>{product.id} - {product.name}</p></li>)
                }
                </Ul>
            </PrincipalPanel>

            {/* Panel de lista de categorías */}
            <RightPanel>
                <h3>Categorías</h3>
                <Ul>
                {
                    Object.keys(categories).map((key, i) => <Li key={i} className='category'><h4>{key}:&nbsp;</h4> {categories[key]}</Li>)
                }
                </Ul>
            </RightPanel>
        </Main>
    )
}

export default Dashboard
