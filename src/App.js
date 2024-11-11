import './App.css';
import './index.css';
import pizzaStyles from './styles/Pizza.module.css'
import Pizza from './components/Pizza';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Create ripple container and append to body
    const rippleContainer = document.createElement('div');
    rippleContainer.className = 'ripple-container';
    document.body.appendChild(rippleContainer);

    function createRipple(event) {
      if (!rippleContainer) return;

      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      ripple.style.backgroundColor = 'rgba(210, 150, 90, 0.3)'; // Fixed subtle golden-brown color

      rippleContainer.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    }

    // Add mousemove event listener to create ripples
    window.addEventListener('mousemove', createRipple);

    // Clean up event listener and remove container on component unmount
    return () => {
      window.removeEventListener('mousemove', createRipple);
      rippleContainer.remove();
    };
  }, []);

  return (
    <div className="App">
      <div className="ripple-container"></div>  
      <Header />
      <main className={pizzaStyles.PizzaCardContainer}>
        <Pizza src='./margherita.jpg' name='Margherita Pizza'/>
        <Pizza src='./mushroomPizza.jpg' name='Mushroom Pizza'/>  
        <Pizza src='./margherita.jpg' name='Pepperoni Pizza'/>
        <Pizza src='./margherita.jpg' name='Veggie Pizza'/>  
        <Pizza src='./margherita.jpg' name='BBQ Chicken Pizza'/>
        <Pizza src='./margherita.jpg' name='Hawaiian Pizza'/>
        <Pizza src='./margherita.jpg' name='Buffalo Chicken Pizza'/>
        <Pizza src='./margherita.jpg' name='Meat Lovers Pizza'/>
        <Pizza src='./margherita.jpg' name='Meat Lovers Pizza'/>
        <Pizza src='./margherita.jpg' name='Meat Lovers Pizza'/>
        <Pizza src='./margherita.jpg' name='Meat Lovers Pizza'/>
        <Pizza src='./margherita.jpg' name='Meat Lovers Pizza'/>
        <Pizza src='./margherita.jpg' name='Hawaiian Pizza'/>
        <Pizza src='./margherita.jpg' name='Buffalo Chicken Pizza'/>
        <Pizza src='./margherita.jpg' name='Meat Lovers Pizza'/>
        <Pizza src='./margherita.jpg' name='Meat Lovers Pizza'/>
        <Pizza src='./margherita.jpg' name='Meat Lovers Pizza'/>
        <Pizza src='./margherita.jpg' name='Meat Lovers Pizza'/>
        <Pizza src='./margherita.jpg' name='Meat Lovers Pizza'/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
