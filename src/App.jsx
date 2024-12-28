import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeProvider from './components/ThemeProvider'
import FunctionalComponent from './components/FunctionalComponent'
import NavBar from './components/nav-bar'
import KanbanBoard from './components/kanban-board'



function App() {
    const tasks = [
      {
        name: 'task 1', stage: 0
      },{
        name: 'task 2', stage: 1
      },{
        name: 'task 3', stage: 2
      },{
        name: 'task 4', stage: 3
      },
    ];
    const tasks2 = [
      {name: 'task 1', stage: 0},
      {name: 'task 2', stage: 1},
      {name: 'task 3', stage: 2},
      {name: 'task 4', stage: 3},
      {name: 'task 5', stage: 2},
      {name: 'task 6', stage: 3},
      {name: 'task 7', stage: 1},
    ]
    return (
      <div>
        <h1 header>Kanban Board</h1>
        <KanbanBoard tasks ={tasks2}/>
      </div>
    );
  
  
}

function firstQuestion() {
  return (
    <>
   <NavBar/>
    </>
  )
}
export default App
