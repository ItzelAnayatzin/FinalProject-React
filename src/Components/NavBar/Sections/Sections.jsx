import { Link } from "react-router-dom";
const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={"/"}><button className="btn">Inicio</button></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/Nosotros"}><button className="btn">Nosotros</button></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/Encuentranos"}><button className="btn">Encuentranos</button></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/Promociones"}><button className="btn">Promociones</button></Link>
            </li>
        </>
    );
}

export default Sections;