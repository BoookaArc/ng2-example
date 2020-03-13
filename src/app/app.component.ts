import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'column-currency-basic';

	rows = [
		{
			'number': 100,
			'euro': 200,
			'null': null,
			'undefined': undefined,
			'empty': '',
			'string': '120',
			'customTemplate': 30
		}
	];
}
