/** Components **/
// import Knowledge from '../components/Knowledge'
import Hero from "../components/Hero/Hero"
import PageContentWrapper from "../Layout/Content/PageContentWrapper"

const HomePage = () => {

    return (
        <div className="h-full w-full">
            <PageContentWrapper>
                <Hero />
                {/* <Knowledge /> */}
            </PageContentWrapper>
        </div>
    )
}

export default HomePage