import { Outlet } from "react-router-dom"
import LessonControls from "../components/LessonControls"
export default function Lesson() {

    return <div className="px-5">
        <Outlet />
        <LessonControls />
    </div>
}