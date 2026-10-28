
import TaskItem from './TaskItem'

function TaskList({ tasks, onDeleteTask, onCheckboxChange, onUpdateTask, categories, isUpdatingTask, isDeletingTask }) {
    if (tasks.length === 0) {
        return <p className='task-text'>Aucune tâche à afficher.</p>
    }   
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask} onCheckboxChange={onCheckboxChange} onUpdateTask={onUpdateTask} categories={categories} isUpdatingTask={isUpdatingTask} isDeletingTask={isDeletingTask} />
      ))}
    </ul>
  )
}

export default TaskList