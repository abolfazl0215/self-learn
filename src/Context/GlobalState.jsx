import React, { useState } from 'react';
import { ContextApi } from './ContextApi';

const GlobalState = ({children}) => {
    const [ShowMenu, setShowMenu] = useState(false)
    const handleShowMenu=()=>{
        setShowMenu(!ShowMenu)
    }
    return ( 
        <div>
            <ContextApi.Provider value={{
                ShowMenu:ShowMenu,
                handleShowMenu:handleShowMenu
            }}>
            {children}

            </ContextApi.Provider>
        </div>
     );
}
 
export default GlobalState;
