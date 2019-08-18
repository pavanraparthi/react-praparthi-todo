import React ,{ Component} from 'react';

const Todo = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.desc}</span>
      <span>{props.priority}</span>
    </div>
  )
}

class Todos extends Component {
  render () {
    return (
      <div>
      {
        this.props.todos.map((todo) => {
          return(
            <Todo name={todo.name} 
            desc={todo.desc}
            priority={todo.priority}>
            </Todo>)
        })
      }
      </div>
    )
  }
}
export default Todos;