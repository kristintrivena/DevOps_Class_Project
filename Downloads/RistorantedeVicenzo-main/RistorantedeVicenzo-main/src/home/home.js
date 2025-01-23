import React from "react";
import { Container } from "react-bootstrap";
import CarouselSlider from "./CarouselSlider";
import '../styling/Home.css'
import PopularMenu from "./PopularMenu";
import CooksBook from "./CooksBook";

const Home = () => {
    return (
        <>
        <Container fluid className="p-3 px-5 contain">
            <CarouselSlider />
        </Container>
        <PopularMenu />
        <CooksBook />
        </>
    );
};

export default Home;