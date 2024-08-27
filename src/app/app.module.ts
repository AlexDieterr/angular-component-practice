import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { SharedModule } from "./shared/shared.module";
import { NewTicketComponent } from "./dashboard/tickets/new-ticket/new-ticket.component";
import { TicketComponent } from "./dashboard/tickets/ticket/ticket.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations:[AppComponent,HeaderComponent,DashboardItemComponent,ServerStatusComponent,TicketsComponent,TrafficComponent,NewTicketComponent, TicketComponent],
  imports:[SharedModule,FormsModule],
  bootstrap:[AppComponent]
  
})
export class AppModule {}