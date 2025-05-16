import { useState } from "react"

import Search from "./Search"
import TaskAction from "./TaskAction"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"

export default function TaskBoard() {
  const defdefaultTasks = [
    {
      id: crypto.randomUUID(),
      title: "Task 1",
      description: "Description for Task 1",
      tags: ["tag1", "tag2"],
      priority: "High",
      isFevorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Task 2",
      description: "Description for Task 2",
      tags: ["tag1", "tag2", "tag3"],
      priority: "Low",
      isFevorite: false,
    },
  ]
  const [tasks, setTasks] = useState(defdefaultTasks)
  const [showTaskModal, setShowTaskModal] = useState(false)
  const [taskToUpdate, setTaskToUpdate] = useState(null)

  const handleSubmit = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask])
    } else {
      const updatedTasks = tasks.map((task) => {
        if (task.id === newTask.id) {
          return newTask
        }

        return task
      })

      setTasks(updatedTasks)
    }

    setShowTaskModal(false)
  }

  const handleTaskEdit = (task) => {
    setTaskToUpdate(task)
    setShowTaskModal(true)
  }

  const handleModalClose = () => {
    setShowTaskModal(false)
    setTaskToUpdate(null)
  }

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  const handleDeleteAll = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all tasks?"
    )
    if (confirmDelete) {
      setTasks([])
    }
  }

  const handleFevorite = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id)

    const updatedTasks = [...tasks]
    updatedTasks[taskIndex].isFevorite = !updatedTasks[taskIndex].isFevorite
    setTasks(updatedTasks)
  }

  const handleSearch = (searchTerm) => {
    const filteredTasks = defdefaultTasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setTasks(filteredTasks)
  }

  return (
    <section className="mb-20" id="tasks">
      {showTaskModal && (
        <TaskForm
          handleSubmit={handleSubmit}
          taskToUpdate={taskToUpdate}
          handleClose={handleModalClose}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <Search handleSearch={handleSearch} />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            handleAddTask={() => setShowTaskModal(true)}
            handleDeleteAll={handleDeleteAll}
          />
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              handleDelete={handleDelete}
              handleTaskEdit={handleTaskEdit}
              handleFevorite={handleFevorite}
            />
          ) : (
            <div className="text-center text-gray-400">
              No tasks available. Please add a task.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
