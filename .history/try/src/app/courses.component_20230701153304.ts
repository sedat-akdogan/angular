import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: '<h2>{{ getTitle() }}</h2>'
})
export class CoursesComponent {
    title = "List of courses";
    courses = ["Physics", ""];

    getTitle() {
        return this.title;
    }
}