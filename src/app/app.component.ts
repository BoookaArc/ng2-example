import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { GridComponent } from 'ng2-qgrid';
import { Atom, DataService } from '../data.service';
import * as fileSaver from 'file-saver';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
	static id = 'export-csv';

	@ViewChild(GridComponent) myGrid: GridComponent;
	rows: Observable<Atom[]>;

	constructor(dataService: DataService) {
		this.rows = dataService.getAtoms();
	}

	ngAfterViewInit() {
		this.myGrid.model.plugin({
			imports: {
				'fileSaver': fileSaver
			}
		});
	}
}
