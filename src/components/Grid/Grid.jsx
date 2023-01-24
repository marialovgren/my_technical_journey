
const Grid = ({children, gap}) => {


    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-center gap-${gap}`}>
            {children}
        </div>
    )
}

export default Grid