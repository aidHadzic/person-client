import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { PersonComponent } from './person.component';
import { PersonSaveComponent } from './save/person-save.component';
import { PersonRemoveComponent } from './remove/person-remove.component';

import { PersonService } from './person.service';
import { TranslateModule } from '@ngx-translate/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { personReducers } from '../store/reducers/person.reducer';
import { PersonEffects } from '../store/effects/person.effects';

@NgModule({
  declarations: [PersonComponent, PersonSaveComponent, PersonRemoveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbPaginationModule,
    TranslateModule,
    StoreModule.forRoot({ persons: personReducers }),
    EffectsModule.forRoot([PersonEffects]),
  ],
  exports: [PersonComponent],
  providers: [PersonService],
  entryComponents: [PersonRemoveComponent, PersonSaveComponent]
})
export class PersonModule { }
