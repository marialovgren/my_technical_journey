import { useCallback, useEffect, useState } from 'react'
import { client } from '../client'
import Loader from './Loader/Loader'

const Knowledge = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [knowledgeIcons, setKnowledgeIcons] = useState([])

    const cleanUpKnowledgeIcons = useCallback((rawData) => {
        const cleanKnowledges = rawData.map((icon) => {
            const { sys, fields } = icon
            const {id} = sys
            const knowledgeType = fields.type
            const knowledgeImg = fields.image.fields.file.url 
            const updatedKnowledgeicon = { id, knowledgeType, knowledgeImg } // New object that only holds the data that I´m interested in to use
            return updatedKnowledgeicon
        })
        setKnowledgeIcons(cleanKnowledges)
    }, [])

    const getKnowledgeIcons = useCallback(async () => {
        setIsLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'knowledge' })
            const responseData = response.items
            if (responseData) {
                cleanUpKnowledgeIcons(responseData)
            } else {
                setKnowledgeIcons([])
            }
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }, [cleanUpKnowledgeIcons])

    useEffect(() => {
        getKnowledgeIcons()
    }, [getKnowledgeIcons])

    if (isLoading) {
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