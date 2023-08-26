import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

// Componente para el enlace de la marca (Brand)
const Brand = () => {
  return <a className="navbar-brand" href="#">ElectroStore</a>;
};

// Componente para el listado de categorías
const CategoryList = () => {
  const categories = ['Electrodomésticos', 'Tecnología', 'Hogar', 'Oficina'];

  return (
    <ul className="navbar-nav mr-auto">
      {categories.map((category, index) => (
        <li className="nav-item" key={index}>
          <a className="nav-link" href="#">{category}</a>
        </li>
      ))}
    </ul>
  );
};

// Componente NavBar que incluye el Brand y el listado de categorías
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Brand />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <CategoryList />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
import React from 'react';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-notification">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Importa el archivo de estilos para NavBar
import CartWidget from './CartWidget'; // Importa el componente CartWidget

const Brand = () => {
  return <a className="navbar-brand" href="#">ElectroStore</a>;
};

const CategoryList = () => {
  // ...
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* ... */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <CategoryList />
        <CartWidget itemCount={5} /> {/* Puedes cambiar el número fijo aquí */}
      </div>
    </nav>
  );
};

export default NavBar;
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;

