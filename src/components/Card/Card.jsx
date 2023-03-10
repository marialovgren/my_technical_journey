import Button from "../Button/Button"
import classNames from 'classnames'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Card = ({image, tags, title, description, btnOne, btnTwo, btnOneTitle, btnTwoTitle, borderColor, tagColor, id}) => {
    const beigeTag = tagColor === "lightBeige"
    const whiteTag = tagColor === "white"
    const whiteBorder = borderColor === "white"
    const beigeBorder = borderColor === "lightBeige"
    
    return (
        <div key={id} className={classNames("py-4 px-6 lg:px-8 border-b-4 last-of-type:border-none", {
            'border-white' : whiteBorder,
            'border-lightBeige' : beigeBorder
        })}>
            <div className="w-full">
                <img className="drop-shadow-md mb-4 w-full" src={image} alt=""/>
            </div>
                        
            <div className="flex flex-row flex-wrap">
                {tags.map((tag, i) => {
                    return (
                        <span
                            key={i}
                            className={classNames("p-2 mr-2 mb-2 rounded text-black font-normal text-sm flex align-center", {
                                'bg-lightBeige' : beigeTag,
                                'bg-white' : whiteTag
                            })}>
                                {tag}
                        </span> 
                    )
                })}   
            </div>
                              
            <div className="pb-4">
                <h5 className="text-blue text-xl font-medium mb-2">{title}</h5>
                <div className="text-blue text-sm mb-4">
                    {documentToReactComponents(description)}
                </div>
  
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