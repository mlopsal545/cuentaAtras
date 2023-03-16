let cuenta = 5
while (cuenta > 0) {
    basic.showString("" + (cuenta))
    basic.pause(200)
    cuenta += -1
}
basic.showIcon(IconNames.Skull)
music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
