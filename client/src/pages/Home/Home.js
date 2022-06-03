import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Grid } from "@mui/material";
import './Home.css';


const Home = () => {
    const Products = [
        {
            id: 1,
            title: 'Smart Speaker 2000',
            category: 'Smart Speakers & Displays',
            price: 8.99,
            rating: 3,
            description: "This is an incredible speaker perfect to...",
            img: 'https://xiaomimx.vtexassets.com/arquivos/ids/156907/Mi-Smart-Speaker-4.png?v=637601637325130000',
        },
        {
            id: 2,
            title: 'LED RGBCW',
            category: 'Smart Lighting',
            price: 15,
            rating: 4,
            description: "This is an incredible speaker perfect to...",
            img: 'https://m.media-amazon.com/images/I/61AqZPOI+2L._AC_SL1500_.jpg',
        },
        {
            id: 3,
            title: 'Smart Speaker 2000',
            category: 'Smart Speakers & Displays',
            price: 349.5,
            rating: 5,
            description: "This is an incredible speaker perfect to...",
            img: 'https://media.takealot.com/covers_images/4e0f9bfa06ed49079879f1bccb2d6b0b/s-zoom.file',
        },
        {
            id: 4,
            title: 'Biometric Door Lock',
            category: 'Smart Door Lock',
            price: 400,
            rating: 4,
            description: "This is an incredible speaker perfect to...",
            img: 'https://cdn.shopify.com/s/files/1/0553/5524/4684/products/4afd9c4865e70427af4c3330966caecc_600x_crop_center_decb4926-2278-4322-ad36-06c4cfc55efb.jpg?v=1640087954',
        },
        {
            id: 5,
            title: 'Smart Speaker 2000',
            category: 'Smart Speakers & Displays',
            price: 899,
            rating: 4,
            description: "This is an incredible speaker perfect to...",
            img: 'https://xiaomimx.vtexassets.com/arquivos/ids/156907/Mi-Smart-Speaker-4.png?v=637601637325130000',
        },
        {
            id: 6,
            title: 'Smart Speaker 2000',
            category: 'Smart Speakers & Displays',
            price: 899,
            rating: 5,
            description: "This is an incredible speaker perfect to...",
            img: 'https://xiaomimx.vtexassets.com/arquivos/ids/156907/Mi-Smart-Speaker-4.png?v=637601637325130000',
        },
        
    ];

    return(
        <>
            <h1 className="home">Home</h1>

            <div className="rootH">
            <Grid container rowSpacing={1} columnSpacing={1}>
                {
                    Products.map((product) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard key={product.id} 
                            product={product}/>
                        </Grid>
                    ))
                }
            </Grid>
            </div>
        </>
    )
}

export default Home;