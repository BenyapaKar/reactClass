import React from "react"
function Todo(props) {

    const filter = props.filter;
    const onCheckBox = props.onCheckBoxChange;

    const onCheckBoxChange = (id,e) => {
        e.preventDefault();
        console.log("Todos checkbox change: ",id);
        onCheckBox(id);
    }

    const onDelete = props.onDeleteCheck;
    const onDeleteCheck = (id) => {
        console.log("onDeleteCheck: ",id);
        onDelete(id);
    }
    const taskList = props.taskList;
    const listItem = taskList
        .filter(e => {
            if (filter === "done") return e.done;
            if (filter === "active") return !e.done;
            return true;
        }
        )
        .map(e => {

            return (

                <li key={e.id} className="list-group-item">
                    <div className="list-item">
                        <input id={e.id} type="checkbox" defaultChecked={e.done} onChange={(event)=>onCheckBoxChange(e.id,event)} />
                        <label htmlFor={e.id}>{e.content}</label>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn__danger" onClick={()=>onDeleteCheck(e.id)}>
                            Delete
                        </button>
                    </div>
                </li>

                // <li>
                // {e.id},{e.content},{`${e.done}`}
                // </li>


            )

        });

    return (
        <>
            <h2 id="list-heading">3 tasks remaining</h2>
            <ul className="list-group">
                {listItem}
            </ul>
        </>
    )
}
export default Todo;