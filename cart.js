///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: 'pizza',
    price: 9.99,
  },
  {
    name: 'pasta',
    price: 8.99,
  },
  {
    name: 'salad',
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((total, curVal) => {
  return total + curVal.price;
}, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
// const calcFinalPrice = (cartTotal, couponValue, tax) => {
//   cart.forEach((item) => {
//     cartTotal += item.price - couponValue * tax;
//   });
//   return Number(cartTotal.toFixed(2));
// };
const calcFinalPrice = (cartTotal, couponValue, tax) => {
  return (cartTotal - couponValue) * tax;
};
console.log(calcFinalPrice(54, 10, 1.06));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    name = String => beacuse it customer name is a string
    email = String => 
   const customer = {
        name: 'Gabriel Tomsic', // String because of the name is always a string
        email: 'tomsicgabriel@gmail.com', // Email is a string because it is always a string
        phone: '702-600-6139', // is  String beause someone people would put - on the input but you can use either number or String
        address: 'Saratoga Springs', // Address should always be a string
    }

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
  name: 'Gabriel Tomsic', // String because of the name is always a string
  email: 'tomsicgabriel@gmail.com', // Email is a string because it is always a string
  phone: '702-600-6139', // is  String beause someone people would put - on the input but you can use either number or String
  address: 'Saratoga Springs', // Address should always be a string
};
console.log(customer);
