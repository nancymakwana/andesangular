import { Routes, RouterModule, RoutesRecognized } from "@angular/router";
import { UserdisplayComponent } from "./userdisplay/userdisplay.component";
import { UseraddComponent } from "./userdisplay/useradd/useradd.component";
import { UsereditComponent } from "./userdisplay/useredit/useredit.component";
import { UserdeleteComponent } from "./userdisplay/userdelete/userdelete.component";
import { UserMoreDetailsComponent } from "./userdisplay/user-more-details/user-more-details.component";
import { DeliverymandisplayComponent } from "./deliverymandetails/deliverymandisplay/deliverymandisplay.component";
import { DeliverymanaddComponent } from "./deliverymandetails/deliverymanadd/deliverymanadd.component";
import { DeliverymandetailsComponent } from "./deliverymandetails/deliverymandetails.component";
import { CategoryDetailsComponent } from "./category-details/category-details.component";
import { CategoryaddComponent } from "./category-details/categoryadd/categoryadd.component";
import { CategoryeditComponent } from "./category-details/categoryedit/categoryedit.component";
import { CategorydeleteComponent } from "./category-details/categorydelete/categorydelete.component";
import { DeliverymaneditComponent } from "./deliverymandetails/deliverymanedit/deliverymanedit.component";
import { LoginComponent } from "./login/login.component";
import { UsermenuComponent } from "./usermenu/usermenu.component";
import { UserauthgaurdService } from './userauthgaurd.service';
import { DeliverymandeleteComponent } from './deliverymandetails/deliverymandelete/deliverymandelete.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { ProducteditComponent } from './productdisplay/productedit/productedit.component';
import { ProductdeleteComponent } from './productdisplay/productdelete/productdelete.component';
import { ProductdetailsComponent } from './productdisplay/productdetails/productdetails.component';
import { OrderdisplayComponent } from './orderdisplay/orderdisplay.component';
import { ImageAddComponent } from './image-add/image-add.component';
import { ImagedetailsComponent } from './image-add/imagedetails/imagedetails.component';
import { OrderdeliveryComponent } from './orderdelivery/orderdelivery.component';
import { ReturndetailsComponent } from './returndetails/returndetails.component';
import { OrderdetailsComponent } from './orderdisplay/orderAssign/orderAssign.component';
import { OrderviewmoreComponent } from './orderviewmore/orderviewmore.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

const arr: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "nav",
    canActivate:[UserauthgaurdService],
    component: UsermenuComponent,
    children: [
      { path: "", component: UserdisplayComponent },
      { path: "useradd", component: UseraddComponent },
      { path: "useredit/:user_id", component: UsereditComponent },
      { path: "userdelete/:user_id", component: UserdeleteComponent },
      { path: "userviewmore/:user_id", component: UserMoreDetailsComponent },
      { path: "deliveryman", component: DeliverymandisplayComponent },
      { path: "deliverymanadd", component: DeliverymanaddComponent },
      { path: "deliverymanedit/:user_id", component: DeliverymaneditComponent },
      { path: "deliverymandelete/:user_id", component: DeliverymandeleteComponent},
      {
        path: "deliverymanviewmore/:user_id",
        component: DeliverymandetailsComponent
      },
      { path: "category", component: CategoryDetailsComponent },
      { path: "categoryadd", component: CategoryaddComponent },
      { path: "categoryedit/:cat_id", component: CategoryeditComponent },
      { path: "categorydelete/:cat_id", component: CategorydeleteComponent },
      {path:"product",component:ProductdisplayComponent},
      {path:"productadd",component:ProductaddComponent},
      {path:"productedit/:pro_id",component:ProducteditComponent},
      {path:"productdelete/:pro_id",component:ProductdeleteComponent},
      {path:"productviewmore/:pro_id",component:ProductdetailsComponent},
      {path:"order",component:OrderdisplayComponent},
      {path:"orderAssign/:order_id",component:OrderdetailsComponent},
      {path:"imageadd/:pro_id",component:ImageAddComponent},
      {path:"imageadd/:pro_id",component:ImageAddComponent},
      {path:"imagedetails/:pro_id",component:ImagedetailsComponent},
      {path:"orderdelivery",component:OrderdeliveryComponent},
      {path:"deliveryreturn",component:ReturndetailsComponent},
      {path:"orderviewmore/:order_id",component:OrderviewmoreComponent},
      {path:"myprofile/:user_id",component:MyprofileComponent},
      // { path: "pagenotfound", component: PagenotfoundComponent },
    ]
  },
  // { path: '**', redirectTo: "/pagenotgound" }
];
export const rouingarr = RouterModule.forRoot(arr);
