declare global {
  namespace Cypress {
    interface Chainable {
      getComponent(component: string, id: string, story?: string): Chainable<any>;
      checkAriaExpanded(
        controlledElementSelector: string,
        isExpanded: 'true' | 'false',
      ): Chainable<any>;
      checkFormDataPropValue($form: JQuery<HTMLElement>, key: string, value: any): Chainable<any>;
    }
  }
}

export {};
