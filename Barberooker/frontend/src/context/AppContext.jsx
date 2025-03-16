import { createContext } from "react";
import {dbarbers} from '../assets/assets'


export const AppContext = createContext()

const AppContextProvider = (props) =>{

    const value = {
        dbarbers
    }
    return(
        <AppContext.Provider value={{value}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider