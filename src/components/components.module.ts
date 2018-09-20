import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { ClubnewsComponent } from './clubnews/clubnews';
@NgModule({
	declarations: [AccordionComponent,
    ClubnewsComponent],
	imports: [],
	exports: [AccordionComponent,
    ClubnewsComponent]
})
export class ComponentsModule {}
