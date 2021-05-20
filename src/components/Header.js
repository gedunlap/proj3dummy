import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div className="navItem">Home</div>
            </Link>
            <Link to="/run">
                <div className="navItem">Run</div>
            </Link>
            <Link to="/hike">
                <div className="navItem">Hike</div>
            </Link>
            <Link to="/scenic">
                <div className="navItem">Scenic</div>
            </Link>
        </nav>
    )
}

export default Header