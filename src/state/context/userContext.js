import { createContext, useState } from 'react';
export const UserContext = createContext();

const UserProvider = (props) => {

    const [user, setUser] = useState({ email: '', password: '' })

    const Encode = (val, key) => {
        return btoa("Basic " + "::" + val + key)
    }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                Encode
            }}
        >
            { props.children }
        </UserContext.Provider>
    );
}
 
export default UserProvider;