import { Component, inject, signal } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AvailableLanguages, availableLanguages } from './transloco-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App {
  private transloco = inject(TranslocoService);
 public languages: { code: availableLanguages; name: string }[] = [
  { code: availableLanguages.EN, name: 'language.en' },
  { code: availableLanguages.ES, name: 'language.es' }
];
  public chageLanguage(lang: availableLanguages) {
    this.transloco.setActiveLang(lang);
  }

  public getlanguage() {
    return 'languages.'+ this.transloco.getActiveLang();
  }
  protected readonly title = signal('frontJQHelpdesk');
}
