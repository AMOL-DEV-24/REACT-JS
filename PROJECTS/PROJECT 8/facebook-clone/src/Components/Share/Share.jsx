import React from 'react'
import './Share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="src\assets\person\1.jpg" alt="" className='shareProfileImg' />
                <input type="text" name="" id="" placeholder='WHat You Want To Post' className='shareInput' />
            </div>
            <div className="shareHr">
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className='shareIcon' htmlColor="Green"/>
                            <label htmlFor="" className='shareOptionText'>Photo / Video</label>
                        </div>
                        <div className="shareOption">
                            <Label className='shareIcon' htmlColor="Red"/>
                            <label htmlFor="" className='shareOptionText'>Tag</label>
                        </div>
                        <div className="shareOption">
                            <Room className='shareIcon' htmlColor="Brown"/>
                            <label htmlFor="" className='shareOptionText'>Location</label>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions className='shareIcon' htmlColor="deeppink"/>
                            <label htmlFor="" className='shareOptionText'>Feelings</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
