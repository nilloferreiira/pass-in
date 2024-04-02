import icon from '../assets/icon.svg'

export function Header() {
    return (
        <header className='flex items-center gap-5 py-2'>
            <img src={icon} alt="Icon" />
            <nav className='flex items-center gap-5'>
                <a href="#" className='font-medium text-sm text-zinc-400'>Eventos</a>
                <a href="#" className='font-medium text-sm'>Participantes</a>
            </nav>
        </header>
    )
}