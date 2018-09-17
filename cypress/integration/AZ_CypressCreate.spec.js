describe.skip('/CreateColaborador', () =>{
	beforeEach(() => {
		cy.log('Casos de testes gerados no Cypress')
    	cy.visit('http://ladesp.ufms.br/moinho/public/')
    	cy
			.get('h4.blue').click()
			//Insert email value
			.get('#email').type('testerCPAN@gmail.com')
			//Insert pass value
			.get('#password').type('suportecpan{enter}')
			//Submit form
			//.get('.form-check > .btn').click()
			//Access page to create
			cy.get(':nth-child(5) > .nav-link > .red').click()
  })
  	context('/Create_colaborator', () =>{
  		it.skip('/create_pass', () =>{
  			cy
  			.get('#nome').type('TesterCPANCypress')

  			.get('#data_nascimento').type('1993-09-20')

  			.get('#cpf').type('05252747156')

  			.get('#telefone').type('+5567996793234')

  			.get('#celular1').type('+5567996793234')

  			.get('#next > .fa').click()

  			.get('#cep').type('79304370')

  			.get('#numero').type('254')      

  			.get('#complemento').type('NA')      

  			.get('#pais').type('Brasil')  

  			.get('#next > .fa').click()  

  			.get('#email').type('ypedroso8@gmail.com')  

  			.get('#area_atuacao').type('Analista')

  			.get('.active > .row > :nth-child(4) > .form-control').select('Colaborador')  

  			.get('#submit').click()
  		})
  		it('/create_fail_nameEmpty', () =>{
  			cy
  			.get('#nome').focus()
  			.type('aaaa')
  			.clear()
  			.get('#cpf').focus()
  			.get(':nth-child(1) > .invalid-feedback').should('be.visible')
  		})
      it('/create_fail_cpfEmpty',()=>{
        cy
        .get('#cpf').focus()
        .type('{enter}')
        
      })
  	})

})	