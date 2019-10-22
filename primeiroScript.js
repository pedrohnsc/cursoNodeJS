console.log('n-fatorial')

/*console.log(`Executando o script a partir do diretorio ${process.cwd()}`)

process.on('exit',()=>{
    console.log('script esta terminano')
})*/

const fatorial = (num)=>{
    if(num === 0){
        return 1
    }

    return num * fatorial(num-1)
}

const nume = parseInt(process.argv[2])

console.log (`O fatorial de ${nume} é igual a ${fatorial(nume)}`)