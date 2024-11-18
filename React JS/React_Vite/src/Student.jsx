import React from 'react'
import './Student.css'

function Student(props) {
  return (
    <div className='id_card'>
        {props.college}
    <table>
        <tbody>
            <tr>
                <th>Roll Number</th>
                <th>Name</th>
                <th>Branch</th>
            </tr>
            <tr>
                <td>{props.roll}</td>
                <td>{props.name}</td>
                <td>{props.branch}</td>
            </tr>
            <tr>
                <td>65</td>
                <td>Mohan</td>
                <td>CSE</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Student
