import React from 'react';
import pizzaStyles from '../styles/Pizza.module.css';

export default function Pizza({ name, src }) {
  return (
    <div className={pizzaStyles.PizzaCardContainer}>
      <div className={pizzaStyles.pizzaContainer}>
        <img className={pizzaStyles.pizzaImage} src={src} alt={name} />
        <div className={pizzaStyles.spansContainer1}>
          <span className={pizzaStyles.cardNewSpan}>New</span>
          <h1 className={pizzaStyles.pizzaName}>{name}</h1>
        </div>
        <div className={pizzaStyles.pizzaContent}>
        <span className={pizzaStyles.kcalSpan}>1807kcal - serves 3 - <a href='/' class={pizzaStyles.allergens}>allergens</a></span>
          <div className={pizzaStyles.pizzaDescription}>Here is {name}</div>
          <div class={pizzaStyles.selectContainer}>
            <label for="size-crust" class={pizzaStyles.selectLabel}>Select Size & Crust</label>
            <select id="size-crust" class={pizzaStyles.selectDropdown}>
                <option className={pizzaStyles.crustSelect}>Large, Handcrafted with Garlic</option>
                <option className={pizzaStyles.crustSelect}>Medium, Thin Crust</option>
                <option className={pizzaStyles.crustSelect}>Small, Gluten-Free Crust</option>
            </select>
          </div>
          <div className={pizzaStyles.addToBaskedContainer}>
            <span className={pizzaStyles.pizzaPrice}>£15</span>
            <button className={pizzaStyles.addToBaskedBtn}>Add</button>
          </div>

          <span className={pizzaStyles.customiseSpan}>Customise</span>
        </div>
      </div>
    </div>
  );  
}
