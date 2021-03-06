import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a [routerLink]="['']" routerLinkActive="active">About</a>
                            <a [routerLink]="['/carpart']" routerLinkActive="active">CarPart</a>
                            <a [routerLink]="['/guestbook']" routerLinkActive="active">Guestbook</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main role="main">
            <router-outlet></router-outlet>
        </main>
    `
})
export class AppComponent { }