
import { ApplicationComponent } from '../applications/Application.component';
import { ProductLinesComponent } from '../productLines/ProductLines.component';
import { AddonsComponent } from '../addons/Addons.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { HomeComponent } from '../home.component';

export  const navList = [
    {path:'/',component:HomeComponent},
{path:'/application',component:ApplicationComponent},
{path:'/productLines',component:ProductLinesComponent},
{path:'/addons',component:AddonsComponent},
{path:'/confirmation',component:ConfirmationComponent}
];