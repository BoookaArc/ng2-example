import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { VscrollContext, VscrollService } from 'ng2-qgrid';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	static id = 'scroll-virtual-list';

	context: VscrollContext;
	items = Array.from(Array(200).keys());

	constructor(vscroll: VscrollService, cd: ChangeDetectorRef) {
		this.context = vscroll.context({
			threshold: 50,
			emit: f => {
				f();
				cd.markForCheck();
				cd.detectChanges();
			}
		});
	}
}
