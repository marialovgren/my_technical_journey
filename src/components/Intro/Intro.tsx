/** Get data from Contentful **/
import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useNavigate } from 'react-router'

import Loader from '../Loader/Loader'
import Button from '../Button/Button'

const Intro = () => {
    const { intro, isIntroLoading } = useContext(Context)
    const navigate = useNavigate()

    if (isIntroLoading) {
        return <Loader />
    }

    const { introTags, introDescription } = intro

    return (
        <div className="mx-8 my-4 flex flex-col md:flex-row">
            <div className="flex flex-col mb-4 md:mb-0 md:bg-lightGreen md:p-6 md:rounded-br-full ">
                {introTags && introTags.map((tag, i) => {
                    return (
                        <span
                            key={i}
                            className={`rounded text-black font-extralight text-sm flex align-center w-max md:py-2`}>
                                {tag}.
                        </span> 
                    )
                })}   
            </div>
    
            <div className="md:mx-10 lg:mx-16">
                <div className="text-blue font-normal">
                    {documentToReactComponents(introDescription)}
                </div>

                <div className="flex flex-row justify-around md:justify-start my-6">
                    <a href="mailto:marialovgren86@hotmail.com" className="md:pr-8">
                        <Button 
                            label="Contact me"
                            buttonType="orange"
                        />
                    </a>
                    
                    <Button 
                        label="More about me"
                        buttonType="lightOrange"
                        handleClick={() => navigate('/about')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Intro