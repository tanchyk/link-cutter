import {createContext} from 'react';

const noFunc = () => {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: noFunc(),
    logout: noFunc(),
    isAuthenticated: false
})