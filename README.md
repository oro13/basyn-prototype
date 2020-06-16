---
TODO: 

Software Design:

    finalize graphql schema, REA UML, User Data


dev resources:

https://holochain-open-dev.github.io/blog/graphql-holochain/

---

# basyn-prototype

Based on REA accounting Framework

built on apollo graphql, holochain, (possibly substrate)

based on work by [holochain open dev](https://github.com/holochain-open-dev) team and [holorea team](github.com/holo-rea/)

### Basyn Team:

#### [Kamal, UX & software design](github.com/krpone)

#### [Feli, full stack dev](github.com/oro13)

---
## Overview Prototype Design (Phases 1-3):

<p align="center">
  <img src=media/use_case_graph.jpg width='100%' height='auto'>
  <br><i>App-User Interactions <br> Phase 1 is Starred and Marked by Orange Dots</i>
</p>

## Prototype phase 1

Overview: Bob and Carol agree to a monthly, reoccuring purchase for biofertilizer. Once a month, Bob delivers  20 gallons of biofertilizer to Carol. Carol pays Bob $30 USD

### Users 

       Bob, AD owner/operator, producer of biofertilizer, 
       
       Carol, neighbor/farmer, purchases 20 gal of biofertilizer for $30

### Activity
       
       Bob and Carol make an agreement, a monthly, reoccuring promise to purchase the 'plantfood', also possibly purchase delivery
       
       Bob Produces Bio Fertilizer
             
       Bob delivers plantfood to Farm A, Carol's farm
             
       Carol gives Bob $30 for this month's order and delivery
       
       
### GraphQL Schema

e.g.

```
type Post {
    id: ID!
    content: String!
    author: Author!
}
type Author {
    id: ID!
    posts: [Post!]!
}
type Query {
    allPosts: [Post!]!
    post(id: ID!): Post!
}
type Mutation {
    createPost(content: String!): ID!
}

```