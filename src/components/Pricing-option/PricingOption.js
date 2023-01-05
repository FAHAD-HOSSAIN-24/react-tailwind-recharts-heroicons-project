import React from 'react';
import ShowOption from '../Show-pricing-option/ShowOption';

const PricingOption = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: '0.00', benefits: ['Totally free cost', 'Unlimited uses', 'No payment for uses', 'No add free']},
        {id: 2, name: 'Regular', price: '9.99', benefits: ['Some features are free', 'Unlimited uses', 'Paid payment for uses', 'No add free']},
        {id: 3, name: 'Premium', price: '19.99', benefits: ['regular uses are free', 'Unlimited uses', 'Paid payment for uses', 'No add free']}
    ]
    return (
        <div className='bg-indigo-400 p-5 mt-5'>
            <h2 className='text-6xl text-white'>Best Deals of The Town</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit recusandae, dolorum ex tempora at nesciunt eveniet repellat fugiat cum.</p>

            <div className='grid md:grid-cols-3 gap-2 mt-5'>
                {
                    pricingOptions.map(option => <ShowOption key={option.id} option={option}></ShowOption>)
                }
            </div>
        </div>
    );
};

export default PricingOption;