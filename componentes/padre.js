Vue.component('padre',{

    /*html*/
    //con losdos punto se pueden pasar variables del padre
    template:`
    <div class="p-5 mt-3 bg-dark text-white">
        <h2>Componente Padre: {{numeroPadre}}</h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        {{nombrePadre}}
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre=$event"></hijo>
    <div>
    `,
    data(){
        return{
            numeroPadre: 0,
            nombrePadre:''
        }
    }
})