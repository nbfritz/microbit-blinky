function setPositions (cnt: number) {
    positions = []
    for (let index = 0; index <= cnt - 1; index++) {
        positions[index] = 24 / cnt * index
    }
}
input.onButtonPressed(Button.A, function () {
    setHues(count)
})
function setHues (cnt: number) {
    hues = []
    for (let index = 0; index <= cnt - 1; index++) {
        hues[index] = randint(0, 359)
    }
}
input.onButtonPressed(Button.B, function () {
    setup()
})
function setup () {
    count = randint(2, 7)
    delay = count * 10 + 30
    basic.showString("" + (delay))
    setPositions(count)
    setHues(count)
}
let delay = 0
let hues: number[] = []
let count = 0
let positions: number[] = []
let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
strip.clear()
strip.setBrightness(48)
setup()
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    for (let index = 0; index <= positions.length - 1; index++) {
        positions[index] = (positions[index] + 1) % 24
        hues[index] = (hues[index] + 2) % 360
        strip.setPixelColor(positions[index], neopixel.hsl(hues[index], 100, 30))
    }
    strip.show()
    basic.pause(delay)
})
