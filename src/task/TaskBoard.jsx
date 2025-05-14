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

  return (
    <section className="mb-20" id="tasks">
      {showTaskModal && <TaskForm />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <Search />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction handleAddTask={() => setShowTaskModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  )
}
