import React from 'react'
import './SideBar.css'
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material'
export default function SideBar() {
  return (
    <>
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed/>
                        <spna className="sidebarListItemText">Feed</spna>
                    </li>
                    <li className="sidebarListItem">
                        <Chat/>
                        <spna className="sidebarListItemText">Chat</spna>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined/>
                        <spna className="sidebarListItemText">Videos</spna>
                    </li>
                    <li className="sidebarListItem">
                        <Group/>
                        <spna className="sidebarListItemText">Groups</spna>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark/>
                        <spna className="sidebarListItemText">Bookmarks</spna>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline/>
                        <spna className="sidebarListItemText">Help</spna>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline/>
                        <spna className="sidebarListItemText">Work</spna>
                    </li>
                    <li className="sidebarListItem">
                        <Event/>
                        <spna className="sidebarListItemText">Events</spna>
                    </li>
                    <li className="sidebarListItem">
                        <School/>
                        <spna className="sidebarListItemText">School</spna>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr'/>
                <ul className='sidebarFriendList'>
                    <li className='sidebarFriend'>
                        <img src="src\assets\person\2.jpg" alt="" className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>Mine</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src="src\assets\person\2.jpg" alt="" className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>Mine</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src="src\assets\person\2.jpg" alt="" className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>Mine</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src="src\assets\person\2.jpg" alt="" className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>Mine</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src="src\assets\person\2.jpg" alt="" className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>Mine</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src="src\assets\person\2.jpg" alt="" className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>Mine</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img src="src\assets\person\2.jpg" alt="" className='sidebarFriendImg' />
                        <span className='sidebarFriendName'>Mine</span>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}
