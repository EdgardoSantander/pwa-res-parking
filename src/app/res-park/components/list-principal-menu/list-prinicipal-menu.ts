import { Component } from '@angular/core';
import {RippleModule} from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ApplicationListMenu } from "../application-list-menu/application-list-menu";
import { ApplicationListPrincipal } from "../application-list-principal/application-list-principal";

@Component({
  selector: 'app-list-prinicipal-menu',
  imports: [RippleModule, StyleClassModule, ApplicationListMenu, ApplicationListPrincipal],
  templateUrl: './list-prinicipal-menu.html',
})
export class ListPrinicipalMenu {}
