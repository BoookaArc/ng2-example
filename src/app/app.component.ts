import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { GridModel, Grid } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'destroy-grid-model';

	gridModel: GridModel;
	isVisible = true;

	constructor(dataService: DataService, qgrid: Grid) {
		this.gridModel = qgrid.model();

		dataService
			.getPeople()
			.subscribe(rows => this.gridModel.data({ rows }));
	}

	get handlerCount(): number {
		const model = this.gridModel as { [key: string]: any };
		let count = 0;
		for (const key in model) {
			if (model.hasOwnProperty(key) && key.endsWith('Changed')) {
				const event = model[key];

				// `handlers` is private really
				const { length } = event.handlers;
				if (length) {
					count += length;
				}
			}
		}
		return count;
	}
}
