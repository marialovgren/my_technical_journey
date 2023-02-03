/** Components **/
import Experiences from '../components/Experiences/Experiences'
import PageContentWrapper from "../Layout/Content/PageContentWrapper"
import About from '../components/About/About'
import Button from '../components/Button/Button'
import Skills from '../components/Skills/Skills'
import CV from '../components/CV/CV'

const AboutPage = () => {
    return (
        <div className="h-full w-full">
            <PageContentWrapper>
                <About />

                <div className="grid grid-cols-1 lg:grid-cols-6 w-full my-8">
                    <div className="lg:col-span-5">
                        <Experiences 
                            bgColor="white"
                        />
                    </div>
                    
                </div>
                <div className="flex flex-row justify-around md:justify-start my-6 px-20">
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