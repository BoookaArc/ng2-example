import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GridModel, Grid } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'dynamic-column-model';

	gridModel: GridModel;

	constructor(private qgrid: Grid) {
		this.gridModel = qgrid.model();
		this.reset();
	}

	addColumn(side) {
		const id = this.getRandomId();
		const column = {
			type: 'text',
			key: id,
			title: `${side} - ${id}`
		};

		const data = this.gridModel.data();
		const columns = data.columns.slice();
		const rows = data.rows.slice();

		if (side === 'left') {
			columns.unshift(column);
		} else if (side === 'right') {
			columns.push(column);
		} else {
			const middlePos = columns.length % 2 === 0
				? columns.length / 2
				: Math.floor(columns.length / 2);
			columns.splice(middlePos, 0, column);
		}
		rows.forEach(r => r[id] = `value - ${id}`);
		this.gridModel.data({ columns, rows });
	}

	addGroup() {
		const groupId = this.getRandomId();
		const childColumns = [];
		for (let i = 0; i < 3; i++) {
			childColumns.push({
				type: 'text',
				key: `${groupId}Child${i}`,
				path: `${groupId}.child${i}`,
				title: `child - ${groupId} - ${i}`,
				value: () => `value - ${i}`
			});
		}
		const groupColumn = {
			type: 'cohort',
			key: groupId,
			children: childColumns,
			title: `group - ${groupId}`
		};

		const data = this.gridModel.data();
		const columns = data.columns.slice();
		columns.push(groupColumn);
		this.gridModel.data({ columns });
	}

	reset() {
		this.gridModel.data({
			columns: [],
			rows: new Array(100).fill({})
		});
	}

	private getRandomId() {
		let id = '';
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

		for (let i = 0; i < 5; i++) {
			id += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		return id;
	}
}
