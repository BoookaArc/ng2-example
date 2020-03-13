import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { GridModel, Grid } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
	static id = 'define-column-async';

	gridModel: GridModel;

	constructor(private dataService: DataService, qgrid: Grid) {
		this.gridModel = qgrid.model();
	}

	ngOnInit() {
		this.dataService
			.getAtoms()
			.subscribe(rows => {
				this.gridModel.data({ rows });

				setTimeout(() => {
					this.gridModel.data({
						columns: [
							{
								key: 'source',
								width: 300
							},
							{
								key: 'symbol+name',
								label: row => `[${row.symbol}]${row.name}`,
								value: row => row.symbol,
								width: 150
							}
						]
					});
				}, 1000);
			});
	}
}
