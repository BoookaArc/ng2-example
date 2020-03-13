import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'column-number-basic';

	rows = [
		{
			'number': 100,
			'format3.1-5': Math.PI,
			'max': Number.MAX_VALUE,
			'min': Number.MIN_VALUE,
			'null': null,
			'undefined': undefined,
			'empty': '',
			'string': '120',
			'customTemplate': 30
		}
	];
}
