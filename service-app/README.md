# Service App

## Objetivo

Replicar as rotas e queries apresentadas na Demo. O app deve possuir duas rotas: `/_v/jsonplaceholder/users` e `/_v/jsonplaceholder/users/:userId`. A primeira deve responder para os métodos `GET`, que responde como um proxy para `https://jsonplaceholder.typicode.com/users/`, e `POST`, que deve receber um `body` e subir um erro caso não seja um `JSON` com a propriedade `id`. Para as queries, devem existir pelo menos duas: uma para os `users` da API do `jsonplaceholder` e outra para os clientes da entidade CL do Master Data;

## Etapas

- [ ] Linkar o `storefront-service`;
- [ ] Adicionar a rota `/_v/jsonplaceholder/users` no arquivo `service.json`;
- [ ] No objeto `export default` do arquivo `node/index.ts`, adicionar a rota anterior dentro de `routes`;
- [ ] Criar middleware para `GET` na rota anterior e configurá-lo no mesmo lugar mencionado anteriormente;
- [ ] Implementar o `client` para o JsonPlaceholder e adicioná-lo no arquivo `node/clients/index.ts`;
- [ ] Adicionar policy de `outbound-access` no `manifest` para o host `jsonplaceholder.typicode.com` e path `/*`;
- [ ] Aprimorar middleware anterior para consumir o `client` implementado;
- [ ] Implementar middleware para `POST` na rota anterior, com a lógica de encontrar o `user` para o `userId` passado;
- [ ] Adicionar os `schemas` das queries e typagem no arquivo `graphql/schema.graphql`;
- [ ] Adicionar configuração das queries no objeto `export default` do arquivo `node/index.ts` dentro da propriedade `graphql` > `resolvers`;
- [ ] Implementar resolver para a query;
- [ ] Implementar `client` para o Master Data utilizando o `ExternalClient`;
- [ ] Adicionar policy de `outbound-access` no `manifest` para o host `{{account}}.vtexcommercestable.com.br` e path `/*`;
- [ ] Adicionar policy de `POWER_USER_DS` no `manifest` para permitir nosso `client` utilizar o `authToken` para chamadas ao Master Data;
- [ ] Implementar resolver para a query, utilizando o `client` anterior;

## Links úteis

- https://developers.vtex.com/vtex-developer-docs/docs/how-to-use-and-create-clients-on-vtex-io
- https://github.com/vtex-apps/service-example#readme
- https://github.com/vtex-apps/graphql-example#readme
- https://developers.vtex.com/vtex-rest-api/reference/master-data-api-v1-overview
- https://koajs.com/
