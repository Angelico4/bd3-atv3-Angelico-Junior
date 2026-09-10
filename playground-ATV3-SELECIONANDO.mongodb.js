const database = 'BD3-NoSQL-Produtos';
use(database);

/* MAIOR QUE 700
db['bd3_nosql_atv7'].find({
valor:{$gt:700}
}) 
*/

/* MENOR QUE 450
db['bd3_nosql_atv7'].find({
    valor:{$lt:450}
}) 
*/

/* ENTRE 500 E 950
db['bd3_nosql_atv7'].find({
$and:[
    {valor:{$gte:500}},
    {valor:{$lte:950}}
]
}) 
*/

