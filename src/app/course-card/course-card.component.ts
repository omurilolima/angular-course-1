import { Component, Input, Output } from "@angular/core";
import { COURSES } from "src/db-data";
import { Course } from "../model/course";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "course-card",
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course: Course;

  @Input({ required: true })
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Course card component - button clicked");
    this.courseSelected.emit(this.course);
  }
}
