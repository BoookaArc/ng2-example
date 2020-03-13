import { DataService, Human } from '../data.service';
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { GridComponent } from 'ng2-qgrid';
import { Observable } from 'rxjs';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleColumnColumnVisibilityBasicComponent {
	static id = 'column-visibility-basic';

	rows$: Observable<Human[]> = this.dataService.getPeople();

	showLastName = true;
	showFirstName = true;

	@ViewChild(GridComponent) grid: GridComponent;

	constructor(private dataService: DataService) {
	}

	hideCity() {
		const { model } = this.grid;
		const columns = model.data().columns.filter(x => x.key !== 'city');

		model.columnList({ columns });
		model.data({ columns });

	}
}
