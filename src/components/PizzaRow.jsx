import React from 'react';
import Pizza from './Pizza';
import pizzaStyles from '../styles/Pizza.module.css';

export default function PizzaRow({ pizzas }) {
  return (
    <div className={pizzaStyles.pizzaRowContainer}>
      {pizzas.map((pizza) => (
        <Pizza key={pizza.id} name={pizza.name} src={pizza.src} />
      ))}
    </div>
  );
}
