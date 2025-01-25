import React from 'react'

const ProfileCard = ({Props}) => {
  return (
    <div>
        <p>name : {Props.name}</p>
        <p>age {Props.age}</p>
        <p>location : {Props.location}</p>
      
    </div>
  )
}

export default ProfileCard
