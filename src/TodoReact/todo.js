import React from 'react';

const TodoList = ({todos,index, setTodos, setEditTodo}) => {


   const handleComplete=(todo)=>{
    setTodos(
        todos.map((item)=>{
           if (item.id === todo.id ){
            return {...item, completed : !item.completed};
           }
           return item;
        })
        );
        };

   const handleEdit=({id})=>{
    
        const findTodo = todos.find((todo)=> todo.id === id);
        setEditTodo(findTodo);
   }

    const handleDelete=()=>{
        const newTodos = [...todos];
        newTodos.splice(index,1)
        setTodos(newTodos)
    }

  return (
    <div><br></br>
        { todos.map((todo)=>(
            <p  key={todo.id}>
                <input
                type='text'
                value={todo.title}
                style={{ textDecoration: todo.completed ? "line-through" : "" }}
                // className={`list ${todo.completed ? "complete" : ""}`}
                onChange={(event)=> event.preventDefault()} /> <br></br>
                <div>
                    <button onClick={()=>handleComplete(todo)}>Done</button>&nbsp;
                    <button onClick={()=>handleEdit(todo)} >Edit</button>&nbsp;
                    <button onClick={()=> handleDelete(todo)} >X</button><br></br>&nbsp;
                </div>
            </p>
        ))}
        
    </div>
  )
}

export default TodoList;