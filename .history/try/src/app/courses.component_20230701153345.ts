import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: <h2>{{ getTitle() }}</h2>'
})

export class CoursesComponent {
    title = "List of courses";
    courses = ["Physics", "English", "Math"];

    getTitle() {
        return this.title;
    }
}