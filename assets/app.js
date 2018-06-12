Vue.component('todo-item', {
    props: ["todo"],
    template: '<li>{{ todo }}</li>'
});


var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue !',
        nom: "Okanada",
        prenom: "Okan",
        titre: " ceci est mon titre vue",
        affiche: false,
        todos: [
            { text: 'Apprendre JavaScript' },
            { text: 'Apprendre Vue' },
            { text: 'Créer quelque chose de génial' }
        ]
    },

    methods: {
        addTodo: function () {
            this.todos.push({ text: "hello" })

        },
        ShowAffiche: function () {
            this.affiche = !this.affiche

        }

    }

})