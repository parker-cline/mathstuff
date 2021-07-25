App.component('flashcards', {
    data() {
        return {
            currCard: 0,
            cards: [{ question: "$$x + 2 = 5$$ Solve for $*x*$.", answer: "$$x = 3$$", type: "application", principles: [1, 2, 3] },
            { question: "$$5 = x - 3$$ Solve for $*x*$.", answer: "$$x = 8$$", type: "application", principles: [1, 2, 3] },
            { question: "$$2 = x + 10$$ Solve for $*x*$.", answer: "$$x = -8$$", type: "application", principles: [1, 2, 3] },
            { question: "$$9x = 9$$ Solve for $*x*$.", answer: "$$x = 1$$", type: "application", principles: [1, 2, 3] },
            { question: "$$\frac{x}{6} = -2$$ Solve for $*x*$.", answer: "$$x = -12$$", type: "application", principles: [1, 2, 3] },
            { question: "$$x + 5 = -8$$ What number do we need to move out of the way to solve for $*x*$? ", answer: "$$5$$", type: "application", principles: [1] },
            { question: "$$8 = x - 9$$ What number do we need to move out of the way to solve for $*x*$? ", answer: "$$-9$$", type: "application", principles: [1] },
            { question: "$$2x = 8$$ What number do we need to move out of the way to solve for $*x*$? ", answer: "$$2$$", type: "application", principles: [1] },
            { question: "$$16 = 4x$$ What number do we need to move out of the way to solve for $*x*$? ", answer: "$$4$$", type: "application", principles: [1] },
            { question: "$$16 = \frac{x}{2}$$ What number do we need to move out of the way to solve for $*x*$? ", answer: "$$2$$", type: "application", principles: [1] },
            { question: "$$\frac{x}{7} = -9$$ What number do we need to move out of the way to solve for $*x*$? ", answer: "$$7$$", type: "application", principles: [1] },
            { question: "$$x - 7 = -4$$ What do we do to both sides to get $*x*$ by itself?", answer: "add $*7*$", type: "application", principles: [1, 2] },
            { question: "$$x - 8 = 14$$ To solve for $*x*$, we add $*8*$ to move the $*-8*$ out of the way. What is $*x*$?", answer: "$$x = 22$$", type: "application", principles: [3] },
            { question: "$$x + 3 = 11$$ To solve for $*x*$, we subtract $*3*$ to move the $*+3*$ out of the way. What is $*x*$?", answer: "$$x = 8$$", type: "application", principles: [3] },
            { question: "$$10 = 5x$$ To solve for $*x*$, we divide by $*5*$ to move the $*5*$ out of the way. What is $*x*$?", answer: "$$x = 2$$", type: "application", principles: [3] },
            { question: "$$13 = \frac{x}{2}$$ To solve for $*x*$, we multiply by $*2*$ to move the $*2*$ in the denominator out of the way. What is $*x*$?", answer: "$$x = 26$$", type: "application", principles: [3] },
            ],
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