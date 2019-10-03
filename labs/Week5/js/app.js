Vue.component("student-card", {

	props: [ "student", "isactive" ],

	template: "<div class='student' v-bind:class='{ cardActive : isactive }'>{{ student.name }}<br>  Skill: {{ student.skill }} <br> Joy: {{ student.joy }}</div>"

});



var app = new Vue({

	el: "#flapp",

	data: {

		students:[

			{name: "Tom", skill: 5, joy: 1},
            {name: "Peyton", skill: 4, joy: 5},
            {name: "Chuck", skill: 6, joy: 1}

		],



		currentStudent:{

			name: "Peyton", skill: 4, joy: 5

		}, 

		curStudentId: 0,
        cardActive: true

	},

	methods: {

		arrowClicked: function() {
            this.cardActive = !this.cardActive;

			setTimeout( () => {
                this.currentStudent.skill ++;
                this.currentStudent.joy --;
                this.curStudentId ++;

				if(this.curStudentId >= this.students.length){
                    this.curStudentId = 0;

				}

				this.currentStudent = this.students[this.curStudentId];
                this.cardActive = !this.cardActive;

			}, 500);

		},

		arrowBack: function() {
            this.cardActive = !this.cardActive

            setTimeout( () => {
                this.currentStudent.skill--;
                this.currentStudent.joy++;
                this.curStudentId --;

                if(this.curStudentId < 0){
                    this.curStudentId = 2;

                }



                

                this.currentStudent = this.students[this.curStudentId];
                 this.cardActive = !this.cardActive;

            }, 500);

        }

	}

});