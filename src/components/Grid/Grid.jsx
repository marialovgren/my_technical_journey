
const Grid = ({children, sm, md, lg, width, justify, gap, otherStyles}) => {
    return (
        <div className={`grid grid-cols-${sm} md:grid-cols-${md} lg:grid-cols-${lg} w-${width} justify-${justify} gap-${gap} ${otherStyles}`}>
            {children}
        </div>
    )
}

export default Grid