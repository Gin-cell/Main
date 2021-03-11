let sample = new Vue({
    el: '#app',
    data: {
        message:''
    },
    methods:{
        pressRight(event){
        event.preventDefault();
        let date = new Date();
        let time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        this.message = time;           
            },
        pressLeft(){
            this.message = 'Нажата левая кнопка мыши' 
        }
    }
})