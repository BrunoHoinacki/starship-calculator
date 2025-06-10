# Desafio Starship MegaLights

Este projeto oferece uma solução para o desafio de cálculo de paradas de reabastecimento de naves espaciais, utilizando a **API SWAPI**. Durante o desenvolvimento, a API principal (`https://swapi.dev/`) apresentou um problema de **certificado SSL expirado**, o que impossibilitou a conexão segura.

Para contornar este problema e permitir a execução do desafio, uma instância do `axios` foi configurada para **ignorar a verificação de certificado SSL/TLS**.

---

## Aviso Importante

**Ignorar a verificação de certificado SSL/TLS ( `rejectUnauthorized: false` ) é uma prática de segurança extremamente arriscada e NÃO DEVE SER UTILIZADA em ambientes de produção ou em qualquer aplicação que lide com dados sensíveis.** Esta solução foi implementada apenas para fins de demonstração e para permitir a conclusão deste desafio em um ambiente de desenvolvimento.

---

## Objetivo

A aplicação recebe como entrada um valor inteiro representando a distância em **MegaLights (MGLT)** e calcula, para cada nave retornada pela API, quantas paradas de reabastecimento são necessárias para percorrer essa distância. As informações para o cálculo estão disponíveis na documentação da API.

### Exemplo de Entrada e Saída

**Entrada**: `1000000` (MGLT)

**Saída Esperada**:
Executor: 0<br>
Sentinel-class landing craft: 19<br>
Death Star: 3<br>
Millennium Falcon: 9<br>
Y-wing: 74<br>
X-wing: 59<br>
TIE Advanced x1: 79<br>
Slave 1: 19<br>
Imperial shuttle: 13<br>
EF76 Nebulon-B escort frigate: 1<br>
Calamari Cruiser: 0<br>
A-wing: 49<br>
B-wing: 65<br>
Republic Cruiser: 0<br>
Naboo fighter: 0<br>
Naboo Royal Starship: 0<br>
Scimitar: 0<br>
J-type diplomatic barge: 0<br>
AA-9 Coruscant freighter: 0<br>
Jedi starfighter: 0<br>
H-type Nubian yacht: 0<br>
Star Destroyer: 0<br>
Trade Federation cruiser: 0<br>
Theta-class T-2c shuttle: 0<br>
T-70 X-wing fighter: 0<br>
Rebel transport: 11<br>
Droid control ship: 0<br>
Republic Assault ship: 0<br>
Solar Sailer: 0<br>
Republic attack cruiser: 0<br>
Naboo star skiff: 0<br>
Jedi Interceptor: 0<br>
arc-170: 83<br>
Belbullab-22 starfighter: 0<br>
V-wing: 0<br>
CR90 corvette: 1<br>
Banking clan frigate: 0

## Estrutura do Projeto

```plaintext
starship-calculator/
├── index.js                // Ponto de entrada da aplicação
├── services/
│   └── swapiService.js     // Lógica para interação com a API SWAPI
└── utils/
    └── timeConverter.js    // Funções utilitárias para conversão de unidades de tempo
```

## Descrição dos Componentes
index.js: Arquivo principal que coordena a execução da aplicação, processando a entrada e exibindo os resultados.<br>
swapiService.js: Módulo responsável por realizar chamadas à API SWAPI e obter dados das naves.<br>
timeConverter.js: Contém funções utilitárias para conversão de unidades de tempo e cálculos relacionados ao reabastecimento.

## Como Executar
- Clone o repositório:
```bash
git clone git@github.com:BrunoHoinacki/starship-calculator.git
```

- Instale as dependências:
```bash
npm install
```

- Execute a aplicação, passando a distância em MGLT como argumento:
```bash
node index.js 1000000
```

## Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript.
Axios: Biblioteca para requisições HTTP à API SWAPI.
JavaScript (ES6+): Linguagem principal do projeto.

## Notas
A saída foi projetada para corresponder exatamente ao formato especificado no desafio.
A aplicação lida com possíveis falhas na API, como dados ausentes ou indisponibilidade, retornando resultados consistentes.
Consulte a documentação da API (https://swapi.bryapi.com.br/documentation) para mais detalhes sobre os endpoints e dados utilizados.
