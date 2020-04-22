let nombre = "Deadpool";
let real = 'Wade Wilson';
console.log(nombre + " " + real);

/* El caracter de comillas o tildes invertidas (` `) nos ayuda con los
templates literales para realizar cadenas de texto pueden contener marcadores, 
identificados por el signo de dólar $, y envueltos en llaves --> (`${expresión}`) */

console.log(`${nombre}  ${real}`);

let nombrecomplet = nombre + " " + real; // Cadenas de caracteres forma habitual.

let nombretepla = `${nombre} ${real}`;

/* El operador == lo que hace es comparar 2 valores
PERO lo hace sin chequear el tipo de las variables. */

console.log(nombrecomplet === nombretepla);

/* El triple igual === chequea el contenido de la variable y 
además, chequea que las dos variables sean del mismo tipo.
Verifica si las dos variables son sintactica y léxicamente iguales  */

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre es : ${getNombre()}`);
// En dentro las tildes invertidas (` `),tambien se puede usar funciones.