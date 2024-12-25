import { useState } from "react"
import "./App.css"
function Todo(){
    const[task,Settask]=useState(["Go to office","complete the task"])
    const[newtask,Setnewtask]=useState("");
    
    function Myinput(e){
        Setnewtask(e.target.value);
    }
    function Addbutton(){
        if(newtask!==""){
        Settask([...task,newtask])
        Setnewtask("")
        }else{
            alert("Enter some text...!")
        }
    }
    function Deleteitems(index){
        const confirm = window.confirm("Are you delete this...?");
        if(confirm){
            const deleteitem = task.filter((items,Element)=>
                Element!==index);
                Settask(deleteitem)
        }
       
        }
    
        function Updateitem(index) {
            const updatetask = window.prompt("Update your task:",task[index]);
            if(updatetask !==null){
                const update = task.map((item,i)=>{
                return   i===index ? updatetask : item
                })
                Settask(update)
            }
          }
        
    
   return(
    <>
        <h1>To-Do-List</h1>
        <div className="To-do-content">
            <input type="text" placeholder="Enter your task"
            value={newtask} onChange={Myinput} />
            <button onClick={Addbutton}>Add</button>
        </div>
        <ol>
            {task.map((tasks,index)=>{
                return <li key={index}>{tasks}
                <button onClick={()=>{Updateitem(index)}}>update</button>
                <button onClick={()=>{Deleteitems(index)}}>Delete</button></li>
            })}
        </ol>
    </>
   )
}
export default Todo