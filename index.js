function generador(valor){
    return ()=> valor += 1;
}

const contador = generador(5);


console.log(contador());
console.log(contador());
console.log(contador());;
console.log(contador());
console.log(contador());