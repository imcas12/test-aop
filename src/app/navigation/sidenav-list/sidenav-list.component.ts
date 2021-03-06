import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'abe-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
    @Output() sidenavClose = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    public onSidenavClose = () => {
        this.sidenavClose.emit();
    }

}