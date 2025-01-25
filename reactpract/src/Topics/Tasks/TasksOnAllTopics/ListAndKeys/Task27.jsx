import React from 'react'

const Task27 = () => {
    const students=[
        {
            name:"cristiano",
            grade:7
        },
        {
            name:"messi",
            grade:10
        },
        {
            name:"Toni Kross",
            grade:9
        }
    ]
    return (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name}: {student.grade}
            </li>
          ))}
        </ul>
      );
}

export default Task27
