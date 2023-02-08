
const NavigationLink = ({children, link, setOpen}) => {

    return (
        <a href={link}
                onClick={() => setOpen(false)}
            >
            <li 
                className="md:ml-8 md:my-0 my-4 font-medium cursor-pointer hover:font-bold underline-offset-8 list-none hover:underline hover:decoration-2 hover:decoration-orange hover:underline-offset-8"
            >
                {children}
            </li>
        </a>
    )
}

export default NavigationLink