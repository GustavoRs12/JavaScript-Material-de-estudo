// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com Objeto
const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario }

console.log(clone)

// usar spread com Array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela' ]
console.log(grupoFinal)


