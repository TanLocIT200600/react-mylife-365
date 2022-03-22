import React from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import "./layout.scss"

const Layout = (props: any) => {
  return (
    <div className="layout">
      <div className="layout-left"><NavBar /></div>
      <div className="layout-right">
        {
          props.children
        }
      </div>
    </div>
  )
}

export default Layout