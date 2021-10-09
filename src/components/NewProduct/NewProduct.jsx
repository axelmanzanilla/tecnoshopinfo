import React from "react";
import { useState, useEffect } from 'react';
import { Main, Form, Section, Input, TextArea, Select, Button } from './NewProductStyles';

function NewProduct(){
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

    return(
        <Main>
            <Form method='POST'>
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
                                        Object.keys(categories).map((category, i) => <option key={i}>{category}</option> )
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
