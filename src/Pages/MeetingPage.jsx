import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

export default function MeetingPage({meetLink, name}) {
    const navigation = useNavigate()
    useEffect(()=>{
        console.log('here')
        let content = document.getElementsByClassName('jstest-room-meetingtimer');
        console.log({content})
    })
  return (
    <div className='meeting'>
        <div className="head py-2">

        Meeting Page
        <div className="pull-right py-2" style={{float:'right'}}><button className="btn btn-dark" onClick={()=> navigation('/')}>Go Home</button></div>
        </div>
        {
            meetLink!=''?<iframe class="" style={{width:'100%', height:'90vh'}} src={`${meetLink}?&timer=on&logo=off&participantCount=off&precallReview=off&screenshare=off&people=off&&displayName=${name}`} allow="camera; microphone; fullscreen; speaker; display-capture" onLoad={(e)=>{console.log('loading',e)}}></iframe>:(<div class="alert alert-warning" role="alert">
            No link provided
          </div>)
        }
        
    </div>
  )
}
