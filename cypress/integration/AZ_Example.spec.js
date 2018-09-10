describe('Teste localhost VueJS',()=>{
	beforeEach('Acessar localhost /beforeEach',()=>{
		//message from init test
		cy.log('Testando Cypress! Aplicação Login VueJS')
		//access localhost
		cy.visit('localhost:8080')
	})
	context('/Login_pass', ()=>{
		it('/Email_correto', ()=>{
			//Conta Email:admin@gmail.com pass: 123456789
			cy
			//insert correct email
			.get('#staticEmail').type('admin@gmail.com')
			//click submit
			.get('.btn').click()
			//verify log out button
			.get(':nth-child(1) > #passwordHelp').should('be.visible')
			//verify span error
			.contains('O formato do email está correto')
		})
		it('/Senha_Correta', ()=>{
			cy
			//insert correct pass
			.get('#inputPassword').type('123456789')
			//click submit
			.get('.btn').click()
			//verify span error
			.get('#passwordHelp').should('be.visible')
		})
	})
})
describe('Teste VueJS - Fluxo Alternativo',()=>{
	beforeEach('Acessar localhost /beforeEach',()=>{
		cy.log('Testando Cypress! Aplicação Login VueJS')
		cy.visit('localhost:8080')
	})
	context('/Login_fail_campos_vazios', ()=>{
		it('/Email_vazio', ()=>{
			cy
			//insert empty email
			.get('#staticEmail').type('aa')
			//clear values from email
			.clear()
			//click submit
			.get('.btn').click()
			//expect message error
			.get(':nth-child(1) > #passwordHelp').should('be.visible')
			//with this value
			.contains('O email está vazio')
		})
		it('/Senha_vazia', ()=>{
			cy
			//insert empty pass
			.get('#inputPassword')
			//click submit
			.get('.btn').click()
			//expect message error
			.get('#passwordHelp').should('be.visible')
			//with this value
			.contains('A senha está vazio')
		})
	})
	context('/Login_fail', ()=>{
		it('/Email_n_formatado', ()=>{
			cy
			//insert not formated email
			.get('#staticEmail').type('aa')
			//click submit
			.get('.btn').click()
			//expect message error
			.get(':nth-child(1) > #passwordHelp').should('be.visible')
			//with this value
			.contains('O formato do email está incorreto')
		})
		it('/Senha_menor_8', ()=>{
			cy
			//insert pass with 6 elements, expect 8
			.get('#inputPassword').type('123456')
			//click submit
			.get('.btn').click()
			//expect message error
			.get('#passwordHelp').should('be.visible')
			//with this value
			.contains('A senha deve conter mais de 8 caracteres')
		})
	})
	context('Conta_n_existe', ()=>{
		it('/Email_n_formatado', ()=>{
			cy
			//insert formated email, but not exists
			.get('#staticEmail').type('ypedroso8@gmail.com')
			//insert correct pass
			.get('#inputPassword').type('123456789')
			//click submit
			.get('.btn').click()
			//expect message error
			.get('.alert').should('be.visible')
			//with this value
			.contains('Conta não existe')
		})
		it('/spy Teste', ()=>{
			cy.spy(login, 'entrar')
			App.start()
			expect(util.addListeners).to.be.called
		})
	})
})
