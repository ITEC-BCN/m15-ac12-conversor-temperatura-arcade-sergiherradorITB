//  Inicialización de las posiciones de los sprites
function inicializar_sprites() {
    textConveritdo.setPosition(74, 15)
    personatge.setPosition(76, 71)
    cofreGradosCelsius.setPosition(24, 76)
    cofreGradosFarenheit.setPosition(138, 76)
}

function juego() {
    controller.moveSprite(personatge)
    game.onUpdateInterval(1250, function on_update_interval() {
        trigger_celsius()
        trigger_fahrenheit()
    })
}

/** Conversores de grados y sus triggers */
//  Función de trigger para grados Celsius
function trigger_celsius() {
    let grados_fahrenheit: number;
    let celsius: number;
    let mensaje_celsius: any;
    if (personatge.overlapsWith(cofreGradosCelsius)) {
        game.ask("Presiona A para C°")
        if (controller.A.isPressed()) {
            grados_fahrenheit = game.askForNumber("Digues Graus Fahrenheit", 4)
            celsius = convertir_fahrenheit_a_celsius(grados_fahrenheit)
            mensaje_celsius = generar_mensaje_celsius(celsius)
            game.showLongText(mensaje_celsius, DialogLayout.Center)
            textConveritdo.setText("" + celsius + "°C")
        }
        
    }
    
}

//  Función de trigger para grados Fahrenheit
function trigger_fahrenheit() {
    let grados_celsius: number;
    let fahrenheit: number;
    let mensaje_farenheit: any;
    if (personatge.overlapsWith(cofreGradosFarenheit)) {
        game.ask("Presiona A para °F")
        if (controller.A.isPressed()) {
            grados_celsius = game.askForNumber("Digues Graus Celsius", 4)
            fahrenheit = convertir_celsius_a_fahrenheit(grados_celsius)
            mensaje_farenheit = generar_mensaje_fahrenheit(fahrenheit)
            game.showLongText(mensaje_farenheit, DialogLayout.Center)
            textConveritdo.setText("" + fahrenheit + "°F")
        }
        
    }
    
}

//  Conversión de grados Celsius a Fahrenheit
function convertir_celsius_a_fahrenheit(celsius3: number): number {
    let fahrenheit = celsius3 * 9 / 5 + 32
    let fahrenheit_redondeado = Math.floor(fahrenheit * 100) / 100
    //  Convierte grados Celsius a Fahrenheit
    return fahrenheit_redondeado
}

//  Conversión de grados Fahrenheit a Celsius
function convertir_fahrenheit_a_celsius(fahrenheit: number): number {
    
    //  Convierte grados Fahrenheit a Celsius
    celsiusConversor = (fahrenheit - 32) * 0.555
    celsius_redondeado = Math.floor(celsiusConversor * 100) / 100
    return celsius_redondeado
}

//  Función que retorna un mensaje con la conversión de Fahrenheit a Celsius
function generar_mensaje_celsius(celsius: number) {
    return "Conversión a grados Celsius: " + ("" + celsius) + " °C"
}

//  Función que retorna un mensaje con la conversión de Celsius a Fahrenheit
function generar_mensaje_fahrenheit(fahrenheit: number) {
    return "Conversión a grados Fahrenheit: " + ("" + fahrenheit) + " °F"
}

