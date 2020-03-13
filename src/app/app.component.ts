import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'details-row-grid';

	rows: Observable<Atom[]>;
	map = new Map<string, Observable<Atom[]>>();

	constructor(dataService: DataService) {
		this.rows = dataService.getAtoms();
	}

	getTheSamePhaseRows(atom: Atom) {
		let subject = this.map.get(atom.phase);
		if (!subject) {
			subject = this.rows.pipe(map(rows => rows.filter(row => row.phase === atom.phase).slice(0, 3)));
			this.map.set(atom.phase, subject);
		}

		return subject;
	}
}
