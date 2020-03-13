import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'column-array-basic';

	rows = [
		{
			'strings': ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
			'numbers': [Number.MIN_SAFE_INTEGER, 1, Math.PI, 5, 7, 11, 13, 17, 19, 23, Number.MAX_VALUE],
			'booleans': [true, false, true],
			'nulls': [null, undefined, ''],
			'dates': [new Date(2018, 1, 12), new Date(2018, 2, 13)],
			'customTemplate': ['Lorem', 'ipsum', 'dolor', 'sit', 'amet']
		}
	];
}
