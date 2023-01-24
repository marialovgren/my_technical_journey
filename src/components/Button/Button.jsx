import classNames from 'classnames'

const Button = ({ buttonType, label, size = "sm", type, handleClick }) => {
    const blue = buttonType === "blue"
    const orange = buttonType === "orange"
    const lightOrange = buttonType === "lightOrange"
    const lg = size === "lg"

    return (
        <button 
            type={type}
            className={classNames("font-normal text-base hover:font-bold py-4 border-2 px-6 transition ease-out duration-300 rounded-lg", {
                'bg-blue' : blue,
                'border-blue' : blue,
                'text-lightBeige' : blue,

                'bg-orange' : orange,
                'border-orange' : orange,
                'text-blue' : orange || lightOrange,

                'bg-lightOrange' : lightOrange,
                'border-lightOrange' : lightOrange,

                'w-full' : lg,
            })}   
            onClick={handleClick}    
        >
            {label}
        </button>
    )
}

export default Button

