import React from 'react'
import Header from './_components/Header';

const Layout = async ({children}: {children: React.ReactNode}) => {
  return (
    
    <div>
      {children}
      </div>
  )
};
  
export default Layout