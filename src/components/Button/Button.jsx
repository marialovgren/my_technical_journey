import classNames from 'classnames'

const Button = ({ buttonType, label, size = "sm", type }) => {
    const blue = buttonType === "blue"
    const orange = buttonType === "orange"
    const lightOrange = buttonType === "lightOrange"
    const lg = size === "lg"

    return (
        <button 
            type={type}
            className={classNames("font-normal hover:font-bold py-2 border-2 px-6 transition ease-out duration-300 rounded", {
                'bg-blue' : blue,
                'border-blue' : blue,
                'text-lightBeige' : blue,

                'bg-orange' : orange,
                'border-orange' : orange,
                'text-blue' : orange,

                'bg-lightOrange' : lightOrange,
                'border-lightOrange' : lightOrange,
                'text-blue' : lightOrange,

                'w-full' : lg,
            })}       
        >
            {label}
        </button>
    )
}

export default Button

