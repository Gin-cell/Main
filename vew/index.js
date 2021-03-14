const sample = new Vue({
    el: "#app",
    data: {
        search: "",
        typedSearch: "",
        isTyped: false,
        styles: {
            color: "black"
        }
    },
    methods: {
        saveSearch() {
            this.typedSearch = this.search;
            this.styles.color = this.search;
            this.search = "";
        },
        /* changeColor(c) {
            if (c) {
                this.styles.color = "c";
            } else {
                this.styles.color = "red"
            }
        } */
        
    },
})