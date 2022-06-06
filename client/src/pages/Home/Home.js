import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Grid } from "@mui/material";
import './Home.css';
import Slider from '../../components/Slider/Slider';
import { SliderData } from '../../components/Slider/Sliderdata';

import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from "../../utils/queries";

const Home = () => {
    const { data } = useQuery(QUERY_ITEMS);
    const Products = data?.items || [];

    return(
        <div>
            <Slider slides={SliderData}/>

            <div className="rootH">
            <Grid container rowSpacing={1} columnSpacing={1}>
                {
                    Products.map((product) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard key={product.id} 
                            product={product}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            </div>
        </div>
    )
}

export default Home;