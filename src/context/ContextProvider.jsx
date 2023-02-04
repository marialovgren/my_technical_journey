import { createContext, useCallback, useEffect, useState, } from "react";
import { client } from "./client";
import { cleanUpAbout, cleanUpSkillsIcons, cleanUpNavLinks, cleanUpLogo, cleanUpHero, cleanUpFooterLinks, cleanUpProjectCards, cleanUpIntro, cleanUpExperiences, cleanUpCV } from "./helpers";

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
            const response = await client.getEntry( '5dLZMMqttuAABZ3URyjcc2')
            console.log(response)
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

    /** Skills-icons **/ 
    const [isSkillsLoading, setIsSkillsLoading] = useState(false)
    const [skillsIcons, setSkillsIcons] = useState([])

    const saveSkillsData = useCallback((rawData) => {
        const cleanSkillsData = cleanUpSkillsIcons(rawData)
        setSkillsIcons(cleanSkillsData)
    }, [])

    const getSkillsIcons = useCallback(async () => {
        setIsSkillsLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'knowledge' })
            const responseData = response.items
            if (responseData) {
                saveSkillsData(responseData)
            } else {
                setSkillsIcons([])
            }
            setIsSkillsLoading(false)
        } catch (err) {
            console.log(err)
            setIsSkillsLoading(false)
        }
    }, [saveSkillsData])

    useEffect(() => {
        getSkillsIcons()
    }, [getSkillsIcons])

    /** Navigation **/ 
    const [isNavLinksLoading, setIsNavLinksLoading] = useState(false)
    const [navLinks, setNavLinks] = useState([])

    const saveNavLinksData = useCallback((rawData) => {
        const cleanNavLinksData = cleanUpNavLinks(rawData)
        setNavLinks(cleanNavLinksData)
    }, [])

    const getNavLinks = useCallback(async () => {
        setIsNavLinksLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'navigation' })
            const responseData = response.items
            if (responseData) {
                saveNavLinksData(responseData)
            } else {
                setNavLinks([])
            }
            setIsNavLinksLoading(false)
        } catch (err) {
            console.log(err)
            setIsNavLinksLoading(false)
        }
    }, [saveNavLinksData])

    useEffect(() => {
        getNavLinks()
    }, [getNavLinks])

    /** Logo **/
    const [logo, setLogo] = useState({})
    const [isLogoLoading, setIsLogoLoading] = useState(false)

    const saveLogoData = useCallback((rawData) => {
        const cleanLogoData = cleanUpLogo(rawData)
        setLogo(cleanLogoData)
    }, [])

    const getLogo = useCallback(async () => {
        setIsLogoLoading(true)
        try {
            const response = await client.getEntry('5imA0DXdHfNoFRSJzwqsK4')
            if (response) {
                saveLogoData(response)
            } else {
                setLogo({})
            }
            setIsLogoLoading(false)
        } catch (err) {
            console.log(err)
            setIsLogoLoading(false)
        }
    }, [saveLogoData])

    useEffect(() => {
        getLogo()
    }, [getLogo])

    /** Hero **/
    const [hero, setHero] = useState({})
    const [isHeroLoading, setIsHeroLoading] = useState(false)

    const saveHeroData = useCallback((rawData) => {
        const cleanHeroData = cleanUpHero(rawData)
        setHero(cleanHeroData)
    }, [])

    const getHero = useCallback(async () => {
        setIsHeroLoading(true)
        try {
            const response = await client.getEntry('6zECUglENTjSGovBnY4eHQ')
            if (response) {
                saveHeroData(response)
            } else {
                setHero({})
            }
            setIsHeroLoading(false)
        } catch (err) {
            console.log(err)
            setIsHeroLoading(false)
        }
    }, [saveHeroData])

    useEffect(() => {
        getHero()
    }, [getHero])

    /** Footer-links **/ 
    const [isFooterLinksLoading, setIsFooterLinksLoading] = useState(false)
    const [footerLinks, setFooterLinks] = useState([])

    const saveFooterLinksData = useCallback((rawData) => {
        const cleanFooterLinksData = cleanUpFooterLinks(rawData)
        setFooterLinks(cleanFooterLinksData)
    }, [])

    const getFooterLinks = useCallback(async () => {
        setIsFooterLinksLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'footerLinks' })
            const responseData = response.items
            if (responseData) {
                saveFooterLinksData(responseData)
            } else {
                setFooterLinks([])
            }
            setIsFooterLinksLoading(false)
        } catch (err) {
            console.log(err)
            setIsFooterLinksLoading(false)
        }
    }, [saveFooterLinksData])

    useEffect(() => {
        getFooterLinks()
    }, [getFooterLinks])

    /** Project-cards **/ 
    const [isProjectCardsLoading, setIsProjectCardsLoading] = useState(false)
    const [projectCards, setProjectCards] = useState([])
    
    const saveProjectCardsData = useCallback((rawData) => {
        const cleanProjectCardsData = cleanUpProjectCards(rawData)
        setProjectCards(cleanProjectCardsData)
    }, [])
    
    const getProjectCards = useCallback(async () => {
        setIsProjectCardsLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'projectCards' })
            const responseData = response.items
            if (responseData) {
                saveProjectCardsData(responseData)
            } else {
                setProjectCards([])
            }
            setIsProjectCardsLoading(false)
        } catch (err) {
            console.log(err)
            setIsProjectCardsLoading(false)
        }
    }, [saveProjectCardsData])
    
    useEffect(() => {
        getProjectCards()
    }, [getProjectCards])

    /** Intro-section **/ 
    const [intro, setIntro] = useState({})
    const [isIntroLoading, setIsIntroLoading] = useState(false)

    const saveIntroData = useCallback((rawData) => {
        const cleanIntroData = cleanUpIntro(rawData)
        setIntro(cleanIntroData)
    }, [])

    const getIntro = useCallback(async () => {
        setIsIntroLoading(true)
        try {
            const response = await client.getEntry( 'PReUKj88zFI5thhnnvCcU')
            if (response) {
                saveIntroData(response)
            } else {
                setIntro({})
            }
            setIsIntroLoading(false)
        } catch (err) {
            console.log(err)
            setIsIntroLoading(false)
        }
    }, [saveIntroData])

    useEffect(() => {
        getIntro()
    }, [getIntro])

    /** Experiences **/ 
    const [isExperiencesLoading, setIsExperiencesLoading] = useState(false)
    const [experiences, setExperiences] = useState([])
    
    const saveExperiencesData = useCallback((rawData) => {
        const cleanExperiencesData = cleanUpExperiences(rawData)
        setExperiences(cleanExperiencesData)
    }, [])
    
    const getExperiences = useCallback(async () => {
        setIsExperiencesLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'experiences' })
            const responseData = response.items
            if (responseData) {
                saveExperiencesData(responseData)
            } else {
                setExperiences([])
            }
            setIsExperiencesLoading(false)
        } catch (err) {
            console.log(err)
            setIsExperiencesLoading(false)
        }
    }, [saveExperiencesData])
    
    useEffect(() => {
        getExperiences()
    }, [getExperiences])

    /** CV **/ 
    const [cv, setCv] = useState({})
    const [isCvloading, setIsCvLoading] = useState(false)

    const saveCvData = useCallback((rawData) => {
        const cleanCvData = cleanUpCV(rawData)
        setCv(cleanCvData)
    }, [])

    const getCv = useCallback(async () => {
        setIsCvLoading(true)
        try {
            const response = await client.getEntry( 'rxDFiDlkO6ooEVpCL4KMu')
            if (response) {
                saveCvData(response)
            } else {
                setCv({})
            }
            setIsCvLoading(false)
        } catch (err) {
            console.log(err)
            setIsCvLoading(false)
        }
    }, [saveCvData])

    useEffect(() => {
        getCv()
    }, [getCv])

    const contextValues = {
        about, 
        isAboutLoading, 
        skillsIcons, 
        isSkillsLoading,
        navLinks,
        isNavLinksLoading,
        logo,
        isLogoLoading,
        hero,
        isHeroLoading,
        footerLinks,
        isFooterLinksLoading,
        projectCards,
        isProjectCardsLoading,
        intro,
        isIntroLoading,
        experiences,
        isExperiencesLoading,
        cv,
        isCvloading
    }

    return (
        <Context.Provider value={contextValues} >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider