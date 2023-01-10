import { useContext, useState } from 'react'
import { Context } from '../../context/ContextProvider'

/** Components **/
import NavigationLink from './NavigationLink/NavigationLink'
import Loader from '../../components/Loader/Loader'

const Navigation = () => {
    const [open, setOpen] = useState(false)
    const { navLinks, isNavLinksLoading, logo, isLogoLoading } = useContext(Context)

    if (isNavLinksLoading || isLogoLoading) {
        return <Loader />
    }

    return (  
        <nav className="w-full bg-lightBeige shadow-md shadow-lightBeige">
            <div className="justify-between px-3 mx-2 md:items-center md:flex md:px-8"> 
                <div>
                    <div className="flex items-center justify-between py-2 md:py-4 md:block">
                        <div>
                            <img src={logo.img} className="h-14" />
                        </div>

                        <div className="md:hidden ">
                            <button
                                className="text-3xl absolute right-6 top-4 cursor-pointer"
                                onClick={() => setOpen(!open)}
                            >
                                {open ? (
                                     <ion-icon name="close-outline"></ion-icon>
                                ) : (
                                    <ion-icon name="menu-outline"></ion-icon>
                                )}
                            </button>
                        </div>
                    </div>
                </div>  
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            open ? "block" : "hidden"
                        }`}
                    >
                        <ul className="flex flex-col md:flex-row md:items-center md:pb-0 pb-3 md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:space-x-14 items-center text-blue">
                            {navLinks.map((navLink) => {
                            const {id, navLinkTitle, navLinkUrl} = navLink
                                return (
                                    <NavigationLink 
                                        key={id}
                                        link={navLinkUrl}
                                        onClick={ () => {
                                            setOpen(false)
                                        }}
                                    >
                                        {navLinkTitle}
                                    </NavigationLink>
                                )
                            })}
                        </ul> 
                    </div>
                </div> 
            </div> 
        </nav>
    )
}

export default Navigation