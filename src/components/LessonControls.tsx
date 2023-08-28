import { Button } from "primereact/button";
import useLessonControls from "../hooks/lessonControlHook";

export default function LessonControls() {
  const { currentIndex, next, prev, isFirst, isLast } = useLessonControls();
  return (
    <div className="flex justify-end">
      <div className="flex space-x-4">
        <Button
          label="Anterior Tema"
          icon="pi pi-arrow-circle-left"
          link
          onClick={() => {
            prev();
          }}
          disabled={isFirst}
        />
        <Button
          label="Siguiente Tema"
          icon="pi pi-arrow-circle-right"
          iconPos="right"
          link
          onClick={() => {
            next();
          }}
          disabled={isLast}
        />
      </div>
    </div>
  );
}
