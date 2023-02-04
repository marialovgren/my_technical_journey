
const NavigationLink = ({children, link, setOpen}) => {

    return (
        <li 
            className="md:ml-8 md:my-0 my-4 font-medium cursor-pointer hover:font-bold underline-offset-8 list-none hover:underline hover:decoration-2 hover:decoration-orange hover:underline-offset-8"
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