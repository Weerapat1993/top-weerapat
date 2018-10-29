import React from 'react'

const AuthContext = React.createContext({
  isAuth: false,
  toggleAuth: null
})

export default AuthContext