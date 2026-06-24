import { Component, ValueSansProvider } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import {Drawer, DrawerModule} from 'primeng/drawer';
import {RippleModule} from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ListPrinicipalMenu } from "../list-principal-menu/list-prinicipal-menu";


@Component({
  selector: 'app-side-bar-home',
  imports: [AvatarModule, ButtonModule, DrawerModule, RippleModule, StyleClassModule, ListPrinicipalMenu],
  templateUrl: './side-bar-home.html',
  styleUrls: ['./side-bar-home.css'],
})
export class SideBarHome {
  visible: boolean = false;

  closeCallback(): void {
    this.visible = false;
  }
}
