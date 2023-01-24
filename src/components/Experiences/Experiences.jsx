/** Get data from Contentful **/
import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'
import Heading from '../Heading/Heading'

import Loader from '../Loader/Loader'
import Grid from '../Grid/Grid'

const Experiences = ({bgColor}) => {
    const { experiences, isExperiencesLoading } = useContext(Context)

    if (isExperiencesLoading) {
        return <Loader />
    }

    return (
        <div className={`bg-${bgColor} px-20`}>
            <Grid
                gap="2"
            >
                {experiences.map((experience) => {
                    const {id, schoolTitle, schoolIcon, schoolYears, schoolMonths} = experience
                    return (
                        <div key={id} className="bg-lightOrange text-blue p-6 m-4 rounded-xl max-w-xs">
                            <div className="flex flex-row">
                                <div className="w-6 mr-2">
                                    <img 
                                        src={schoolIcon} 
                                        className="w-5/6" 
                                    />
                                </div>
                                <h2 className="font-medium">Time in {schoolTitle}</h2>
                            </div>  
                            <div className="my-4 flex flex-row"> 
                                <h3><span className="text-4xl font-bold pr-2">{schoolYears}</span> <span className="font-light">years</span></h3>
                                {schoolMonths && (
                                    <h3 className="ml-2"><span className="text-4xl font-normal pr-2">{schoolMonths}</span> <span className="font-light">months</span></h3>
                                )}
                            </div>    
                        </div>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Experiences