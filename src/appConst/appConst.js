
import { ApplicationComponent } from '../applications/Application.component';
import { ProductLinesComponent } from '../productLines/ProductLines.component';
import { GWVersionComponent } from '../GWVersion/GWVersion.component';
import { AddonsComponent } from '../addons/Addons.component';

export  const navList = [
    {path:'/',component:GWVersionComponent},
{path:'/application',component:ApplicationComponent},
{path:'/productline',component:ProductLinesComponent},
{path:'/addons',component:AddonsComponent}
];