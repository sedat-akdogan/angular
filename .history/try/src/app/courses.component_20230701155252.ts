import { CoursesService } from './../../../.history/try/src/app/courses.service_20230701154609';
import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{ course}}
        </li>
    </ul>
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses: any;

    constructor() {
        let service = new CoursesService
    }
}