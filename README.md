# Node API 2 Guided Project Starter Code

Guided project starter code for **Node API 2** module.

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover how to use `Express Routers` to break up the application to make it more maintainable.

## Prerequisites

-   a REST client like [insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

-   [ ] fork and clone this repository.
-   [ ] **CD into the folder** where you cloned **your fork**.
-   [ ] type `npm i` to download dependencies.

Please follow along as the instructor builds the API step by step.

## Project Structure

-   by type
    -   components
    -   actions
    -   reducers
    -   routers
    -   tests
    -   models
    -   services
-   by feature
    -   accounts
    -   products
    -   clients
-   hybrid
    -   type > feature
    -   feature > type

An Express Router is a way to componetize an express application.

Routing cares about the HHTP METHOD and the URL.

/ => home

/clients => clients

| Action          | Non REST      | REST                |
| :-------------- | :------------ | :------------------ |
| list clients    | /clientList   | GET /clients        |
| add a client    | /addClient    | POST /clients       |
| update a client | /modifyClient | PUT /clients/:id    |
| remove a client | /deleteClient | DELETE /clients/:id |

localhost:4000/api/hubs?page=2&limit=3
? --------------> the beginning of the "query string"
page = 2 -------> key / value pair
& --------------> separates key / value pairs
limit = 3 ------> another key / valu pair

https://github.com/microsoft/
https://github.com/microsoft/azuredatastudio/
https://github.com/microsoft/azuredatastudio/pulls
https://github.com/microsoft/azuredatastudio/issues

https://github.com/luishrd?tab=followers
https://github.com/luishrd/followers

https://github.com/luishrd/followers

https://github.com/:userid/:repository/pulls
https://github.com/:userid/:repository/issues

/clients/:id/orders --> only the orders for a single client

/orders ---> all the orders
