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

### REA Translation

## Basyn / Holo-REA Hackalong  Proposed Test Activity

Data setup (use graphiql):
    Agents: Bob the bio-digester and Carol the farmer
    Units: gallon, one (?)
    ResourceSpecifications: 
        Liquid fertilizer
        defaultUnitOfResource: gallon
        Dollar 
        defaultUnitOfResource: one
    
0. Put beginning balances into Bob's and Carol's bank accounts.  Query the bank balances.
For each, use a `raise` EconomicEvent, resourceQuantity: $10,000, resourceConformsTo: Dollar, provider and receiver: Bob and Carol respectively, hasPointInTime: current or in the past; create a resource: resource.name: "Bob's (Carol's) bank account", resource.trackingIdentifier: a bank account number, primaryAccountable: Bob or Carol.

1. Bob the bio-digester produces 5000 gallons liquid fertilizer, lot 123.  Query Bob's inventory.
EconomicEvent: action: produce, provider and receiver: Bob, resourceQuantity: 5000 gallons, hasPointInTime: now, resourceConformsTo: Liquid fertilizer, inScopeOf: Bob (?), create resource: trackingIdentifier: 123, primaryAccountable: Bob

[Possibly, we could put together a simple screen that creates EconomicEvents of any type for 0. and 1.?  And maybe 3.?]

2. Carol the farmer orders 1000 gallons liquid fertilizer.
Agreement: created: now
Commitment: action: transfer, resourceConformsTo: liquid fertilizer, resourceQuantity: 1000 gallons, due: tomorrow, clauseOf: the agreement, provider: Bob, receiver: Carol
Commitment: action: transfer, resourceConformsTo: dollar, resourceQuantity: 3260, due: in 10 days,  clauseOf: the agreement, provider: Carol, receiver: Bob

3. Bob delivers 1000 gallons liquid fertilizer to Carol, lot 123.  Query Bob's inventory.
EconomicEvent: action: transfer, resourceQuantity: 1000 gallons, resourceInventoriedAs: lot 123 liquid fert, hasPointInTime: now, provider: Bob, receiver: Carol
Fulfillment: resourceQuantity: 1000 gallons, fulfills: the commitment, fulfilledBy: the event

4. Carol pays Bob $3260 for the fertilizer.   Query the bank balances.
EconomicEvent: action: transfer, resourceQuantity: 3260, resourceInventoriedAs: Carol's bank account, hasPointInTime: now, provider: Carol, receiver: Bob
Fulfillment: resourceQuantity 3260, fulfills: the commitment, fulfilledBy: the event


