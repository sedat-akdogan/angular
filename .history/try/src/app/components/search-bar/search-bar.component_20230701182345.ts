import { Component } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{

    constructor(private router: Router) {}

    ngOnInit(): void {}

    onSubmit(form: ) {
        
    }
}
