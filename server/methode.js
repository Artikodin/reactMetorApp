import { Users } from '/imports/api/users';
// Question : Pourquoi est ce que Meteor est importé directement et pas User ?!

Meteor.methods({
    addUser(user) {
        Users.insert({
            name: user
        });
    }
});