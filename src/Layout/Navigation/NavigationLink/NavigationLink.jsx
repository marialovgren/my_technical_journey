import { NavLink } from 'react-router-dom'

const NavigationLink = ({children, link}) => {
    const activeLink = 'underline decoration-2 decoration-orange underline-offset-8 '
    const defaultLink = ''

    return (
        <li 
            className="md;ml-8 md:my-0 my-4 font-medium cursor-pointer hover:font-bold underline-offset-8 list-none"
        >
            <NavLink to={link}
                className={ ({ isActive }) => isActive ? activeLink : defaultLink }
            >
                {children}
            </NavLink>
        </li>
    )
}

export default NavigationLink