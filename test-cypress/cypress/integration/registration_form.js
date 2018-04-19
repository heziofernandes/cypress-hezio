describe ('Register Form', function(){
    it('Verify title registration form', function(){
        cy.login()
    })

    it('Type name', function(){
      cy.get('#name').type('Chuck Noris').should('have.value', 'Chuck Noris')
    })

    it('Type login', function(){
      cy.get('#login').type('chuck.noris').should('have.value', 'chuck.noris')
    })

    it('Type password', function(){
      cy.get('#password').type('test123')
    })

    it('Type email', function(){
      cy.get('#email').type('chuck.noris@email.com').should('have.value', 'chuck.noris@email.com')
    })

    it('Type address', function(){
      cy.get('#address').type('Vietname China Meridional').should('have.value', 'Vietname China Meridional')
    })

    it('Type reference', function(){
      cy.get('#reference-address').type('Beco da morte').should('have.value', 'Beco da morte')
    })

    it('Check Radio', function(){
    cy.get('.action-radio [type="radio"]').check('option5', {force: true}).should('be.checked')
    })

    it('Check Radio', function(){
    cy.get('.action-qa-select').select('Java Script')
    })

    it('Click Save', function(){
      cy.get('#btn-save').click()
    })

    it('Verify message Saved', function(){
    cy.get('#myform .messageBox #message').should('have.id','message')
    })
})
