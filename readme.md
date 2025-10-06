# Projeto ViaNet

Este é o repositório do site institucional para a Escola de Condução ViaNet. O projeto utiliza Gulp.js como ferramenta de automação para compilar SASS, minificar arquivos e otimizar os assets para produção.

## Tecnologias Utilizadas

  * **HTML5**
  * **SASS/SCSS**
  * **JavaScript (ES6+)**
  * **Gulp.js** para automação de tarefas.
  * **Node.js** e **npm** para gerenciamento de pacotes.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

  * [Node.js](https://nodejs.org/) (que inclui o npm)
  * [Git](https://git-scm.com/)

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento local.

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    Este comando irá instalar todas as `devDependencies` listadas no arquivo `package.json`.

    ```bash
    npm install
    ```

## Como Usar

O projeto possui dois scripts principais para facilitar o desenvolvimento e a publicação.

### Modo de Desenvolvimento

Para trabalhar no projeto, você pode iniciar o modo de "watch". Este comando irá compilar todos os arquivos uma vez e, em seguida, ficará monitorando as pastas `src/scss`, `src/js` e `src/*.html` por qualquer alteração. Ao salvar um arquivo, a tarefa correspondente será executada automaticamente.

Execute o seguinte comando no seu terminal:

```bash
npm run dev
```

Após executar o comando, abra o arquivo `dist/index.html` no seu navegador para visualizar o site.

### Gerando a Build de Produção

Quando o desenvolvimento estiver concluído e você quiser gerar os arquivos finais para fazer o deploy (publicar o site), execute o comando de build.

Este comando irá compilar o SASS, minificar o CSS, o JavaScript e o HTML, gerando a versão otimizada do site na pasta `dist/`.

Execute o seguinte comando no seu terminal:

```bash
npm run build
```

O conteúdo da pasta `dist/` é o que deve ser enviado para o servidor de hospedagem.

## Estrutura de Pastas

  * **`src/`**: Contém todos os arquivos de desenvolvimento. É aqui que você deve editar o código SCSS, JavaScript e HTML.
  * **`dist/`**: Contém os arquivos compilados e minificados prontos para produção. **Não edite os arquivos nesta pasta diretamente**, pois eles são gerados automaticamente pelo Gulp.

## Scripts Disponíveis

No arquivo `package.json`, os seguintes scripts estão configurados:

  * `"dev"`: Inicia o ambiente de desenvolvimento com o `gulp watch`.
  * `"build"`: Executa a tarefa de build para produção com o `gulp build`.
