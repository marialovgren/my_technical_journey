import { useContext } from 'react'
import { Context } from '../context/ContextProvider'
import Loader from './Loader/Loader'

const Knowledge = () => {
    const { knowledgeIcons, isKnowledgeLoading } = useContext(Context)

    if (isKnowledgeLoading) {
        return <Loader />
    }

    return (
        <div>
            {knowledgeIcons.map((item) => {
                const {id, knowledgeImg, knowledgeType} = item
                return (
                    <div key={id} className="">
                        <div>
                            <img src={knowledgeImg} />
                        </div> 
                        <div>
                            <h2>{knowledgeType}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Knowledge