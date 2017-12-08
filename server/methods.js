// On balance les methode d'insertion ici !
import { Messages } from '/imports/api/messages';
// Question : Pourquoi est ce que Meteor est importé directement et pas User ?!

Meteor.methods({
    sendMessage(message) {
        Messages.insert({
            message: message,
            userSend: Meteor.userId(),
            sendAt: new Date()
        });
    }
});