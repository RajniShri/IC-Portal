
import { ApplicationComponent } from '../applications/Application.component';
import { ProductLinesComponent } from '../productLines/ProductLines.component';
import { AddonsComponent } from '../addons/Addons.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

export  const navList = [
    {path:'/',component:ApplicationComponent},
{path:'/application',component:ApplicationComponent},
{path:'/productLines',component:ProductLinesComponent},
{path:'/addons',component:AddonsComponent},
{path:'/confirmation',component:ConfirmationComponent}
];