import classNames from 'classnames'

const Heading = ({size, headingColor, thin, bold}) => {
    const h1 = size === "1"
    const h2 = size === "2"
    const h3 = size === "3"
    const h4 = size === "4"
    const h5 = size === "5"
    const blue = headingColor === "blue"
    const lightBeige = headingColor === "lightBeige"

    return (
        <h1
            className={classNames
            ({
                'text-5xl' : h1,
                'text-4xl' : h2,
                'text-3xl' : h3,
                'text-2xl' : h4,
                'text-xl' : h5,

                'text-blue' : blue,
                'text-lightBeige' : lightBeige,
            })}
        >
            <span className="font-light">{thin}</span> <span className="font-medium">{bold}</span>
        </h1>
    )
}

export default Heading