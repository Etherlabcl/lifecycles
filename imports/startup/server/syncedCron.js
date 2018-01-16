import '/imports/collections/coinMktCap/coinMktCap.js';
import '/imports/collections/surBtc/surBtc.js';
import '/imports/collections/cryptoMkt/cryptoMkt.js';
import '/imports/modules/public/server/publications.js';
import '/imports/modules/public/server/methods.js';
import { HTTP } from 'meteor/http';
import {GlobalIndicator} from '/imports/collections/globalIndicators/globalIndicators.js';

SyncedCron.add({
  name: 'GET COIN DATA',
  schedule: function(parser) {
    return parser.text('every 7 seconds');
  },
  job: function() {
    try {
      let dolarNow = Scrape.url('https://mindicador.cl/api/dolar');

      let coinmarketcap_btc = HTTP.call( 'GET', 'https://api.coinmarketcap.com/v1/ticker/bitcoin', {} );
      let responseBTCObj={
          cryptoId:  coinmarketcap_btc.data[0].id,
          name:  coinmarketcap_btc.data[0].name,
          symbol:  coinmarketcap_btc.data[0].symbol,
          rank:  coinmarketcap_btc.data[0].rank,
          price_usd: coinmarketcap_btc.data[0].price_usd,
          price_btc: coinmarketcap_btc.data[0].price_btc,
          h24_volume_usd: 0,
          market_cap_usd:  coinmarketcap_btc.data[0].market_cap_usd,
          available_supply:  coinmarketcap_btc.data[0].available_supply,
          total_supply:  coinmarketcap_btc.data[0].total_supply,
          max_supply: coinmarketcap_btc.data[0].max_supply,
          percent_change_1h:  coinmarketcap_btc.data[0].percent_change_1h,
          percent_change_24h:  coinmarketcap_btc.data[0].percent_change_24h,
          percent_change_7d:  coinmarketcap_btc.data[0].percent_change_7d,
          last_updated:  coinmarketcap_btc.data[0].last_updated
      }

      let coinmarketcap_ltc = HTTP.call( 'GET', 'https://api.coinmarketcap.com/v1/ticker/litecoin', {} );
      let responseLTCObj={
          cryptoId:  coinmarketcap_ltc.data[0].id,
          name:  coinmarketcap_ltc.data[0].name,
          symbol:  coinmarketcap_ltc.data[0].symbol,
          rank:  coinmarketcap_ltc.data[0].rank,
          price_usd: coinmarketcap_ltc.data[0].price_usd,
          price_btc: coinmarketcap_ltc.data[0].price_btc,
          h24_volume_usd: 0,
          market_cap_usd:  coinmarketcap_ltc.data[0].market_cap_usd,
          available_supply:  coinmarketcap_ltc.data[0].available_supply,
          total_supply:  coinmarketcap_ltc.data[0].total_supply,
          max_supply: coinmarketcap_ltc.data[0].max_supply,
          percent_change_1h:  coinmarketcap_ltc.data[0].percent_change_1h,
          percent_change_24h:  coinmarketcap_ltc.data[0].percent_change_24h,
          percent_change_7d:  coinmarketcap_ltc.data[0].percent_change_7d,
          last_updated:  coinmarketcap_ltc.data[0].last_updated
      }


      let coinmarketcap_eth = HTTP.call( 'GET', 'https://api.coinmarketcap.com/v1/ticker/ethereum', {} );
      let responseETHObj={
          cryptoId:  coinmarketcap_eth.data[0].id,
          name:  coinmarketcap_eth.data[0].name,
          symbol:  coinmarketcap_eth.data[0].symbol,
          rank:  coinmarketcap_eth.data[0].rank,
          price_usd: coinmarketcap_eth.data[0].price_usd,
          price_btc: coinmarketcap_eth.data[0].price_btc,
          h24_volume_usd: 0,
          market_cap_usd:  coinmarketcap_eth.data[0].market_cap_usd,
          available_supply:  coinmarketcap_eth.data[0].available_supply,
          total_supply:  coinmarketcap_eth.data[0].total_supply,
          max_supply: 0,
          percent_change_1h:  coinmarketcap_eth.data[0].percent_change_1h,
          percent_change_24h:  coinmarketcap_eth.data[0].percent_change_24h,
          percent_change_7d:  coinmarketcap_eth.data[0].percent_change_7d,
          last_updated:  coinmarketcap_eth.data[0].last_updated
      }


      let responseETH_cryptomkt = HTTP.call( 'GET', 'https://api.cryptomkt.com/v1/ticker?market=ETHCLP', {} );
       
      let newCryptoMkt = {
        cryptoId: "ethereum",
        name:  "Ethereum",
        symbol: "ETH",
        volume:  responseETH_cryptomkt.data.data[0].volume,
         bid: responseETH_cryptomkt.data.data[0].bid,
         last_price: responseETH_cryptomkt.data.data[0].last_price,
         high: responseETH_cryptomkt.data.data[0].high,
         low:  responseETH_cryptomkt.data.data[0].low,
         ask:  responseETH_cryptomkt.data.data[0].ask,
         market:  responseETH_cryptomkt.data.data[0].market
      }
    

      let responseETH_surBTC = HTTP.call( 'GET', 'https://www.surbtc.com/api/v2/markets/eth-clp/ticker', {} );
   
      let jsonResponse = JSON.parse(responseETH_surBTC.content)
      let newSurBtcETH = {
        cryptoId: "ethereum",
        name:  "Ethereum",
        symbol: "ETH",
        last_price_clp: jsonResponse.ticker.last_price[0], 
        min_ask_clp:  jsonResponse.ticker.min_ask[0],
        max_bid: jsonResponse.ticker.max_bid[0],
        volume_eth:  jsonResponse.ticker.volume[0],
        volume_btc:  0,
        price_variation_24h:  jsonResponse.ticker.price_variation_24h,
        price_variation_7d:    jsonResponse.ticker.price_variation_7d,
      }
      
      let responseBTC_surBTC = HTTP.call( 'GET', 'https://www.surbtc.com/api/v2/markets/btc-clp/ticker', {} );
 
      let jsonResponse2 = JSON.parse(responseBTC_surBTC.content)
      let newSurBtcBTC= {
        cryptoId: "bitcoin",
        name:  "Bitcoin",
        symbol: "BTC",
        last_price_clp: jsonResponse2.ticker.last_price[0], 
        min_ask_clp:  jsonResponse2.ticker.min_ask[0],
        max_bid: jsonResponse2.ticker.max_bid[0],
        volume_eth:  0,
        volume_btc:  jsonResponse2.ticker.volume[0],
        price_variation_24h:  jsonResponse2.ticker.price_variation_24h,
        price_variation_7d:    jsonResponse2.ticker.price_variation_7d,
      }
      
      let responseGlobalData = HTTP.call( 'GET', 'https://api.coinmarketcap.com/v1/global', {} );
      let coinMktCryptoMkt = Scrape.url ("https://coinmarketcap.com/es/exchanges/cryptomarket");
      let from = coinMktCryptoMkt.indexOf('usd=');
      let subString = coinMktCryptoMkt.substring(from, from + 18);
      let coinMktCapVol24HCryptoMkt = subString.replace(/(?!-)[^0-9.]/g, '');  

      let coinMktSutBtc = Scrape.url ("https://coinmarketcap.com/es/exchanges/surbtc");
      let from2 = coinMktSutBtc.indexOf('usd=');
      let subString2 = coinMktSutBtc.substring(from2, from2 + 18);
      let coinMktCapVol24HSurBtc = subString2.replace(/(?!-)[^0-9.]/g, '');  
    
      let total_24h_volume_chile = parseFloat(coinMktCapVol24HCryptoMkt) + parseFloat(coinMktCapVol24HSurBtc)

      let newGlobalIndicator = {
          usd_now: parseFloat(dolarNow.serie[0].valor),
          total_market_cap_usd: responseGlobalData.data.total_market_cap_usd ,
          totalMktCapCLP: parseFloat(responseGlobalData.data.total_market_cap_usd) * parseFloat(dolarNow.serie[0].valor) ,
          total_24h_volume_usd: responseGlobalData.data.total_24h_volume_usd,
          vol24HChile: parseFloat(coinMktCapVol24HCryptoMkt) + parseFloat(coinMktCapVol24HSurBtc) ,
          active_currencies: responseGlobalData.data.active_currencies ,
          active_assets: responseGlobalData.data.active_assets ,
          active_markets: responseGlobalData.data.active_markets ,
          last_updated: responseGlobalData.data.last_updated ,
          total_24h_volume_crypto_mkt: coinMktCapVol24HCryptoMkt ,
          total_24h_volume_sur_btc:coinMktCapVol24HSurBtc,
          bitcoin_percentage_of_market_cap: responseGlobalData.data.bitcoin_percentage_of_market_cap,
          total_24h_volume_chile : total_24h_volume_chile,
          clp_percentage_of_market_cap: (total_24h_volume_chile*100)/responseGlobalData.data.total_24h_volume_usd
      };

      Meteor.call("insertGlobalIndicator", newGlobalIndicator)
      Meteor.call("insertSurBtc", newSurBtcBTC)
      Meteor.call("insertSurBtc", newSurBtcETH)
      Meteor.call("insertCryptoMkt", newCryptoMkt)
      Meteor.call("insertCoinMktCap", responseETHObj)
      Meteor.call("insertCoinMktCap", responseLTCObj)
      Meteor.call("insertCoinMktCap", responseBTCObj)
     return true;
   } catch (e) {
     console.log( e );
     return false;
   }
    return false;
  }
});
SyncedCron.start();
