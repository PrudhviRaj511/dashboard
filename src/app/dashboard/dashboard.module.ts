import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { AgmCoreModule } from "@agm/core";
import { MapsComponent } from "../maps/maps.component";

@NgModule({
  declarations: [DashboardComponent, CommonModule],
  imports: [
    CommonModule,
    MapsComponent,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAxbTXDDZHKzo98jTK0pCRC9_kuNBLqgIs",
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
