import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'column-type-safe';

	rows = [
		{
			notNumber: '1',
			notCurrency: '10',
			notDate: '1983-09-18',
			notBoolean: 'true',
			notEmail: 'john@mail.com',
			notTime: '12:00',
			notImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hydrogen_Spectra.jpg',
			notArray: ['1', '2', '3']
		},
		{
			notNumber: 'some text',
			notCurrency: 'some text',
			notDate: 'some text',
			notBoolean: 'some text',
			notEmail: 'some text',
			notTime: 'some text',
			notImage: 'some text',
			notArray: 'some text'
		}
	];
}