/** Creación de los objetos principales */
let celsius_redondeado = 0
let celsiusConversor = 0
let fahrenheit_redondeado = 0
let fahrenheit = 0
let textConveritdo = textsprite.create("Grados")
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddd33ddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddd33dddddddddddddddd
        ddddddddddddddddddddddd3ddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddd3dddddddddddddddd
        ddddddddddddddddddddd3333dddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddd3333ddddddddddddddd
        dddddddddddddddddddd33333dddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddd33333ddddddddddddddd
        ddddddddddddddddddd3333333ddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddd3333333dddddddddddddd
        ddddddddddddddddddd33333d3ddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddd33333d3dddddddddddddd
        ddddddddddddbddddddd3333ddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddbddddddd3333dddddddddddddddd
        ddddddddddddbdddddd3333333ddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddbdddddd3333333dddddddddddddd
        ddddddddddddbddddd33333333ddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddbddddd33333333dddddddddddddd
        ddddddddddddbdddd33333333333ddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddbdddd33333333333dddddddddddd
        dd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddbddddddd33ddddddddbdd3d3333333333333ddddbddddd
        d33333ddddddbdd333333333333333ddddbdddddd33333ddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddbdddddd33333ddddddbdd333333333333333ddddbddddd
        33333333ddddbddd33333333333333ddddbddddd33333333ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddbddddd33333333ddddbddd33333333333333ddddbddddd
        333333333ddddbdddd333333333333ddddbddddd333333333dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddbddddd333333333ddddbdddd333333333333ddddbddddd
        d33333333dddddbdddd3333333444444dbbdddd3d33333333dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3
        d333333333dddddbb3333333444444444bdddd3dd333333333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444bdddd3dd333333333dddddbb3333333444444444bdddd3d
        33333333ddddddddbb33333333443443bbdddddd33333333ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff43bbdddddd33333333ddddddddbb33333333443443bbdddddd
        333333333dddddd333b333333343334bb3ddddd3333333333dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4bb3ddddd3333333333dddddd333b333333343334bb3ddddd3
        3333b33dddddd33333333333333333bbdddddd333333b33dddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddd333333b33dddddd33333333333333333bbdddddd33
        3333b3333ddddd333333333333333bbddddddd333333b3333dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddd333333b3333ddddd333333333333333bbddddddd33
        3333b33b33dddddd333344444333333ddddddd333333b33b33ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ddddddd333333b33b33dddddd333344444333333ddddddd33
        3333b33b33ddddd34444444444333333333ddd333333b33b33ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333ddd333333b33b33ddddd34444444444333333333ddd33
        3333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd33
        3333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd3
        3333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd33
        333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333
        33bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b333
        33b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b333
        33b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b333
        3bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b333
        3bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b33
        3bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b33
        3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb
        bb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333b
        3b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb33333333333
        3b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb33344433333
        3b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb333444333333
        44444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb334443344444
        44443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb333334444444
        44444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb333344444444
        44444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb34444344444
        44444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b4334434
        3444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b3344333
        33b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb333333
        33b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb333333
        33b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb333333
        33b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb333333
        333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333
        333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333
        333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333
        3333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb333
        33333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b3333
        33333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b33333
        33333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb333333
        33333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb33333333
        33333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb33333333
        33333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb33333333
        33333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb333333333
        33333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb3333333333
        33333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb3333333333
        33333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb3333333333
        3333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d33333333
        3333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d3
        3333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd3
        dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33
        3dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd33333333
        3dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d3333
        3dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d3
        ddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33ddd
        ddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbddddddddd
        ddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbddddddddd
        ddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbddddddddd
        ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
        ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
        ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
        ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
        ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
        ddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbddddddddd
        ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
        ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
        ddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3dddddddd
        ddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3dddddddd
        ddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbdddddddd
        ddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbdddddddd
        443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444
        44444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
`)
let cofreGradosCelsius = sprites.create(assets.image`
    myImage
`, SpriteKind.Enemy)
let cofreGradosFarenheit = sprites.create(assets.image`
    myImage0
