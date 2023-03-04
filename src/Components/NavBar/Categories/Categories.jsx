import { Link } from "react-router-dom";
const Categories = () => {
    return (
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn dropdown-toggle">Menú</button></a>
          <ul class="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/1"}>Snacks</Link></li>
            <li><Link className="dropdown-item" to={"/category/2"}>Bebidas</Link></li>
          </ul>
        </li>
    );
}

export default Categories;