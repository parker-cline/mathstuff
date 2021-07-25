window.MathJax = {
    tex: {
        inlineMath: [['$*', '*$']]
    }
};

const App = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true
        }
    },
    methods: {}
})


const position = { x: 0, y: 0 }

interact('.draggable').draggable({
    listeners: {
        start(event) {
            console.log(event.type, event.target)
        },
        move(event) {
            position.x += event.dx
            position.y += event.dy

            event.target.style.transform =
                `translate(${position.x}px, ${position.y}px)`
        },
    }
})

var pixelSize = 16

interact('.drawing-canvas')
    .draggable({
        max: Infinity,
        maxPerElement: Infinity,
        origin: 'self',
        modifiers: [
            interact.modifiers.snap({
                // snap to the corners of a grid
                targets: [
                    interact.snappers.grid({ x: pixelSize, y: pixelSize })
                ]
            })
        ],
        listeners: {
            // draw colored squares on move
            move: function (event) {
                var context = event.target.getContext('2d')
                // calculate the angle of the drag direction
                var dragAngle = 180 * Math.atan2(event.dx, event.dy) / Math.PI

                // set color based on drag angle and speed
                context.fillStyle = 'red';

                // draw squares
                context.fillRect(
                    event.pageX - pixelSize / 2,
                    event.pageY - pixelSize / 2,
                    pixelSize,
                    pixelSize
                )
            }
        }
    })
    // clear the canvas on doubletap
    .on('doubletap', function (event) {
        var context = event.target.getContext('2d')

        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        resizeCanvases()
    })

function resizeCanvases() {
    [].forEach.call(document.querySelectorAll('.drawing-canvas'), function (
        canvas
    ) {
        delete canvas.width
        delete canvas.height

        var rect = canvas.getBoundingClientRect()

        canvas.width = rect.width
        canvas.height = rect.height
    })
}

resizeCanvases()

// interact.js can also add DOM event listeners
interact(window).on('resize', resizeCanvases)