import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import usersData from '../mocks/users.json'

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useLocalStorage('user', null);

    const login = (email, password) =>{
        const userFound = usersData.users
            .find(p => p.email === email && p.password === password);

        if(userFound){
            const { password: _, ...userWithoutPassword } = userFound;
            setUser(userWithoutPassword);
            return {sucess : true, user: userWithoutPassword}
        }

        return {sucess : false, message: 'Email e/ou senha incorretos!'}
    }

    const logout = () =>{
        setUser(null);
    }

    const isAutenthicated = !!user;

    const value = {
        user,
        login,
        logout,
        isAutenthicated
    }

    return React.createElement(
        AuthContext.Provider,
        {value: value},
        children
    );

}

export default AuthContext;