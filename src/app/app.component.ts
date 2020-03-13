import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';
import { GridModel, Action, GridService, Command, Grid } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'action-bar-on-enter';

	rows: Observable<Atom[]>;
	gridModel: GridModel;
	gridService: GridService;

	rowOptions = {
		trigger: 'focus',
		actions: [
			new Action(new Command(), 'Hello'),
			new Action(new Command(), 'World')
		]
	};

	pickCommand = new Command({
		execute: () => {
			const { rowIndex, columnIndex } = this.gridModel.navigation();
			const { columns } = this.gridModel.view();

			const newColumnIndex = columns.findIndex(c => c.key === 'rowOptions');

			this.gridService.focus(rowIndex, newColumnIndex);

			// Comment this out if don't need to revert focus back after action
			this.gridModel.editChanged.watch((e, off) => {
				if (e.hasChanges('state') && e.state.state === 'view') {
					this.gridService.focus(rowIndex, columnIndex);
					off();
				}
			});
		},
		canExecute: () => {
			const { items } = this.gridModel.selection();
			return items.length > 0;
		},
		shortcut: 'enter'
	});

	constructor(dataService: DataService, qgrid: Grid) {
		this.rows = dataService.getAtoms();

		this.gridModel = qgrid.model();
		this.gridService = qgrid.service(this.gridModel);
	}
}