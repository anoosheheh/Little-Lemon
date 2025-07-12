import React from "react";  
import fish from "../assets/fish.jpg";
import pasta from "../assets/pasta.jpg";
import bruchetta from "../assets/bruchetta.jpg";
import Swal from "sweetalert2";

const Menu = () => {
    const handleOrder = async (item) => {
        const result = await Swal.fire({
            title: 'Confirm Order',
            text: `Are you sure you want to order item #${item}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, order it!',
            cancelButtonText: 'Cancel'
        });

        if (result.isConfirmed) {
            Swal.fire({
                title: 'Order Placed',
                text: `You have successfully ordered the item with ID: ${item}`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
    }
    return(
        <div className="menu-container">
            <div className="menu-header">
                <h2>This week's <strong>specials</strong></h2>
                <button className="reserve-button">Order Menu</button>
            </div>
        
        <div className='cards'>

            <div className="menu-item">
                <img src={fish} alt="Fish Dish" className="menu-image" />
                <div  className="menu-content">
                    <div  className="heading">
                        <h3>Grilled Salmon</h3>
                        <p>$9.99</p>
                    </div>
                    <p>Our seasonal salmon with divine seasoning a side of mashed potatoes paired with tossed vegetables is to die for!</p>
                    <button className="reserve-button" onClick={()=> handleOrder(1)}>Order Now</button>
                </div>
            </div>

            <div className="menu-item">
                <img src={pasta} alt="Pasta" className="menu-image" />
                <div className="menu-content">
                    <div  className="heading">
                        <h3>Red-Sauce Pasta</h3>
                        <p>$14.99</p>
                    </div>
                    <p>The iconic red sauce pasta is served with fresh parmesan toppings and a side of mouth-melting garlic bread</p>
                    <button className="reserve-button" onClick={()=>handleOrder(2)}>Order Now</button>
                </div>
            </div>
            <div  className="menu-item">
                <img src={bruchetta} alt="Bruchetta" className="menu-image" />
                <div className="menu-content">
                    <div className="heading">
                        <h3>Bruchetta</h3>
                        <p>$16.99</p>
                    </div>
                    <p>The chef's special bruchetta is a refreshing, filling delight to have paired with the finest chardonay</p>
                    <button className="reserve-button" onClick={()=>handleOrder(3)}>Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};
export default Menu;