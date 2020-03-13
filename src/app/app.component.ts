import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';
import { Column } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'define-column-type';

	rows: Observable<Atom[]>;
	columns: Column[] = [{
		key: 'number',
		type: 'number'
	}, {
		key: 'symbol',
		type: 'number'
	}];

	constructor(dataService: DataService) {
		this.rows = dataService.getAtoms();
	}
}
