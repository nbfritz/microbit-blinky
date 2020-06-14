let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
strip.clear()
strip.setBrightness(48)
let hues = [0, 200, 160]
let positions = [0, 1, 2]
basic.forever(function () {
    strip.clear()
    for (let index = 0; index <= positions.length - 1; index++) {
        positions[index] = (positions[index] + 1) % 24
        strip.setPixelColor(positions[index], neopixel.hsl(hues[index], 100, 30))
    }
    strip.show()
})
