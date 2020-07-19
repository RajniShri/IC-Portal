
import { ApplicationComponent } from '../applications/Application.component';
import { ProductLinesComponent } from '../productLines/ProductLines.component';
import { AddonsComponent } from '../addons/Addons.component';

export  const navList = [
{path:'/application',component:ApplicationComponent},
{path:'/productline',component:ProductLinesComponent},
{path:'/addons',component:AddonsComponent}
];