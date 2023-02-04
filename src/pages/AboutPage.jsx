import { useEffect } from 'react'

/** Components **/
import Experiences from '../components/Experiences/Experiences'
import PageContentWrapper from "../Layout/Content/PageContentWrapper"
import About from '../components/About/About'
import Button from '../components/Button/Button'
import Skills from '../components/Skills/Skills'
import CV from '../components/CV/CV'

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="h-full w-full">
            <PageContentWrapper>
                <About />

                <div className="w-full">
                    <div>
                        <Experiences 
                            bgColor="white"
                        />
                    </div>
                    
                </div>
                <div className="flex flex-row justify-around md:justify-start my-8 px-20">
                    <a href="mailto:marialovgren86@hotmail.com" className="md:pr-8">
                        <Button 
                            label="Contact me"
                            buttonType="blue"
                        />
                    </a>
                    <div>
                        <CV />
                    </div>
                </div>

                <Skills 
                    bgColor="lightBeige"
                />
                
            </PageContentWrapper>
        </div>
    )
}

export default AboutPage