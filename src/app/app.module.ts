import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CourseCardComponent } from "./course-card/course-card.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CourseCardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
