import { Locator, Page } from "@playwright/test";

export class MainPage {
  // общий контекст для страницы
  readonly page: Page;

  // кнопка для перехода на сайт vakuu.com в разделе "page"
  readonly companyButtonPage: Locator;

  // кнопка для перехода на сайт vakuu.com в разделе "footer"
  readonly companyButtonFooter: Locator

  // кнопка для раздела "Blog"
  readonly blogButton: Locator;

  // кнопка переключения языка
  readonly languageSelector: Locator;
  readonly finnishLanguageOption: Locator;
  readonly mainText: Locator;

  // кнопка адресации страхования авто в "page" и путешествия в "footer"
  readonly insuranceCar: Locator;
  readonly insuranceTravel: Locator;

  // кнопка отправки формы электронного адреса
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  readonly submitArea: Locator;

  // кнопка для перехода в раздел "условия" ("terms")
  readonly termsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.companyButtonPage = page.locator('a.main__header__logo[href="/"]');
    this.companyButtonFooter = page.locator('a[data-v-6eed052a][class="logo"]');
    this.blogButton = page.locator('div[data-v-7c5d0f02][class="main__header__item"]')
    this.languageSelector = page.locator('select.header__lang');
    this.finnishLanguageOption = page.locator('option.fin[value="fin"]');
    this.mainText = page.locator('div.main__left h1');
    this.insuranceCar = page.locator('div.insurance a[href="/home"]').nth(0);
    this.insuranceTravel = page.locator('div.footer__col__item a[href="/home"]:has-text(" Travel insurance ")');
    this.emailInput = page.locator('input[placeholder="Email address"]');
    this.submitButton = page.locator('div.submit-btn');
    this.submitArea = page.locator('.swal2-container.swal2-center.swal2-shown');
    this.termsButton = page.locator('div.links a:has-text(" Terms ")');
  }
    async openBlog(): Promise<void> {
      await this.blogButton.click();
    }

    // метод для корректной адресации страхований
    async getCarInsuranceLink(): Promise<string | null> {
      return await this.insuranceCar.getAttribute('href');
    }

    async getTravelInsuranceLink(): Promise<string | null> {
      return await this.insuranceTravel.getAttribute('href');
    }

    // метод для корректной адресации раздела "Terms"
    async getTermsLink(): Promise<string | null> {
      return await this.termsButton.getAttribute('href');
    }

    // методы для кнопок перехрда на главный сайт 
    async clickLogoButtonPage(): Promise<void> {
      await this.companyButtonPage.click();
      }

    async clickLogoButtonFooter(): Promise<void> {
      await this.companyButtonFooter.click();
    }

    // метод для переключения языка
    async switchToFinnishLanguage(): Promise<void> {
      await this.languageSelector.selectOption('fin');
    }

    async getMainText(): Promise<string | null> {
      return await this.mainText.textContent();
    }

    // метод для проверки валидности почты
    async enterEmail(email: string): Promise<void> {
      await this.emailInput.fill(email);
    }

    async clickSubmitButton(): Promise<void> {
      await this.submitButton.click();
    }

    async isModalWindowVisible(): Promise<boolean> {
      return await this.submitArea.isVisible();
    }
}