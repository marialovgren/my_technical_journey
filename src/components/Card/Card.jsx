import Button from "../Button/Button"

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
                            <Button 
                                label={btnOneTitle}
                                buttonType="blue"
                            />
                        </a>
                    )}
                    {btnTwo && (
                        <a href={btnTwo}>
                            <Button 
                                label={btnTwoTitle}
                                buttonType="blue"
                            />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card