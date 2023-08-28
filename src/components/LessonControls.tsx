import { Button } from "primereact/button";
import useLessonControls from "../hooks/lessonControlHook";

export default function LessonControls() {
  const { currentIndex, next, prev, isFirst, isLast } = useLessonControls();
  return (
    <div className="flex justify-end">
      <div className="flex space-x-4">
        <Button
          onClick={() => {
            prev();
          }}
          disabled={isFirst}
          icon="pi pi-arrow-circle-left"
        />
        <Button
          onClick={() => {
            next();
          }}
          disabled={isLast}
          icon="pi pi-arrow-circle-right"
        />
      </div>
    </div>
  );
}
