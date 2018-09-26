$(document).ready(function() {
  $("#item_amount").text("5");

  $("#deleteBttn").on("click", function() {
    $("#deleteTest").css("display", "none");
    $("#deleteHR").css("display", "none");
  });

 
  $("#checkoutBttn").on("click", function() {
    $("#paymentCard").css("display", "block");
  });  

  $("#closePayment").on("click", function() {
    $("#paymentCard").css("display", "none");
  });

  //              new releases

  // 1 display: NONE
  $("#xNR1").on("click", function() {
    $("#summaryCardNR1").css("display", "none");
  });
  // 1 display:  BLOCK
  $("#summaryBttnNR1").on("click", function() {
    $("#summaryCardNR1").css("display", "block");
  });
  


  // 2 display: NONE
  $("#xNR2").on("click", function() {
    $("#summaryCardNR2").css("display", "none");
  });
  // 2 display:  BLOCK
  $("#summaryBttnNR2").on("click", function() {
    $("#summaryCardNR2").css("display", "block");
  });
  //              new releases


  //   //              PC Games

  // // 1 display: NONE
  // $("#xPC1").on("click", function() {
  //   $("#summaryCardPC1").css("display", "none");
  // });
  // // 1 display: BLOCK
  // $("#summaryBttnPC1").on("click", function() {
  //   $("#summaryCardPC1").css("display", "block");
  // });
  


  // // 2 display: NONE
  // $("#xPC2").on("click", function() {
  //   $("#summaryCardPC2").css("display", "none");
  // });
  // // 2 display:  BLOCK
  // $("#summaryBttnPC1").on("click", function() {
  //   $("#summaryCardPC2").css("display", "block");
  // });
  // //              PC Games


// // stripe ===============================================
// var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// // Create an instance of Elements.
// var elements = stripe.elements();

// // Custom styling can be passed to options when creating an Element.
// // (Note that this demo uses a wider set of styles than the guide below.)
// var style = {
//   base: {
//     color: '#32325d',
//     lineHeight: '18px',
//     fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//     fontSmoothing: 'antialiased',
//     fontSize: '16px',
//     '::placeholder': {
//       color: '#aab7c4'
//     }
//   },
//   invalid: {
//     color: '#fa755a',
//     iconColor: '#fa755a'
//   }
// };

// // Create an instance of the card Element.
// var card = elements.create('card', {style: style});

// // Add an instance of the card Element into the `card-element` <div>.
// card.mount('#card-element');

// // Handle real-time validation errors from the card Element.
// card.addEventListener('change', function(event) {
//   var displayError = document.getElementById('card-errors');
//   if (event.error) {
//     displayError.textContent = event.error.message;
//   } else {
//     displayError.textContent = '';
//   }
// });

// // Handle form submission.
// var form = document.getElementById('payment-form');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   stripe.createToken(card).then(function(result) {
//     if (result.error) {
//       // Inform the user if there was an error.
//       var errorElement = document.getElementById('card-errors');
//       errorElement.textContent = result.error.message;
//     } else {
//       // Send the token to your server.
//       stripeTokenHandler(result.token);
//     }
//   });
// });
// // stripe ===============================================

});