`, SpriteKind.Enemy)
let personatge = sprites.create(img`
        ........................
            ........................
            ...........cc...........
            ...........cccc.........
            .......cc...ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb555555ff155555c
            .....ccb55555555ff55d55c
            ......b5555555555555555c
            ...c..b555d55555bb13bbc.
            ...cccd55ddddd55bb3335c.
            ....cbdddddddddd55b335c.
            ..cccdddddb55bdddd5555c.
            ..cccdddddb555bbbbcccc..
            ...ccddddddb5555cbcdc...
            ccccbdddddddcb55cbcc....
            cddddddddd55dbccbbc.....
            cbdddddddd555dbbbcc.....
            .ccbdddbbdd555bbcdbcc...
            ...cccbbbbdd55ccdddbc...
            ......cccbdddbccccccc...
            ........cdd555dc........
    `, SpriteKind.Player)
animation.runImageAnimation(personatge, [img`
            ........................
                ........................
                ...........cc...........
                ...........cccc.........
                .......cc...ccccccc.....
                .......cccccc555555cc...
                ........ccb5555555555c..
                .....cc..b555555555555c.
                .....cccb555555ff155555c
                .....ccb55555555ff55d55c
                ......b5555555555555555c
                ...c..b555d55555bb13bbc.
                ...cccd55ddddd55bb3335c.
                ....cbdddddddddd55b335c.
                ..cccdddddb55bdddd5555c.
                ..cccdddddb555bbbbcccc..
                ...ccddddddb5555cbcdc...
                ccccbdddddddcb55cbcc....
                cddddddddd55dbccbbc.....
                cbdddddddd555dbbbcc.....
                .ccbdddbbdd555bbcdbcc...
                ...cccbbbbdd55ccdddbc...
                ......cccbdddbccccccc...
                ........cdd555dc........
        `, img`
            ........................
                ........................
                ...........ccc..........
                ...........cccc.........
                .......ccc..ccccccc.....
                .......cccccc555555cc...
                ........ccb5555555555c..
                .....cc..b555555555555c.
                .....cccb555555ff155555c
                ......cb55555555ff55d55c
                ......b5555555555555555c
                ...cc.b555dd5555bb13bbc.
                ...cccd55ddddd555b3335c.
                .....bdddddddddd55b335c.
                ..cccdddddb55bbddd5555c.
                ..cccdddddb555bbbbcccc..
                ...ccddddddb5555cbcdc...
                ccccbdddddd5cb55cbcc....
                cddddddddd5555ccbbc.....
                .cddddddbdd555bbbcc.....
                ..ccdddbbbdd55cbcdc.....
                ....ccbbcbddddccdddcc...
                ......cccdd555dcccccc...
                ........cccccccc........
        `, img`
            ........................
                ............cc..........
                ............ccc.........
                ........ccc.ccccccc.....
                ........ccccc555555cc...
                ........ccb5555555555c..
                .....ccc.b55555ff15555c.
                .....cccb5555555ff55555c
                ......cb555555555555d55c
                ....c.b555555555bb55555c
                ....ccb555ddd5555b13bbc.
                ....ccd55ddddd555b3335c.
                .....cdd5ddddddd55b335c.
                ...c.bddddb555bbbd555c..
                ...ccdddddbb55555bccc...
                ...ccdddddddcc555bcc....
                ...ccddddddddbcccbcccc..
                .ccbddddddd55dbbbbc55c..
                ccddddddddd555dbbcc5c...
                cddddddbbbdd555bbccc....
                .ccddddbbbbdd55bcc......
                ...cccbbbbbdddbcddcc....
                .....cccccdd555dcccc....
                ..........cccccc........
        `, img`
            ........................
                ............cc..........
                ............ccc.........
                ........ccc.ccccccc.....
                ........ccccc555555cc...
                ........ccb5555555555c..
                .....ccc.b55555ff15555c.
                .....cccb5555555ff55555c
                ......cb555555555555d55c
                ....c.b555555555bb55555c
                ....ccb555ddd5555b13bbc.
                ....ccd55ddddd555b3335c.
                .....cdd5ddddddd55b335c.
                ...c.bddddb555bbbd555c..
                ...ccdddddbb55555bccc...
                ...ccdddddddcc555bcc....
                .ccccdddddddddcccbcccc..
                .cdcdddddddd55dbbbc55c..
                .cdddddddddd555dccc5c...
                .cbddddbbbbdd5d555cc....
                ..cbdddbbbbbdd5555......
                ...cccbbbbbbd5555c......
                .....cccccccc555c.......
                .............ccc........
        `, img`
            ........................
                ............cc..........
                ............ccc.........
                ........ccc.ccccccc.....
                ........ccccc555555cc...
                ........ccb5555555555c..
                .....ccc.b55555ff15555c.
                .....cccb5555555ff55555c
                ......cb555555555555d55c
                ....c.b555555555bb55555c
                ....ccb555ddd5555b13bbc.
                ....ccd55ddddd555b3335c.
                .....cdd5ddddddd55b335c.
                ...c.bddddb555bbbd555c..
                ...ccdddddb555555bccc...
                ..cccddddddcc5555bcc....
                .cdccddddddddbcccbcccc..
                .cddbdddddddddbbbbc55c..
                .cdddddddddd55dbbbc5c...
                .cbddddbbbbd55ddbccc....
                ..cbdddbbbbd555dccc.....
                ...cccbbbbbbddd555c.....
                .....ccccccbd55555c.....
                ...........cc5555c......
        `, img`
            ........................
                ............cc..........
                ............ccc.........
                ........cc..ccccccc.....
                ........ccccc555555cc...
                ........ccb5555555555c..
                .....cc..b555555555555c.
                .....cccb555555ff155555c
                ......cb55555555ff55d55c
                ......b5555555555555555c
                ...cc.b555dd5555bb13bbc.
                ...cccd55ddddd555b3335c.
                ....ccdd5ddddddd55b335c.
                .....bddddb55bdddd5555c.
                ..cccdddddb55bbbbbcccc..
                .ccccddddddb5555cbcccc..
                .cdccdddddddc555cbc55c..
                .cdddddddddddcccbbc5c...
                .cbddddddd55dbbbbccc....
                .ccbdddddd555dbbbcbc....
                ..cccddbbbd555bbccc.....
                ....ccbbbbbd555cc.......
                ......ccccbddddbc.......
                ..........cd5555dc......
        `], 150, true)
//  MAIN DE LA APLICACIÓN
//  Inicializar los sprites
inicializar_sprites()
juego()
