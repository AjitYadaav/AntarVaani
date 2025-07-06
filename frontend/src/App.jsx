import { Route, Routes } from "react-router"
import HomePage from "./Pages/HomePage"
import CreatePage from "./Pages/CreatePage"
import NoteDetailPage from "./Pages/NoteDetailPage"
// import toast from "react-hot-toast"

const App = () => {
  return (
    <div className="relative h-full w-full">
      {/* <button onClick={()=>toast.success("Congrats 👏")} className="text-red-500 p-4 bg-pink-300">CLick me</button> */}

      {/*Daisy ui */}
      {/* <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button> */}

      
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />

      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/create" element = {<CreatePage/>} />
        <Route path="/note/:id" element = {<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App