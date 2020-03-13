import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'column-bool-basic';

	rows = [
		{
			'true': true,
			'false': false,
			'null': null,
			'undefined': undefined,
			'yesNo': 'yes',
			'noYes': 'no',
			'nullYesNo': null,
			'triggerFocus': true,
			'customTemplate': true
		}
	];
}
