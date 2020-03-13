import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import { DataService, Human } from '../data.service';
import { Observable } from 'rxjs';
import { GridComponent, Command, Grid } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
	static id = 'data-row-add';

	@ViewChild(GridComponent, { static: true }) grid: GridComponent;
	rows: Observable<Human[]>;

	addRow = new Command({
		execute: () => {
			const { model } = this.grid;

			const atom = new Human();
			const rows = Array.from(model.data().rows).concat([atom]);
			model.data({ rows });

			// focus last row, second column
			const service = this.qgrid.service(model);
			service.focus(rows.length - 1);
		}
	});


	constructor(dataService: DataService, private qgrid: Grid) {
		this.rows = dataService.getPeople();
	}

	ngAfterViewInit() {
		const { model } = this.grid;
		model.edit({
			mode: 'cell'
		});
	}
}
