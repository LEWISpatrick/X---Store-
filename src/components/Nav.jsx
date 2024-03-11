import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'




const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <img src={headerLogo}
                 alt="logo" 
                 height={100}
                 width={100}/>
            </a>
            <ul className='flex-1 flex 
            justify-center 
            items-center gap-16 
            max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                        href={item.herf}
                        className='font-montserrat leading-normal
                        text-lg text-slate-gray'
                        style={{ cursor: 'pointer'}}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img 
                src={hamburger}
                width = {25}
                height = {25}
                style={ {cursor: 'pointer'}}/>
            </div>
        </nav>
    </header>
    )
}

export default Nav