const application = new Vue({
    el: "#app",
    data: {
        TextColor: "",
        ColoredText: "",
        ColorValue: "",
        ColoredTextIsShown: false,
        Colors: ["green", "white", "grey", "black", "red", "purple", "yellow"],
    },
    methods: {
        ChngColor: function () {
            let Array = this.Colors;
            this.ColoredText = this.TextColor
            for (let i = 0; i < Array.length; i++) {
                if (Array[i] == this.TextColor) {
                    this.ColorValue = Array[i]
                }
                this.ColoredTextIsShown = true
            } if (!this.ColorValue) {
                this.ColoredText = "Нет такого"
            }
        }
    }
})