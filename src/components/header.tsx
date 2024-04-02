import icon from '../assets/icon.svg'
import { NavLink } from './nav-link'

export function Header() {
    return (
        <header className='flex items-center gap-5 py-2'>
            <img src={icon} alt="Icon" />
            <nav className='flex items-center gap-5'>
                <NavLink href='/eventos'>Eventos</NavLink>
                <NavLink href='/participantes'>Paricipantes</NavLink>
            </nav>
        </header>
    )
}