import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'grid-list-basic';

	models: Observable<any[]>;

	constructor(dataService: DataService) {
		this.models = of([{
			columns: [{
				key: 'number',
				title: 'Number'
			}, {
				key: 'name',
				title: 'Name'
			}
			],
			rows: dataService.getAtoms()
		}
		]);
	}
}
