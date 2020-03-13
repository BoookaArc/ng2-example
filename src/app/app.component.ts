import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FetchContext, GridComponent } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
	static id = 'filter-column-fetch';

	@ViewChild(GridComponent) myGrid: GridComponent;
	rows: Observable<Atom[]>;

	constructor(private dataService: DataService) {
		this.rows = dataService.getAtoms();
	}

	ngAfterViewInit() {
		const { model } = this.myGrid;
		model.filter({
			fetch: (key: string, context: FetchContext) =>
				this.dataService
					.getAtoms()
					.pipe(
						map(atoms => {
							const { search, value, take, skip } = context;
							const columnSearch = search.toLowerCase();

							const columnData = atoms.map(value);
							const filteredData = columnSearch
								? columnData.filter(x => ('' + x).toLowerCase().indexOf(columnSearch) >= 0)
								: columnData;

							filteredData.sort();
							return filteredData.slice(skip, skip + take);
						}))
		});
	}
}
