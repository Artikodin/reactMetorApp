// On balance les methode d'insertion ici !
import { Messages } from '/imports/api/messages';
// Question : Pourquoi est ce que Meteor est importé directement et pas User ?!

Meteor.methods({
    sendMessage(message) {
        const email = Meteor.user().emails[0].address;
        const name = email.substring(0, email.lastIndexOf("@"))
        Messages.insert({
            message: message,
            userSendId: Meteor.userId(),
            userSendName: name,
            userReceiveId: 'kDCAGSyy7QLMDdzKY',
            sendAt: new Date()
        });
    }
});