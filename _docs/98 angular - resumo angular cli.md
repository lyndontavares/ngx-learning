# Angular CLI

## Crie um novo projeto

ng new app-name => Gera todos os arquivos necessários para que um aplicativo angular seja executado corretamente.

Podemos juntar comandos como este:

--dry-run => Mostra todos os arquivos que podem ser gerados. Pense nisso como uma reversão.

--prefix braga => Crie seu projeto com um prefixo personalizado. Por exemplo, normalmente seu projeto no nível de componentes tem o seletor com o alias nome do componente-aplicativo, certo? Então, com este comando CLI, seu seletor será braga-component-name.

--routing --style scss => Adiciona o arquivo de roteamento ao seu projeto e coloca os arquivos CSS no tipo SASS.

## Build & Run
ng serve => Cria todo o seu projeto.

ng serve -o => Constrói todo o seu projeto e abre automaticamente o navegador.

ng serve -p 666 -o => Constrói todo o seu projeto e abre automaticamente o navegador com a URL apontando para a porta 666. Isso é útil se, por exemplo, precisarmos executar dois projetos angulares simultaneamente.

ng serve --help => Fornece mais informações sobre o ng serve.

## Tslint

ng lint => Executa o arquivo tslint em seu projeto e valida se todo o código respeitar as regras.

ng lint --format stylish => O mesmo que ng lint, mas formata a saída de uma maneira mais clara.

ng lint --fix => O mesmo que ng lint mas também tenta corrigir qualquer erro.

ng lint --help => Dá mais informações sobre o ng lint.

## Criar Componentes / Serviços / Modelos / Pipes…

ng generate component customer => Gera o componente “customer” e cria uma pasta com o nome “customer”.

ng gc customer => O mesmo que ng generate component customerusar um alias.

ng gc customer --flat => Gera o componente do cliente sem a pasta.

gg vendas-dados => Gera o serviço “dados de vendas”.

ng g cl models / customer => Gera a classe de cliente dentro da pasta de modelos (se os modelos de pasta não existirem, o CLI irá criá-la).

ng gi models / person => O mesmo que ng g cl models/customerpara criar um interface.

ng ge models / gender => O mesmo que ng g cl models/customerpara criar um enumerator.

ng gp shared / init-caps => Gera o pipe“init-caps” dentro da pasta compartilhada.

ng gd search-box => Gera a “caixa de pesquisa” directive.

## Downgrade / Upgrade CLI

```
npm desinstalação -g @ angular / cli
npm cache limpo 
npm install -g @ angular / cli @ { versão mais recente ou desejada }
```

## Não gerar testes

```
ng g c student --skipTests 
ou 
ng g c student --spec false
```