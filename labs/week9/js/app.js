var app = new Vue({

    el: "#app", 

    mounted: function() {

        axios.get('data/players.json').then(response => {

            this.players = response.data.players;

        });

    },

    data:{

        players: [ ]

    }, 

    methods: {



    }

})