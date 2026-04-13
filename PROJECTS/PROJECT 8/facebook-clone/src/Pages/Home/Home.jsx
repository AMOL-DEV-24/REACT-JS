import React from 'react'
import './Home.css'
import TopBar from '../../Components/TopBar/TopBar'
import SideBar from '../../Components/SideBar/SideBar'
import Feed from '../../Components/Feed/Feed'
import RightBar from '../../Components/RightBar/RightBar'
export default function Home() {
  return (
        <>
            <TopBar/>
            <div className="homeContainer">
                <SideBar/>
                <Feed/>
                <RightBar/>
            </div>
        </>
  )
}
