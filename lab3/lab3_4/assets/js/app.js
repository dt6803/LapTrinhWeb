function buttonClick() {
    var credit = document.getElementById("credit_card");
    var paypal = document.getElementById("paypal");
    if (credit.classList.toggle("active")) {
      credit.style.backgroundColor = "#7ED321";
      credit.style.color = "white";
      paypal.style.backgroundColor = "#F9F9F9";
      paypal.style.color = "#c2bdbd";
      male.style.backgroundColor = "#7ED321";
      male.style.color = "white";
      female.style.backgroundColor = "#F9F9F9";
      female.style.color = "#c2bdbd";
    }
  }

  function buttonClick1() {
    var paypal = document.getElementById("paypal");
    var credit = document.getElementById("credit_card");
    if (paypal.classList.toggle("active")) {
      paypal.style.backgroundColor = "#7ED321";
      paypal.style.color = "white";
      credit.style.backgroundColor = "#F9F9F9";
      credit.style.color = "#c2bdbd";
      checkGender();
    }
  }

  function buttonClickMale() {
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if (male.classList.toggle("active")) {
      male.style.backgroundColor = "#7ED321";
      male.style.color = "white";
      female.style.backgroundColor = "#F9F9F9";
      female.style.color = "#c2bdbd";
      checkGender();
    }
  }
  
  function buttonClickFemale() {
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if (female.classList.toggle("active")) {
      female.style.backgroundColor = "#7ED321";
      female.style.color = "white";
      male.style.backgroundColor = "#F9F9F9";
      male.style.color = "#c2bdbd";
    }
  }

  $(function () {
    $("#datepicker").datepicker({
      dateFormat: "dd MM",
      changeMonth: true,
      changeYear: false,
    });
  });
  
  $(function () {
    $(".yearpicker").datepicker({
      changeYear: true,
      showButtonPanel: true,
      dateFormat: "yy",
      onClose: function (dateText, inst) {
        var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
        $(this).datepicker("setDate", new Date(year, 1));
      },
    });
    $(".date-picker-year").focus(function () {
      $(".ui-datepicker-month").hide();
    });
  });

  // Hàm check gender
var checkGender = function(selectorMale,selectorFemale,selectorError) {
    var male = document.getElementById(selectorMale);
    var female = document.getElementById(selectorFemale);
    var isMale = male.classList.contains('active');
    var isFemale = female.classList.contains('active');
    if(!isMale && !isFemale) {
      document.getElementById(selectorError).innerHTML = "Please choose your gender";
      console.log("Please");
      return false;
    } else {
      document.getElementById(selectorError).style.display = "none";
      return true;
    }
    
  } 

  var checkBox = function() {
    var button = document.getElementById("submitForm");
    if(!document.getElementById("terms").checked) {
        button.style.display = "none";
        return false;
    } else {
        button.style.display = "block";
        return true;
    }
  }