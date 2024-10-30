/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Rebecca de Boer
 * Created on: Oct 2024
 * This program counts down from four
*/

let neopixelStrip: neopixel.Strip = null
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

let count = 4

input.onButtonPressed(Button.A, function() {
    while (count >= 0) {
        basic.showNumber(count)
        if (count - 1 == 3) {
                neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
                neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
                neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
                neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
                neopixelStrip.show()
            }
        if (count - 1 == 2) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
                neopixelStrip.show()
            }
        if (count - 1 == 1) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
                neopixelStrip.show()
            }
        if (count - 1 == 0) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
                neopixelStrip.show()
            }
        basic.pause(500)
        count--    
    }
    basic.showIcon(IconNames.Happy)
})
