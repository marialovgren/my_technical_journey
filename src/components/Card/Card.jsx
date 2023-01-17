
const Card = ({image, tags, title, description, btnOne, btnTwo, btnOneTitle, btnTwoTitle, id}) => {
    
    return (
        <div key={id} className="bg-white py-4 px-6 border-b-4 border-lightBeige">
            <div className="w-full">
                <img className="drop-shadow-md mb-4 w-full" src={image} alt=""/>
            </div>
                        
            <div className="flex flex-row space-x-4">
                {tags.map((tag, i) => {
                    return (
                        <span
                            key={i}
                            className="p-2 rounded text-black bg-lightBeige font-normal text-sm flex align-center w-max">
                                {tag}
                        </span> 
                    )
                })}   
            </div>
                              
            <div className="py-4">
                <h5 className="text-blue text-xl font-medium mb-2">{title}</h5>
                <div className="text-blue text-sm mb-4" dangerouslySetInnerHTML={{ __html: description }} /> 

                <div className="flex flex-row justify-around">
                    {btnOne && (
                        <a href={btnOne}>
                            <button type="button" className=" inline-block px-6 py-2.5 bg-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                {btnOneTitle}
                            </button>
                        </a>
                    )}
                    {btnTwo && (
                        <a href={btnTwo}>
                            <button type="button" className=" inline-block px-6 py-2.5 bg-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                {btnTwoTitle}
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card