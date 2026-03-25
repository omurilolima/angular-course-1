import { Component, Input, Output } from "@angular/core";
import { Course } from "../model/course";
import { EventEmitter } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
  selector: "course-card",
  standalone: true,
  imports: [NgClass],
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

  onCourseViewed() {
    console.log("Course card component - button clicked");
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category === "BEGINNER") {
      return "beginner";
    }
  }
}
