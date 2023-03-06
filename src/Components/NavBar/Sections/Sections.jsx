import { Link } from "react-router-dom";
const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={"/"}><button className="btn">Inicio</button></Link>
            </li>
        </>
    );
}

export default Sections;