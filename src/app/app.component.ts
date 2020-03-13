import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable, of } from 'rxjs';
import { Command } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'action-bar-basic';

	canLoad = false;
	rows$ = this.dataService.getAtoms();

	loadCommand = new Command({
		execute: () => {
			this.rows$ = this.dataService.getAtoms();
			this.canLoad = false;

			this.cd.markForCheck();
			this.cd.detectChanges();
		},
		canExecute: () => this.canLoad,
		shortcut: 'ctrl+l'
	});

	clearCommand = new Command({
		execute: () => {
			this.rows$ = of([]);
			this.canLoad = true;

			this.cd.markForCheck();
			this.cd.detectChanges();
		},
		canExecute: () => !this.canLoad,
		shortcut: 'ctrl+d'
	});

	constructor(
		private dataService: DataService,
		private cd: ChangeDetectorRef
	) {
	}
}
