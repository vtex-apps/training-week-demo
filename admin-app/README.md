# Admin App

## Objetivo

Desenvolver componente com experiência parecida ao apresentado na Demo. O app deve expor uma rota no Admin que possua um botão de upload que abre um modal com uma área de input de arquivo. Ao receber um arquivo CSV com o formato que você determinar, ele deve fechar o modal e popular uma tabela com os dados. O App deve possuir tratamentos para formatos inesperados, tanto de arquivo quanto para colunas no CSV. O App deve possuir uma funcionalidade adicional de popular a tabela com dados do Master Data, da entidade CL.

## Etapas

- [ ] Linkar o `admin-app`;
- [ ] Adicionar o app `vtex.styleguide` nas dependências;
- [ ] Alterar a `section` em `navigate.json` para `customer`;
- [ ] Alterar a rota do App para `/admin/training-week/users` em `navigation.json`;
- [ ] Alterar a rota do App para `/admin/app/training-week/users` em `routes.json`;
- [ ] Adicionar lógica de abertura do `Modal` com base no clique do botão;
- [ ] Adicionar mensagem informando o tipo de arquivo aceito no `Dropzone` e outras instruções;
- [ ] Adicionar `handlers` de upload de arquivo (`onDropAccepted`) e cancelamento (`onDropReject`) no `Dropzone`;
- [ ] Adicionar botão que iniciar o processo de população da tabela, isto é, transforme o arquivo CSV em um array de objetos. Para esta transformação, podemos utilizar uma lib como por exemplo [csvtojson](https://www.npmjs.com/package/csvtojson) (não é o melhor, mas é simples o suficiente para a tarefa). Não esqueça de rodar a instalação do pacote na pasta correta (`react`);
- [ ] Implementar `Table`;
- [ ] Popular tabela com dados anteriores;
- [ ] Implementar alertas ao usuário para erros de operação (arquivo inválido, erros desconhecidos, etc);
- [ ] Alterar as `labels` das mensagens em `messages/pt.json` (deve ter notado que elas estão bem estranhas);
- [ ] Implementar query para requisição de dados da entidade CL. Dica: o app que implementa é o `vtex.store-graphql`;
- [ ] Adicionar botão que efetua a query e popula a tabela. Dica: lembrar do `useQuery` e `useLazyQuery`;

## Links úteis

- https://github.com/vtex-apps/admin-example#readme
- https://styleguide.vtex.com/
- https://github.com/vtex-apps/render-runtime#readme
- https://learn.vtex.com/docs/course-admin-lang-en
- https://www.apollographql.com/docs/react/data/queries/#executing-a-query
- https://www.apollographql.com/docs/react/data/queries/#manual-execution-with-uselazyquery
- https://tachyons.io/docs/
