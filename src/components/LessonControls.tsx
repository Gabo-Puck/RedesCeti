import { Button } from "primereact/button";
import useLessonControls from "../hooks/lessonControlHook";

export default function LessonControls() {
    const { currentIndex, next, prev, isFirst, isLast } = useLessonControls();
    return <div className="flex justify-end">
        <div className="flex space-x-4">
            <Button onClick={() => { prev() }} disabled={isFirst}>{"<<"}</Button>
            <Button onClick={() => { next() }} disabled={isLast}>{">>"}</Button>
        </div>
    </div>
}