import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {RippleModule} from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { RouterLink } from "@angular/router";

interface Tool {
  name:string,
  icon: string,
  route: string,

}

@Component({
  selector: 'app-application-list-principal',
  imports: [RippleModule, StyleClassModule, RouterLink],
  templateUrl: './application-list-principal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationListPrincipal {

  principalToolsList = signal<Tool[]>([

    {
      name:"Dashboard",
      icon:"pi pi-home mr-2",
      route:"",
    },
    {
      name:"Bookmarks",
      icon:"pi pi-bookmark mr-2",
      route:"",
    },
    {
      name:"Reports",
      icon:"pi pi-chart-line mr-2",
      route:"",
    },
    {
      name:"Team",
      icon:"pi pi-users mr-2",
      route:"",
    },
    {
      name:"Messages",
      icon:"pi pi-comments mr-2",
      route:"",
    },
    {
      name:"Calendar",
      icon:"pi pi-calendar mr-2",
      route:"",
    },
    {
      name:"Settings",
      icon:"pi pi-cog mr-2",
      route:"/settings",
    }
  ]);


}
