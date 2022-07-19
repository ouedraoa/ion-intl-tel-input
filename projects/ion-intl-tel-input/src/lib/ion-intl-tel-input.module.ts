import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IonicSelectableModule } from 'ionic-selectable';

import { CountryPlaceholder } from './pipes/country-placeholder';
import { IonIntlTelInputValidators, IonIntlTelInputValidatorDirective } from './ion-intl-tel-input.directive';
import { IonIntlTelInputComponent } from './ion-intl-tel-input/ion-intl-tel-input.component';
import { IonIntlTelInputService } from './ion-intl-tel-input.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomMissingTranslationHandler } from './custom-missing-translation-handler.class';
import { createTranslateLoader } from './create-translate-loader.function';
import { Observable, of } from 'rxjs';

class CustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    console.log(lang)
      return of({KEY: 'value'});
  }
}

@NgModule({
  declarations: [
    CountryPlaceholder,
    IonIntlTelInputValidatorDirective,
    IonIntlTelInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler,
      },
    }),
  ],
  exports: [
    IonIntlTelInputComponent,
    IonIntlTelInputValidatorDirective
  ],
  providers: [
    IonIntlTelInputService
  ],
})
export class IonIntlTelInputModule { }
