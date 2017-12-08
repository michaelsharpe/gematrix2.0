Possible file structure:

- Globbing can possibly be used to pull in all required
files and imports

➜  Gematrix
└── schema
    ├── User
    │   ├── User.model.js
    │   ├── User.connector.js
    │   ├── User.mutations.gql
    │   ├── User.query.gql
    │   └── User.type.gql
    ├── Numeral
    │   ├── Numeral.model.js
    │   ├── Numeral.connector.gql
    │   ├── Numeral.mutations.gql
    │   ├── Numeral.query.gql
    │   └── Numeral.type.gql
    ├── common
    │   ├── directives.gql
    │   ├── enum.gql
    │   └── pagination.gql
    └── root.gql

Notes

- Resolvers for authentication/authorization
    - (Article on Medium)[https://medium.com/@justin_mandzik/graphql-server-after-hello-world-a190d88c14eb]
    - (apollo-resolvers)[https://github.com/thebigredgeek/apollo-resolvers]
- Dataloaders in connectors.  
    - Connectors connect the resolver to the model/database

- Put models and connectors into CONTEXT?.
- resolves use the model from the context to fetch the objects

- Models all go into a single connector for Mongodb
