Vue.component('saludo', {
    //cuando sea mas de una linea utilizar un contenedor y hay que poner las comillas invertidas
    /*html*/
    template:
    `
    <div>
        <h1>{{saludo}}</h1>
        <h3>Buenos dias</h3>
    <div>
    `,
    data(){
        return{
            saludo:'Hola desde vue'
        }
    }
})