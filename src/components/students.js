import {useState} from 'react'
import {data} from './data';
import StudentList from './studentList'
function Students() {
    const [students,setStudents] = useState(data);
    const [name, setName] = useState("")
    const [stuClass, setStuClass] = useState("")
    const [roll, setRoll] = useState("")
    const [batch, setBatch] = useState("")
    const [errorMessage, setErrorMessage] = useState('')
    const [flag, setFlag] = useState(false)
    const [updatedIndex, setUpdatedIndex] = useState(0)
    // const inputHandler = e => {
    //     console.log(e.target.name)
    //     console.log(e.target.value)
    // }
//     const deleteHandler = (stuName) =>{
// // console.log(id)
//         let newStud = students.filter((stu)=> {
//             if( stu.name !== stuName){
//                 return stu
//             }
//         })
//     console.log(newStud)
//     }
const deleteHandler = (index) =>{

            let newStud = students.filter((stu,i)=> {
                if( i !== index){
                    return stu
                }
            })
        console.log(index)
        setStudents([...newStud])
        }
const updateHandler = (student,index) =>{
        
        console.log("update stu",student)
        setUpdatedIndex(index)
        setName(student.name);
    setStuClass(student.class);
    setRoll(student.roll);
    setBatch(student.batch);
    setFlag(true)
        
}
// 
const ctaUpdateHandler = (student,index) =>{
    if(name !== "" && batch !== "" && roll !== "" && stuClass !== ""){
        let student ={
        name,
        batch,
        roll,
        class:stuClass,
    }
    let updateStud = students.map((stud,index) => {
        if (updatedIndex === index) {
            return student
        } else {
            return stud
        }
    })
    console.log("student" ,student);
    setStudents([...updateStud]);
    setName('');
    setStuClass('');
    setRoll('');
    setBatch('');
    setFlag()
}
else{
    setErrorMessage('Invalid inputs');
    alert("wron");
}


}
// 
    const ctaHandler = () => {
        if(name !== "" && batch !== "" && roll !== "" && stuClass !== ""){
        let student ={
        name,
        batch,
        roll,
        class:stuClass,
    }
    console.log("student" ,student);
    setStudents([...students,student]);
    setName('');
    setStuClass('');
    setRoll('');
    setBatch('');
    setErrorMessage('');
}
else{
    setErrorMessage('Invalid inputs');
    alert("wron");
}

}
    return (
        <div>
            <h3>New Students Add</h3>
            <input type='text' value={name} name="Name" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            <input type='text' value={ batch} name="Batch" placeholder="Batch" onChange={(e)=>setBatch(e.target.value)} />
            <input type='text' value={roll} name="Roll No" placeholder="Roll No" onChange={(e)=>setRoll(e.target.value)} />
            <input type='text' value={ stuClass} name="Class" placeholder="Class" onChange={(e)=>setStuClass(e.target.value)} />
           {
               flag ? 
               <button onClick={ctaUpdateHandler}>update</button>
               :
               <button onClick={ctaHandler}>Submint</button>
           }
            <p style={{backgroundColor:'red',color:'white'}}>
                {
                errorMessage
                }
            </p>

            <hr></hr>
            <h3>List of Students</h3>
            <table>
        
                <tr>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Roll</th>
                    <th>Class</th>
                </tr>
                {
                    students.map((item,index)=>{
                        return <StudentList index={index} student={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />
                    })
                }
         
            </table>
        </div>
    )
}

export default Students
