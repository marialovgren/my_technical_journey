
/** About-section **/ 
export const cleanUpAbout = (rawData) => {
    const { sys, fields } = rawData
    const {id} = sys
    const aboutTitle = fields.title
    const aboutDescriptionPart1 = fields.descriptionPart1
    const aboutDescriptionPart2 = fields.descriptionPart2
    const aboutImage = fields.descriptionPart1.content[0].data.target.fields.file.url
    let cleanAbout = { id, aboutTitle, aboutDescriptionPart1, aboutDescriptionPart2, aboutImage } // New object that only holds the data that I´m interested in to use
    return cleanAbout
}

/** Skills-icons **/ 
export const cleanUpSkillsIcons = (rawData) => {
    const cleanSkills = rawData.map((icon) => {
        const { sys, fields } = icon
        const {id} = sys
        const skillsType = fields.type
        const skillsImg = fields.image.fields.file.url 
        const updatedSkillsIcon = { id, skillsType, skillsImg } // New object that only holds the data that I´m interested in to use
        return updatedSkillsIcon
    })
    return cleanSkills
}

/** Navigation **/ 
export const cleanUpNavLinks = (rawData) => {
    const cleanNavLinks = rawData.map((link) => {
        const { sys, fields } = link
        const {id} = sys
        const navLinkTitle = fields.title
        const navLinkUrl = fields.url 
        const updatedNavLink = { id, navLinkTitle, navLinkUrl } // New object that only holds the data that I´m interested in to use
        return updatedNavLink
    })
    return cleanNavLinks
}

/** Logo **/
export const cleanUpLogo = (rawData) => {
    const { sys, fields } = rawData
    const {id} = sys
    const img = fields.logo.fields.file.url 
    let cleanLogo = { id, img } // New object that only holds the data that I´m interested in to use
    return cleanLogo
}

/** Hero **/
export const cleanUpHero = (rawData) => {
    const { sys, fields } = rawData
    const {id} = sys
    const heroImage = fields.image.fields.file.url 
    let cleanHero = { id, heroImage } // New object that only holds the data that I´m interested in to use
    return cleanHero
}

/** Footer-links **/
export const cleanUpFooterLinks = (rawData) => {
    const cleanFooterlinks = rawData.map((link) => {
        const { sys, fields } = link
        const {id} = sys
        const footerLinkIcon = fields.icon
        const footerLinkUrl = fields.url 
        const updatedFooterLink = { id, footerLinkIcon, footerLinkUrl } // New object that only holds the data that I´m interested in to use
        return updatedFooterLink
    })
    return cleanFooterlinks
}

/** Project-cards **/
export const cleanUpProjectCards = (rawData) => {
    const cleanProjectsCards = rawData.map((project) => {
        const { sys, fields } = project
        const {id} = sys
        const projectTitle = fields.title
        const projectImg = fields.image.fields.file.url 
        const projectDescription = fields.content
        const pageUrl = fields.pageUrl
        const repoUrl = fields.repoUrl
        const projectTags = fields.tags
        const updatedProjectCard = { id, projectTitle, projectImg, projectDescription, pageUrl, repoUrl, projectTags } // New object that only holds the data that I´m interested in to use
        return updatedProjectCard
    })
    return cleanProjectsCards
}

/** Intro-section **/ 
export const cleanUpIntro = (rawData) => {
    const { sys, fields } = rawData
    const {id} = sys
    const introTags = fields.tags
    const introDescriptionPart1 = fields.descriptionPart1
    const introDescriptionPart2 = fields.descriptionPart2
    let cleanIntro = { id, introTags, introDescriptionPart1, introDescriptionPart2 } // New object that only holds the data that I´m interested in to use
    return cleanIntro
}

/** Experiences **/ 
export const cleanUpExperiences = (rawData) => {
    const cleanExperiences = rawData.map((experience) => {
        const { sys, fields } = experience
        const {id} = sys
        const schoolTitle = fields.title
        const schoolIcon = fields.icon.fields.file.url
        const schoolYears = fields.years
        const schoolMonths = fields.months
        const updatedExperiences = { id, schoolTitle, schoolIcon, schoolYears, schoolMonths } // New object that only holds the data that I´m interested in to use
        return updatedExperiences
    })
    return cleanExperiences
}

/** CV **/ 
export const cleanUpCV = (rawData) => {
    const { sys, fields } = rawData
    const {id} = sys
    const cvPDF = fields.cv.fields.file.url
    let cleanCV = { id, cvPDF } // New object that only holds the data that I´m interested in to use
    return cleanCV
}