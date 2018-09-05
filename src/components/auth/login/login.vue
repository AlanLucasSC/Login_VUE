<template src="./login.html"></template>
<script>

export default {
    data(){
        return {
            title: 'Login',
            error: false,
            email: '',
            emailValidate: {
                if: false,
                message: '',
                success: false
            },
            password: '',
            passwordValidate: {
                if: false,
                message: 'A senha deve conter mais de 8 caracteres',
                success: false
            },
            users: [
                {
                    email: 'admin@gmail.com',
                    password: '123456789'
                },
                {
                    email: 'admin@hotmail.com',
                    password: '123456789'
                },
                {
                    email: 'admin@live.com',
                    password: '123456789'
                }
            ]
        }
    },
    methods:{
        teste(){
            console.log('Batata')
            for(var id in this.users){
                console.log(this.users[id].email)
                console.log(this.users[id].password)
            }
        },
        validateEmail(){
            var regex = new RegExp("^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$", 'i');
            this.emailValidate.if = true
            if(!regex.test(this.email)){
                if(this.email.length == 0){
                    this.emailValidate.message = 'O email está vazio'
                    this.emailValidate.success = false
                } else {
                    this.emailValidate.message = 'O formato do email está incorreto'
                    this.emailValidate.success = false
                }
            } else {
                this.emailValidate.message = 'O formato do email está correto'
                this.emailValidate.success = true
            }
        },
        validatePassword(){
            this.passwordValidate.if = true
            if( this.password.length <= 8 ){
                this.passwordValidate.message = 'A senha deve conter mais de 8 caracteres'
                this.passwordValidate.success = false
            } else {
                this.passwordValidate.message = 'Senha está do tamanho correto'
                this.passwordValidate.success = true
            }
        },
        entrar(){
            var cont = 0
            if(this.emailValidate.success != false && this.passwordValidate.success != false){
                for(var id in this.users){
                    if(this.email == this.users[id].email && this.password == this.users[id].password){
                        cont = 1
                        this.logar()
                    }
                }
            } else {
                this.validateEmail()
                this.validatePassword()
            }
            if( cont != 1 ){
                this.error = true
                window.setTimeout(() => this.error = false, 3000)
                cont = 0
            }
        },
        logar(){
            localStorage.setItem("login", "ok")
            localStorage.setItem("email", this.email)
            window.location.pathname = '/menu'
        }
    }
}
</script>
<style scoped>
    #form{
        margin-top: 20px
    }
    #passwordHelp{
        margin-left: 20%
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
