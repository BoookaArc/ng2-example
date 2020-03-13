import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'key-with-symbols';

	rows = [{
		'key.With.Symbols': {
			'sub.Key.With."."': 'sub-key with dot',
			'sub.Key.With."@"': 'sub-key with "@"',
			'sub.Key.With.","': 'sub-key with ","',
			'sub.Key.With."!"': 'sub-key with "!"',
			'sub.Key.With."$"': 'sub-key with "$"',
			'sub.Key.With."?"': 'sub-key with "?"',
			'sub.Key.With."\'"': 'sub-key with "\'"',
			'sub.Key.With."^"': 'sub-key with "^"',
			'sub.Key.With.";"': 'sub-key with ";"',
			'sub.Key.With."#"': 'sub-key with "#"',
			'sub.Key.With."%"': 'sub-key with "%"'
		}
	}];
}
