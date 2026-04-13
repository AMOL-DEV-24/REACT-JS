import React from 'react'
import './TopBar.css'
import { Chat, Home, NotificationAdd, Person, PostAdd, Search } from '@mui/icons-material'
export default function TopBar() {
  return (
    <>
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo"><img src="https://i.ibb.co/Dz1m7Dn/logo.png
" alt="" /></span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon'/>
                    <input type="text" placeholder='Search For Friends, Post or Video' className='searchInput' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topBarLinks">
                    <span className="topbarLinks">
                        <Home/>
                    </span>
                    <span className="topbarLinks">
                        <PostAdd/>
                    </span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className='topbarIconBadge'>2</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationAdd/>
                        <span className='topbarIconBadge'>5</span>
                    </div>
                </div>
                <img src="src/assets/person/1.jpg" alt="" className='topbarImg'/>
            </div>
        </div>
    </>
  )
}
