radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if (receivedString == "0" || receivedString == "1") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (receivedString == "2" || (receivedString == "3" || receivedString == "4")) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    if (receivedString == "5" || receivedString == "6") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    if (receivedString == "7" || (receivedString == "8" || receivedString == "9")) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
})
let strip: neopixel.Strip = null
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
