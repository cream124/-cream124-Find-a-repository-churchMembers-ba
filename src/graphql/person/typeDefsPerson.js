const { gql } = require("apollo-server");

module.exports = gql`
  type Person {
    _id: ID!
    name: String
    lastName: String
    motherLastName: String
    birthDate: String
    ci: String
    photo: String
    phone: String
    address: String
    location: String
    state: String
    email: String
    registerId: String
    registerDate: String
    registerName: String
    uptadeId: String
    updateDate: String
    approvalId: String
    approvalDate: String
    user: Boolean
    level: Int
    userName: String
    password: String
    christian: Boolean
    baptized: Boolean
    spiritual: Spiritual
    legal: Legal
  }

  type Spiritual {
    christian: Boolean
    baptized: Boolean
    placeAccept: String
    namePlaceAccept: String
    dateAccept: String
    nameBaptizedChurch: String
    denominationBaptizedChurch: String
    palceBaptized: String
    dateBaptized: String
    certificateBaptizedFoto: String
  }

  input Spiritual1 {
    christian: Boolean
    baptized: Boolean
    placeAccept: String
    namePlaceAccept: String
    dateAccept: String
    nameBaptizedChurch: String
    denominationBaptizedChurch: String
    palceBaptized: String
    dateBaptized: String
    certificateBaptizedFoto: String
  }

  type Legal {
    legalInformation: Boolean
    oficialiaN: String
    libroN: String
    partidaN: String
    folioN: String
    oficialiaDepartamento: String
    oficialiaProvincia: String
    oficialiaDate: String
    departamentoNacimiento: String
    provinciaNacimiento: String
    localidadNacimiento: String
    nacionalidadNacimiento: String
    fechaNacimiento: String
    nombresPadre: String
    apellidosPadre: String
    nombresMadre: String
    apellidosMadre: String
    localidadEmicion: String
    fechaEmicion: String
    certificadoFoto: String
  }

   input Legal1 {
    legalInformation: Boolean
    oficialiaN: String
    libroN: String
    partidaN: String
    folioN: String
    oficialiaDepartamento: String
    oficialiaProvincia: String
    oficialiaDate: String
    departamentoNacimiento: String
    provinciaNacimiento: String
    localidadNacimiento: String
    nacionalidadNacimiento: String
    fechaNacimiento: String
    nombresPadre: String
    apellidosPadre: String
    nombresMadre: String
    apellidosMadre: String
    localidadEmicion: String
    fechaEmicion: String
    certificadoFoto: String
  }

  type PersonUser {
    _id: ID!
    name: String
    lastName: String
    userName: String
    photo: String
    email: String
    level: Int
    password: String
    token: String
  }

  input Login {
    userName: String
    email: String
    password: String
  }

  input Filter {
    state: String
    startDate: String
    endDate: String
  }

  input RegisterPerson {
    name: String
    lastName: String
    motherLastName: String
    birthDate: String
    ci: String
    photo: String
    address: String
    location: String
    # state: String
  }

  type Query {
    persons: [Person]
    filterByStatePersons(state: String): [Person]
    filterPersons(filter: Filter): [Person]
    person(id: String): Person
  }
  type Mutation {
    createPerson(
      name: String!
      lastName: String
      motherLastName: String
      birthDate: String
      ci: String
      photo: String
      phone: String
      address: String
      location: String
      state: String
      email: String
      registerId: String
      registerDate: String
      approvalId: String
      approvalDate: String
      user: Boolean
      level: Int
      userName: String
      password: String
      christian: Boolean
      baptized: Boolean
      spiritual: Spiritual1
      legal: Legal1
    ): Person

    updateStatePerson(
      ids: [String]
      state: String
      approvalId: String
      approvalDate: String
    ): Person

    updatePerson(
      id: String!
      name: String
      lastName: String
      motherLastName: String
      birthDate: String
      ci: String
      photo: String
      phone: String
      address: String
      location: String
      state: String
      email: String
      registerId: String
      registerDate: String
      approvalId: String
      approvalDate: String
      user: Boolean
      level: Int
      userName: String
      password: String
      christian: Boolean
      baptized: Boolean
    ): Person

    loginPerson(login: Login): PersonUser

    asRootPerson(id: ID!): Person

    deletePerson(id: ID!): PersonUser
  }
`;
