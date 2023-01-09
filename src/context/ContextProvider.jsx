import { createContext, useCallback, useEffect, useState, } from "react";
import { client } from "./client";
import { cleanUpAbout, cleanUpKnowledgeIcons } from "./helpers";

export const Context = createContext({})

const ContextProvider = ({ children }) => {
    /** About-section **/ 
    const [about, setAbout] = useState({})
    const [isAboutLoading, setIsAboutLoading] = useState(false)

    const saveAboutData = useCallback((rawData) => {
        const cleanAboutData = cleanUpAbout(rawData)
        setAbout(cleanAboutData)
    }, [])

    const getAbout = useCallback(async () => {
        setIsAboutLoading(true)
        try {
            const response = await client.getEntry({ content_type: '5dLZMMqttuAABZ3URyjcc2' })
            if (response) {
                saveAboutData(response)
            } else {
                setAbout({})
            }
            setIsAboutLoading(false)
        } catch (err) {
            console.log(err)
            setIsAboutLoading(false)
        }
    }, [saveAboutData])

    useEffect(() => {
        getAbout()
    }, [getAbout])

    /** Knowledge-section **/ 
    const [isKnowledgeLoading, setIsKnowledgeLoading] = useState(false)
    const [knowledgeIcons, setKnowledgeIcons] = useState([])

    const saveKnowledgeData = useCallback((rawData) => {
        const cleanKnowledgeData = cleanUpKnowledgeIcons(rawData)
        setKnowledgeIcons(cleanKnowledgeData)
    }, [])

    const getKnowledgeIcons = useCallback(async () => {
        setIsKnowledgeLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'knowledge' })
            const responseData = response.items
            if (responseData) {
                saveKnowledgeData(responseData)
            } else {
                setKnowledgeIcons([])
            }
            setIsKnowledgeLoading(false)
        } catch (err) {
            console.log(err)
            setIsKnowledgeLoading(false)
        }
    }, [saveKnowledgeData])

    useEffect(() => {
        getKnowledgeIcons()
    }, [getKnowledgeIcons])


    const contextValues = {
        about, 
        isAboutLoading, 
        knowledgeIcons, 
        isKnowledgeLoading
    }

    return (
        <Context.Provider value={contextValues} >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider