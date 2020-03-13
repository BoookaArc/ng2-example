import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'column-image-basic';

	rows = [
		{
			'valid': 'https://rawgit.com/qgrid/doc/master/themes/qgrid/source/assets/favicons/android-chrome-192x192.png',
			'invalid': 'Lorem ipsum dolor',
			'withLabel': 'https://rawgit.com/qgrid/doc/master/themes/qgrid/source/assets/favicons/android-chrome-512x512.png',
			'empty': '',
			'customTemplate': 'https://rawgit.com/qgrid/doc/master/themes/qgrid/source/assets/favicons/favicon-32x32.png'
		}
	];
}
