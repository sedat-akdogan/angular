import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor="></li>
    </ul>
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses = ["Physics", "English", "Math"];

    getTitle() {
        return this.title;
    }
}