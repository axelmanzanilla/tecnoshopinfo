import React from "react";
import { useState, useEffect } from 'react';
import { Main, Form, Section, Input, TextArea, Select, Button } from './NewProductStyles';

function NewProduct(props){
    const [categories, setCategories] = useState();

    const getCategories = async function(){
        try {
            let response = await fetch('https://tecnoshop2.herokuapp.com/api/products');
            let data = await response.json();
            setCategories(data.countByCategory);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    const createProduct = async function(product){
        const response = await fetch('https://tecnoshop2.herokuapp.com/api/products', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        if(response.ok){
            props.history.push('/')
        }else{
            let content = await response.json();
            console.log(content)
        }
    }
 
    const submitHandler = e => {
        e.preventDefault();
        let product = {
            name: document.forms[0].elements['name'].value,
            description: document.forms[0].elements['description'].value,
            category: document.forms[0].elements['category'].value,
            price: document.forms[0].elements['price'].value,
            active: document.forms[0].elements['active'].checked
        }
        createProduct(product);
    }

    return(
        <Main>
            <Form onSubmit={submitHandler}>
                {/*  NOMBRE  */}
                <Section>
                    <label htmlFor='name'>Nombre:</label>
                    <Input name='name' type='text'/>
                </Section>
        
                {/*  DESCRIPCIÓN  */}
                <Section>
                    <label htmlFor='description'>Descripción:</label>
                    <TextArea name='description'></TextArea>
                </Section>
        
                {/*  CATEGORÍA  */}
                <Section>
                    <label htmlFor="category">Categoria del producto:</label>
                        {
                            !categories ? ( <></> ) : 
                            (
                                <Select name='category'>
                                    {
                                        Object.keys(categories).map((category, i) => <option key={i} value={category}>{category}</option> )
                                    }
                                </Select>
                            )
                        }
                </Section>
                    
                {/*  PRECIO  */}
                <Section>
                    <label htmlFor='price'>Precio:</label>
                    <Input name='price' type='number' min='0.00' step='0.01'/>
                </Section>
                    
                    
                {/*  ACTIVO  */}
                <label htmlFor='active'>Activo</label>
                <input name='active' type='checkbox' defaultChecked='check'/>
                    
                <Button type='submit'>Crear</Button>
            </Form>
        </Main>
    )
}

export default NewProduct
