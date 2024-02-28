const TAG_ID = '516917c9-ad12-484c-8bbd-e270e412f713';

describe('Tag', () => {
  describe('Structure & Props', () => {
    beforeEach(() => {
      cy.getComponent('tag', TAG_ID);
      cy.get('@tag').find('.tag').as('wrapper');
      cy.get('@wrapper').find('.tag-text').as('text');
    });

    it('should render', () => {
      cy.get('@tag').should('exist');
    });

    it('should have prop `text` set and show its content', () => {
      cy.get('@tag').should('have.attr', 'text', 'Tag');
      cy.get('@text').should('contain.text', 'Tag');

      cy.get('@tag').invoke('attr', 'text', 'Test');
      cy.get('@tag').should('have.attr', 'text', 'Test');
      cy.get('@text').should('contain.text', 'Test');
    });

    it('should use variant `gray` as default', () => {
      const defaultClasses = ['tag', 'tag-gray'];

      cy.get('@tag').should('not.have.attr', 'variant');
      cy.get('@wrapper').should('satisfy', $el => {
        const classList = Array.from($el[0].classList);
        return defaultClasses.every(c => classList.includes(c));
      });
    });

    it('should set the tags bg-color according to the prop `variant`', () => {
      ['gray', 'white', 'info', 'success', 'danger', 'warning', 'yellow'].forEach(bg => {
        cy.get('@tag').invoke('attr', 'variant', bg).should('have.attr', 'variant', bg);
        cy.get('@wrapper').should('have.class', `tag-${bg}`);
      });
    });

    it('should set the tags size according to the prop `size`', () => {
      cy.get('@tag').should('not.have.attr', 'size');
      cy.get('@tag').invoke('attr', 'size', 'sm');
      cy.get('@wrapper').should('have.class', 'tag-sm');
    });

    it('should set the tags icon according to the prop `icon`', () => {
      cy.get('@tag').should('not.have.attr', 'icon');
      cy.get('@tag').find('post-icon.tag-icon').should('not.exist');
      cy.get('@tag').invoke('attr', 'icon', '1000');
      cy.get('@tag').find('post-icon.tag-icon').as('icon');
      cy.get('@icon').should('exist');
    });

    it('should use `default` slot and overwrite`text` prop when slot is used', () => {
      cy.get('@tag').should('have.attr', 'text', 'Tag');
      cy.get('@wrapper').should('contain.text', 'Tag');
      cy.get('@tag')
        .invoke('append', '<img src="/favicon.svg" alt="favicon"/>')
        .find('img[src="/favicon.svg"]')
        .then($img => {
          cy.get('@wrapper')
            .find('slot')
            .then($slot => {
              const img = $img.get(0);
              const slot = $slot.get(0);

              expect(img.assignedSlot).to.equal(slot);
              expect(slot.assignedElements()[0]).to.equal(img);
            });
        });
    });
  });

  describe('Accessibility', () => {
    it('Has no detectable a11y violations on load for all variants', () => {
      cy.getSnapshots('post-tag');
      cy.checkA11y('#root-inner');
    });
  });
});
