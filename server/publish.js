// On balance les methode de publication ici
import { Messages } from '/imports/api/messages';
// Question : Pourquoi est ce que Meteor est importé directement et pas User ?!

Meteor.publish('allMessages', function() {
    return Messages.find();
});

Meteor.publish('discussMessage', function() {
    return Messages.find({userSend: Meteor.userId()});
});

Meteor.publish('userList', function (){ 
    return Meteor.users.find();
  });