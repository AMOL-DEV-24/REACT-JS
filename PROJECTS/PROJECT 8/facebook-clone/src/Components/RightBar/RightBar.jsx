import React from 'react'
import './Rightbar.css'
import { Users } from '../../Dummy'
import OnlineFriends from '../OnlineFriends/OnlineFriends'

export default function Rightbar({ profile }) {
  let HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="src/assets/gift.png" alt="" className='birthdayImg' />
          <span className='birthdayText'>
            <b>You</b>
            {' '}and{' '}
            <b>other 5 friends</b>
            {' '}have birthday today.
          </span>
        </div>
        <img src="src/assets/person/1.jpg" alt="" className='rightbarAd' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((index) => (
            <OnlineFriends key={index.id} user={index} />
          ))}
        </ul>
      </>
    )
  }

  let ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitlr'>User Info</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfo Item'>
            <span className='rightbarInfokey'>City: </span>
            <span className='rightbarInfoValue'>Chandrapur</span>
          </div>
          <div className='rightbarInfo Item'>
            <span className='rightbarInfokey'>From: </span>
            <span className='rightbarInfoValue'>Pune</span>
          </div>
          <div className='rightbarInfo Item'>
            <span className='rightbarInfokey'>Status: </span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="src/assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>qwer</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>asdf</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>zxcv</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>mnbv</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>lkjh</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
      </div>
    </>
  )
}