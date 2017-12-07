import { Mongo } from 'meteor/mongo'

const Users = new Mongo.Collection('utilisateurs');

export default Users;