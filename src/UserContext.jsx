import { useContext, useState} from "react";
import { createContext} from "react";

export const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse (localStorage.getItem('session')) || null)

    const enhancedSetUser = value => {
        setUser(value)
        localStorage.setItem('session', JSON.stringify(value))
    }
    return (
        <UserContext.Provider value={[user, enhancedSetUser]}>
            {children}
        </UserContext.Provider>

    )
}