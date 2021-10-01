# Storefront App

## Objetivo

Replicar os componentes apresentados na Demo: `product-draw` e `drawn-badge`. O componente `product-draw` deve receber uma lista de IDs de produto via `props` ou Site Editor e, ao clicar em um botão, sortear um produto e apresentar pelo menos o nome e imagem do produto, que ao clicar, redireciona para a página de produto do mesmo. O `drawn-badge` deve aparecer na página do último produto sorteado somente, para os demais não deve aparecer.

## Etapas

- [ ] Linkar o `storefront-app` e em seguida o `store-theme`;
- [ ] Adicionar o app `trainingweekdev21.storefront-app` como dependência no `store-theme`. Somente haverá essa manipulação no `manifest` da `store-theme`, as demais serão no `storefront-app`;
- [ ] Posicionar o componente `product-draw` no bloco `store.home`
- [ ] Criar query GraphQL para requisição de produtos via `productId`. Utilize o GraphiQL IDE;
- [ ] Adicionar o app `vtex.search-graphql` nas dependências;
- [ ] Implementar componente React. Não esqueça de adicionar as dependências no `manifest.json` caso utilize `vtex.render-runtime`, `vtex.store-image`, entre outros (use sua imaginação);
- [ ] Implementar lógica de sorteio de `productId` dado uma lista;
- [ ] Usar o `useQuery` ou o `useLazyQuery` para executar a query criada, utilizando como variável o `productId` sorteado;
- [ ] Adicionar `prop` para receber a lista de produtos via `blocks` e preenchê-la via `blocks`;
- [ ] Adicionar interface Site Editor para o input de `props`;
- [ ] Persistir o `productId` sorteado. Sugerimos o `localStorage`, dica: ele só existe no `client-side`;
- [ ] Posicionar o componente `product-draw` no block `store.product`;
- [ ] Implementar componente React;
- [ ] Adicionar o app `vtex.product-context` como dependência e utilizar o hook `useProduct` para capturar os dados do produto da página;
- [ ] Adicionar lógica de exibição do componente caso seja o último produto sorteado;

## Links úteis

- https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-3-creating-the-new-app
- https://github.com/vtex-apps/render-runtime#readme
- https://github.com/vtex-apps/store-image#readme
- https://www.apollographql.com/docs/react/data/queries/#executing-a-query
- https://www.apollographql.com/docs/react/data/queries/#manual-execution-with-uselazyquery
- https://github.com/vtex-apps/product-context#product-context
- https://tachyons.io/docs/
