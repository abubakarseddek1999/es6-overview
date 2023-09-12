import React from 'react';

const Watch = ({watch}) => {
    const {name, price}=watch;
    return (
        <div>
            <h2>Watches: {name}</h2>
            <h2>price: {price}</h2>

        </div>
    );
};

export default Watch;