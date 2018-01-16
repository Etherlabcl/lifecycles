// se debe importar en el archivo
// imports/startup/server/register-api-js
// para poder usarlo
import {Meteor} from 'meteor/meteor';
import {_} from 'meteor/underscore';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {logError} from '/imports/ui/lib/errors.js';
import {GlobalIndicator} from '/imports/collections/globalIndicators/globalIndicators.js';
import {SurBtc} from '/imports/collections/surBtc/surBtc.js';
import {CryptoMkt} from '/imports/collections/cryptoMkt/cryptoMkt.js';
import {CoinMktCap} from '/imports/collections/coinMktCap/coinMktCap.js';

Meteor.methods({
  insertGlobalIndicator: function(dataObject) {
    let id = GlobalIndicator.insert(dataObject);
    return {ok: true}
  }
});

Meteor.methods({
  insertSurBtc: function(dataObject) {
    let id = SurBtc.insert(dataObject);
    return {ok: true}
  }
});

Meteor.methods({
  insertCryptoMkt: function(dataObject) {
    let id = CryptoMkt.insert(dataObject);
    return {ok: true}
  }
});

Meteor.methods({
  insertCoinMktCap: function(dataObject) {
    let id = CoinMktCap.insert(dataObject);
    return {ok: true}
  }
});
