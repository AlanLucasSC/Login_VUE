//Teste exemplo para apresentação AZI.
describe.skip('Casos de Teste para apresentação', () =>{
	beforeEach(() => {
		cy.log('Casos de testes gerados no Cypress')
    	cy.visit('http://ladesp.ufms.br/moinho/public/')
  	})
	context('/login_test', () =>{
		it('/login_pass', () =>{
			cy.server()
			//click button to display login form
			cy
			.get('h4.blue').click()
			//Insert email value
			.get('#email').type('testerCPAN@gmail.com')
			//Insert pass value
			.get('#password').type('suportecpan')
			
			//Submit form
			.get('.form-check > .btn').click()
			cy.screenshot()
			//Expect header with log out button
			.get(':nth-child(1) > .nav-link > .red').should('be.visible')

			//Logoff application
			.get(':nth-child(1) > .nav-link > .red').click()
			//Verify login page
			.get('.col-sm-11 > .mb-0').should('be.visible')
			cy.clearCookies()
			cy.visit("http://ladesp.ufms.br/moinho/public/matricula/create")
			cy.url().should('include', 'public')
		})
		it('/login_fail', ()=>{
			cy.get('h4.blue').click()
			//Insert email value
			.get('#email').type('testerCPAN')
			//Insert pass value
			.get('#password').type('suportecpan')
			//Submit form
			.get('.form-check > .btn').click()
			cy.screenshot()
			//Expect header with log out button
			.get('.col-sm-11 > .mb-0').should('be.visible')

			//Test with fail pass
			.get('#email').type('testerCPAN@gmail.com')
			//Insert pass value
			.get('#password').type('suport')
			//Submit form
			.get('.form-check > .btn').click()
		})
	})
})



