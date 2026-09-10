/*Criação da constante com o nome do banco de dados*/
const database = 'BD3-NoSQL-Produtos';

// habilita o banco para uso
use(database);

/* 
db['bd3_nosql_atv7'].find({
valor:{$gt:700}
}) 
*/

/* 
db['bd3_nosql_atv7'].find({
    valor:{$lt:450}
}) 
*/

db['bd3_nosql_atv7'].find({
$and:[
    {valor:{$gte:500}},
    {valor:{$lte:950}}
]
})

