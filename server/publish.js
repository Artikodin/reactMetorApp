// On balance les methode de publication ici
import { Users } from '/imports/api/users';
// Question : Pourquoi est ce que Meteor est importé directement et pas User ?!

Meteor.publish('allUsers', function() {
    return Users.find();
});