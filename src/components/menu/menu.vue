<template>
    <div>
        <div class="text-right mt-2 mr-2">
            <button type="button" class="btn btn-outline-danger" v-on:click="sair">Sair</button>
        </div>
        <div class="container-fluid row">
            <div class="col-3 mt-4">
                <ul id="example-2">
                    <a v-for="(item, index) in menu" class="list-group-item list-group-item-action" v-bind:href="item.url">
                        {{ item.name }}
                    </a>
                </ul>
            </div>
            <ul id="example-2" class="list-group list-group-flush col-9 mt-4">
                <li class="list-group-item" v-for="(item, index) in filmes">
                    <p> 
                        <strong> {{ item.name }}  </strong>
                        <span class="badge badge-primary badge-pill margin-span">{{ item.like }}</span>
                        <span class="badge badge-danger badge-pill margin-span">{{ item.time }}</span>
                    </p>
                    <small >
                        <div class="text-justify">
                            {{ item.desc }} 
                        </div>
                    </small>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            text: 'Batata',
            filmes: [
                {
                    name: 'Vingadores: Guerra Infinita',
                    desc: 'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.',
                    like: '95% gostaram desse filme (Usuários do Google)',
                    time: 'Duração de 2h 40m'
                },
                {
                    name: 'Os Incríveis 2',
                    desc: 'A Mulher Elástica entra em ação para salvar o dia, enquanto o Sr. Incrível enfrenta seu maior desafio até agora: cuidar dos problemas de seus três filhos.',
                    like: '94% gostaram desse filme (Usuários do Google)',
                    time: 'Duração de 2h 5m'
                },
                {
                    name: 'Han Solo: Uma História Star Wars',
                    desc: 'Após uma série de ousadas aventuras, o jovem Han Solo encontra seu futuro copiloto, Chewbacca, e o notório jogador Lando Calrissian.',
                    like: '82% gostaram desse filme (Usuários do Google)',
                    time: 'Duração de 2h 15m'
                },
                {
                    name: 'Slender Man: Pesadelo Sem Rosto',
                    desc: 'As amigas Wren, Hallie, Chloe e Katie levam uma vida entediante no colégio. Quando ouvem falar em um monstro chamado Slender Man, elas decidem invocá-lo por meio de um vídeo na Internet. A brincadeira se transforma em um perigo real quando todas começam a ter pesadelos e visões do homem se rosto, com vários braços, capaz de fazer as suas vítimas alucinarem. Um dia, Katie desaparece sem deixar pistas, cabendo às três amigas fazerem a sua própria busca, enfrentando a criatura.',
                    like: '60% gostaram desse filme (Usuários do Google)',
                    time: 'Duração de 1h 31m'
                }
            ],
            menu: [
                { name: 'Vingadores: Guerra Infinita', url:'https://www.google.com.br/search?q=Vingadores%3A+Guerra+Infinita&oq=Vingadores%3A+Guerra+Infinita&aqs=chrome..69i57j69i58.745j0j7&sourceid=chrome&ie=UTF-8' },
                { name: 'Os Incríveis 2', url:'https://www.google.com.br/search?q=Os+Incr%C3%ADveis+2&oq=Os+Incr%C3%ADveis+2&aqs=chrome..69i57j0l5.391j0j9&sourceid=chrome&ie=UTF-8' },
                { name: 'Han Solo: Uma História Star Wars', url:'https://www.google.com.br/search?q=Han+Solo%3A+Uma+Hist%C3%B3ria+Star+Wars&oq=Han+Solo%3A+Uma+Hist%C3%B3ria+Star+Wars&aqs=chrome..69i57.308j0j9&sourceid=chrome&ie=UTF-8' },
                { name: 'Slender Man: Pesadelo Sem Rosto', url:'https://www.google.com.br/search?q=Slender+Man%3A+Pesadelo+Sem+Rosto&oq=Slender+Man%3A+Pesadelo+Sem+Rosto&aqs=chrome..69i57.455j0j9&sourceid=chrome&ie=UTF-8' }
            ]
        }
    },
    methods: {
        sair(){
            localStorage.removeItem("login")
            localStorage.removeItem("email")
            window.location.pathname = '/login'
        }
    }
}
</script>

<style scoped>
    .margin-span{
        margin-right: 10px
    }
</style>
