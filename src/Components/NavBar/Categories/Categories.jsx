import { Link } from "react-router-dom";
import React from "react";
const Categories = () => {
    return (
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn dropdown-toggle">Menú</button></a>
          <ul class="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/1"}>SNACKS</Link></li>
            <li><Link className="dropdown-item" to={"/category/2"}>BEBIDAS</Link></li>
          </ul>
        </li>
    );
}

export default Categories;