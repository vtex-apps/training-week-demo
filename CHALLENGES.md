# Desafios

## Storefront

### Objetivo
Desenvolver componentes para Frente de Loja que mostram quanto de Cashback o produto está elegível e o valor total para o carrinho atual do cliente. Os valores percentuais para cada SKU podem ser mockados*, configurados via settings ou Site Editor, entre outras formas. O mais importante é pensar tanto na experiência dos desenvolvedores que irão utilizar seus componentes e quanto nas pessoas que cuidam da operação da loja no dia a dia.

### Bechmarks
- https://www.meliuz.com.br
- https://www.mooba.com.br
- https://www.americanas.com.br


## Backend

### Objetivo
Desenvolver API que receba uma requisição `POST` com o modelo a baixo. Internamente a API deve chamar a Order API da VTEX para o pedido com identificador igual ao `orderId` da requisição, calcular o total de Cashback do pedido e criar um novo documento na entidade com acronym `CB` do Master Data. Os dados a serem persistidos são o seguinte:

- `userId`: ID do cliente que é dono do pedido;
- `orderId`: ID do pedido;
- `cashbackValue`: Valor total de cashback gerado para o pedido;
- `developerEmail`: Email do desenvolvedor que a aplicação tá rodando.

O campo `developerEmail` é para colocarem os seus emails durante a implementação das chamadas ao Master Data. Como mais pessoas estarão usando a mesma entidade, podemos usar esse campo como identificador para não nos atrapalharmos.

### Informações adicionais

* Formato da Requisição
    ```json
    {
      "domain": "Marketplace",
      "orderId": "69305315-01",
      "currentState": "invoice",
      "lastState": "payment-approved",
      "currentChangeDate": "2020-07-13T20:25:13.2304508Z",
      "lastChangeDate": "2020-07-13T20:25:03.9527532Z"
    }
    ```

* Exemplos de documentos
    ```bash
    curl --location --request GET 'https://trainingweekdev21.vtexcommercestable.com.br/api/dataentities/CB/search?_fields=developerEmail,userId,orderId,cashbackValue' \
    --header 'VtexIdclientAutCookie: {{ vtex-local-token }}'
    ```

* Policy para Order API

        OMSViewer

### Links úteis
- https://developers.vtex.com/vtex-rest-api/reference/documents-1
- https://developers.vtex.com/vtex-rest-api/reference/orders
- https://learn.vtex.com/docs/course-calling-commerce-apis-step02references-lang-pt
- https://www.postman.com/downloads/

## Admin

### Objetivo

Desenvolver um App de Admin para gestão operacional do cadastro das regras de Cashback. O App deve possuir uma interface visual onde o usuário consiga cadastrar valores percentuais e as regras a que eles se aplicam. A seguir **exemplos** de configurações:

- Cashback de 5% para produtos da categoria com id `43`;
- Cashback de 10% para o produto com id igual a `2843`;
- Cashback de 3% para produtos da marca com id `2`;

Os dados devem ser persistidos na entidade `CS` do Master Data. Os campos configurados são:

- `cashback`: Valor Percentual de Cashback que a regra aplica;
- `name`: Nome identificador da regra;
- `ruleId`: Identificador do tipo regra;
- `ruleValue`: Valor a ser verificado pela `ruleId`;
- `developerEmail`: Email do desenvolvedor que a aplicação tá rodando.

Novamente, o campo `developerEmail` é para colocarem os seus emails durante a implementação das chamadas ao Master Data. Como mais pessoas estarão usando a mesma entidade, podemos usar esse campo como identificador para não nos atrapalharmos.

A regra de aplicação se baseia nos valores de `ruleId` e `ruleValue`, de forma que o primeiro identifique que atributo do produto vai ser verificado e o segundo valor procurado. Exemplos:

- `ruleId=productId` e `ruleValue=33` irá aplicar o cashback para produtos de ID 33;
- `ruleId=categoryId` e `ruleValue=7` irá aplicar o cashback para produtos de com ID de categoria 7;

Podem criar as regras que quiserem, como recomendação deixamos `id do produto`, `id da categoria` e `id da marca`, mas podem utilizar a imaginação para adicionar outros (métodos de pagamento, etc).

### Informações adicionais

* Exemplos de documentos
    ```bash
    curl --location --request GET 'https://trainingweekdev21.vtexcommercestable.com.br/api/dataentities/CS/search?_fields=cashback,name,ruleId,ruleValue,developerEmail' \
    --header 'VtexIdclientAutCookie: {{ vtex-local-token }}'
    ```

### Links úteis
- https://developers.vtex.com/vtex-rest-api/reference/documents-1
- https://learn.vtex.com/docs/course-calling-commerce-apis-step02references-lang-pt
- https://www.postman.com/downloads/