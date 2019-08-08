import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation, OnDestroy } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
// tslint:disable-next-line: component-class-suffix
export class ExampleLiveRows {
	static id = 'live-rows';

	rows: Observable<Atom[]>;

	constructor(private dataService: DataService) {
		this.rows = dataService.getAtoms();
	}
}
