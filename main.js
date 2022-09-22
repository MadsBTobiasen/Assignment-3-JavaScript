const app = Vue.createApp({
    data() {
        return {
            inputMessage: undefined,
            inputNumber: undefined,
            message: undefined,
            error: undefined
        }
    },
    methods: {
        duplicate(str, number) {


            this.error = undefined;
            this.message = undefined;

            if(str == undefined || str == "") {
                this.error = "Message must be entered.";
                return;
            }

            if(number < 0) {
                this.error = "Number must be non-negative and greater than 0. --- Number: " + number;
                return;
            }

            this.message = "";
            
            for (let i = 0; i < number; i++) {
                this.message += str + " ";
            }

        }
    }
});