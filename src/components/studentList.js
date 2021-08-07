import React from 'react'

function StudentList({student,index,deleteHandler,updateHandler, setStudent}) {
    return (
        <>
            <tr>
                <td>{index}</td>
                <td>{student.name}</td>
                <td>{student.batch}</td>
                <td>{student.roll}</td>
                <td>{student.class}</td>
                <td>
                <button onClick={()=>deleteHandler(index)}>Delete</button>
                </td>
                <td>
                <button onClick={()=>updateHandler(student,index)}>Update</button>
                </td>
                
            </tr>
        </>
    )
}

export default StudentList
