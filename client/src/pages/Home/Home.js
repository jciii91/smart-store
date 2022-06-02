import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import './Home.css'


export default function Home(){
    
    const [searchInput, setSearchInput] = useState("");
    return(
        <>
            <h1 className="home">Home</h1>

            <div className="rootH">
            <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductCard/>
                </Grid>
            </Grid>
            </div>
        </>
    )
}