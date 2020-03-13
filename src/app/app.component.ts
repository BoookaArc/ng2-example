import { Component, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { GridModel, Grid, PipeContext } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'pipe-grid-basic';

	gridModel: GridModel;

	constructor(dataService: DataService, qgrid: Grid, zone: NgZone) {
		this.gridModel = qgrid.model();

		const myDataPipe =
			(rows: any[], context: PipeContext, next: (data: any[]) => void) => {
				zone.runOutsideAngular(() =>
					setTimeout(() =>
							dataService
								.getAtoms()
								.subscribe(next)
						, 1000)
				);
			};

		this.gridModel.data({
			pipe: [myDataPipe].concat(qgrid.pipeUnit.view)
		});
	}
}
