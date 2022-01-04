import React from 'react'
import './DiscountStyle.css'


const Discount = () => {
    return (
        <div class="discount">
        <div class="video">
            
        </div>
        <div class="rightSide">
            <div class="tajmer">
                <h1>Special Offer ends in:</h1>
                <div class="countdown">
                    <div id="day"></div>
                    <div id="hour"></div>
                    <div id="minute"></div>
                    <div id="second"></div>

                </div>
            </div>
            <div class="text">
                <p>Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Voluptates veniam,
                    reiciendis temporibus officia minus
                    ipsam maxime repellendus,
                    cupiditate tenetur numquam nobis
                    illo! Alias nihil id ipsum. In
                    eveniet molestias vitae!</p>
                <a href="#">Take a tour</a>
            </div>
        </div>
    </div>
    )
}

export default Discount
