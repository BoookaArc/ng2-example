import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as XLSX from 'xlsx';

import { DataService, Atom } from '../data.service';
import { GridComponent } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
	static id = 'import-basic';

	@ViewChild(GridComponent) myGrid: GridComponent;
	rows: Observable<Atom[]> = of([]);

	ngAfterViewInit() {
		this.myGrid.model.plugin({
			imports: {
				'xlsx': XLSX
			}
		});
	}
}
