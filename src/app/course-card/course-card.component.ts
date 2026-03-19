import { Component, Input, Output } from "@angular/core";
import { NgIf } from "@angular/common";
import { Course } from "../model/course";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "course-card",
  standalone: true,
  imports: [NgIf],
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
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

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("Course card component - button clicked");
    this.courseSelected.emit(this.course);
  }
}
