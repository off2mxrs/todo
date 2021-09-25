import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>ToDo</h1>
            <nav>
                <Link to='/' >Home</Link>
                <Link to='/todos' >ToDos</Link>
            </nav>
        </header>
    )
}

export default Header