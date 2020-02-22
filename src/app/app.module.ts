import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserdisplayComponent } from "./userdisplay/userdisplay.component";
import {
  MatTableModule,
  MatInputModule,
  MatDialogRef,
  MatDialogModule,
  MatRadioModule,
  MatFormFieldModule,
  MatCardModule,
  MatSelect,
  MatCheckbox,
  MatCheckboxModule,
  MatSelectModule
} from "@angular/material";
import { UsermenuComponent } from "./usermenu/usermenu.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material";
import { rouingarr } from "./app.routing";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { UseraddComponent } from "./userdisplay/useradd/useradd.component";
import { UsereditComponent } from "./userdisplay/useredit/useredit.component";
import { UserMoreDetailsComponent } from "./userdisplay/user-more-details/user-more-details.component";
import { UserdeleteComponent } from "./userdisplay/userdelete/userdelete.component";
import { DeliverymandetailsComponent } from "./deliverymandetails/deliverymandetails.component";
import { DeliverymanaddComponent } from "./deliverymandetails/deliverymanadd/deliverymanadd.component";
import { DeliverymaneditComponent } from "./deliverymandetails/deliverymanedit/deliverymanedit.component";
import { DeliverymandeleteComponent } from "./deliverymandetails/deliverymandelete/deliverymandelete.component";
import { DeliverymandisplayComponent } from "./deliverymandetails/deliverymandisplay/deliverymandisplay.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryaddComponent } from './category-details/categoryadd/categoryadd.component';
import { CategoryeditComponent } from './category-details/categoryedit/categoryedit.component';
import { CategorydeleteComponent } from './category-details/categorydelete/categorydelete.component';
import { LoginComponent } from './login/login.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { ProducteditComponent } from './productdisplay/productedit/productedit.component';
import { ProductdeleteComponent } from './productdisplay/productdelete/productdelete.component';
import { ProductdetailsComponent } from './productdisplay/productdetails/productdetails.component';
import { OrderdisplayComponent } from './orderdisplay/orderdisplay.component';

import { OrderdeliveryComponent } from './orderdelivery/orderdelivery.component';
import { ImageAddComponent } from './image-add/image-add.component';
import { ImagedetailsComponent } from './image-add/imagedetails/imagedetails.component';
import { ReturndetailsComponent } from './returndetails/returndetails.component';
import { DeliveryassignComponent } from './orderdelivery/deliveryassign/deliveryassign.component';
import { OrderdetailsComponent } from './orderdisplay/orderAssign/orderAssign.component';
import { OrderviewmoreComponent } from './orderviewmore/orderviewmore.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { TrialComponent } from './trial/trial.component';
import { ProfileconfirmComponent } from './profileconfirm/profileconfirm.component';
@NgModule({
  declarations: [
    AppComponent,
    UserdisplayComponent,
    UsermenuComponent,
    UseraddComponent,
    UsereditComponent,
    UserMoreDetailsComponent,
    UserdeleteComponent,
    DeliverymandetailsComponent,
    DeliverymanaddComponent,
    DeliverymaneditComponent,
    DeliverymandeleteComponent,
    DeliverymandisplayComponent,
    CategoryDetailsComponent,
    CategoryaddComponent,
    CategoryeditComponent,
    CategorydeleteComponent,
    LoginComponent,
    ProductdisplayComponent,
    ProductaddComponent,
    ProducteditComponent,
    ProductdeleteComponent,
    ProductdetailsComponent,
    OrderdisplayComponent,
    OrderdetailsComponent,
    OrderdeliveryComponent,
    ImageAddComponent,
    ImagedetailsComponent,
    ReturndetailsComponent,
    DeliveryassignComponent,
    OrderviewmoreComponent,
    MyprofileComponent,
    ConfirmationComponent,
    TrialComponent,
    ProfileconfirmComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    rouingarr,
    MatPaginatorModule,
    MatInputModule,
    //MatDialogRef,
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSidenavModule
  ],
  providers: [],
  //add dailog componet should be added here
  entryComponents: [UserMoreDetailsComponent,ConfirmationComponent,ProfileconfirmComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
