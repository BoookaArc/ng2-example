import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'column-url-basic';

	rows = [
		{
			'valid': 'http://github.com/qgrid/ng2',
			'invalid': 'Lorem ipsum dolor',
			'withLabel': 'http://github.com/qgrid/ng2',
			'null': null,
			'undefined': undefined,
			'empty': '',
			'customTemplate': 'http://github.com/qgrid/ng2'
		}
	];

	private label = 'QGRID';

	myLabel: (row: any, value?: any) => string | undefined;

	constructor() {
		const self = this;
		this.myLabel = (...args) => {
			const [_, value] = args;
			if (args.length > 1) {
				self.label = value;
				return;
			}

			return self.label;
		};
	}
}
