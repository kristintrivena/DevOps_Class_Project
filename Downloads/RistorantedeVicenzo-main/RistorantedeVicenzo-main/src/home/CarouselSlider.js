import React from "react";
import { Carousel, Button } from "react-bootstrap"
import "../styling/CarouselSlider.css"

function CarouselSlider() {
    return (
        <div className="carousel-fix">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/food (1).jpg" // Ganti dengan URL gambar Anda
                        alt="Dish 1"
                    />
                    <Carousel.Caption>
                        <Button 
                            variant="success" 
                            className="button-order text-style shadow-button"
                        >
                            Order Now
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/food (2).jpg" // Ganti dengan URL gambar Anda
                        alt="Dish 2"
                    />
                    <Carousel.Caption>
                        <Button 
                            variant="success" 
                            className="button-order text-style shadow-button"
                        >
                            Order Now
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/food (3).jpg" // Ganti dengan URL gambar Anda
                        alt="Dish 3"
                    />
                    <Carousel.Caption>
                        <Button 
                            variant="success" 
                            className="button-order text-style shadow-button"
                        >
                            Order Now
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselSlider