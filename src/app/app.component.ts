import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'layer-grid-blank';

	rows: Observable<Atom[]>;

	constructor(private dataService: DataService) {
	}

	loadData() {
		this.rows = this.dataService.getAtoms();
	}
}
