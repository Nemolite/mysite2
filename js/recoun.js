
console.log(111)
var app = new Vue({
        el: '.recount-content',
        data: {
            message: 'Hello Vue!'
        },
        methods: {
            setMessage: function(event){
                this.message = event.target.value;
            }
        }
    })