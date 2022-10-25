# FindShopApi
# API Find Shop

 

Projeto da API, responsável por retornar dados e inserir dados no Banco hospedado na azure.

 

### Sumário

<ul>

 

<li>[Produtos] (#products)

<li>[Estabelecimentos] (#establishments)

<li>[Setores] (#sections)

<li>[Monitoramento] (#monitoring) 

<ul/>

## Documentação da API

## Produtos

#### **LIST**

<ol>

<li>Retorna todos os produtos - <strong>GET</strong> </li>

```http

http://localhost:21262/products

```
  </ol>

 

#### **FIND BY ID**

<ol>

<li>Retorna o produto referente ao id informado - <strong>GET</strong> </li>

 

```http

http://localhost:21262/products/{id}

```

 

| Parâmetro Query  | Tipo       | Descrição  |                        
| :---------- | :--------- | :----------------------------------|
| `id` | `int` | `Id a ser consultado`|

  </ol>

#### **CREATE**

<li>Adiciona um novo produto - <strong>POST</strong></li>

 

```http

http://localhost:21262/products

```

| Parâmetro Body  | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | `Id do produto`|
| `name`      | `string` | `Nome do produto`|
| `section`      | `string` | `Nome do setor`|

 

>- Exemplo Body

 
```json
{
  "id": "1",
  "name": "Banana",
  "section": "Frutas"
}
```
 </ol>
 
 ## Setores

#### **LIST**

<ol>

<li>Retorna todos os setores - <strong>GET</strong> </li>

```http

http://localhost:21262/sections

```
  </ol>

 

#### **FIND BY ID**

<ol>

<li>Retorna o setor referente ao id informado - <strong>GET</strong> </li>

 

```http

http://localhost:21262/sections/{id}

```

 

| Parâmetro Query  | Tipo       | Descrição  |                        
| :---------- | :--------- | :----------------------------------|
| `id` | `int` | `Id a ser consultado`|

  </ol>

#### **CREATE**

<li>Adiciona um novo setor - <strong>POST</strong></li>

 

```http

http://localhost:21262/sections

```

| Parâmetro Body  | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | `Id do setor`|
| `name`      | `string` | `Nome do setor`|
 

>- Exemplo Body

 
```json
{
  "id": "1",
  "name": "Frutas"
}
```
 </ol>
 
 ## Estabelecimentos

#### **LIST**

<ol>

<li>Retorna todos os estabelecimentos - <strong>GET</strong> </li>

```http

http://localhost:21262/establishments

```
  </ol>

 

#### **FIND BY ID**

<ol>

<li>Retorna o estabelecimento referente ao id informado - <strong>GET</strong> </li>

 

```http

http://localhost:21262/establishment/{id}

```

 

| Parâmetro Query  | Tipo       | Descrição  |                        
| :---------- | :--------- | :----------------------------------|
| `id` | `int` | `Id a ser consultado`|

  </ol>

#### **UPDATE**

<li>Atualiza um establecimento existente - <strong>PUT</strong></li>

 
```http

http://localhost:21262/establishment{id}

```

| Parâmetro Query  | Tipo       | Descrição  |                        
| :---------- | :--------- | :----------------------------------|
| `id` | `int` | `Id a ser atualizado`|


| Parâmetro Body  | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | `Id do produto`|
| `name`      | `string` | `Nome do produto`|
| `address`      | `string` | `Endereço do estabelecimento`|
| `image`      | `string` | `Imagem do estabelecimento`|
 

>- Exemplo Body

 
```json
{
  "id": "1",
  "name": "Bem Barato",
  "address": "Pereira Barreto",
  "image": ""
}
```
 </ol>
 
 
 #### **CREATE**

<li>Adiciona um novo establecimento - <strong>POST</strong></li>

 
```http

http://localhost:21262/establishment

```

| Parâmetro Body  | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | `Id do produto`|
| `name`      | `string` | `Nome do produto`|
| `address`      | `string` | `Endereço do estabelecimento`|
| `image`      | `string` | `Imagem do estabelecimento`|
 

>- Exemplo Body

 
```json
{
  "id": "1",
  "name": "Bem Barato",
  "address": "Pereira Barreto",
  "image": ""
}
```
 </ol>
