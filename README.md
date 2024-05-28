## Visão Geral

O projeto é um website desenvolvido utilizando Next.js 14 como framework principal, Tailwind CSS para estilização e TypeScript para tipagem estática.

## Requisitos

Antes de começar a usar o projeto, certifique-se de que seu ambiente de desenvolvimento atende aos seguintes requisitos:

- Node.js (v14 ou superior)
- npm ou yarn

## Instalação

Siga estas etapas para configurar o ambiente de desenvolvimento local:

1. Clone este repositório para sua máquina local:

   ```bash
   git clone https://github.com/obrunoalbano/tbb-lego-site.git
   ```


2. Navegue até o diretório do projeto:

   ```bash
   cd seu-projeto
   ```

3. Instale as dependências do projeto:

   ```bash
   yarn install
   ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando

   ```bash
   yarn install
   ```

Isso iniciará o servidor de desenvolvimento em http://localhost:3000.

## Personalização

Você pode personalizar a configuração do Tailwind CSS editando o arquivo tailwind.config.js. Consulte a documentação do Tailwind CSS para obter mais informações sobre personalização.


## Tecnologias Utilizadas no Projeto TBB Lego Site

### Next Js

Next.js é um framework de React para construção de aplicações web modernas e eficientes.

### TypeScript

TypeScript é uma linguagem de programação que adiciona tipagem estática opcional ao JavaScript.

### Tailwind CSS

Tailwind CSS é uma biblioteca de classes CSS utilitárias que permite estilizar rapidamente componentes e layouts.

### Vercel 

Vercel é uma plataforma de hospedagem e deployment para projetos web.


## Uso de Componentes Reutilizáveis em React/Next.js

No desenvolvimento deste projeto, adotei a prática de criar e utilizar componentes reutilizáveis para otimizar o processo de desenvolvimento e melhorar a manutenção do código. Esta abordagem trouxe diversos benefícios, que são destacados a seguir:

**Manutenção Simplificada:** Componentes reutilizáveis permitem atualizações centralizadas. Alterações em um componente são refletidas em todas as partes da aplicação onde ele é utilizado, simplificando a manutenção e reduzindo a possibilidade de erros.

**Redução de Duplicação:** Ao reutilizar componentes, evito a repetição de código, o que resulta em uma base de código mais limpa e concisa. Isso facilita a leitura e compreensão do código por outros desenvolvedores.

**Consistência na Interface:** Reutilizar componentes garante uma experiência de usuário consistente em toda a aplicação. Estilos, comportamentos e interações padronizadas melhoram a usabilidade e a estética do produto.

### Implementação

Para implementar a reutilização de componentes, segui os seguintes passos:

**Identificação de Componentes Comuns:** Analisei as funcionalidades e identifiquei partes do código que se repetiam ou que poderiam ser generalizadas.

**Criação de Componentes Modulares:** Desenvolvi componentes independentes, cada um com suas próprias propriedades e estados, garantindo que fossem suficientemente flexíveis para diferentes usos.


Essa estratégia de desenvolvimento com componentes reutilizáveis resultou em um código mais eficiente, coeso e de fácil manutenção, melhorando significativamente a qualidade do projeto como um todo.

