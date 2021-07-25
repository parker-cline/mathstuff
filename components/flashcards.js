App.component('flashcards', {
    data() {
        return {
            currCard: 0,
            cards: [{question: "Solve for $*x*$. $$x + 2 = 5$$", answer: "$$x = 3$$", type: "application", principles: [1, 2, 3]}, 
            {question: "What number do we need to move out of the way to solve for $*x*$? $$x + 5 = 8$$", answer: "$$5$$", type: "application", principles: [1]}, 
            {},
            {}],
            answerShown: false
        }
    },
    template:
        /*html*/
        `
        <h1>Flashcards</h1>
        <h1 v-if="!answerShown">{{ getCardQuestion }}</h1>
        <h1 v-else>{{ getCardAnswer }}</h1>
        <button class="btn btn-primary" @click="toggleCard">Toggle</button>
        <br><br>
        <button class="btn btn-primary" @click="prevCard">Back</button>
        <br><br>
        <button class="btn btn-primary" @click="nextCard">Continue</button>`,
    methods: {
        render() {
            window.MathJax.typeset();
        },
        nextCard() {
            this.currCard += 1;
        },
        prevCard() {
            if (this.currCard > 0) this.currCard -= 1;
        },
        toggleCard() {
            if (this.answerShown) {
                this.answerShown = false;
            }
            else {
                this.answerShown = true;
            }
        }
    },
    computed: {
        getCardQuestion() {
            return (this.cards[this.currCard].question)
        },
        getCardAnswer() {
            return (this.cards[this.currCard].answer)
        }
    },
    updated() {
        this.render();
    }
})