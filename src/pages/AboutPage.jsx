/** Components **/
import Experiences from '../components/Experiences/Experiences'
import PageContentWrapper from "../Layout/Content/PageContentWrapper"
import About from '../components/About/About'
import Button from '../components/Button/Button'
import Skills from '../components/Skills/Skills'

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
                    <div className="flex justify-center align-center h-fit self-center mt-4">
                        <a href="mailto:marialovgren86@hotmail.com" className="md:pr-8">
                            <Button 
                                label="Contact me"
                                buttonType="blue"
                            />
                        </a>
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