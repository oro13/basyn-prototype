## Basyn: An invoice system for circular bio-economies.
___

Notable Links:

[How to model in value flows](https://docs.google.com/document/d/1oB2voB062Jj_z0ERg46NlYNIxydMR1LLaAyx-OZ0D4Q/edit)

[Visualizing Flows GH Thread](https://github.com/valueflows/valueflows/issues/507)

[slides](https://speakerdeck.com/mikorizal/everything-in-valueflows-is-connected?slide=2) on data modeling in valueflows

___

Notes on the HoloREA Holochain Forum Thread:

Bill McCarthy originated REA, Bob Haugen thought to apply it to economic networks

agent and shroom? earlier valueflows react apps

Pospi - it’s useful to think of the ValueFlows model as PREA; for Process-Resource-Event-Agent.

digestor flow diagram models PR, process-resource, how resources move through ecosystem

RA - shows clear chain of who owns what resource

RE - a low level stock/inventory, useful for bigdata and machine learning algorithms

PA/PE - helpful for looking at staff skills and high need areas

a UI that can toggle between PR and RA would help high level planning, pospi is enthusiastic about this

events described in valueflows by [16 action verbs](https://valueflo.ws/introduction/flows.html#actions)
they are the core actions of a collaborative network, open to extending them in the future

digestor is a production-style process
its events are it "consumes" inputs and "produces" output resources

additional steps of production:
'store liquid', 'decant', 'filter' and/or 'ultrafilter', 'blend', 'cure'

question of transporting onsite ('store liquid') vs offsite ('distribute fertilizer')

'fill truck' -- with biogas?

model as far as needed, possibility of extending to sensors measuring steps of the process


Pospi discourages modeling more than 2 aspects of PREA at a time, to keep it simple, as network size grows


Getting started with the repository:

clone, follow start guide, GraphiQL interface has full documentation for most of the API, file any bugs you find on github issues, test out API with the GraphQL queries and JSON payloads from [here](https://github.com/holo-rea/holo-rea/tree/master/test)-- these can be copy and pasted riectly in to the GraphiQL UI, most CRUD (create, read, update, delete) functions are implemented, but most queries do not as it is difficult in a 'content-addressable backend' (holochain)

additional modules will be added later, this Holo-REA GraphQL API is a [subset](https://github.com/holo-rea/holo-rea/blob/master/modules/vf-graphql-holochain/index.ts#L21) of all [valueflows modules](https://github.com/valueflows/vf-graphql/tree/master/lib/schemas). Future plans can be found [here](https://github.com/holo-rea/ecosystem/wiki/Modules-in-the-HoloREA-framework), open to contributions

in late april, pospi was implementing displaying inventory and commitments on a per-agent basis

in terms of exchanging goods for payments, the same process can be 'reused' in exchange for a currency, just record processes with input and output events
or an invoicing system would just need separate, reciprocal transfers (biofertilizer out, currency in)

an exchange is an 'agreement' in valueflows, showing a consume or a transfer event of biofertilizer and a reciprocal commitmeent of currency owed


popi proposes a hackalong of working through the record types to model the flows of resources and data planning

- separate the marketplace network from the business operation
- cast Carol's `Intent `to purchase biofertilizer and `Proposal` to pay
- Bob's acceptance of the contract and creating a binding `Agreement` and `Commitments` to make the transfers
- Final enactment of the trade at PoS by logging `EconomicEvents` (needs `attestations` possibly refactored from Guillem's mutual credit app)

This would all be useful for the inputs:

Alice's `Intent` to have food lasts removed and `Proposal` to pay money for the service. it's the same exchange coordination but in reverse.

TODO What use-case specific business intelligence does Vashon Bioenergy need to attch to the resource flow?

e.g. auditing requirements, 'wishlist' features like stats and impact (landfill aversion, carbon sequestration, soil nutrition benefits)

the question of how many networks/dnas are we dealing with, including a 'group agent' for operations and an app for marketplace members, data would have to be linked between these  DHTs (distributed hash tables, the holochain app's database/ledger)

TODO do we have the need for an open/regional marketplace to look for matches in providers and receivers?

How to work towards UI?

