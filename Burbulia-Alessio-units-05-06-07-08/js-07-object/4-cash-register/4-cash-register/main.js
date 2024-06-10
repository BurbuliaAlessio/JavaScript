/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * Write a function called cashRegister that takes a shopping cart object.
 *   ● The object contains item names and prices (itemName: itemPrice).
 *   
 *   ● The function returns the total price of the shopping cart, e.g. :
 * 
 *      /// Input
 *      let cartForParty = {
 *      banana: '1.25',
 *      handkerchief: '.99',
 *      Tshirt: '25.01',
 *      apple: '0.60',
 *      nalgene: '10.34',
 *      proteinShake: '22.36'
 *      };
 * 
 *      /// Output
 *      cashRegister(cartForParty)); // 60.55 
 */

let cartForParty = {
    banana: '1.25',
    handkerchief: '.99',
    Tshirt: '25.01',
    apple: '0.60',
    nalgene: '10.34',
    proteinShake: '22.36'
   };

/**
 * return the total price 
 * of the shopping cart
 * @param {Object} sCart - a shopping cart
 * @return {String} totalPrice - total price of the shopping cart
*/
    function cashRegister(sCart){
        let totalPrice = 0;
        for(const value in sCart){
            totalPrice += parseFloat(sCart[value]);
        }
        return totalPrice;
    }
console.log ('The + price of the shopping cart is ' + cashRegister(cartForParty));