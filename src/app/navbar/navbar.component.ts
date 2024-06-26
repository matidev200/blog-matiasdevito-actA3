import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    isNavbarCollapsed = true;

    toggleNavbar(): void {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }
}
