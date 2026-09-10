//Definindo o nome do banco de dados e da collection e executando a criação
const database = 'BD3-NoSQL-Produtos';

const collection = 'bd3_nosql_atv7'

use(database);

db.createCollection(collection);

//Insert dos 10 alunos
db['bd3_nosql_atv7'].insertMany(
     [
    {
        cod_produto: 1,
        nome_produto: "Notebook Dell Inspiron",
        desc_produto: "Notebook Dell com processador Intel Core i5, 8GB de RAM e SSD de 512GB.",
        valor: 987.50
    },
    {
        cod_produto: 2,
        nome_produto: "Mouse Logitech M170",
        desc_produto: "Mouse sem fio Logitech com conexão USB e design compacto.",
        valor: 135.90
    },
    {
        cod_produto: 3,
        nome_produto: "Teclado Mecânico Redragon",
        desc_produto: "Teclado mecânico gamer com iluminação RGB e conexão USB.",
        valor: 428.75
    },
    {
        cod_produto: 4,
        nome_produto: "Monitor LG 24 Polegadas",
        desc_produto: "Monitor Full HD de 24 polegadas com conexão HDMI.",
        valor: 749.99
    },
    {
        cod_produto: 5,
        nome_produto: "Headset HyperX Cloud",
        desc_produto: "Headset gamer com microfone integrado e áudio estéreo.",
        valor: 315.40
    },
    {
        cod_produto: 6,
        nome_produto: "SSD Kingston 480GB",
        desc_produto: "Unidade SSD SATA de 480GB para armazenamento e melhoria de desempenho.",
        valor: 219.90
    },
    {
        cod_produto: 7,
        nome_produto: "Memória RAM Kingston 8GB",
        desc_produto: "Memória RAM DDR4 de 8GB para computadores e notebooks compatíveis.",
        valor: 167.50
    },
    {
        cod_produto: 8,
        nome_produto: "Webcam Logitech C270",
        desc_produto: "Webcam HD com microfone integrado para videoconferências.",
        valor: 589.90
    },
    {
        cod_produto: 9,
        nome_produto: "HD Externo Seagate 1TB",
        desc_produto: "Disco rígido externo USB com capacidade de armazenamento de 1TB.",
        valor: 675.25
    },
    {
        cod_produto: 10,
        nome_produto: "Roteador TP-Link Archer",
        desc_produto: "Roteador Wi-Fi dual band para redes domésticas e empresariais.",
        valor: 352.80
    }
]
)