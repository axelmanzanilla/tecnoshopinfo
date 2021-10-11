import React from 'react';
import { useState, useEffect } from 'react';
import Total from '../Total/Total';
import Panel from '../Panel/Panel';
import ProductImage from '../ProductImage/ProductImage';
import { BigPanel, TopProducts, Ul } from './VentasStyles';

function Ventas(){
    const [totalSales, setTotalSales] = useState();
    const [totalProductsSold, setTotalProductsSold] = useState();
    const [lastSold, setLastSold] = useState();
    const [bestSellers, setBestSellers] = useState();

    const getSales = async function(){
        try {
            let response = await fetch('https://tecnoshop.herokuapp.com/api/sales');
            let data = await response.json();
            setTotalSales(data.totalSales);
            setTotalProductsSold(data.totalProductsSold);
            setLastSold(data.lastSold);
            setBestSellers(data.bestSellers);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSales();
    }, []);

    return(
        <main>
            <Panel>
                <Total field='ventas' total={totalSales}/>
                <Total field='productos vendidos' total={totalProductsSold}/>
            </Panel>
            <BigPanel>
                <TopProducts>
                    <h3>Últimos productos vendidos</h3>
                    <Ul>
                    {
                        !lastSold ? (
                            <p>Cargando...</p>
                        ):
                        (
                            lastSold.map((product, i) => <ProductImage key={i} id={product.id} name={product.name} image={product.image}></ProductImage>)
                        )
                    }
                    </Ul>
                </TopProducts>
                <TopProducts>
                    <h3>Productos más vendidos</h3>
                    <Ul>
                    {
                        !bestSellers ? (
                            <p>Cargando...</p>
                        ):
                        (
                            bestSellers.map((product, i) => <ProductImage key={i} id={product.id} name={product.name} image={product.image}></ProductImage>)
                        )
                    }
                    </Ul>
                </TopProducts>
            </BigPanel>
        </main>
    )
}

export default Ventas
