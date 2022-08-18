import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function LandingPage({ meetLink, setMeetLink, name, setName, meetings, setMeetings }) {

   
    const navigation = useNavigate()

    const createMeeting = () => {
        let dateNow = new Date()
        dateNow.setHours(dateNow.getHours()+1)
        dateNow.setSeconds(0)
        dateNow.setMilliseconds(0)
        console.log(dateNow.toISOString())
        let myHead = new Headers()
        myHead.append("Content-Type", "application/json")
        fetch('https://konsarutanto-backend.herokuapp.com/api/meeting/',
        {
            method: 'POST',
            body:JSON.stringify({
                end_date: dateNow.toISOString()
              }),
            headers:myHead
        })
        .then(res => res.json())
        .then((res) => {
            setMeetings([...meetings, res])
        })
    }

  return (
    <div>
      <div class="alert alert-primary" role="alert">
        Meeting Demo
      </div>
        
        <div className="container">
        <input
              className="w-100 p-1 my-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Display Name"
            />
            {meetings.map(((meeting)=>{
                return(
                <div className="alert alert-info row align-items-center">
                    <div className="col-10">
                        {meeting.room_url} 
                    </div>
                    <div className="col-2">
                        <button className="btn btn-dark" style={{float:'right'}} onClick={()=>{
                            setMeetLink(meeting.room_url)
                            navigation('/meeting')
                        }}>Join!</button>
                    </div>
                    </div>
                    )
            }))}
            <button className="btn btn-dark" onClick={createMeeting}>Create Meeting!</button>
        </div>




      {/* <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-8">
            <input
              className="w-100 p-1"
              value={meetLink}
              onChange={(e) => setMeetLink(e.target.value)}
              placeholder="Enter meeting link here"
            />
          </div>
          <div className="col-2">
            <input
              className="w-100 p-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Display Name"
            />
          </div>
          <div className="col-2">
            <button className="btn btn-dark" onClick={()=> navigation('/meeting')}>Join!</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
