import './public.html';

import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
import {subs} from '/imports/ui/lib/subs.js';
import toastr from 'toastr';
import {ReactiveVar} from 'meteor/reactive-var';
import {Session} from 'meteor/session';
import {GlobalIndicator} from '/imports/collections/globalIndicators/globalIndicators.js';
import {SurBtc} from '/imports/collections/surBtc/surBtc.js';
import {CryptoMkt} from '/imports/collections/cryptoMkt/cryptoMkt.js';
import {CoinMktCap} from '/imports/collections/coinMktCap/coinMktCap.js';

Template.public.onCreated(function() {
  Tracker.autorun(function() {
   Meteor.subscribe("allGlobalIndicators");
   Meteor.subscribe("allCoinMktCap");
   Meteor.subscribe("allCryptoMkt");
   Meteor.subscribe("allSurBtc");
  });
});
Template.public.helpers({
   getGlobalIndicators: function() {
     return GlobalIndicator.find({}, {
      sort: {
        createdAt: -1
      }, 
      limit: 1
    });
  } ,
   getSurBtcETH:function(){
     var obj = SurBtc.findOne({symbol:"ETH"}, {
      sort: {
        createdAt: -1
      } 
    });
    $('#eth-surbtc')  .transition('fade');
    $('#eth-surbtc')  .transition('fade');
 
      return obj;
  },
  getSurBtcBTC:function(){
     var obj = SurBtc.findOne({symbol:"BTC"}, {
      sort: {
        createdAt: -1
      } 
    });
    $('#btc-surbtc')  .transition('fade');
    $('#btc-surbtc')  .transition('fade');
 
      return obj;
  },
  getCryptoMkt:function(){
      var cryptoMkt = CryptoMkt.findOne({}, {
      sort: {
        createdAt: -1
      } 
    });
    $('#eth-cptmkt')  .transition('fade');
    $('#eth-cptmkt')  .transition('fade');
 
      return cryptoMkt;
  },
  getCoinMktCapETH: function() {
     var obj = CoinMktCap.findOne({symbol:"ETH"}, {
      sort: {
        createdAt: -1
      } 
    });

    $('#eth-coinmkt')  .transition('fade');
    $('#eth-coinmkt')  .transition('fade');

    return obj
  } ,
  getCoinMktCapBTC: function() {
     var obj = CoinMktCap.findOne({symbol:"BTC"}, {
      sort: {
        createdAt: -1
      } 
    });

    $('#btc-coinmkt')  .transition('fade');
    $('#btc-coinmkt')  .transition('fade');

    return obj
  } ,
  getCoinMktCapLTC: function() {
     var obj = CoinMktCap.findOne({symbol:"BTC"}, {
      sort: {
        createdAt: -1
      } 
    });

    $('#ltc-coinmkt')  .transition('fade');
    $('#ltc-coinmkt')  .transition('fade');

    return obj;
  } ,
  formatCurrency: function(number) {
   var accounting = require("accounting");
   return  accounting.format(number)

  },
  toFixedFormat: function(number) {
    return  number.toFixed(6)

  },
  usdToClp: function(number) {
      
    var dolarNow=GlobalIndicator.findOne({}, {
      sort: {
        createdAt: -1
      } 
    });
    console.log("number:"+number)
    console.log(dolarNow.usd_now)
    var clp = parseFloat(number) * parseFloat(dolarNow.usd_now);
    console.log("clp:"+clp)

    var accounting = require("accounting");
    return  accounting.format(clp)

  },
});
