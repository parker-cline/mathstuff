App.component('steps-guide', {
    data() {
        return {
            currIndex: 1,
            oneStepPrinciples: [{
                completed: false,
                text: "Get x all alone."
            },
            {
                completed: false,
                text: "Opposites cancel."
            },
            {
                completed: false,
                text: "Whatever we do on one side, we do on the other."
            }
            ],
            oneStepSteps: ["Let's start with the basics! As an example, take this problem:",
                "How can we solve for $*x*$? Remember three rules:",
                "We can use these rules to solve the problem. I'll walk you through it.",
                "Your teacher may call this 'isolating the variable.'",
                "There are two sides: left of the equals sign, and right of the equals sign. Which side is $x$ on?",
                "We need to make it so that only x is on the left side. What do we need to move out of the way?"
            ]
        }
    },
    template:
        /*html*/
        `<h1>test</h1>
        <ul>
            <li v-for="principle in oneStepPrinciples" :key="principle.id"
                :style="{ color: colorSelector(principle.completed) }">{{ principle.text }}</li>
        </ul>

        <h2>Step {{ currIndex }}: {{ textSelector }}</h2>
        <h2 v-if="currIndex == 1">$$2x + 2 = 5x + 6$$</h2>
        <button class="btn btn-primary" @click="prevStep">Back</button>
        <br><br>
        <button class="btn btn-primary" @click="nextStep">Continue</button>`,
    methods: {
        colorSelector(completed) {
            return (completed ? 'blue' : 'red');
        },
        nextStep(index) {
            this.currIndex += 1;
        },
        prevStep(index) {
            if (this.currIndex > 1) this.currIndex -= 1;
        },
        render() {
            window.MathJax.typeset();
        }
    },
    computed: {
        textSelector() {
            return (this.oneStepSteps[this.currIndex])
        }
    },
    updated() {
        this.render();
    }
})