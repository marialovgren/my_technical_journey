
const NavigationLink = ({children, link, setOpen}) => {
    const activeLink = 'underline decoration-2 decoration-orange underline-offset-8 '
    const defaultLink = ''

    return (
        <li 
            className="md:ml-8 md:my-0 my-4 font-medium cursor-pointer hover:font-bold underline-offset-8 list-none"
        >
            <a href={link}
                onClick={() => setOpen(false)}
            >
                {children}
            </a>
        </li>
    )
}

export default NavigationLink