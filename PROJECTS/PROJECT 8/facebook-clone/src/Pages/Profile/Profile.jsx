import React from 'react'
import './Profile.css'
import TopBar from '../../Components/TopBar/TopBar'
import SideBar from '../../Components/SideBar/SideBar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/RightBar/RightBar'


export default function Profile() {
  return (
    <>
      <TopBar />
      <div className='profile'>
        <SideBar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img src="src/assets/post/10.jpg" className='profileCoverImg' alt="" />
              <img src="src/assets/person/1.jpg" className='profileUserImg' alt="" />
            </div>
            <div className="profileInfo">
              <h4 className='profileInfoName'>Kruitk</h4>
              <span className='profileInfoDesc'>Hello World!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}
