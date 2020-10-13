import React, { createContext } from 'react';

export const AuthContext = createContext({
  isLoading: true,
  isSignout: false,
  userToken: null,
  signOut: () => {},
  signIn: (data: any) => Promise.resolve(),
  signUp: (data: any) => Promise.resolve()
});