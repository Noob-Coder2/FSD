import React from 'react'
import './Student.css'

function Student({data}) {
    return (
        <div className='id_card'>
            {/*
                JSON.stringify(data)
            */}
            
            <table>
                <thead>
                    <h2>{data.college}</h2>
                    {data.pic}
                </thead>
                <tbody>
                    {/* <tr>
                        <th>Roll Number</th>
                        <th>Name</th>
                        <th>Branch</th>
                    </tr> */}
                    <tr>

                        <td>{data.roll}</td>
                        <td>{data.name}</td>
                        <td>{data.branch}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Student
