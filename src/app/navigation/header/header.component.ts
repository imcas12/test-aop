import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'abe-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() public sidenavToggle = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    public onToggleSidenav = () => {
        this.sidenavToggle.emit();
    }

}