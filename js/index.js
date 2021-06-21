var thisRef = {
  mouseFlag: false,
  focusElement: {},
  frictionless_const: 0,
  rough_const: 0.5,
  veryRough_const: 0.8
}
var i = 0;
var boxSlide;
var fracValue;
var norValue;
var idealForce;
var degree;
var weight = 20;
var wvalue = 2;
var angle = 30;
var lineWidth;
var marginPoint;
var arrowSpan;
var forceVal = 8.66;
var netForce;
var sufId = 'surf_2';
var fracWidth = 60;
var lineWidth_const = 134;
var marginPoint_const = 104;
var arrowSpan_const = 12;
var angle = 30;
var mass = 2;
var checkboxIdWeight;
var chechboxCheckedWeight;
var checkboxIdForce;
var chechboxCheckedForce;

function openIntroduction() {
  document.getElementById("dialogIntro").classList.remove("hideThis");
  showIntro('none', 'block')
}

function closeIntroduction() {
  document.getElementById("dialogIntro").classList.add("hideThis");
}

function onHoverIntro() {
  $(".image1-button").attr('src', './images/intro_over.png');

}

function offHoverIntro() {
  $(".image1-button").attr('src', './images/intro_btn.png');
}

function onHoverExe() {
  $(".image2-button").attr('src', './images/Exer_over_Btn.png');
}

function offHoverExe() {
  $(".image2-button").attr('src', './images/Exer_Btn.png');
}

function showIntro(wholeUi, intro) {
  if (intro == 'block') {
    document.querySelector('.image2-button').style.opacity = 0.5;
    document.querySelector('.image1-button ').style.opacity = 0.5;
    document.getElementById('into-btn').style.pointerEvents = "none";
    document.getElementById('exer-btn').style.pointerEvents = "none";
  } else {
    document.getElementById("dialogIntro").classList.add("hideThis");
    document.querySelector('.image2-button').style.opacity = 1;
    document.querySelector('.image1-button ').style.opacity = 1;
    document.getElementById('into-btn').style.pointerEvents = "auto";
    document.getElementById('exer-btn').style.pointerEvents = "auto";
  }
}

function OpenWord() {
  var mylink = document.getElementById("MyLink");
  mylink.setAttribute("href", "./images/S07-e83.doc");
  mylink.click();
}

function addAccessibility() {
  $(document).on('mousedown', () => {
    thisRef.mouseFlag = true;
  });

  $(document).on('mouseup', () => {
    thisRef.mouseFlag = false;
  });

  $('[tabindex]').focus((e) => {
    thisRef.focusElement = e.target;
    if (thisRef.mouseFlag == true) {
      $(thisRef.focusElement).css({
        'outline': 'none'
      });
      return;
    }
    $(thisRef.focusElement).css({
      'outline-color': 'yellow',
      'outline-style': 'solid',
      'outline-width': '4px'
    });
    $(thisRef.focusElement).keypress(function (event) {
      if (event.key === 'Enter' && event.keyCode === 13) {
        $(thisRef.focusElement).trigger("click");
        handleSpecialCases(event);
      }
    });
  });
  $('[tabindex]').focusout((e) => {
    $(e.target).off('keypress');
    $(thisRef.focusElement).css({
      'outline': 'none'
    });
  });
};

function handleSpecialCases(event) {
  if (event.target.innerText === 'Open Instructions') {
    onSpecialCase(event.target, event.target.nextElementSibling);
  } else if (event.target.innerText === 'Close Instructions') {
    onSpecialCase(event.target, event.target.previousElementSibling);
  }
}

//handling special cases of accessibility
function onSpecialCase(target, sibling) {
  setTimeout(() => {
    $(sibling).trigger('focus');
  }, 500);
  if (target == null) return;
  $(target).attr('tabindex', '-1');
  $(target).css({
    'outline': 'none'
  });
  $(sibling).attr('tabindex', '0');
  if (!thisRef.mouseFlag) $(sibling).css({
    'outline-color': 'yellow',
    'outline-style': 'solid',
    'outline-width': '4px'
  });

}

$(function () {
  var lastKey = new Date(),
    lastClick = new Date();

  $(document).on("focusin", function (e) {
    $(".non-keyboard-outline").removeClass("non-keyboard-outline");
    var wasByKeyboard = lastClick < lastKey
    if (wasByKeyboard) {
      $(e.target).addClass("non-keyboard-outline");
    }
  });

  $(document).on("click", function () {
    lastClick = new Date();
  });
  $(document).on("keydown", function () {
    lastKey = new Date();
  });


});

$(document).ready(function () {
  addAccessibility();
});

function selectMass(e) {
  mass = e.target.value
  document.querySelector('.weight-value').innerHTML = mass * 10 + ".00 N"
  document.getElementById('mass-right-value').innerHTML = mass + '<b> kg</b>';
  switch (mass) {
    case '1':
      $('.back-image img').attr("src", "./images/T1.png");
      document.querySelector(".line2").style.width = "50px";
      document.querySelector(".point2").style.marginRight = "178px";
      document.querySelector(".arrow2 span").style.left = "-66px";
      break;
    case '2':
      $('.back-image img').attr("src", "./images/T2.png");
      document.querySelector(".line2").style.width = "124px";
      document.querySelector(".point2").style.marginRight = "104px";
      document.querySelector(".arrow2 span").style.left = "12px";
      break;
    case '3':
      $('.back-image img').attr("src", "./images/T3.png");
      break;
  }
  selectSlider();
}

function selectInclination(e) {
  angle = e.target.value
  document.querySelector('.incl-value').innerHTML = angle + '.00 &#176;';
  selectSlider();
  switch (angle) {
    case '0':
      inclination = 0;
      break;
    case '5':

      break;
    case '10':

      break;
    case '15':

      break;
    case '20':

      break;
    case '25':

      break;
    case '30':

      break;
    case '35':

      break;
    case '40':

      break;
    case '45':

      break;
    case '50':

      break;
    case '55':

      break;
    case '60':

      break;


  }
}

function selectSlider() {
  if (document.getElementById("showWeight").checked == true) {
    document.getElementById("axis3").style.display = "block";
    document.getElementById("axis4").style.display = "block";
    document.getElementById("axis5").style.display = "block";
  }
  else {
    document.getElementById("axis3").style.display = "none";
    document.getElementById("axis4").style.display = "none";
    document.getElementById("axis5").style.display = "none";
  }
  document.getElementById("inc-right-value").innerHTML =
    angle + '&#176;';
  document.getElementById("mass-right-value").innerHTML =
    mass + " " + 'kg';
  degree = angle * 0.01745;
  norValue = mass * 10 * Math.cos(degree);
  idealForce = mass * 10 * Math.sin(degree);
  forceVal = idealForce - fracValue;
  netForce = idealForce - forceVal;
  if (mass == 3) {
    if (angle == 15 || angle == 5) {
      norValue = norValue;
    }
    else {
      norValue = parseInt(parseFloat(norValue.toString()) * 100) / 100;
    }
  }
  document.querySelector('.nor-reac-value').innerHTML = norValue.toFixed(2) + ' N';
  switch (sufId) {
    case 'surf_1':
      forceVal = 0;
      document.querySelector('.fraction-value').innerHTML = forceVal.toFixed(2) + ' N';
      break;
    case 'surf_2':
      if (angle > 25) {
        if (mass == 3 && angle == 55) {
          forceVal = 8.60
        }
        else{
          forceVal = thisRef.rough_const * norValue;
        }
        
      }
      else {
        forceVal = mass * 10 * Math.sin(degree);
      }
      document.querySelector('.fraction-value').innerHTML = forceVal.toFixed(2) + ' N';
      break;
    case 'surf_3':
      if (angle > 35) {
        forceVal = thisRef.veryRough_const * norValue;
        if (angle == 50 && mass == 3) {
          forceVal = 15.43
        }
        else if(mass == 3 & angle == 40){
          forceVal= 18.39
        } 
        else if(mass == 2 & angle == 45){
          forceVal= 11.31
        } 
        else if(mass == 2 & angle == 50){
          forceVal= 10.28
        } 
        
      }
      else {
        if (mass == 1 && angle == 35) {
          forceVal = 5.74
        }
        else if (mass == 3 && angle == 35) {
          forceVal = 17.21
        }
        else {
          forceVal = mass * 10 * Math.sin(degree);
        }
      }
      document.querySelector('.fraction-value').innerHTML = forceVal.toFixed(2) + ' N';
      break;

    default:
      break;

  }
  if (mass == 3 && angle == 35 && sufId == 'surf_3') {
    forceVal = 17.21
    netForce = idealForce - forceVal;
    netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
    document.querySelector('.force-value').innerHTML = netForce.toFixed(2) + ' N';
  }
  else {
    if (angle == 55 && mass == 3 && sufId == 'surf_3') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      document.querySelector('.force-value').innerHTML = 10.81 + ' N';
    }
    else if (angle == 55 && mass == 2 && sufId == 'surf_2') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      document.querySelector('.force-value').innerHTML = 10.65 + ' N';
    }
    else if (mass == 1 && angle == 50 && sufId == 'surf_2') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      document.querySelector('.force-value').innerHTML = 4.45 + ' N';
    }
    else if (mass == 1 && angle == 50 && sufId == 'surf_1') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      document.querySelector('.force-value').innerHTML = 7.66 + ' N';
    }
    else if (mass == 1 && angle == 50 && sufId == 'surf_3') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      document.querySelector('.force-value').innerHTML = 2.52 + ' N';
    }
    else if (mass == 1 && angle == 35 && sufId == 'surf_3') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      let val = 0.00
      document.querySelector('.force-value').innerHTML = val.toFixed(2) + ' N';
    }
    else if (mass == 1 && angle == 35 && sufId == 'surf_1') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      let val = 5.74
      document.querySelector('.force-value').innerHTML = val.toFixed(2) + ' N';
    }
    else if (mass == 1 && angle == 35 && sufId == 'surf_1') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      let val = 1.64
      document.querySelector('.force-value').innerHTML = val.toFixed(2) + ' N';
    }
    else if (mass == 1 && angle == 40 && sufId == 'surf_2') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      let val = 2.60
      document.querySelector('.force-value').innerHTML = val.toFixed(2) + ' N';
    }
    else if (mass == 1 && angle == 40 && sufId == 'surf_3') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      let val = 0.30
      document.querySelector('.force-value').innerHTML = val.toFixed(2) + ' N';
    }
    else if (mass == 1 && angle == 40 && sufId == 'surf_1') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      let val = 6.43
      document.querySelector('.force-value').innerHTML = val.toFixed(2) + ' N';
    }
    else if (mass == 2 && angle == 40 && sufId == 'surf_2') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      let val = 5.20
      document.querySelector('.force-value').innerHTML = val.toFixed(2) + ' N';
    }
    else if (mass == 2 && angle == 40 && sufId == 'surf_1') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      let val = 12.86
      document.querySelector('.force-value').innerHTML = val.toFixed(2) + ' N';
    }
    else if (mass == 2 && angle == 40 && sufId == 'surf_3') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      let val = 0.60
      document.querySelector('.force-value').innerHTML = val.toFixed(2) + ' N';
    }
    else if (mass == 2 && angle == 50 && sufId == 'surf_3') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      let val = 5.04
      document.querySelector('.force-value').innerHTML = val.toFixed(2) + ' N';
    }
    else if (mass == 1 && angle == 45 && sufId == 'surf_2') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      document.querySelector('.force-value').innerHTML = 3.54 + ' N';
    }
    else if (mass == 1 && angle == 45 && sufId == 'surf_1') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      document.querySelector('.force-value').innerHTML = 7.07 + ' N';
    }
    else if (mass == 1 && angle == 45 && sufId == 'surf_3') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      document.querySelector('.force-value').innerHTML = 1.41 + ' N';
    }
    else if (mass == 3 && angle == 40 && sufId == 'surf_3') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      let val = 0.90
      document.querySelector('.force-value').innerHTML = val.toFixed(2) + ' N';
    }
    else if (mass == 2 && angle == 45 && sufId == 'surf_3') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      document.querySelector('.force-value').innerHTML = 2.83 + ' N';
    }
    else if (mass == 2 && angle == 55 && sufId == 'surf_3') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      let val = 7.21
      document.querySelector('.force-value').innerHTML = val.toFixed(2) + ' N';
    }
    else if (mass == 3 && angle == 35 && sufId == 'surf_2') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      let val = 4.92
      document.querySelector('.force-value').innerHTML = val.toFixed(2) + ' N';
    }
    else if (mass == 3 && angle == 35 && sufId == 'surf_1') {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      document.querySelector('.force-value').innerHTML = 17.21 + ' N';
    }
    else if (angle == 40) {
      netForce = idealForce - forceVal;
      netForce = parseInt(parseFloat(netForce.toString()) * 100) / 100;
      document.querySelector('.force-value').innerHTML = netForce.toFixed(2) + ' N';
    }
    else {
      netForce = idealForce - forceVal;
      document.querySelector('.force-value').innerHTML = netForce.toFixed(2) + ' N';
    }
  }

  // if(mass == 1){
  //   mass1();
  // }
  // else if(mass == 2){
  //   mass2();
  // }
  // else if(mass == 3){
  //   mass3();
  // }
  mass1();
  mass2();
  mass3();
}

function mass1() {
  if (mass == 1 && angle == 0) {
    document.getElementById('box').src = './images/Box-1.png';
    document.querySelector(".frac-line").style.display = "none";
    document.querySelector(".frac-point").style.display = "none";
    document.querySelector(".frac-arrow span").style.display = "none";
    document.querySelector(".line1").style.width = "65px";
    document.querySelector(".point1").style.marginRight = "165px";
    document.querySelector(".arrow1 span").style.left = "-48px";
    document.querySelector(".arrow1 span").style.transform = "rotate(88deg)";
    document.querySelector(".frac-line").style.width = "63px";
    document.querySelector(".frac-point").style.marginRight = "166px";
    document.querySelector(".frac-arrow span").style.left = "-96px";
    document.querySelector(".arrow2").style.left = "330px";
    document.querySelector(".arrow2").style.top = "321px";
    document.querySelector(".surface-container").style.transform =
      "rotate(0deg)";
    document.querySelector(".arrow3").style.display = "none";
    document.getElementById("axis3").style.display = "none";
    document.getElementById("axis4").style.display = "none";
    document.getElementById("axis5").style.display = "none";
    document.getElementById("axis6").style.display = "none";
  }
  else if (mass == 1 && angle == 5) {
    if (chechboxCheckedWeight) {
      document.getElementById("axis3").style.display = "block";
      document.getElementById("axis4").style.display = "block";
      document.getElementById("axis5").style.display = "block";
      document.getElementById("axis6").style.display = "block";
    }
    document.getElementById('box').src = './images/Box-1.png';
    document.querySelector(".frac-line").style.display = "block";
    document.querySelector(".frac-point").style.display = "block";
    document.querySelector(".frac-arrow span").style.display = "block";
    document.querySelector(".line1").style.width = "65px";
    document.querySelector(".point1").style.marginRight = "165px";
    document.querySelector(".arrow1 span").style.left = "-48px";
    document.querySelector(".arrow1 span").style.transform = "rotate(115deg)";
    document.querySelector(".frac-line").style.width = "16px";
    document.querySelector(".frac-point").style.marginRight = "216px";
    document.querySelector(".frac-arrow span").style.left = "-95px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(5deg)";
    document.querySelector(".arrow2").style.left = "331px";
    document.querySelector(".arrow2").style.top = "321px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-5deg)";
    document.querySelector(".arrow4 span").style.left = "-96px";
    document.querySelector(".arrow4 span").style.top = "17px";
    document.getElementById("arcs").style.marginTop = "317px";
    document.getElementById("arcs").style.marginLeft = "-16px";
    document.getElementById("arcs").style.minWidth = "0.5em";
    document.querySelector(".line2").style.width = "74px";
    document.querySelector(".point2").style.marginRight = "159px";
    document.querySelector(".arrow2 span").style.left = "-46px";
    document.querySelector(".arrow3").style.display = "none";
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector('.arrow4').style.top = '498px';
    document.querySelector('.arrow4').style.marginLeft = '-46px';
    document.querySelector('.arrow4').style.width = '107px';
    document.querySelector('.line4').style.width = '79px';
    document.querySelector('.point4').style.marginRight = '161px';
    document.querySelector('.arrow4').style.transform = 'rotate(85deg)';
    document.querySelector('.line5').style.marginLeft = '-253px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '5px';
    document.querySelector('.arrow5').style.top = '354px';
    document.querySelector('.arrow5').style.transform = 'rotate(-18deg)';
    document.querySelector('.line6').style.marginLeft = '-178px';
    document.querySelector('.line6').style.marginTop = '202px';
    document.querySelector('.line6').style.width = '70px';
    document.querySelector('.arrow6').style.transform = 'rotate(83deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-15deg)';
    document.querySelector('.arrow7').style.top = '277px';
    document.querySelector('.line7').style.marginLeft = '-150px';
    document.querySelector('.line7').style.width = '7px';
    document.querySelector('.point7').style.marginRight = '175px';
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '277px';
        document.querySelector('.line7').style.marginLeft = '-150px';
        document.querySelector('.line7').style.width = '7px';
        document.querySelector('.point7').style.marginRight = '175px';
      } else {
        document.querySelector('.arrow7').style.top = '299px';
        document.querySelector('.arrow7').style.marginLeft = '91px';
        document.querySelector('.line7').style.marginLeft = '-263px';
        document.querySelector('.line7').style.width = '7px';
        document.querySelector('.point7').style.marginRight = '175px';
        document.querySelector('.arrow7').style.left = '33%';
      }
    }

    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block"; 
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      } 
      document.querySelector(".arrow3").style.top = "353px";
      document.querySelector(".point3").style.borderLeft = "14px solid black";
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".line3").style.width = "7px";
      document.querySelector(".point3").style.marginRight = "229px";
      document.querySelector(".arrow3 span").style.transform = "rotate(185deg)";
      document.querySelector(".arrow3 span").style.left = "-112px";
      document.querySelector(".arrow3").style.transform = "rotate(527deg)";
      document.querySelector(".arrow3").style.marginLeft = "-69px";
    }

  }
  else if (mass == 1 && angle == 10) {
    document.getElementById('box').src = './images/Box-1.png';
    document.querySelector(".line1").style.width = "65px";
    document.querySelector(".point1").style.marginRight = "165px";
    document.querySelector(".arrow1 span").style.left = "-48px";
    document.querySelector(".arrow1 span").style.transform = "rotate(115deg)";
    document.querySelector(".frac-line").style.width = "21px";
    document.querySelector(".frac-point").style.marginRight = "211px";
    document.querySelector(".frac-arrow span").style.left = "-94px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(10deg)";
    document.querySelector(".arrow2").style.left = "336px";
    document.querySelector(".arrow2").style.top = "321px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-10deg)";
    document.querySelector(".arrow4 span").style.left = "-96px";
    document.querySelector(".arrow4 span").style.top = "19px";
    document.getElementById("arcs").style.marginTop = "317px";
    document.getElementById("arcs").style.marginLeft = "-11px";
    document.getElementById("arcs").style.minWidth = "0.5em";
    document.querySelector(".line2").style.width = "70px";
    document.querySelector(".point2").style.marginRight = "165px";
    document.querySelector(".arrow2 span").style.left = "-47px";
    document.querySelector(".arrow3").style.display = "none";
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector('.arrow4').style.top = '494px';
    document.querySelector('.arrow4').style.marginLeft = '-23px';
    document.querySelector('.arrow4').style.width = '107px';
    document.querySelector('.line4').style.width = '62px';
    document.querySelector('.point4').style.marginRight = '168px';
    document.querySelector('.arrow4').style.transform = 'rotate(79deg)';
    document.querySelector('.line5').style.marginLeft = '-236px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '21px';
    document.querySelector('.arrow5').style.top = '350px';
    document.querySelector('.arrow5').style.transform = 'rotate(-18deg)';
    document.querySelector('.line6').style.marginLeft = '-169px';
    document.querySelector('.line6').style.marginTop = '165px';
    document.querySelector('.line6').style.width = '70px';
    document.querySelector('.arrow6').style.transform = 'rotate(76deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-19deg)';
    document.querySelector('.arrow7').style.top = '270px';
    document.querySelector('.line7').style.marginLeft = '-173px';
    document.querySelector('.line7').style.width = '16px';
    document.querySelector('.point7').style.marginRight = '184px';
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '270px';
        document.querySelector('.line7').style.marginLeft = '-173px';
        document.querySelector('.line7').style.width = '16px';
        document.querySelector('.point7').style.marginRight = '184px';
      } else {
        document.querySelector('.arrow7').style.top = '299px';
        document.querySelector('.arrow7').style.marginLeft = '85px';
        document.querySelector('.line7').style.marginLeft = '-266px';
        document.querySelector('.line7').style.width = '16px';
        document.querySelector('.point7').style.marginRight = '184px';
        document.querySelector('.arrow7').style.left = '33%';
      }
    }

    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block"; 
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      } 
      document.querySelector(".arrow3").style.top = "370px";
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".line3").style.width = "16px";
      document.querySelector(".point3").style.borderLeft = "14px solid black";
      document.querySelector(".point3").style.marginRight = "221px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-100px";
      document.querySelector(".arrow3").style.transform = "rotate(520deg)";
      document.querySelector(".arrow3").style.marginLeft = "-61px";
    }
  }
  else if (mass == 1 && angle == 15) {
    document.getElementById('box').src = './images/Box-1.png';
    document.querySelector('.arrow1').style.marginLeft = '-52px';
    document.querySelector(".line1").style.width = "65px";
    document.querySelector(".point1").style.marginRight = "165px";
    document.querySelector(".arrow1 span").style.left = "-48px";
    document.querySelector(".arrow1 span").style.transform = "rotate(115deg)";
    document.querySelector(".frac-line").style.width = "24px";
    document.querySelector(".frac-point").style.marginRight = "206px";
    document.querySelector(".frac-arrow span").style.left = "-93px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(15deg)";
    document.querySelector(".arrow2").style.left = "340px";
    document.querySelector(".arrow2").style.top = "321px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-15deg)";
    document.querySelector(".arrow4 span").style.left = "-96px";
    document.querySelector(".arrow4 span").style.top = "21px";
    document.getElementById("arcs").style.marginTop = "312px";
    document.getElementById("arcs").style.marginLeft = "-6px";
    document.getElementById("arcs").style.minWidth = "0.5em";
    document.querySelector(".line2").style.width = "63px";
    document.querySelector(".point2").style.marginRight = "166px";
    document.querySelector(".arrow2 span").style.left = "-38px";
    document.querySelector(".arrow3").style.display = "none";
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector('.arrow4').style.top = '479px';
    document.querySelector('.arrow4').style.marginLeft = '2px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '70px';
    document.querySelector('.point4').style.marginRight = '155px';
    document.querySelector('.arrow4').style.transform = 'rotate(73deg)';
    document.querySelector('.line5').style.marginLeft = '-225px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '30px';
    document.querySelector('.arrow5').style.top = '350px';
    document.querySelector('.arrow5').style.transform = 'rotate(-18deg)';
    document.querySelector('.line6').style.marginLeft = '-160px';
    document.querySelector('.line6').style.marginTop = '127px';
    document.querySelector('.line6').style.width = '70px';
    document.querySelector('.arrow6').style.transform = 'rotate(68deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-25deg)';
    document.querySelector('.arrow7').style.top = '254px';
    // document.querySelector('.arrow7').style.marginLeft = '66px';
    document.querySelector('.line7').style.marginLeft = '-175px';
    document.querySelector('.line7').style.width = '23px';
    document.querySelector('.point7').style.marginRight = '196px';
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '254px';
        document.querySelector('.line7').style.marginLeft = '-175px';
        document.querySelector('.line7').style.width = '23px';
        document.querySelector('.point7').style.marginRight = '196px';
      } else {
        document.querySelector('.arrow7').style.top = '300px';
        document.querySelector('.arrow7').style.marginLeft = '75px';
        document.querySelector('.line7').style.marginLeft = '-260px';
        document.querySelector('.line7').style.width = '23px';
        document.querySelector('.point7').style.marginRight = '196px';
        document.querySelector('.point7').style.marginLeft = '0px';
      }
    }
    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block"; 
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      } 
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".arrow3").style.top = "379px";
      document.querySelector(".line3").style.width = "20px";
      document.querySelector(".point3").style.marginRight = "210px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-99px";
      document.querySelector(".arrow3").style.transform = "rotate(514deg)";
      document.querySelector(".arrow3").style.marginLeft = "-52px";
    }

  }
  else if (mass == 1 && angle == 20) {
    document.getElementById('box').src = './images/Box-1.png';
    document.querySelector('.arrow1').style.marginLeft = '-57px';
    document.querySelector(".line1").style.width = "65px";
    document.querySelector(".point1").style.marginRight = "165px";
    document.querySelector(".arrow1 span").style.left = "-48px";
    document.querySelector(".arrow1 span").style.transform = "rotate(115deg)";
    document.querySelector(".frac-line").style.width = "29px";
    document.querySelector(".frac-point").style.marginRight = "201px";
    document.querySelector(".frac-arrow span").style.left = "-92px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(20deg)";
    document.querySelector(".arrow2").style.left = "338px";
    document.querySelector(".arrow2").style.top = "321px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-20deg)";
    document.getElementById("arcs").style.marginTop = "308px";
    document.getElementById("arcs").style.marginLeft = "-11px";
    document.getElementById("arcs").style.minWidth = "1.5em";
    document.querySelector(".arrow4 span").style.left = "-96px";
    document.querySelector(".arrow4 span").style.top = "21px";
    document.querySelector(".line2").style.width = "63px";
    document.querySelector(".point2").style.marginRight = "166px";
    document.querySelector(".arrow2 span").style.left = "-38px";
    document.querySelector(".arrow3").style.display = "none";
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector('.arrow4').style.top = '479px';
    document.querySelector('.arrow4').style.marginLeft = '2px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '70px';
    document.querySelector('.point4').style.marginRight = '155px';
    document.querySelector('.arrow4').style.transform = 'rotate(73deg)';
    document.querySelector('.line5').style.marginLeft = '-225px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '30px';
    document.querySelector('.arrow5').style.top = '350px';
    document.querySelector('.arrow5').style.transform = 'rotate(-18deg)';
    document.querySelector('.line6').style.marginLeft = '-160px';
    document.querySelector('.line6').style.marginTop = '127px';
    document.querySelector('.line6').style.width = '70px';
    document.querySelector('.arrow6').style.transform = 'rotate(68deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-25deg)';
    document.querySelector('.arrow7').style.top = '254px';
    document.querySelector('.line7').style.marginLeft = '-183px';
    document.querySelector('.line7').style.width = '35px';
    document.querySelector('.point7').style.marginRight = '199px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '254px';
        document.querySelector('.line7').style.marginLeft = '-183px';
        document.querySelector('.line7').style.width = '35px';
        document.querySelector('.point7').style.marginRight = '199px';
      } else {
        document.querySelector('.arrow7').style.top = '300px';
        document.querySelector('.arrow7').style.marginLeft = '75px';
        document.querySelector('.line7').style.marginLeft = '-277px';
        document.querySelector('.line7').style.width = '35px';
        document.querySelector('.point7').style.marginRight = '199px';
      }
    }

    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block"; 
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      } 
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".arrow3").style.top = "380px";
      document.querySelector(".line3").style.width = "22px";
      document.querySelector(".point3").style.marginRight = "209px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-92px";
      document.querySelector(".arrow3").style.transform = "rotate(514deg)";
      document.querySelector(".arrow3").style.marginLeft = "-53px";
    }
  }
  else if (mass == 1 && angle == 25) {
    document.getElementById('box').src = './images/Box-1.png';
    document.querySelector('.arrow1').style.marginLeft = '-52px';
    document.querySelector(".line1").style.width = "65px";
    document.querySelector(".point1").style.marginRight = "165px";
    document.querySelector(".arrow1 span").style.left = "-48px";
    document.querySelector(".arrow1 span").style.transform = "rotate(115deg)";
    document.querySelector(".frac-line").style.width = "29px";
    document.querySelector(".frac-point").style.marginRight = "201px";
    document.querySelector(".frac-arrow span").style.left = "-91px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(25deg)";
    document.querySelector(".arrow2").style.left = "343px";
    document.querySelector(".arrow2").style.top = "315px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-25deg)";
    document.getElementById("arcs").style.marginTop = "302px";
    document.getElementById("arcs").style.marginLeft = "-4px";
    document.querySelector(".arrow4 span").style.left = "-96px";
    document.querySelector(".arrow4 span").style.top = "25px";
    document.querySelector(".line2").style.width = "62px";
    document.querySelector(".point2").style.marginRight = "166px";
    document.querySelector(".arrow2 span").style.left = "-53px";
    document.querySelector(".arrow3").style.display = "none"; 
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector('.arrow4').style.top = '461px';
    document.querySelector('.arrow4').style.marginLeft = '31px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '68px';
    document.querySelector('.point4').style.marginRight = '161px';
    document.querySelector('.arrow4').style.transform = 'rotate(64deg)';
    document.querySelector('.line5').style.marginLeft = '-236px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '33px';
    document.querySelector('.arrow5').style.top = '308px';
    document.querySelector('.arrow5').style.transform = 'rotate(-33deg)';
    document.querySelector('.line6').style.marginLeft = '-150px';
    document.querySelector('.line6').style.marginTop = '85px';
    document.querySelector('.line6').style.width = '67px';
    document.querySelector('.arrow6').style.transform = 'rotate(60deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-29deg)';
    document.querySelector('.arrow7').style.top = '241px';
    document.querySelector('.line7').style.marginLeft = '-181px';
    document.querySelector('.line7').style.width = '28px';
    document.querySelector('.point7').style.marginRight = '201px';
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '241px';
        document.querySelector('.line7').style.marginLeft = '-181px';
        document.querySelector('.line7').style.width = '28px';
        document.querySelector('.point7').style.marginRight = '201px';
      } else {
        document.querySelector('.arrow7').style.top = '297px';
        document.querySelector('.arrow7').style.marginLeft = '75px';
        document.querySelector('.line7').style.marginLeft = '-262px';
        document.querySelector('.line7').style.width = '28px';
        document.querySelector('.point7').style.marginRight = '201px';
      }
    }
    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block"; 
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      } 
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".arrow3").style.top = "383px";
      document.querySelector(".line3").style.width = "26px";
      document.querySelector(".point3").style.marginRight = "203px";
      document.querySelector(".point3").style.borderLeft = "14px solid black";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-94px";
      document.querySelector(".arrow3").style.transform = "rotate(509deg)";
      document.querySelector(".arrow3").style.marginLeft = "-42px";
    }

  }
  else if (mass == 1 && angle == 30) {
    document.getElementById('box').src = './images/Box-1.png';
    document.querySelector(".line1").style.width = "60px";
    document.querySelector(".point1").style.marginRight = "168px";
    document.querySelector(".arrow1 span").style.left = "-58px";
    document.querySelector(".arrow1 span").style.transform = "rotate(120deg)";
    document.querySelector(".frac-line").style.width = "25px";
    document.querySelector(".frac-point").style.marginRight = "203px";
    document.querySelector(".frac-arrow span").style.left = "-90px";
    document.querySelector(".frac-arrow span").style.transform =
      "rotate(30deg)";
    document.querySelector(".arrow2").style.left = "347px";
    document.querySelector(".arrow2").style.top = "312px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-30deg)";
    document.querySelector(".arrow4 span").style.left = "-96px";
    document.querySelector(".arrow4 span").style.top = "29px";
    document.getElementById("arcs").style.marginTop = "294px";
    document.getElementById("arcs").style.marginLeft = "-1px";
    document.querySelector(".line2").style.width = "63px";
    document.querySelector(".point2").style.marginRight = "166px";
    document.querySelector(".arrow2 span").style.left = "-38px";
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector('.arrow4').style.top = '453px';
    document.querySelector('.arrow4').style.marginLeft = '46px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '68px';
    document.querySelector('.point4').style.marginRight = '161px';
    document.querySelector('.arrow4').style.transform = 'rotate(60deg)';
    document.querySelector('.line5').style.marginLeft = '-220px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '36px';
    document.querySelector('.arrow5').style.top = '308px';
    document.querySelector('.arrow5').style.transform = 'rotate(-33deg)';
    document.querySelector('.line6').style.marginLeft = '-149px';
    document.querySelector('.line6').style.marginTop = '78px';
    document.querySelector('.line6').style.width = '70px';
    document.querySelector('.arrow6').style.transform = 'rotate(60deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-29deg)';
    document.querySelector('.arrow7').style.top = '237px';
    document.querySelector('.line7').style.marginLeft = '-180px';
    document.querySelector('.line7').style.width = '35px';
    document.querySelector('.point7').style.marginRight = '198px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '237px';
        document.querySelector('.line7').style.marginLeft = '-180px';
        document.querySelector('.line7').style.width = '35px';
        document.querySelector('.point7').style.marginRight = '198px';
      } else {
        // Safari
        document.querySelector('.arrow7').style.top = '292px';
        document.querySelector('.arrow7').style.marginLeft = '80px';
        document.querySelector('.line7').style.marginLeft = '-273px';
        document.querySelector('.line7').style.width = '35px';
      }
    }
    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }
    if (sufId == "surf_1") {
      document.querySelector(".line3").style.display = "block";
      document.querySelector(".point3").style.display = "block";
      document.querySelector(".arrow3 span").style.display = "block";
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".arrow3").style.top = "378px";
      document.querySelector(".arrow3").style.transform = "rotate(509deg)";
      document.querySelector(".arrow3").style.marginLeft = "-38px";
      document.querySelector(".line3").style.width = "26px";
      document.querySelector(".point3").style.marginRight = "203px";
      document.querySelector(".point3").style.borderLeft = "14px solid black";
      document.querySelector(".arrow3 span").style.transform = "rotate(224deg)";
      document.querySelector(".arrow3 span").style.left = "-89px";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.display = "block";
      document.querySelector(".point3").style.display = "block";
      document.querySelector(".arrow3 span").style.display = "block";
      document.querySelector(".arrow3").style.top = "378px";
      document.querySelector(".line3").style.width = "0px";
      document.querySelector(".point3").style.marginRight = "232px";
      document.querySelector(".point3").style.borderLeft = "6px solid black";
      document.querySelector(".arrow3 span").style.transform = "rotate(209deg)";
      document.querySelector(".arrow3 span").style.left = "-121px";
      document.querySelector(".arrow3").style.transform = "rotate(509deg)";
      document.querySelector(".arrow3").style.marginLeft = "-36px";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.display = "none";
      document.querySelector(".point3").style.display = "none";
      document.querySelector(".arrow3 span").style.display = "none";
    }

  }
  else if (mass == 1 && angle == 35) {
    document.getElementById('box').src = './images/Box-1.png';
    document.querySelector(".line1").style.width = "55px";
    document.querySelector(".point1").style.marginRight = "177px";
    document.querySelector(".arrow1 span").style.left = "-58px";
    document.querySelector(".arrow1 span").style.transform = "rotate(125deg)";
    document.querySelector(".frac-line").style.width = "49px";
    document.querySelector(".frac-point").style.marginRight = "191px";
    document.querySelector(".frac-arrow span").style.left = "-81px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(35deg)";
    document.querySelector(".arrow2").style.left = "349px";
    document.querySelector(".arrow2").style.top = "308px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-35deg)";
    document.querySelector(".arrow4 span").style.left = "-96px";
    document.querySelector(".arrow4 span").style.top = "29px";
    document.querySelector(".line2").style.width = "67px";
    document.querySelector(".point2").style.marginRight = "162px";
    document.querySelector(".arrow2 span").style.left = "-38px";
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector('.arrow4').style.top = '450px';
    document.querySelector('.arrow4').style.marginLeft = '48px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '68px';
    document.querySelector('.point4').style.marginRight = '161px';
    document.querySelector('.arrow4').style.transform = 'rotate(60deg)';
    document.querySelector('.line5').style.marginLeft = '-220px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '36px';
    document.querySelector('.arrow5').style.top = '308px';
    document.getElementById("arcs").style.marginTop = "294px";
    document.getElementById("arcs").style.marginLeft = "3px";
    document.querySelector('.arrow5').style.transform = 'rotate(-33deg)';
    document.querySelector('.line6').style.marginLeft = '-151px';
    document.querySelector('.line6').style.marginTop = '71px';
    document.querySelector('.line6').style.width = '76px';
    document.querySelector('.arrow6').style.transform = 'rotate(59deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-32deg)';
    document.querySelector('.arrow7').style.top = '224px';
    document.querySelector('.line7').style.marginLeft = '-185px';
    document.querySelector('.line7').style.width = '40px';
    document.querySelector('.point7').style.marginRight = '205px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '224px';
        document.querySelector('.line7').style.marginLeft = '-185px';
        document.querySelector('.line7').style.width = '40px';
        document.querySelector('.point7').style.marginRight = '205px';
        document.querySelector('.arrow7').style.left = '52%';
        document.querySelector('.arrow7').style.marginLeft = '53px';
      } else {
        document.querySelector('.arrow7').style.top = '290px';
        document.querySelector('.arrow7').style.marginLeft = '77px';
        document.querySelector('.line7').style.marginLeft = '-272px';
        document.querySelector('.line7').style.width = '40px';
        document.querySelector('.point7').style.marginRight = '205px';
      }
    }

    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }

    if (sufId == "surf_1") {
      document.querySelector(".line3").style.display = "block";
      document.querySelector(".point3").style.display = "block";
      document.querySelector(".arrow3 span").style.display = "block";
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".arrow3").style.top = "374px";
      document.querySelector(".line3").style.width = "30px";
      document.querySelector(".point3").style.marginRight = "200px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-83px";
      document.querySelector(".arrow3").style.transform = "rotate(509deg)";
      document.querySelector(".arrow3").style.marginLeft = "-37px";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.display = "block";
      document.querySelector(".point3").style.display = "block";
      document.querySelector(".arrow3 span").style.display = "block";
      document.querySelector(".arrow3").style.top = "383px";
      document.querySelector(".point3").style.borderLeft = "14px solid black";
      document.querySelector(".line3").style.width = "5px";
      document.querySelector(".point3").style.marginRight = "230px";
      document.querySelector(".arrow3 span").style.transform = "rotate(224deg)";
      document.querySelector(".arrow3 span").style.left = "-119px";
      document.querySelector(".arrow3").style.transform = "rotate(505deg)";
      document.querySelector(".arrow3").style.marginLeft = "-35px";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.display = "none";
      document.querySelector(".point3").style.display = "none";
      document.querySelector(".arrow3 span").style.display = "none";
    }

  }
  else if (mass == 1 && angle == 40) {
    document.getElementById('box').src = './images/Box-1.png';
    document.querySelector(".line1").style.width = "50px";
    document.querySelector(".point1").style.marginRight = "180px";
    document.querySelector(".arrow1 span").style.left = "-63px";
    document.querySelector(".arrow1 span").style.transform = "rotate(130deg)";
    document.querySelector(".frac-line").style.width = "49px";
    document.querySelector(".frac-point").style.marginRight = "191px";
    document.querySelector(".frac-arrow span").style.left = "-81px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(40deg)";
    document.querySelector(".arrow2").style.left = "350px";
    document.querySelector(".arrow2").style.top = "302px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-40deg)";
    document.querySelector(".arrow4 span").style.left = "-96px";
    document.querySelector(".arrow4 span").style.top = "29px";
    document.querySelector(".arrow4 span").style.transform = "rotate(290deg)";
    document.querySelector(".line2").style.width = "77px";
    document.querySelector(".point2").style.marginRight = "156px";
    document.querySelector(".arrow2 span").style.left = "-38px";
    document.getElementById("arcs").style.marginTop = "285px";
    document.getElementById("arcs").style.marginLeft = "3px";
    document.querySelector('.arrow4').style.left = '357px';
    document.querySelector('.arrow4').style.top = '430px';
    document.querySelector('.arrow4').style.marginLeft = '53px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '68px';
    document.querySelector('.point4').style.marginRight = '161px';
    document.querySelector('.arrow4').style.transform = 'rotate(53deg)';
    document.querySelector('.line5').style.marginLeft = '-231px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '47px';
    document.querySelector('.arrow5').style.top = '288px';
    document.querySelector('.arrow5').style.transform = 'rotate(-40deg)';
    document.querySelector('.line6').style.marginLeft = '-137px';
    document.querySelector('.line6').style.marginTop = '46px';
    document.querySelector('.line6').style.width = '64px';
    document.querySelector('.arrow6').style.transform = 'rotate(50deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-37deg)';
    document.querySelector('.arrow7').style.top = '212px';
    document.querySelector('.line7').style.marginLeft = '-211px';
    document.querySelector('.line7').style.width = '46px';
    document.querySelector('.point7').style.marginRight = '225px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '212px';
        document.querySelector('.line7').style.marginLeft = '-211px';
        document.querySelector('.line7').style.width = '46px';
        document.querySelector('.point7').style.marginRight = '225px';
        document.querySelector('.arrow7').style.left = '53%';
        document.querySelector('.arrow7').style.marginLeft = '53px';
      } else {
        document.querySelector('.arrow7').style.top = '294px';
        document.querySelector('.arrow7').style.marginLeft = '66px';
        document.querySelector('.line7').style.marginLeft = '-273px';
        document.querySelector('.line7').style.width = '46px';
        document.querySelector('.point7').style.marginRight = '225px';
      }
    }

    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }

    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "385px";
      document.querySelector(".arrow3").style.left = "41.2%";
      document.querySelector(".line3").style.width = "50px";
      document.querySelector(".point3").style.marginRight = "191px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-77px";
      document.querySelector(".arrow3").style.transform = "rotate(504deg)";
      document.querySelector(".arrow3").style.marginLeft = "-32px";
      document.querySelector(".point3").style.borderLeft = "14px solid black";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "18px";
      document.querySelector(".point3").style.marginRight = "219px";
      document.querySelector(".arrow3").style.transform = "rotate(505deg)";
      document.querySelector(".arrow3").style.marginLeft = "-29px";
      document.querySelector(".arrow3").style.top = "385px";
      document.querySelector(".point3").style.borderLeft = "14px solid black";
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-110px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

    if (sufId == "surf_3") {
      document.querySelector(".line3").style.display = "block";
      document.querySelector(".point3").style.display = "block";
      document.querySelector(".arrow3 span").style.display = "block";
      document.querySelector(".line3").style.width = "1px";
      document.querySelector(".point3").style.marginRight = "235px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-121px";
      document.querySelector(".arrow3").style.top = "404px";
      document.querySelector(".arrow3").style.marginLeft = "-14px";
      document.querySelector(".point3").style.borderLeft = "6px solid black";
      document.querySelector(".arrow3").style.transform = "rotate(494deg)";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

  }
  else if (mass == 1 && angle == 45) {
    document.getElementById('box').src = './images/Box-1.png';
    document.querySelector(".line1").style.width = "45px";
    document.querySelector(".point1").style.marginRight = "183px";
    document.querySelector(".arrow1 span").style.left = "-68px";
    document.querySelector(".arrow1 span").style.transform = "rotate(135deg)";
    document.querySelector(".frac-line").style.width = "35px";
    document.querySelector(".frac-point").style.marginRight = "194px";
    document.querySelector(".frac-arrow span").style.left = "-81px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(45deg)";
    document.querySelector(".arrow2").style.left = "351px";
    document.querySelector(".arrow2").style.top = "297px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-45deg)";
    document.getElementById("arcs").style.marginTop = "276px";
    document.getElementById("arcs").style.marginLeft = "2px";
    document.querySelector(".arrow4 span").style.left = "-106px";
    document.querySelector(".arrow4 span").style.transform = "rotate(305deg)";
    document.querySelector(".line2").style.width = "78px";
    document.querySelector(".point2").style.marginRight = "156px";
    document.querySelector(".arrow2 span").style.left = "-38px";
    document.querySelector('.arrow4').style.left = '351px';
    document.querySelector('.arrow4').style.top = '416px';
    document.querySelector('.arrow4').style.marginLeft = '80px';
    document.querySelector('.arrow4').style.width = '95px';
    document.querySelector('.line4').style.width = '68px';
    document.querySelector('.point4').style.marginRight = '161px';
    document.querySelector('.arrow4').style.transform = 'rotate(46deg)';
    document.querySelector('.line5').style.marginLeft = '-215px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '58px';
    document.querySelector('.arrow5').style.top = '288px';
    document.querySelector('.arrow5').style.transform = 'rotate(-41deg)';
    document.querySelector('.line6').style.marginLeft = '-127px';
    document.querySelector('.line6').style.marginTop = '26px';
    document.querySelector('.line6').style.width = '58px';
    document.querySelector('.arrow6').style.transform = 'rotate(45deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-42deg)';
    document.querySelector('.arrow7').style.top = '192px';
    document.querySelector('.line7').style.marginLeft = '-239px';
    document.querySelector('.line7').style.width = '55px';
    document.querySelector('.point7').style.marginRight = '237px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '192px';
        document.querySelector('.line7').style.marginLeft = '-239px';
        document.querySelector('.line7').style.width = '55px';
        document.querySelector('.point7').style.marginRight = '237px';
        document.querySelector('.arrow7').style.left = '53%';
        document.querySelector('.arrow7').style.marginLeft = '53px';
      } else {
        document.querySelector('.arrow7').style.top = '292px';
        document.querySelector('.arrow7').style.marginLeft = '66px';
        document.querySelector('.line7').style.marginLeft = '-286px';
        document.querySelector('.line7').style.width = '45px';
        document.querySelector('.point7').style.marginRight = '237px';
      }
    }

    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }

    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "389px";
      document.querySelector(".line3").style.width = "40px";
      document.querySelector(".point3").style.marginRight = "191px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-77px";
      document.querySelector(".arrow3").style.transform = "rotate(501deg)";
      document.querySelector(".arrow3").style.marginLeft = "-22px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }


    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "29px";
      document.querySelector(".point3").style.marginRight = "208px";
      document.querySelector(".arrow3").style.transform = "rotate(497deg)";
      document.querySelector(".arrow3").style.marginLeft = "-19px";
      document.querySelector(".arrow3").style.top = "395px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-96px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.display = "block";
      document.querySelector(".point3").style.display = "block";
      document.querySelector(".arrow3 span").style.display = "block";
      document.querySelector(".line3").style.width = "1px";
      document.querySelector(".point3").style.marginRight = "231px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-116px";
      document.querySelector(".arrow3").style.top = "402px";
      document.querySelector(".arrow3").style.marginLeft = "-13px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

  }
  else if (mass == 1 && angle == 50) {
    document.getElementById('box').src = './images/Box-1.png';
    document.querySelector(".line1").style.width = "40px";
    document.querySelector(".point1").style.marginRight = "188px";
    document.querySelector(".arrow1 span").style.left = "-73px";
    document.querySelector(".arrow1 span").style.transform = "rotate(140deg)";
    document.querySelector(".frac-line").style.width = "40px";
    document.querySelector(".frac-point").style.marginRight = "195px";
    document.querySelector(".frac-arrow span").style.left = "-85px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(50deg)";
    document.querySelector(".arrow2").style.left = "351px";
    document.querySelector(".arrow2").style.top = "292px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-50deg)";
    document.getElementById("arcs").style.marginTop = "276px";
    document.getElementById("arcs").style.marginLeft = "5px";
    document.getElementById("arcs").style.minWidth = "1.5em";
    document.querySelector(".arrow4 span").style.left = "-106px";
    document.querySelector(".arrow4 span").style.transform = "rotate(305deg)";
    document.querySelector(".arrow4 span").style.top = "38px";
    document.querySelector(".line2").style.width = "74px";
    document.querySelector(".point2").style.marginRight = "154px";
    document.querySelector(".arrow2 span").style.left = "-38px";
    document.querySelector('.arrow4').style.left = '328px';
    document.querySelector('.arrow4').style.top = '395px';
    document.querySelector('.arrow4').style.marginLeft = '116px';
    document.querySelector('.arrow4').style.width = '88px';
    document.querySelector('.line4').style.width = '50px';
    document.querySelector('.point4').style.marginRight = '169px';
    document.querySelector('.arrow4').style.transform = 'rotate(40deg)';
    document.querySelector('.line5').style.marginLeft = '-268px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '58px';
    document.querySelector('.arrow5').style.top = '247px';
    document.querySelector('.arrow5').style.transform = 'rotate(-51deg)';
    document.querySelector('.line6').style.marginLeft = '-124px';
    document.querySelector('.line6').style.marginTop = '11px';
    document.querySelector('.line6').style.width = '58px';
    document.querySelector('.arrow6').style.transform = 'rotate(40deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-47deg)';
    document.querySelector('.arrow7').style.top = '171px';
    document.querySelector('.line7').style.marginLeft = '-270px';
    document.querySelector('.line7').style.width = '55px';
    document.querySelector('.point7').style.marginRight = '258px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '171px';
        document.querySelector('.line7').style.marginLeft = '-270px';
        document.querySelector('.line7').style.width = '55px';
        document.querySelector('.point7').style.marginRight = '258px';
        document.querySelector('.arrow7').style.left = '53%';
        document.querySelector('.arrow7').style.marginLeft = '53px';
      } else {
        document.querySelector('.arrow7').style.top = '292px';
        document.querySelector('.arrow7').style.marginLeft = '62px';
        document.querySelector('.line7').style.marginLeft = '-304px';
        document.querySelector('.line7').style.width = '55px';
        document.querySelector('.point7').style.marginRight = '258px';
      }
    }

    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }

    if (sufId == "surf_1") {
      document.querySelector(".line3").style.width = "54px";
      document.querySelector(".point3").style.marginRight = "183px";
      document.querySelector(".arrow3").style.transform = "rotate(493deg)";
      document.querySelector(".arrow3").style.marginLeft = "-10px";
      document.querySelector(".arrow3").style.top = "399px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-63px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }


    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "29px";
      document.querySelector(".point3").style.marginRight = "208px";
      document.querySelector(".arrow3").style.transform = "rotate(493deg)";
      document.querySelector(".arrow3").style.marginLeft = "-10px";
      document.querySelector(".arrow3").style.top = "398px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-96px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.width = "18px";
      document.querySelector(".point3").style.marginRight = "219px";
      document.querySelector(".arrow3").style.transform = "rotate(494deg)";
      document.querySelector(".arrow3").style.marginLeft = "-12px";
      document.querySelector(".arrow3").style.top = "398px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-104px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

  }
  else if (mass == 1 && angle == 55) {
    document.getElementById('box').src = './images/Box-1.png';
    document.querySelector(".line1").style.width = "35px";
    document.querySelector(".point1").style.marginRight = "193px";
    document.querySelector(".arrow1 span").style.left = "-78px";
    document.querySelector(".arrow1 span").style.transform = "rotate(145deg)";
    document.querySelector(".frac-line").style.width = "21px";
    document.querySelector(".frac-point").style.marginRight = "221px";
    document.querySelector(".frac-arrow span").style.left = "-95px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(55deg)";
    document.querySelector(".arrow2").style.left = "355px";
    document.querySelector(".arrow2").style.top = "297px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-55deg)";
    document.getElementById("arcs").style.marginTop = "271px";
    document.getElementById("arcs").style.marginLeft = "10px";
    document.getElementById("arcs").style.minWidth = "0.5em";
    document.querySelector(".arrow4 span").style.left = "-113px";
    document.querySelector(".arrow4 span").style.transform = "rotate(312deg)";
    document.querySelector(".arrow4 span").style.top = "39px";
    document.querySelector(".line2").style.width = "74px";
    document.querySelector(".point2").style.marginRight = "161px";
    document.querySelector(".arrow2 span").style.left = "-38px";
    document.querySelector('.arrow4').style.left = '331px';
    document.querySelector('.arrow4').style.top = '378px';
    document.querySelector('.arrow4').style.marginLeft = '121px';
    document.querySelector('.arrow4').style.width = '95px';
    document.querySelector('.line4').style.width = '52px';
    document.querySelector('.point4').style.marginRight = '170px';
    document.querySelector('.arrow4').style.transform = 'rotate(35deg)';
    document.querySelector('.line5').style.marginLeft = '-277px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '70px';
    document.querySelector('.arrow5').style.top = '228px';
    document.querySelector('.arrow5').style.transform = 'rotate(-55deg)';
    document.querySelector('.line6').style.marginLeft = '-107px';
    document.querySelector('.line6').style.marginTop = '-7px';
    document.querySelector('.line6').style.width = '49px';
    document.querySelector('.arrow6').style.transform = 'rotate(34deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-54deg)';
    document.querySelector('.arrow7').style.top = '138px';
    document.querySelector('.line7').style.marginLeft = '-316px';
    document.querySelector('.line7').style.width = '62px';
    document.querySelector('.point7').style.marginRight = '286px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '138px';
        document.querySelector('.line7').style.marginLeft = '-316px';
        document.querySelector('.line7').style.width = '62px';
        document.querySelector('.point7').style.marginRight = '286px';
        document.querySelector('.arrow7').style.left = '53%';
        document.querySelector('.arrow7').style.marginLeft = '53px';
      } else {
        document.querySelector('.arrow7').style.top = '299px';
        document.querySelector('.arrow7').style.marginLeft = '65px';
        document.querySelector('.line7').style.marginLeft = '-331px';
        document.querySelector('.line7').style.width = '62px';
        document.querySelector('.point7').style.marginRight = '286px';
      }
    }

    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }
    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "403px";
      document.querySelector(".line3").style.width = "52px";
      document.querySelector(".point3").style.marginRight = "178px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-61px";
      document.querySelector(".arrow3").style.transform = "rotate(489deg)";
      document.querySelector(".arrow3").style.marginLeft = "2px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "30px";
      document.querySelector(".point3").style.marginRight = "207px";
      document.querySelector(".arrow3").style.transform = "rotate(486deg)";
      document.querySelector(".arrow3").style.marginLeft = "5px";
      document.querySelector(".arrow3").style.top = "407px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-89px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }
    if (sufId == "surf_3") {

      document.querySelector(".line3").style.width = "19px";
      document.querySelector(".point3").style.marginRight = "213px";
      document.querySelector(".arrow3").style.transform = "rotate(486deg)";
      document.querySelector(".arrow3").style.marginLeft = "3px";
      document.querySelector(".arrow3").style.top = "410px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-103px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

  }
  else if (mass == 1 && angle == 60) {
    document.getElementById('box').src = './images/Box-1.png';
    document.querySelector(".line1").style.width = "32px";
    document.querySelector(".point1").style.marginRight = "203px";
    document.querySelector(".arrow1 span").style.left = "-82px";
    document.querySelector(".arrow1 span").style.transform = "rotate(150deg)";
    document.querySelector(".frac-line").style.width = "20px";
    document.querySelector(".frac-point").style.marginRight = "226px";
    document.querySelector(".frac-arrow span").style.left = "-100px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(60deg)";
    document.querySelector(".arrow2").style.left = "355px";
    document.querySelector(".arrow2").style.top = "292px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-60deg)";
    document.getElementById("arcs").style.marginTop = "269px";
    document.getElementById("arcs").style.marginLeft = "5px";
    document.getElementById("arcs").style.minWidth = "2.0em";
    document.querySelector(".arrow4 span").style.left = "-119px";
    document.querySelector(".arrow4 span").style.transform = "rotate(312deg)";
    document.querySelector(".arrow4 span").style.top = "39px";
    document.querySelector(".line2").style.width = "78px";
    document.querySelector(".point2").style.marginRight = "158px";
    document.querySelector(".arrow2 span").style.left = "-38px";
    document.querySelector('.arrow4').style.left = '342px';
    document.querySelector('.arrow4').style.top = '372px';
    document.querySelector('.arrow4').style.marginLeft = '121px';
    document.querySelector('.arrow4').style.width = '95px';
    document.querySelector('.line4').style.width = '38px';
    document.querySelector('.point4').style.marginRight = '184px';
    document.querySelector('.arrow4').style.transform = 'rotate(32deg)';
    document.querySelector('.line5').style.marginLeft = '-277px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '70px';
    document.querySelector('.arrow5').style.top = '228px';
    document.querySelector('.arrow5').style.transform = 'rotate(-55deg)';
    document.querySelector('.line6').style.marginLeft = '-107px';
    document.querySelector('.line6').style.marginTop = '-16px';
    document.querySelector('.line6').style.width = '49px';
    document.querySelector('.arrow6').style.transform = 'rotate(30deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-58deg)';
    document.querySelector('.arrow7').style.top = '111px';
    document.querySelector('.line7').style.marginLeft = '-362px';
    document.querySelector('.line7').style.width = '62px';
    document.querySelector('.point7').style.marginRight = '308px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '111px';
        document.querySelector('.arrow7').style.left = '53%';
        document.querySelector('.arrow7').style.marginLeft = '53px';
        document.querySelector('.line7').style.marginLeft = '-362px';
        document.querySelector('.line7').style.width = '62px';
        document.querySelector('.point7').style.marginRight = '308px';
      } else {
        document.querySelector('.arrow7').style.top = '298px';
        document.querySelector('.arrow7').style.marginLeft = '65px';
        document.querySelector('.line7').style.marginLeft = '-353px';
        document.querySelector('.line7').style.width = '62px';
        document.querySelector('.point7').style.marginRight = '308px';
        document.querySelector('.point7').style.marginLeft = '0px';
        document.querySelector('.arrow7').style.left = '33%';
      }
    }

    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }
    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "406px";
      document.querySelector(".line3").style.width = "56px";
      document.querySelector(".point3").style.marginRight = "173px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-62px";
      document.querySelector(".arrow3").style.transform = "rotate(484deg)";
      document.querySelector(".arrow3").style.marginLeft = "12px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "41px";
      document.querySelector(".point3").style.marginRight = "196px";
      document.querySelector(".arrow3").style.transform = "rotate(481deg)";
      document.querySelector(".arrow3").style.marginLeft = "16px";
      document.querySelector(".arrow3").style.top = "410px";
      document.querySelector(".arrow3 span").style.transform = "rotate(250deg)";
      document.querySelector(".arrow3 span").style.left = "-79px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.width = "29px";
      document.querySelector(".point3").style.marginRight = "208px";
      document.querySelector(".arrow3").style.transform = "rotate(481deg)";
      document.querySelector(".arrow3").style.marginLeft = "15px";
      document.querySelector(".arrow3").style.top = "411px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-96px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }
  }
}

function mass2() {
  if (mass == 2 && angle == 0) {
    document.getElementById('box').src = './images/Box-2.png';
    document.querySelector(".line1").style.width = "134px";
    document.querySelector(".point1").style.marginRight = "104px";
    document.querySelector(".arrow1 span").style.left = "12px";
    document.querySelector(".arrow1 span").style.transform = "rotate(90deg)";
    document.querySelector(".frac-line").style.display = "none";
    document.querySelector(".frac-point").style.display = "none";
    document.querySelector(".frac-arrow span").style.display = "none";
    document.querySelector(".arrow2").style.left = "328px";
    document.querySelector(".arrow2").style.top = "321px";
    document.querySelector(".surface-container").style.transform =
      "rotate(0deg)";
    document.querySelector(".arrow3").style.display = "none";
    document.querySelector(".arrow4").style.display = "none";
    document.querySelector(".arrow5").style.display = "none";
    document.querySelector(".arrow6").style.display = "none";
    document.querySelector(".arrow7").style.display = "none";
  }
  else if (mass == 2 && angle == 5) {
    if (chechboxCheckedWeight) {
      document.querySelector(".arrow4").style.display = "block";
      document.querySelector(".arrow5").style.display = "block";
      document.querySelector(".arrow6").style.display = "block";
      document.querySelector(".arrow7").style.display = "block";
    }
    document.getElementById('box').src = './images/Box-2.png';
    document.querySelector(".surface-container").style.transform =
      "rotate(-5deg)";
    document.querySelector(".arrow4").style.display = "block";
    document.querySelector(".arrow5").style.display = "block";
    document.querySelector(".arrow6").style.display = "block";
    document.querySelector(".arrow7").style.display = "block";
    document.querySelector(".frac-line").style.display = "block";
    document.querySelector(".frac-point").style.display = "block";
    document.querySelector(".frac-arrow span").style.display = "block";
    document.querySelector(".arrow4 span").style.left = "-88px";
    document.querySelector(".arrow4 span").style.top = "18px";
    document.querySelector(".line1").style.width = "129px";
    document.querySelector(".point1").style.marginRight = "109px";
    document.querySelector(".arrow1 span").style.left = "7px";
    document.querySelector(".arrow1 span").style.transform = "rotate(95deg)";
    document.querySelector(".frac-line").style.width = "10px";
    document.querySelector(".frac-point").style.marginRight = "228px";
    document.querySelector(".frac-arrow span").style.left = "-114px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(5deg)";
    document.querySelector(".arrow2").style.left = "332px";
    document.querySelector(".arrow2").style.top = "321px";
    document.querySelector(".arrow3").style.display = "none";
    document.getElementById("arcs").style.marginTop = "317px";
    document.getElementById("arcs").style.marginLeft = "-17px";
    document.getElementById("arcs").style.minWidth = "0.5px";
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector('.arrow4').style.top = '498px';
    document.querySelector('.arrow4').style.marginLeft = '-46px';
    document.querySelector('.arrow4').style.width = '107px';
    document.querySelector('.line4').style.width = '127px';
    document.querySelector('.point4').style.marginRight = '109px';
    document.querySelector('.arrow4').style.transform = 'rotate(85deg)';
    document.querySelector('.line5').style.marginLeft = '-246px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '17px';
    document.querySelector('.arrow5').style.top = '410px';
    document.querySelector('.arrow5').style.transform = 'rotate(-18deg)';
    document.querySelector('.line6').style.marginLeft = '-189px';
    document.querySelector('.line6').style.marginTop = '212px';
    document.querySelector('.line6').style.width = '138px';
    document.querySelector('.arrow6').style.transform = 'rotate(83deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-11deg)';
    document.querySelector('.arrow7').style.top = '43.5%';
    document.querySelector('.arrow7').style.left = '54%';
    document.querySelector('.line7').style.marginLeft = '-177px';
    document.querySelector('.line7').style.width = '17px';
    document.querySelector('.point7').style.marginRight = '193px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '43.5%';
        document.querySelector('.arrow7').style.left = '54%';
        document.querySelector('.line7').style.marginLeft = '-177px';
        document.querySelector('.line7').style.width = '17px';
        document.querySelector('.point7').style.marginRight = '193px';
      } else {
        document.querySelector('.arrow7').style.top = '46.5%';
        document.querySelector('.arrow7').style.left = '40%';
        document.querySelector('.arrow7').style.marginLeft = '42px';
        document.querySelector('.line7').style.marginLeft = '-272px';
        document.querySelector('.line7').style.width = '9px';
        document.querySelector('.point7').style.marginRight = '193px';
        document.querySelector('.point7').style.marginLeft = '0px';
      }
    }

    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block"; 
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      } 
      document.querySelector(".arrow3").style.top = "360px";
      document.querySelector(".line3").style.width = "1px";
      document.querySelector(".point3").style.marginRight = "229px";
      document.querySelector(".arrow3 span").style.transform = "rotate(188deg)";
      document.querySelector(".arrow3 span").style.left = "-112px";
      document.querySelector(".arrow3").style.transform = "rotate(524deg)";
      document.querySelector(".arrow3").style.marginLeft = "-71px";
    }

  }
  else if (mass == 2 && angle == 10) {
    document.getElementById('box').src = './images/Box-2.png';
    document.querySelector(".line1").style.width = "124px";
    document.querySelector(".point1").style.marginRight = "114px";
    document.querySelector(".arrow1 span").style.left = "2px";
    document.querySelector(".arrow1 span").style.transform = "rotate(100deg)";
    document.querySelector(".frac-line").style.width = "20px";
    document.querySelector(".frac-point").style.marginRight = "218px";
    document.querySelector(".frac-arrow span").style.left = "-106px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(10deg)";
    document.querySelector(".arrow2").style.left = "335px";
    document.querySelector(".arrow2").style.top = "321px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-10deg)";
    document.querySelector(".arrow4 span").style.left = "-88px";
    document.querySelector(".arrow4 span").style.top = "23px";
    document.querySelector(".arrow3").style.display = "none";
    document.getElementById("arcs").style.minWidth = "1.5px";
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector('.arrow4').style.top = '494px';
    document.querySelector('.arrow4').style.marginLeft = '-23px';
    document.querySelector('.arrow4').style.width = '107px';
    document.querySelector('.line4').style.width = '114px';
    document.querySelector('.point4').style.marginRight = '112px';
    document.querySelector('.arrow4').style.transform = 'rotate(79deg)';
    document.querySelector('.line5').style.marginLeft = '-234px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '27px';
    document.querySelector('.arrow5').style.top = '400px';
    document.getElementById("arcs").style.marginTop = "315px";
    document.getElementById("arcs").style.marginLeft = "-11px";
    document.querySelector('.arrow5').style.transform = 'rotate(-22deg)';
    document.querySelector('.line6').style.marginLeft = '-185px';
    document.querySelector('.line6').style.marginTop = '188px';
    document.querySelector('.line6').style.width = '133px';
    document.querySelector('.arrow6').style.transform = 'rotate(77deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-16deg)';
    document.querySelector('.arrow7').style.top = '271px';
    document.querySelector('.arrow7').style.left = '53%';
    document.querySelector('.line7').style.marginLeft = '-174px';
    document.querySelector('.line7').style.width = '28px';
    document.querySelector('.point7').style.marginRight = '198px';
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '271px';
        document.querySelector('.arrow7').style.left = '53%';
        document.querySelector('.line7').style.marginLeft = '-174px';
        document.querySelector('.line7').style.width = '28px';
        document.querySelector('.point7').style.marginRight = '198px';
      } else {
        document.querySelector('.arrow7').style.top = '304px';
        document.querySelector('.arrow7').style.left = '37%';
        document.querySelector('.arrow7').style.marginLeft = '52px';
        document.querySelector('.line7').style.marginLeft = '-388px';
        document.querySelector('.line7').style.width = '17px';
        document.querySelector('.point7').style.marginleft = '-4px';
        document.querySelector('.point7').style.marginRight = '317px';
      }
    }
    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block"; 
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      } 
      document.querySelector(".arrow3").style.top = "357px";
      document.querySelector(".line3").style.width = "24px";
      document.querySelector(".point3").style.marginRight = "207px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-94px";
      document.querySelector(".arrow3").style.transform = "rotate(524deg)";
      document.querySelector(".arrow3").style.marginLeft = "-60px";
    }

  }
  else if (mass == 2 && angle == 15) {
    document.getElementById('box').src = './images/Box-2.png';
    document.querySelector(".line1").style.width = "119px";
    document.querySelector(".point1").style.marginRight = "119px";
    document.querySelector(".arrow1 span").style.left = "-3px";
    document.querySelector(".arrow1 span").style.transform = "rotate(105deg)";
    document.querySelector(".frac-line").style.width = "30px";
    document.querySelector(".frac-point").style.marginRight = "208px";
    document.querySelector(".frac-arrow span").style.left = "-98px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(15deg)";
    document.querySelector(".arrow2").style.left = "337px";
    document.querySelector(".arrow2").style.top = "318px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-15deg)";
    document.querySelector(".arrow3").style.display = "none";
    document.querySelector(".arrow4 span").style.left = "-88px";
    document.querySelector(".arrow4 span").style.top = "26px";
    document.getElementById("arcs").style.marginTop = "305px";
    document.getElementById("arcs").style.marginLeft = "-11px";
    document.getElementById("arcs").style.minWidth = "1.5em";
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector('.arrow4').style.top = '479px';
    document.querySelector('.arrow4').style.marginLeft = '2px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '123px';
    document.querySelector('.point4').style.marginRight = '99px';
    document.querySelector('.arrow4').style.transform = 'rotate(73deg)';
    document.querySelector('.line5').style.marginLeft = '-216px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '42px';
    document.querySelector('.arrow5').style.top = '400px';
    document.querySelector('.arrow5').style.transform = 'rotate(-22deg)';
    document.querySelector('.line6').style.marginLeft = '-176px';
    document.querySelector('.line6').style.marginTop = '166px';
    document.querySelector('.line6').style.width = '128px';
    document.querySelector('.arrow6').style.transform = 'rotate(72deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-22deg)';
    document.querySelector('.arrow7').style.top = '257px';
    document.querySelector('.line7').style.marginLeft = '-187px';
    document.querySelector('.line7').style.width = '33px';
    document.querySelector('.point7').style.marginRight = '213px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '257px';
        document.querySelector('.line7').style.marginLeft = '-187px';
        document.querySelector('.line7').style.width = '33px';
        document.querySelector('.point7').style.marginRight = '213px';
      } else {
        // Safari
        document.querySelector('.arrow7').style.top = '308px';
        document.querySelector('.arrow7').style.left = '33%';
        document.querySelector('.line7').style.marginLeft = '-252px';
        document.querySelector('.line7').style.width = '44px';
        document.querySelector('.point7').style.marginLeft = '14px';
        document.querySelector('.point7').style.marginRight = '210px';
        document.querySelector('.arrow7').style.marginLeft = '56px';
      }
    }


    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block"; 
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      } 
      document.querySelector(".arrow3").style.top = "369px";
      document.querySelector(".line3").style.width = "41px";
      document.querySelector(".point3").style.marginRight = "192px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-63px";
      document.querySelector(".arrow3").style.transform = "rotate(517deg)";
      document.querySelector(".arrow3").style.marginLeft = "-50px";
    }

  }
  else if (mass == 2 && angle == 20) {
    document.getElementById('box').src = './images/Box-2.png';
    document.querySelector(".line1").style.width = "114px";
    document.querySelector(".point1").style.marginRight = "124px";
    document.querySelector(".arrow1 span").style.left = "-8px";
    document.querySelector(".arrow1 span").style.transform = "rotate(110deg)";
    document.querySelector(".frac-line").style.width = "40px";
    document.querySelector(".frac-point").style.marginRight = "198px";
    document.querySelector(".frac-arrow span").style.left = "-90px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(20deg)";
    document.querySelector(".arrow2").style.left = "340px";
    document.querySelector(".arrow2").style.top = "316px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-20deg)";
    document.getElementById("arcs").style.marginTop = "305px";
    document.getElementById("arcs").style.marginLeft = "-6px";
    document.querySelector(".arrow3").style.display = "none";
    document.querySelector(".arrow4 span").style.left = "-88px";
    document.querySelector(".arrow4 span").style.top = "28px";
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector('.arrow4').style.top = '469px';
    document.querySelector('.arrow4').style.marginLeft = '19px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '118px';
    document.querySelector('.point4').style.marginRight = '108px';
    document.querySelector('.arrow4').style.transform = 'rotate(68deg)';
    document.querySelector('.line5').style.marginLeft = '-217px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '50px';
    document.querySelector('.arrow5').style.top = '377px';
    document.querySelector('.arrow5').style.transform = 'rotate(-30deg)';
    document.querySelector('.line6').style.marginLeft = '-173px';
    document.querySelector('.line6').style.marginTop = '146px';
    document.querySelector('.line6').style.width = '122px';
    document.querySelector('.arrow6').style.transform = 'rotate(66deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-27deg)';
    document.querySelector('.arrow7').style.top = '244px';
    document.querySelector('.line7').style.marginLeft = '-201px';
    document.querySelector('.line7').style.width = '53px';
    document.querySelector('.point7').style.marginRight = '229px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '244px';
        document.querySelector('.line7').style.marginLeft = '-201px';
        document.querySelector('.line7').style.width = '53px';
      } else {
        // Safari
        document.querySelector('.arrow7').style.top = '306px';
        document.querySelector('.line7').style.marginLeft = '-272px';
        document.querySelector('.line7').style.width = '53px';
        document.querySelector('.arrow7').style.left = '33%';
        document.querySelector('.arrow7').style.marginLeft = '53px';
      }
    }
    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block"; 
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      } 
      document.querySelector(".arrow3").style.top = "381px";
      document.querySelector(".line3").style.width = "63px";
      document.querySelector(".point3").style.marginRight = "178px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-63px";
      document.querySelector(".arrow3").style.transform = "rotate(510deg)";
      document.querySelector(".arrow3").style.marginLeft = "-40px";
    }

  }
  else if (mass == 2 && angle == 25) {
    document.getElementById('box').src = './images/Box-2.png';
    document.querySelector(".line1").style.width = "109px";
    document.querySelector(".point1").style.marginRight = "129px";
    document.querySelector(".arrow1 span").style.left = "-3px";
    document.querySelector(".arrow1 span").style.transform = "rotate(115deg)";
    document.querySelector(".frac-line").style.width = "50px";
    document.querySelector(".frac-point").style.marginRight = "188px";
    document.querySelector(".frac-arrow span").style.left = "-78px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(25deg)";
    document.querySelector(".arrow2").style.left = "343px";
    document.querySelector(".arrow2").style.top = "313px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-25deg)";
    document.querySelector(".arrow3").style.display = "none";
    document.querySelector(".arrow4 span").style.left = "-88px";
    document.getElementById("arcs").style.marginTop = "301px";
    document.getElementById("arcs").style.marginLeft = "-4px";
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector('.arrow4').style.top = '461px';
    document.querySelector('.arrow4').style.marginLeft = '31px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '116px';
    document.querySelector('.point4').style.marginRight = '115px';
    document.querySelector('.arrow4').style.transform = 'rotate(64deg)';
    document.querySelector('.line5').style.marginLeft = '-213px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '58px';
    document.querySelector('.arrow5').style.top = '366px';
    document.querySelector('.arrow5').style.transform = 'rotate(-33deg)';
    document.querySelector('.line6').style.marginLeft = '-173px';
    document.querySelector('.line6').style.marginTop = '136px';
    document.querySelector('.line6').style.width = '122px';
    document.querySelector('.arrow6').style.transform = 'rotate(64deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-27deg)';
    document.querySelector('.arrow7').style.top = '242px';
    document.querySelector('.arrow7').style.left = '53%';
    document.querySelector('.line7').style.marginLeft = '-201px';
    document.querySelector('.line7').style.width = '53px';
    document.querySelector('.point7').style.marginRight = '229px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '242px';
        document.querySelector('.line7').style.marginLeft = '-201px';
        document.querySelector('.line7').style.width = '53px';
        document.querySelector('.point7').style.marginRight = '229px';
        document.querySelector('.arrow7').style.left = '53%';
      } else {
        // Safari
        document.querySelector('.arrow7').style.top = '306px';
        document.querySelector('.arrow7').style.left = '33%';
        document.querySelector('.line7').style.marginLeft = '-279px';
        document.querySelector('.line7').style.width = '53px';
        document.querySelector('.point7').style.marginleft = '4px';
        document.querySelector('.point7').style.marginRight = '248px';
        document.querySelector('.arrow7').style.marginLeft = '53px';
      }
    }


    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block"; 
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      } 
      document.querySelector(".arrow3").style.top = "379px";
      document.querySelector(".line3").style.width = "63px";
      document.querySelector(".point3").style.marginRight = "178px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-63px";
      document.querySelector(".arrow3").style.transform = "rotate(510deg)";
      document.querySelector(".arrow3").style.marginLeft = "-40px";
    }

  }
  else if (mass == 2 && angle == 30) {
    document.getElementById('box').src = './images/Box-2.png';
    document.querySelector(".line1").style.width = "104px";
    document.querySelector(".point1").style.marginRight = "134px";
    document.querySelector(".arrow1 span").style.left = "-18px";
    document.querySelector(".arrow1 span").style.transform = "rotate(120deg)";
    document.querySelector(".frac-line").style.width = "60px";
    document.querySelector(".frac-point").style.marginRight = "170px";
    document.querySelector(".frac-arrow span").style.left = "-56px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(30deg)";
    document.querySelector(".arrow2").style.left = "346px";
    document.querySelector(".arrow2").style.top = "312px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-30deg)";
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector('.arrow4').style.top = '453px';
    document.querySelector(".arrow4 span").style.left = "-88px";
    document.querySelector('.arrow4').style.marginLeft = '46px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '116px';
    document.querySelector('.point4').style.marginRight = '115px';
    document.querySelector('.arrow4').style.transform = 'rotate(60deg)';
    document.getElementById("arcs").style.marginTop = "295px";
    document.getElementById("arcs").style.marginLeft = "-1px";
    document.querySelector('.line5').style.marginLeft = '-193px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '70px';
    document.querySelector('.arrow5').style.top = '371px';
    document.querySelector('.arrow5').style.transform = 'rotate(-33deg)';
    document.querySelector('.line6').style.marginLeft = '-165px';
    document.querySelector('.line6').style.marginTop = '116px';
    document.querySelector('.line6').style.width = '122px';
    document.querySelector('.arrow6').style.transform = 'rotate(60deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-32deg)';
    document.querySelector('.arrow7').style.top = '230px';
    document.querySelector('.arrow7').style.left = '52%';
    document.querySelector('.line7').style.marginLeft = '-210px';
    document.querySelector('.line7').style.width = '58px';
    document.querySelector('.point7').style.marginRight = '232px';
    document.querySelector(".line2").style.width = "124px";
    document.querySelector(".point2").style.marginRight = "104px";
    document.querySelector(".arrow2 span").style.left = "12px";
    document.querySelector(".point3").style.borderLeft = "14px solid black";

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '230px';
        document.querySelector('.line7').style.marginLeft = '-210px';
        document.querySelector('.line7').style.width = '58px';
        document.querySelector('.arrow7').style.left = '52%';
      } else {
        // Safari
        document.querySelector('.arrow7').style.top = '306px';
        document.querySelector('.line7').style.marginLeft = '-270px';
        document.querySelector('.line7').style.width = '58px';
        document.querySelector('.arrow7').style.left = '33%';
        document.querySelector('.arrow7').style.marginLeft = '53px';
      }
    }
    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }
    if (sufId == "surf_1") {
      document.getElementById("axis2").style.display = "block";
      document.querySelector(".line3").style.display = "block";
      document.querySelector(".point3").style.display = "block";
      document.querySelector(".arrow3 span").style.display = "block";
      document.querySelector(".arrow3").style.top = "383px";
      document.querySelector(".line3").style.width = "63px";
      document.querySelector(".point3").style.marginRight = "178px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-63px";
      document.querySelector(".arrow3").style.transform = "rotate(508deg)";
      document.querySelector(".arrow3").style.marginLeft = "-40px";
    }

    if (sufId == "surf_2") {
      document.getElementById("axis2").style.display = "block";
      document.querySelector(".line3").style.display = "block";
      document.querySelector(".point3").style.display = "block";
      document.querySelector(".arrow3 span").style.display = "block";
      document.querySelector(".arrow3").style.top = "383px";
      document.querySelector(".line3").style.width = "9px";
      document.querySelector(".point3").style.marginRight = "227px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-114px";
      document.querySelector(".arrow3").style.transform = "rotate(507deg)";
      document.querySelector(".arrow3").style.marginLeft = "-36px";
    }
    if (sufId == "surf_3") {
      document.getElementById("axis2").style.display = "none";
      document.querySelector(".line3").style.display = "none";
      document.querySelector(".point3").style.display = "none";
      document.querySelector(".arrow3 span").style.display = "none";
    }

  }
  else if (mass == 2 && angle == 35) {
    document.getElementById('box').src = './images/Box-2.png';
    document.querySelector(".line1").style.width = "99px";
    document.querySelector(".point1").style.marginRight = "139px";
    document.querySelector(".arrow1 span").style.left = "-23px";
    document.querySelector(".arrow1 span").style.transform = "rotate(125deg)";
    document.querySelector(".frac-line").style.width = "55px";
    document.querySelector(".frac-point").style.marginRight = "175px";
    document.querySelector(".frac-arrow span").style.left = "-55px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(35deg)";
    document.querySelector(".arrow2").style.left = "347px";
    document.querySelector(".arrow2").style.top = "305px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-35deg)";
    document.querySelector('.arrow4').style.left = '345px';
    document.querySelector(".arrow4 span").style.left = "-97px";
    document.getElementById("arcs").style.marginTop = "291px";
    document.getElementById("arcs").style.marginLeft = "1px";
    document.querySelector('.arrow4').style.top = '450px';
    document.querySelector('.arrow4').style.marginLeft = '48px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '116px';
    document.querySelector('.point4').style.marginRight = '115px';
    document.querySelector('.arrow4').style.transform = 'rotate(60deg)';
    document.querySelector('.line5').style.marginLeft = '-188px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '71px';
    document.querySelector('.arrow5').style.top = '366px';
    document.querySelector('.arrow5').style.transform = 'rotate(-33deg)';
    document.querySelector('.line6').style.marginLeft = '-168px';
    document.querySelector('.line6').style.marginTop = '116px';
    document.querySelector('.line6').style.width = '122px';
    document.querySelector('.arrow6').style.transform = 'rotate(60deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-32deg)';
    document.querySelector('.arrow7').style.top = '224px';
    document.querySelector('.arrow7').style.left = '53%';
    document.querySelector('.line7').style.marginLeft = '-225px';
    document.querySelector('.line7').style.width = '58px';
    document.querySelector('.point7').style.marginRight = '240px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '224px';
        document.querySelector('.line7').style.marginLeft = '-225px';
        document.querySelector('.line7').style.width = '58px';
        document.querySelector('.arrow7').style.left = '53%';
        document.querySelector('.arrow7').style.marginLeft = '53px';
      } else {
        // Safari
        document.querySelector('.arrow7').style.top = '302px';
        document.querySelector('.line7').style.marginLeft = '-270px';
        document.querySelector('.line7').style.width = '58px';
        document.querySelector('.arrow7').style.left = '33%';
        document.querySelector('.arrow7').style.marginLeft = '53px';
      }
    }

    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }

    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "381px";
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".line3").style.width = "73px";
      document.querySelector(".point3").style.marginRight = "169px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-50px";
      document.querySelector(".arrow3").style.transform = "rotate(506deg)";
      document.querySelector(".arrow3").style.marginLeft = "-32px";
    }

    if (sufId == "surf_2") {
      document.querySelector(".arrow3").style.top = "383px";
      document.querySelector(".arrow3").style.transform = "rotate(507deg)";
      document.querySelector(".arrow3").style.marginLeft = "-38px";
      document.querySelector(".line3").style.width = "17px";
      document.querySelector(".point3").style.marginRight = "213px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-100px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }
    if (sufId == "surf_3") {
      document.getElementById("axis2").style.display = "none";

      document.querySelector(".line3").style.display = "none";
      document.querySelector(".point3").style.display = "none";
      document.querySelector(".arrow3 span").style.display = "none";
    }
  }
  else if (mass == 2 && angle == 40) {
    document.getElementById('box').src = './images/Box-2.png';
    document.querySelector(".line1").style.width = "94px";
    document.querySelector(".point1").style.marginRight = "144px";
    document.querySelector(".arrow1 span").style.left = "-28px";
    document.querySelector(".arrow1 span").style.transform = "rotate(130deg)";
    document.querySelector(".frac-line").style.width = "50px";
    document.querySelector(".frac-point").style.marginRight = "180px";
    document.querySelector(".frac-arrow span").style.left = "-60px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(40deg)";
    document.querySelector(".arrow2").style.left = "349px";
    document.querySelector(".arrow2").style.top = "304px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-40deg)";
    document.getElementById("arcs").style.marginTop = "287px";
    document.getElementById("arcs").style.marginLeft = "3px";
    document.querySelector('.arrow4').style.left = '357px';
    document.querySelector('.arrow4').style.top = '430px';
    document.querySelector(".arrow4 span").style.left = "-97px";
    document.querySelector('.arrow4').style.marginLeft = '53px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '116px';
    document.querySelector('.point4').style.marginRight = '115px';
    document.querySelector('.arrow4').style.transform = 'rotate(53deg)';
    document.querySelector('.line5').style.marginLeft = '-197px';
    document.querySelector('.line5').style.marginTop = '18px';
    document.querySelector('.line5').style.width = '82px';
    document.querySelector('.arrow5').style.top = '342px';
    document.querySelector('.arrow5').style.transform = 'rotate(-40deg)';
    document.querySelector('.line6').style.marginLeft = '-157px';
    document.querySelector('.line6').style.marginTop = '99px';
    document.querySelector('.line6').style.width = '111px';
    document.querySelector('.arrow6').style.transform = 'rotate(54deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-38deg)';
    document.querySelector('.arrow7').style.top = '207px';
    document.querySelector('.line7').style.marginLeft = '-248px';
    document.querySelector('.line7').style.width = '73px';
    document.querySelector('.point7').style.marginRight = '256px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '207px';
        document.querySelector('.line7').style.marginLeft = '-248px';
        document.querySelector('.line7').style.width = '73px';
        document.querySelector('.point7').style.marginRight = '256px';
        document.querySelector('.arrow7').style.marginLeft = '53px';
      } else {
        // Safari
        document.querySelector('.arrow7').style.top = '306px';
        document.querySelector('.line7').style.marginLeft = '-299px';
        document.querySelector('.line7').style.width = '82px';
        document.querySelector('.point7').style.marginLeft = '-9px';
        document.querySelector('.arrow7').style.left = '33%';
        document.querySelector('.arrow7').style.marginLeft = '53px';
      }
    }
    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }

    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "387px";
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".line3").style.width = "73px";
      document.querySelector(".point3").style.marginRight = "166px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-50px";
      document.querySelector(".arrow3").style.transform = "rotate(504deg)";
      document.querySelector(".arrow3").style.marginLeft = "-27px";
    }

    if (sufId == "surf_2") {
      document.querySelector(".arrow3").style.top = "389px";
      document.querySelector(".line3").style.width = "25px";
      document.querySelector(".point3").style.marginRight = "205px";
      document.querySelector(".arrow3").style.transform = "rotate(502deg)";
      document.querySelector(".arrow3").style.marginLeft = "-25px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-91px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }
    if (sufId == "surf_3") {
      document.getElementById("axis2").style.display = "block";
      document.querySelector(".line3").style.display = "block";
      document.querySelector(".point3").style.display = "block";
      document.querySelector(".arrow3 span").style.display = "block";
      document.querySelector(".line3").style.width = "1px";
      document.querySelector(".point3").style.marginRight = "231px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-116px";
      document.querySelector(".arrow3").style.left = "41.2%";
      document.querySelector(".arrow3").style.top = "382px";
      document.querySelector(".arrow3").style.transform = "rotate(507deg)";
      document.querySelector(".arrow3").style.marginLeft = "-38px";
    }

  }
  else if (mass == 2 && angle == 45) {
    document.getElementById('box').src = './images/Box-2.png';
    document.querySelector(".line1").style.width = "89px";
    document.querySelector(".point1").style.marginRight = "149px";
    document.querySelector(".arrow1 span").style.left = "-33px";
    document.querySelector(".arrow1 span").style.transform = "rotate(135deg)";
    document.querySelector(".frac-line").style.width = "45px";
    document.querySelector(".frac-point").style.marginRight = "185px";
    document.querySelector(".frac-arrow span").style.left = "-65px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(45deg)";
    document.querySelector(".arrow2").style.left = "353px";
    document.querySelector(".arrow2").style.top = "304px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-45deg)";
    document.querySelector(".arrow4 span").style.left = "-106px";
    document.querySelector(".arrow4 span").style.transform = "rotate(290deg)";
    document.getElementById("arcs").style.marginTop = "287px";
    document.getElementById("arcs").style.marginLeft = "8px";
    document.querySelector('.arrow4').style.left = '351px';
    document.querySelector('.arrow4').style.top = '416px';
    document.querySelector('.arrow4').style.marginLeft = '80px';
    document.querySelector('.arrow4').style.width = '95px';
    document.querySelector('.line4').style.width = '83px';
    document.querySelector('.point4').style.marginRight = '135px';
    document.querySelector('.arrow4').style.transform = 'rotate(46deg)';
    document.querySelector('.line5').style.marginLeft = '-214px';
    document.querySelector('.line5').style.marginTop = '18px';
    document.querySelector('.line5').style.width = '95px';
    document.querySelector('.arrow5').style.top = '317px';
    document.querySelector('.arrow5').style.transform = 'rotate(-47deg)';
    document.querySelector('.line6').style.marginLeft = '-145px';
    document.querySelector('.line6').style.marginTop = '74px';
    document.querySelector('.line6').style.width = '101px';
    document.querySelector('.arrow6').style.transform = 'rotate(45deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-43deg)';
    document.querySelector('.arrow7').style.top = '191px';
    document.querySelector('.line7').style.marginLeft = '-282px';
    document.querySelector('.line7').style.width = '85px';
    document.querySelector('.point7').style.marginRight = '282px';
    document.querySelector('.point7').style.marginleft = '0px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '191px';
        document.querySelector('.line7').style.marginLeft = '-282px';
        document.querySelector('.line7').style.width = '85px';
        document.querySelector('.point7').style.marginRight = '282px';
        document.querySelector('.arrow7').style.marginLeft = '53px';
        document.querySelector('.arrow7').style.left = '53%';

      } else {
        // Safari
        document.querySelector('.arrow7').style.top = '325px';
        document.querySelector('.arrow7').style.marginLeft = '42px';
        document.querySelector('.line7').style.marginLeft = '-288px';
        document.querySelector('.line7').style.width = '85px';
        document.querySelector('.point7').style.marginLeft = '0px';
        document.querySelector('.point7').style.marginRight = '283px';
        document.querySelector('.arrow7').style.left = '33%';
      }
    }

    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }

    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "397px";
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".line3").style.width = "83px";
      document.querySelector(".point3").style.marginRight = "149px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-33px";
      document.querySelector(".arrow3").style.transform = "rotate(498deg)";
      document.querySelector(".arrow3").style.marginLeft = "-17px";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "33px";
      document.querySelector(".point3").style.marginRight = "197px";
      document.querySelector(".arrow3").style.transform = "rotate(498deg)";
      document.querySelector(".arrow3").style.marginLeft = "-19px";
      document.querySelector(".arrow3").style.top = "398px";
      document.querySelector(".arrow3 span").style.transform = "rotate(230deg)";
      document.querySelector(".arrow3 span").style.left = "-83px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }
    if (sufId == "surf_3") {
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".line3").style.width = "18px";
      document.querySelector(".point3").style.marginRight = "219px";
      document.querySelector(".arrow3").style.transform = "rotate(493deg)";
      document.querySelector(".arrow3").style.marginLeft = "-13px";
      document.querySelector(".arrow3").style.top = "406px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-110px";
    }

  }
  else if (mass == 2 && angle == 50) {
    document.getElementById('box').src = './images/Box-2.png';
    document.querySelector(".line1").style.width = "84px";
    document.querySelector(".point1").style.marginRight = "154px";
    document.querySelector(".arrow1 span").style.left = "-38px";
    document.querySelector(".arrow1 span").style.transform = "rotate(140deg)";
    document.querySelector(".frac-line").style.width = "40px";
    document.querySelector(".frac-point").style.marginRight = "190px";
    document.querySelector(".frac-arrow span").style.left = "-70px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(50deg)";
    document.querySelector(".arrow2").style.left = "353px";
    document.querySelector(".arrow2").style.top = "300px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-50deg)";
    document.getElementById("arcs").style.marginTop = "278px";
    document.getElementById("arcs").style.marginLeft = "8px";
    document.querySelector(".arrow4 span").style.left = "-112px";
    document.querySelector(".arrow4 span").style.transform = "rotate(318deg)";
    document.querySelector('.arrow4').style.left = '328px';
    document.querySelector('.arrow4').style.top = '395px';
    document.querySelector('.arrow4').style.marginLeft = '116px';
    document.querySelector('.arrow4').style.width = '88px';
    document.querySelector('.line4').style.width = '83px';
    document.querySelector('.point4').style.marginRight = '135px';
    document.querySelector('.arrow4').style.transform = 'rotate(40deg)';
    document.querySelector('.line5').style.marginLeft = '-237px';
    document.querySelector('.line5').style.marginTop = '18px';
    document.querySelector('.line5').style.width = '108px';
    document.querySelector('.arrow5').style.top = '294px';
    document.querySelector('.arrow5').style.transform = 'rotate(-52deg)';
    document.querySelector('.line6').style.marginLeft = '-140px';
    document.querySelector('.line6').style.marginTop = '64px';
    document.querySelector('.line6').style.width = '95px';
    document.querySelector('.arrow6').style.transform = 'rotate(41deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-48deg)';
    document.querySelector('.arrow7').style.top = '164px';
    document.querySelector('.line7').style.marginLeft = '-315px';
    document.querySelector('.line7').style.width = '96px';
    document.querySelector('.point7').style.marginRight = '307px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '164px';
        document.querySelector('.line7').style.marginLeft = '-315px';
        document.querySelector('.line7').style.width = '96px';
        document.querySelector('.point7').style.marginRight = '307px';
        document.querySelector('.arrow7').style.marginLeft = '53px';
        document.querySelector('.arrow7').style.left = '53%';
      } else {
        // Safari
        document.querySelector('.arrow7').style.top = '325px';
        document.querySelector('.arrow7').style.marginLeft = '39px';
        document.querySelector('.line7').style.marginLeft = '-314px';
        document.querySelector('.line7').style.width = '96px';
        document.querySelector('.point7').style.marginLeft = '0px';
        document.querySelector('.point7').style.marginRight = '304px';
        document.querySelector('.arrow7').style.left = '33%';
      }
    }
    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }

    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "396px";
      document.querySelector(".line3").style.width = "101px";
      document.querySelector(".point3").style.marginRight = "137px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-24px";
      document.querySelector(".arrow3").style.transform = "rotate(492deg)";
      document.querySelector(".arrow3").style.marginLeft = "-7px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "63px";
      document.querySelector(".point3").style.marginRight = "168px";
      document.querySelector(".arrow3").style.transform = "rotate(492deg)";
      document.querySelector(".arrow3").style.marginLeft = "-11px";
      document.querySelector(".arrow3").style.top = "400px";
      document.querySelector(".arrow3 span").style.transform = "rotate(230deg)";
      document.querySelector(".arrow3 span").style.left = "-53px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.width = "29px";
      document.querySelector(".point3").style.marginRight = "208px";
      document.querySelector(".arrow3").style.transform = "rotate(493deg)";
      document.querySelector(".arrow3").style.marginLeft = "1px";
      document.querySelector(".arrow3").style.top = "402px";
      document.querySelector(".arrow3").style.left = "38.2%";
      document.querySelector(".arrow3").style.top = "399px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-96px";
    }

  }
  else if (mass == 2 && angle == 55) {
    document.getElementById('box').src = './images/Box-2.png';
    document.querySelector(".line1").style.width = "79px";
    document.querySelector(".point1").style.marginRight = "159px";
    document.querySelector(".arrow1 span").style.left = "-43px";
    document.querySelector(".arrow1 span").style.transform = "rotate(145deg)";
    document.querySelector(".frac-line").style.width = "35px";
    document.querySelector(".frac-point").style.marginRight = "195px";
    document.querySelector(".frac-arrow span").style.left = "-80px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(55deg)";
    document.querySelector(".arrow2").style.left = "355px";
    document.querySelector(".arrow2").style.top = "297px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-55deg)";
    document.querySelector(".arrow4 span").style.left = "-112px";
    document.querySelector(".arrow4 span").style.transform = "rotate(318deg)";
    document.getElementById("arcs").style.marginTop = "274px";
    document.getElementById("arcs").style.marginLeft = "9px";
    document.querySelector('.arrow4').style.left = '331px';
    document.querySelector('.arrow4').style.top = '378px';
    document.querySelector('.arrow4').style.marginLeft = '121px';
    document.querySelector('.arrow4').style.width = '95px';
    document.querySelector('.line4').style.width = '65px';
    document.querySelector('.point4').style.marginRight = '151px';
    document.querySelector('.arrow4').style.transform = 'rotate(35deg)';
    document.querySelector('.line5').style.marginLeft = '-277px';
    document.querySelector('.line5').style.marginTop = '0px';
    document.querySelector('.line5').style.width = '108px';
    document.querySelector('.arrow5').style.top = '258px';
    document.querySelector('.arrow5').style.transform = 'rotate(-58deg)';
    document.querySelector('.line6').style.marginLeft = '-122px';
    document.querySelector('.line6').style.marginTop = '46px';
    document.querySelector('.line6').style.width = '77px';
    document.querySelector('.arrow6').style.transform = 'rotate(35deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-55deg)';
    document.querySelector('.arrow7').style.top = '133px';
    document.querySelector('.line7').style.marginLeft = '-368px';
    document.querySelector('.line7').style.width = '96px';
    document.querySelector('.point7').style.marginRight = '334px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '133px';
        document.querySelector('.line7').style.marginLeft = '-368px';
        document.querySelector('.line7').style.width = '96px';
        document.querySelector('.arrow7').style.marginLeft = '53px';
        document.querySelector('.arrow7').style.left = '53%';
      } else {
        // Safari
        document.querySelector('.arrow7').style.top = '330px';
        document.querySelector('.arrow7').style.marginLeft = '42px';
        document.querySelector('.line7').style.marginLeft = '-349px';
        document.querySelector('.line7').style.width = '103px';
        document.querySelector('.point7').style.marginLeft = '0px';
        document.querySelector('.arrow7').style.left = '33%';
      }
    }
    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }
    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "409px";
      document.querySelector(".line3").style.width = "106px";
      document.querySelector(".point3").style.marginRight = "137px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-19px";
      document.querySelector(".arrow3").style.transform = "rotate(487deg)";
      document.querySelector(".arrow3").style.marginLeft = "4px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "63px";
      document.querySelector(".point3").style.marginRight = "169px";
      document.querySelector(".arrow3").style.transform = "rotate(487deg)";
      document.querySelector(".arrow3").style.marginLeft = "4px";
      document.querySelector(".arrow3").style.top = "407px";
      document.querySelector(".arrow3 span").style.transform = "rotate(230deg)";
      document.querySelector(".arrow3 span").style.left = "-41px";
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".line3").style.marginLeft = "-135px";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.width = "33px";
      document.querySelector(".point3").style.marginRight = "203px";
      document.querySelector(".line3").style.marginLeft = "-141px";
      document.querySelector(".arrow3").style.transform = "rotate(488deg)";
      document.querySelector(".arrow3").style.left = "43.2%";
      document.querySelector(".arrow3").style.top = "407px";
      document.querySelector(".arrow3").style.marginLeft = "-18px";
      document.querySelector(".arrow3 span").style.transform = "rotate(230deg)";
      document.querySelector(".arrow3 span").style.left = "-83px";
    }

  }
  else if (mass == 2 && angle == 60) {
    document.getElementById('box').src = './images/Box-2.png';
    document.querySelector(".line1").style.width = "74px";
    document.querySelector(".point1").style.marginRight = "164px";
    document.querySelector(".arrow1 span").style.left = "-48px";
    document.querySelector(".arrow1 span").style.transform = "rotate(150deg)";
    document.querySelector(".frac-line").style.width = "30px";
    document.querySelector(".frac-point").style.marginRight = "200px";
    document.querySelector(".frac-arrow span").style.left = "-85px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(60deg)";
    document.querySelector(".arrow2").style.left = "355px";
    document.querySelector(".arrow2").style.top = "293px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-60deg)";
    document.getElementById("arcs").style.marginTop = "269px";
    document.getElementById("arcs").style.marginLeft = "9px";
    document.querySelector(".arrow4 span").style.left = "-121px";
    document.querySelector(".arrow4 span").style.transform = "rotate(318deg)";
    document.querySelector('.arrow4').style.left = '342px';
    document.querySelector('.arrow4').style.top = '372px';
    document.querySelector('.arrow4').style.marginLeft = '121px';
    document.querySelector('.arrow4').style.width = '95px';
    document.querySelector('.line4').style.width = '57px';
    document.querySelector('.point4').style.marginRight = '164px';
    document.querySelector('.arrow4').style.transform = 'rotate(32deg)';
    document.querySelector('.line5').style.marginLeft = '-288px';
    document.querySelector('.line5').style.marginTop = '0px';
    document.querySelector('.line5').style.width = '119px';
    document.querySelector('.arrow5').style.top = '248px';
    document.querySelector('.arrow5').style.transform = 'rotate(-60deg)';
    document.querySelector('.line6').style.marginLeft = '-114px';
    document.querySelector('.line6').style.marginTop = '36px';
    document.querySelector('.line6').style.width = '69px';
    document.querySelector('.arrow6').style.transform = 'rotate(31deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-59deg)';
    document.querySelector('.arrow7').style.top = '103px';
    document.querySelector('.line7').style.marginLeft = '-421px';
    document.querySelector('.line7').style.width = '106px';
    document.querySelector('.point7').style.marginRight = '362px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '103px';
        document.querySelector('.line7').style.marginLeft = '-421px';
        document.querySelector('.line7').style.width = '106px';
        document.querySelector('.arrow7').style.marginLeft = '53px';
        document.querySelector('.arrow7').style.left = '53%';
      } else {
        // Safari
        document.querySelector('.arrow7').style.top = '208px';
        document.querySelector('.arrow7').style.marginLeft = '119px';
        document.querySelector('.line7').style.marginLeft = '-507px';
        document.querySelector('.line7').style.width = '107px';
        document.querySelector('.point7').style.marginLeft = '-156px';
        document.querySelector('.arrow7').style.marginLeft = '119px';
        document.querySelector('.arrow7').style.left = '33%';
      }
    }
    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }
    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "410px";
      document.querySelector(".arrow3").style.left = "40.2%";
      document.querySelector(".line3").style.width = "109px";
      document.querySelector(".point3").style.marginRight = "131px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-19px";
      document.querySelector(".arrow3").style.transform = "rotate(482deg)";
      document.querySelector(".arrow3").style.marginLeft = "14px";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "85px";
      document.querySelector(".line3").style.marginLeft = "-130px";
      document.querySelector(".point3").style.marginRight = "150px";
      document.querySelector(".arrow3").style.transform = "rotate(482deg)";
      document.querySelector(".arrow3").style.marginLeft = "16px";
      document.querySelector(".arrow3").style.top = "403px";
      document.querySelector(".arrow3 span").style.transform = "rotate(230deg)";
      document.querySelector(".arrow3 span").style.left = "-37px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.width = "71px";
      document.querySelector(".point3").style.marginRight = "165px";
      document.querySelector(".arrow3").style.transform = "rotate(481deg)";
      document.querySelector(".arrow3").style.marginLeft = "1px";
      document.querySelector(".arrow3").style.left = "42.2%";
      document.querySelector(".arrow3").style.top = "413px";
      document.querySelector(".arrow3 span").style.transform = "rotate(551deg)";
      document.querySelector(".arrow3 span").style.left = "-47px";

    }
  }
}

function mass3() {
  if (mass == 3 && angle == 0) {
    document.getElementById('box').src = './images/Box-3.png';
    document.querySelector(".line1").style.width = "195px";
    document.querySelector(".point1").style.marginRight = "35px";
    document.querySelector(".arrow1 span").style.left = "77px";
    document.querySelector(".arrow1 span").style.transform = "rotate(90deg)";
    document.querySelector(".frac-line").style.display = "none";
    document.querySelector(".frac-point").style.display = "none";
    document.querySelector(".frac-arrow span").style.display = "none";
    document.querySelector(".arrow2").style.left = "328px";
    document.querySelector(".arrow2").style.top = "337px";
    document.querySelector(".surface-container").style.transform =
      "rotate(0deg)";
    document.querySelector(".line2").style.width = "185px";
    document.querySelector(".point2").style.marginRight = "44px";
    document.querySelector(".arrow2 span").style.left = "68px";
    document.querySelector(".arrow3").style.display = "none";
    document.getElementById("axis3").style.display = "none";
    document.getElementById("axis4").style.display = "none";
    document.getElementById("axis5").style.display = "none";
    document.getElementById("axis6").style.display = "none";
  }
  else if (mass == 3 && angle == 5) {
    if (chechboxCheckedWeight) {
      document.getElementById("axis3").style.display = "block";
      document.getElementById("axis4").style.display = "block";
      document.getElementById("axis5").style.display = "block";
      document.getElementById("axis6").style.display = "block";
    }

    document.getElementById('box').src = './images/Box-3.png';
    document.querySelector(".frac-line").style.display = "block";
    document.querySelector(".frac-point").style.display = "block";
    document.querySelector(".frac-arrow span").style.display = "block";
    document.querySelector(".line1").style.width = "190px";
    document.querySelector(".point1").style.marginRight = "40px";
    document.querySelector(".arrow1 span").style.left = "72px";
    document.querySelector(".arrow1 span").style.transform = "rotate(100deg)";
    document.querySelector(".frac-line").style.width = "15px";
    document.querySelector(".frac-point").style.marginRight = "213px";
    document.querySelector(".frac-arrow span").style.left = "-101px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(5deg)";
    document.querySelector(".arrow2").style.left = "333px";
    document.querySelector(".arrow2").style.top = "332px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-5deg)";
    document.querySelector(".line2").style.width = "185px";
    document.querySelector(".point2").style.marginRight = "44px";
    document.querySelector(".arrow2 span").style.left = "68px";
    document.querySelector('.arrow4').style.top = '499px';
    document.querySelector('.arrow4').style.marginLeft = '-29px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '178px';
    document.querySelector('.point4').style.marginRight = '45px';
    document.querySelector('.arrow4').style.transform = 'rotate(82deg)';
    document.querySelector('.arrow4 span').style.top = '21px';
    document.querySelector(".arrow4 span").style.left = "-88px";
    document.querySelector(".arrow4 span").style.transform = "rotate(290deg)";
    document.querySelector('.line5').style.marginLeft = '-268px';
    document.querySelector('.line5').style.marginTop = '0px';
    document.querySelector('.line5').style.width = '33px';
    document.querySelector('.arrow5').style.top = '437px';
    document.querySelector('.arrow5').style.transform = 'rotate(-34deg)';
    document.querySelector('.line6').style.marginLeft = '-189px';
    document.querySelector('.line6').style.marginTop = '214px';
    document.querySelector('.line6').style.width = '193px';
    document.getElementById("arcs").style.marginLeft = "-16px";
    document.getElementById("arcs").style.marginTop = "323px";
    document.getElementById("arcs").style.minWidth = "0.5em";
    document.querySelector('.arrow6').style.transform = 'rotate(81deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(0deg)';
    document.querySelector('.arrow7').style.top = '317px';
    document.querySelector('.arrow7').style.marginLeft = '96px';
    document.querySelector('.arrow7').style.left = '53%';
    document.querySelector('.line7').style.marginLeft = '-246px';
    document.querySelector('.line7').style.width = '16px';
    document.querySelector('.point7').style.marginRight = '230px';
    document.querySelector(".arrow3").style.display = "none";

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '317px';
        document.querySelector('.arrow7').style.marginLeft = '96px';
        document.querySelector('.arrow7').style.left = '53%';
        document.querySelector('.line7').style.marginLeft = '-246px';
        document.querySelector('.line7').style.width = '16px';
        document.querySelector('.point7').style.marginRight = '230px';
        document.querySelector(".arrow3").style.display = "none";
      } else {
        document.querySelector('.arrow7').style.top = '317px';
        document.querySelector('.arrow7').style.marginLeft = '96px';
        document.querySelector('.arrow7').style.left = '31%';
        document.querySelector('.line7').style.marginLeft = '-307px';
        document.querySelector('.line7').style.width = '16px';
        document.querySelector('.point7').style.marginRight = '230px';
        document.querySelector(".arrow3").style.display = "none";
      }
    }

    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block";
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      }
      document.querySelector(".arrow3").style.top = "337px";
      document.querySelector(".line3").style.width = "13px";
      document.querySelector(".point3").style.marginRight = "216px";
      document.querySelector(".arrow3 span").style.transform = "rotate(182deg)";
      document.querySelector(".arrow3 span").style.left = "-94px";
      document.querySelector(".arrow3").style.transform = "rotate(537deg)";
      document.querySelector(".arrow3").style.marginLeft = "-71px";
    }
  }
  else if (mass == 3 && angle == 10) {
    document.getElementById('box').src = './images/Box-3.png';
    document.querySelector(".line1").style.width = "185px";
    document.querySelector(".point1").style.marginRight = "45px";
    document.querySelector(".arrow1 span").style.left = "67px";
    document.querySelector(".arrow1 span").style.transform = "rotate(105deg)";
    document.querySelector(".frac-line").style.width = "39px";
    document.querySelector(".frac-point").style.marginRight = "189px";
    document.querySelector(".frac-arrow span").style.left = "-77px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(10deg)";
    document.querySelector(".arrow2").style.left = "339px";
    document.querySelector(".arrow2").style.top = "327px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-10deg)";
    document.querySelector(".line2").style.width = "185px";
    document.querySelector(".point2").style.marginRight = "44px";
    document.querySelector(".arrow2 span").style.left = "68px";
    document.querySelector('.arrow4').style.top = '481px';
    document.querySelector('.arrow4').style.marginLeft = '-12px';
    document.querySelector('.arrow4').style.width = '95px';
    document.querySelector('.line4').style.width = '205px';
    document.querySelector('.point4').style.marginRight = '18px';
    document.querySelector('.arrow4 span').style.top = '21px';
    document.querySelector(".arrow4 span").style.left = "-88px";
    document.querySelector(".arrow4 span").style.transform = "rotate(290deg)";
    document.getElementById("arcs").style.marginLeft = "-10px";
    document.getElementById("arcs").style.marginTop = "314px";
    document.getElementById("arcs").style.minWidth = "0.5em";
    document.querySelector('.arrow4').style.transform = 'rotate(77deg)';
    document.querySelector('.line5').style.marginLeft = '-190px';
    document.querySelector('.line5').style.marginTop = '-12px';
    document.querySelector('.line5').style.width = '40px';
    document.querySelector('.arrow5').style.top = '497px';
    document.querySelector('.arrow5').style.transform = 'rotate(-10deg)';
    document.querySelector('.line6').style.marginLeft = '-196px';
    document.querySelector('.line6').style.marginTop = '199px';
    document.querySelector('.line6').style.width = '207px';
    document.querySelector('.arrow6').style.transform = 'rotate(77deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-10deg)';
    document.querySelector('.arrow7').style.top = '276px';
    document.querySelector('.arrow7').style.marginLeft = '94px';
    document.querySelector('.arrow7').style.left = '53%';
    document.querySelector('.line7').style.marginLeft = '-260px';
    document.querySelector('.line7').style.width = '36px';
    document.querySelector('.point7').style.marginRight = '242px';
    document.querySelector(".arrow3").style.display = "none";

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '276px';
        document.querySelector('.arrow7').style.marginLeft = '94px';
        document.querySelector('.arrow7').style.left = '53%';
        document.querySelector('.line7').style.marginLeft = '-260px';
        document.querySelector('.line7').style.width = '36px';
        document.querySelector('.point7').style.marginRight = '242px';
        document.querySelector(".arrow3").style.display = "none";

      } else {
        document.querySelector('.arrow7').style.top = '301px';
        document.querySelector('.arrow7').style.marginLeft = '94px';
        document.querySelector('.arrow7').style.left = '29%';
        document.querySelector('.line7').style.marginLeft = '-303px';
        document.querySelector('.line7').style.width = '36px';
        document.querySelector('.point7').style.marginRight = '242px';
        document.querySelector(".arrow3").style.display = "none";
      }
    }
    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block";
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      }
      document.querySelector(".arrow3").style.top = "342px";
      document.querySelector(".line3").style.width = "30px";
      document.querySelector(".point3").style.marginRight = "202px";
      document.querySelector(".arrow3 span").style.transform = "rotate(181deg)";
      document.querySelector(".arrow3 span").style.left = "-80px";
      document.querySelector(".arrow3").style.transform = "rotate(170deg)";
      document.querySelector(".arrow3").style.marginLeft = "-66px";
    }
  }
  else if (mass == 3 && angle == 15) {
    document.getElementById('box').src = './images/Box-3.png';
    document.querySelector(".line1").style.width = "180px";
    document.querySelector(".point1").style.marginRight = "50px";
    document.querySelector(".arrow1 span").style.left = "62px";
    document.querySelector(".arrow1 span").style.transform = "rotate(110deg)";
    document.querySelector(".frac-line").style.width = "52px";
    document.querySelector(".frac-point").style.marginRight = "176px";
    document.querySelector(".frac-arrow span").style.left = "-61px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(15deg)";
    document.querySelector(".arrow2").style.left = "343px";
    document.querySelector(".arrow2").style.top = "322px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-15deg)";
    document.querySelector('.arrow4 span').style.top = '24px';
    document.querySelector(".arrow4 span").style.left = "-88px";
    document.querySelector(".arrow4 span").style.transform = "rotate(290deg)";
    document.querySelector(".line2").style.width = "185px";
    document.querySelector(".point2").style.marginRight = "44px";
    document.querySelector(".arrow2 span").style.left = "68px";
    document.querySelector('.arrow4').style.top = '479px';
    document.querySelector('.arrow4').style.marginLeft = '13px';
    document.querySelector('.arrow4').style.width = '120px';
    document.querySelector('.line4').style.width = '182px';
    document.querySelector('.point4').style.marginRight = '58px';
    document.getElementById("arcs").style.marginLeft = "-2px";
    document.getElementById("arcs").style.marginTop = "317px";
    document.getElementById("arcs").style.minWidth = "0.5em";
    document.querySelector('.arrow4').style.transform = 'rotate(67deg)';
    document.querySelector('.line5').style.marginLeft = '-168px';
    document.querySelector('.line5').style.marginTop = '25px';
    document.querySelector('.line5').style.width = '78px';
    document.querySelector('.arrow5').style.top = '459px';
    document.querySelector('.arrow5').style.transform = 'rotate(-20deg)';
    document.querySelector('.line6').style.marginLeft = '-195px';
    document.querySelector('.line6').style.marginTop = '178px';
    document.querySelector('.line6').style.width = '195px';
    document.querySelector('.arrow6').style.transform = 'rotate(67deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-20deg)';
    document.querySelector('.arrow7').style.top = '252px';
    document.querySelector('.arrow7').style.marginLeft = '56px';
    document.querySelector('.arrow7').style.left = '56%';
    document.querySelector('.line7').style.marginLeft = '-259px';
    document.querySelector('.line7').style.width = '62px';
    document.querySelector('.point7').style.marginRight = '262px';
    document.querySelector(".arrow3").style.display = "none";

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '252px';
        document.querySelector('.arrow7').style.marginLeft = '56px';
        document.querySelector('.arrow7').style.left = '56%';
        document.querySelector('.line7').style.marginLeft = '-259px';
        document.querySelector('.line7').style.width = '62px';
        document.querySelector('.point7').style.marginRight = '262px';
        document.querySelector(".arrow3").style.display = "none";

      } else {
        document.querySelector('.arrow7').style.top = '312px';
        document.querySelector('.arrow7').style.marginLeft = '56px';
        document.querySelector('.arrow7').style.left = '31%';
        document.querySelector('.line7').style.marginLeft = '-289px';
        document.querySelector('.line7').style.width = '62px';
        document.querySelector('.point7').style.marginRight = '262px';
        document.querySelector(".arrow3").style.display = "none";
        document.querySelector('.point7').style.marginLeft = '0px';
      }
    }

    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block";
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      }
      document.querySelector(".arrow3").style.top = "364px";
      document.querySelector(".line3").style.width = "59px";
      document.querySelector(".point3").style.marginRight = "171px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-55px";
      document.querySelector(".arrow3").style.transform = "rotate(520deg)";
      document.querySelector(".arrow3").style.marginLeft = "-57px";
    }
  }
  else if (mass == 3 && angle == 20) {
    document.getElementById('box').src = './images/Box-3.png';
    document.querySelector(".line1").style.width = "175px";
    document.querySelector(".point1").style.marginRight = "55px";
    document.querySelector(".arrow1 span").style.left = "57px";
    document.querySelector(".arrow1 span").style.transform = "rotate(115deg)";
    document.querySelector(".frac-line").style.width = "81px";
    document.querySelector(".frac-point").style.marginRight = "152px";
    document.querySelector(".frac-arrow span").style.left = "-37px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(20deg)";
    document.querySelector(".arrow2").style.left = "346px";
    document.querySelector(".arrow2").style.top = "317px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-20deg)";
    document.querySelector('.arrow4 span').style.top = '26px';
    document.querySelector(".arrow4 span").style.left = "-88px";
    document.querySelector(".arrow4 span").style.transform = "rotate(290deg)";
    document.querySelector(".line2").style.width = "185px";
    document.querySelector(".point2").style.marginRight = "44px";
    document.querySelector(".arrow2 span").style.left = "68px";
    document.querySelector('.arrow4').style.top = '467px';
    document.querySelector('.arrow4').style.marginLeft = '30px';
    document.querySelector('.arrow4').style.width = '95px';
    document.querySelector('.line4').style.width = '160px';
    document.querySelector('.point4').style.marginRight = '58px';
    document.getElementById("arcs").style.marginLeft = "0px";
    document.getElementById("arcs").style.marginTop = "314px";
    document.getElementById("arcs").style.minWidth = "0.5em";
    document.querySelector('.arrow4').style.transform = 'rotate(65deg)';
    document.querySelector('.line5').style.marginLeft = '-174px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '85px';
    document.querySelector('.arrow5').style.top = '441px';
    document.querySelector('.arrow5').style.transform = 'rotate(-30deg)';
    document.querySelector('.line6').style.marginLeft = '-178px';
    document.querySelector('.line6').style.marginTop = '173px';
    document.querySelector('.line6').style.width = '170px';
    document.querySelector('.arrow6').style.transform = 'rotate(65deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-30deg)';
    document.querySelector('.arrow7').style.top = '231px';
    document.querySelector('.arrow7').style.marginLeft = '67px';
    document.querySelector('.arrow7').style.left = '53%';
    document.querySelector('.line7').style.marginLeft = '-268px';
    document.querySelector('.line7').style.width = '71px';
    document.querySelector('.point7').style.marginRight = '269px';
    document.querySelector(".arrow3").style.display = "none";

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '231px';
        document.querySelector('.arrow7').style.marginLeft = '67px';
        document.querySelector('.arrow7').style.left = '53%';
        document.querySelector('.line7').style.marginLeft = '-268px';
        document.querySelector('.line7').style.width = '71px';
        document.querySelector('.point7').style.marginRight = '269px';
        document.querySelector(".arrow3").style.display = "none";
      } else {
        document.querySelector('.arrow7').style.top = '320px';
        document.querySelector('.arrow7').style.marginLeft = '67px';
        document.querySelector('.arrow7').style.left = '28%';
        document.querySelector('.line7').style.marginLeft = '-289px';
        document.querySelector('.line7').style.width = '71px';
        document.querySelector('.point7').style.marginRight = '269px';
        document.querySelector(".arrow3").style.display = "none";
      }
    }

    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block";
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      }
      document.querySelector(".arrow3").style.top = "384px";
      document.querySelector(".line3").style.width = "68px";
      document.querySelector(".point3").style.marginRight = "160px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-32px";
      document.querySelector(".arrow3").style.transform = "rotate(511deg)";
      document.querySelector(".arrow3").style.marginLeft = "-42px";
    }

  }
  else if (mass == 3 && angle == 25) {
    document.getElementById('box').src = './images/Box-3.png';
    document.querySelector(".line1").style.width = "170px";
    document.querySelector(".point1").style.marginRight = "60px";
    document.querySelector(".arrow1 span").style.left = "54px";
    document.querySelector(".arrow1 span").style.transform = "rotate(120deg)";
    document.querySelector(".frac-line").style.width = "108px";
    document.querySelector(".frac-point").style.marginRight = "120px";
    document.querySelector(".frac-arrow span").style.left = "-5px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(25deg)";
    document.querySelector(".arrow2").style.left = "346px";
    document.querySelector(".arrow2").style.top = "312px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-25deg)";
    document.querySelector('.arrow4 span').style.top = '31px';
    document.querySelector(".arrow4 span").style.left = "-88px";
    document.querySelector(".arrow4 span").style.transform = "rotate(290deg)";
    document.getElementById("arcs").style.marginLeft = "-2px";
    document.getElementById("arcs").style.marginTop = "296px";
    document.getElementById("arcs").style.minWidth = "1.5em";
    document.querySelector(".arrow3").style.display = "none";
    document.querySelector(".line2").style.width = "185px";
    document.querySelector(".point2").style.marginRight = "44px";
    document.querySelector(".arrow2 span").style.left = "68px";
    document.querySelector('.arrow4').style.top = '452px';
    document.querySelector('.arrow4').style.marginLeft = '46px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.arrow4').style.left = '341px';
    document.querySelector('.line4').style.width = '160px';
    document.querySelector('.point4').style.marginRight = '58px';
    document.querySelector('.arrow4').style.transform = 'rotate(60deg)';
    document.querySelector('.line5').style.marginLeft = '-166px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '96px';
    document.querySelector('.arrow5').style.top = '430px';
    document.querySelector('.arrow5').style.transform = 'rotate(-33deg)';
    document.querySelector('.line6').style.marginLeft = '-184px';
    document.querySelector('.line6').style.marginTop = '160px';
    document.querySelector('.line6').style.width = '170px';
    document.querySelector('.arrow6').style.transform = 'rotate(60deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-30deg)';
    document.querySelector('.arrow7').style.top = '227px';
    document.querySelector('.arrow7').style.marginLeft = '64px';
    document.querySelector('.arrow7').style.left = '53%';
    document.querySelector('.line7').style.marginLeft = '-274px';
    document.querySelector('.line7').style.width = '81px';
    document.querySelector('.point7').style.marginRight = '280px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '227px';
        document.querySelector('.arrow7').style.marginLeft = '64px';
        document.querySelector('.arrow7').style.left = '53%';
        document.querySelector('.line7').style.marginLeft = '-274px';
        document.querySelector('.line7').style.width = '81px';
        document.querySelector('.point7').style.marginRight = '280px';
      } else {
        document.querySelector('.arrow7').style.top = '327px';
        document.querySelector('.arrow7').style.marginLeft = '68px';
        document.querySelector('.arrow7').style.left = '27%';
        document.querySelector('.line7').style.marginLeft = '-287px';
        document.querySelector('.line7').style.width = '81px';
        document.querySelector('.point7').style.marginRight = '280px';
      }
    }
    if (sufId == "surf_1") {
      if(chechboxCheckedForce){
        document.querySelector(".arrow3").style.display = "block";
      }
      else{
        document.querySelector(".arrow3").style.display = "none";
      }
      document.querySelector(".arrow3").style.top = "379px";
      document.querySelector(".line3").style.width = "83px";
      document.querySelector(".point3").style.marginRight = "146px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-32px";
      document.querySelector(".arrow3").style.transform = "rotate(511deg)";
      document.querySelector(".arrow3").style.marginLeft = "-42px";
    }

  }
  else if (mass == 3 && angle == 30) {
    document.getElementById('box').src = './images/Box-3.png';
    document.querySelector(".line1").style.width = "170px";
    document.querySelector(".point1").style.marginRight = "60px";
    document.querySelector(".arrow1 span").style.left = "52px";
    document.querySelector(".arrow1 span").style.transform = "rotate(120deg)";
    document.querySelector(".frac-line").style.width = "108px";
    document.querySelector(".frac-point").style.marginRight = "120px";
    document.querySelector(".frac-arrow span").style.left = "-5px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(30deg)";
    document.querySelector(".arrow2").style.left = "346px";
    document.querySelector(".arrow2").style.top = "312px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-30deg)";
    document.getElementById("arcs").style.marginLeft = "-1px";
    document.getElementById("arcs").style.marginTop = "296px";

    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }
    document.querySelector('.arrow4').style.top = '453px';
    document.querySelector(".arrow4 span").style.left = "-88px";
    document.querySelector(".arrow4 span").style.transform = "rotate(290deg)";
    document.querySelector(".line2").style.width = "185px";
    document.querySelector(".point2").style.marginRight = "44px";
    document.querySelector(".arrow2 span").style.left = "68px";
    document.querySelector('.arrow4').style.top = '453px';
    document.querySelector('.arrow4').style.marginLeft = '49px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '160px';
    document.querySelector('.point4').style.marginRight = '58px';
    document.querySelector('.arrow4').style.transform = 'rotate(60deg)';
    document.querySelector('.line5').style.marginLeft = '-154px';
    document.querySelector('.line5').style.marginTop = '-9px';
    document.querySelector('.line5').style.width = '101px';
    document.querySelector('.arrow5').style.top = '437px';
    document.querySelector('.arrow5').style.transform = 'rotate(-30deg)';
    document.querySelector('.line6').style.marginLeft = '-184px';
    document.querySelector('.line6').style.marginTop = '160px';
    document.querySelector('.line6').style.width = '170px';
    document.querySelector('.arrow6').style.transform = 'rotate(60deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-30deg)';
    document.querySelector('.arrow7').style.top = '219px';
    document.querySelector('.arrow7').style.marginLeft = '57px';
    document.querySelector('.arrow7').style.left = '56%';
    document.querySelector('.line7').style.marginLeft = '-306px';
    document.querySelector('.line7').style.width = '96px';
    document.querySelector('.point7').style.marginRight = '296px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '219px';
        document.querySelector('.arrow7').style.marginLeft = '57px';
        document.querySelector('.arrow7').style.left = '56%';
        document.querySelector('.line7').style.marginLeft = '-306px';
        document.querySelector('.line7').style.width = '96px';
        document.querySelector('.point7').style.marginRight = '296px';
      } else {
        document.querySelector('.arrow7').style.top = '321px';
        document.querySelector('.arrow7').style.marginLeft = '57px';
        document.querySelector('.arrow7').style.left = '28%';
        document.querySelector('.line7').style.marginLeft = '-306px';
        document.querySelector('.line7').style.width = '96px';
        document.querySelector('.point7').style.marginRight = '296px';
      }
    }

    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "379px";
      document.querySelector(".line3").style.width = "83px";
      document.querySelector(".point3").style.marginRight = "146px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-32px";
      document.querySelector(".arrow3").style.transform = "rotate(511deg)";
      document.querySelector(".arrow3").style.marginLeft = "-43px";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "12px";
      document.querySelector(".point3").style.marginRight = "226px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-116px";
      document.querySelector(".arrow3").style.top = "367px";
      document.querySelector(".arrow3").style.transform = "rotate(516deg)";
      document.querySelector(".arrow3").style.marginLeft = "-45px";
    }

    if (sufId == "surf_3") {
      document.querySelector(".line3").style.display = "none";
      document.querySelector(".point3").style.display = "none";
      document.querySelector(".arrow3 span").style.display = "none";
    }
  }
  else if (mass == 3 && angle == 35) {
    document.getElementById('box').src = './images/Box-3.png';
    document.querySelector(".line1").style.width = "165px";
    document.querySelector(".point1").style.marginRight = "65px";
    document.querySelector(".arrow1 span").style.left = "50px";
    document.querySelector(".arrow1 span").style.transform = "rotate(125deg)";
    document.querySelector(".frac-line").style.width = "98px";
    document.querySelector(".frac-point").style.marginRight = "130px";
    document.querySelector(".frac-arrow span").style.left = "-13px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(35deg)";
    document.querySelector(".arrow2").style.left = "346px";
    document.querySelector(".arrow2").style.top = "307px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-35deg)";
    document.querySelector('.arrow4').style.left = '339px';
    document.querySelector(".arrow4 span").style.left = "-101px";
    document.getElementById("arcs").style.marginLeft = "1px";
    document.getElementById("arcs").style.marginTop = "292px";
    document.querySelector(".line2").style.width = "185px";
    document.querySelector(".point2").style.marginRight = "44px";
    document.querySelector(".arrow2 span").style.left = "68px";
    document.querySelector('.arrow4').style.top = '446px';
    document.querySelector('.arrow4').style.marginLeft = '56px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '160px';
    document.querySelector('.point4').style.marginRight = '58px';
    document.querySelector('.arrow4').style.transform = 'rotate(59deg)';
    document.querySelector('.line5').style.marginLeft = '-157px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '106px';
    document.querySelector('.arrow5').style.top = '429px';
    document.querySelector('.arrow5').style.transform = 'rotate(-33deg)';
    document.querySelector('.line6').style.marginLeft = '-184px';
    document.querySelector('.line6').style.marginTop = '160px';
    document.querySelector('.line6').style.width = '170px';
    document.querySelector('.arrow6').style.transform = 'rotate(60deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-32deg)';
    document.querySelector('.arrow7').style.top = '206px';
    document.querySelector('.arrow7').style.marginLeft = '80px';
    document.querySelector('.arrow7').style.left = '53%';
    document.querySelector('.line7').style.marginLeft = '-321px';
    document.querySelector('.line7').style.width = '92px';
    document.querySelector('.point7').style.marginRight = '306px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '206px';
        document.querySelector('.arrow7').style.marginLeft = '80px';
        document.querySelector('.arrow7').style.left = '53%';
      } else {
        document.querySelector('.arrow7').style.top = '319px';
        document.querySelector('.arrow7').style.marginLeft = '80px';
        document.querySelector('.arrow7').style.left = '25%';
      }
    }

    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }

    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "376px";
      document.querySelector(".line3").style.width = "100px";
      document.querySelector(".point3").style.marginRight = "139px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-25px";
      document.querySelector(".arrow3").style.transform = "rotate(509deg)";
      document.querySelector(".arrow3").style.marginLeft = "-36px";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "32px";
      document.querySelector(".point3").style.marginRight = "205px";
      document.querySelector(".arrow3").style.transform = "rotate(506deg)";
      document.querySelector(".arrow3").style.marginLeft = "-34px";
      document.querySelector(".arrow3").style.top = "381px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-91px";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.display = "none";
      document.querySelector(".point3").style.display = "none";
      document.querySelector(".arrow3 span").style.display = "none";
    }

  }
  else if (mass == 3 && angle == 40) {
    document.getElementById('box').src = './images/Box-3.png';
    document.querySelector(".line1").style.width = "150px";
    document.querySelector(".point1").style.marginRight = "80px";
    document.querySelector(".arrow1 span").style.left = "33px";
    document.querySelector(".arrow1 span").style.transform = "rotate(130deg)";
    document.querySelector(".frac-line").style.width = "88px";
    document.querySelector(".frac-point").style.marginRight = "140px";
    document.querySelector(".frac-arrow span").style.left = "-21px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(40deg)";
    document.querySelector(".arrow2").style.left = "346px";
    document.querySelector(".arrow2").style.top = "302px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-40deg)";
    document.querySelector(".line2").style.width = "185px";
    document.querySelector(".point2").style.marginRight = "44px";
    document.querySelector(".arrow2 span").style.left = "68px";
    document.querySelector('.arrow4').style.left = '338px';
    document.querySelector(".arrow4 span").style.left = "-88px";
    document.getElementById("arcs").style.marginLeft = "-1px";
    document.getElementById("arcs").style.marginTop = "285px";
    document.querySelector('.arrow4').style.top = '431px';
    document.querySelector('.arrow4').style.marginLeft = '56px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '160px';
    document.querySelector('.point4').style.marginRight = '58px';
    document.querySelector('.arrow4').style.transform = 'rotate(57deg)';
    document.querySelector('.line5').style.marginLeft = '-166px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '104px';
    document.querySelector('.arrow5').style.top = '410px';
    document.querySelector('.arrow5').style.transform = 'rotate(-39deg)';
    document.querySelector('.line6').style.marginLeft = '-179px';
    document.querySelector('.line6').style.marginTop = '148px';
    document.querySelector('.line6').style.width = '170px';
    document.querySelector('.arrow6').style.transform = 'rotate(57deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-37deg)';
    document.querySelector('.arrow7').style.top = '190px';
    document.querySelector('.arrow7').style.marginLeft = '69px';
    document.querySelector('.arrow7').style.left = '53%';
    document.querySelector('.line7').style.marginLeft = '-331px';
    document.querySelector('.line7').style.width = '106px';
    document.querySelector('.point7').style.marginRight = '309px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '190px';
        document.querySelector('.arrow7').style.marginLeft = '69px';
        document.querySelector('.arrow7').style.left = '53%';
        document.querySelector('.line7').style.marginLeft = '-331px';
        document.querySelector('.line7').style.width = '106px';
      } else {
        document.querySelector('.arrow7').style.top = '322px';
        document.querySelector('.arrow7').style.marginLeft = '69px';
        document.querySelector('.arrow7').style.left = '26%';
        document.querySelector('.line7').style.marginLeft = '-313px';
        document.querySelector('.line7').style.width = '91px';
        document.querySelector('.point7').style.marginLeft = '0px';
      }
    }

    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }
    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "382px";
      document.querySelector(".line3").style.width = "100px";
      document.querySelector(".point3").style.marginRight = "135px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-20px";
      document.querySelector(".arrow3").style.transform = "rotate(503deg)";
      document.querySelector(".arrow3").style.marginLeft = "-31px";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "55px";
      document.querySelector(".point3").style.marginRight = "183px";
      document.querySelector(".arrow3").style.transform = "rotate(502deg)";
      document.querySelector(".arrow3").style.marginLeft = "-30px";
      document.querySelector(".arrow3").style.top = "383px";
      document.querySelector(".arrow3 span").style.transform = "rotate(207deg)";
      document.querySelector(".arrow3 span").style.left = "-67px";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.display = "block";
      document.querySelector(".point3").style.display = "block";
      document.querySelector(".arrow3 span").style.display = "block";
      document.querySelector(".line3").style.width = "5px";
      document.querySelector(".point3").style.marginRight = "226px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-116px";
      document.querySelector(".arrow3").style.top = "392px";
      document.querySelector(".arrow3").style.transform = "rotate(497deg)";
      document.querySelector(".arrow3").style.marginLeft = "-22px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

  }
  else if (mass == 3 && angle == 45) {
    document.getElementById('box').src = './images/Box-3.png';
    document.querySelector(".line1").style.width = "145px";
    document.querySelector(".point1").style.marginRight = "84px";
    document.querySelector(".arrow1 span").style.left = "29px";
    document.querySelector(".arrow1 span").style.transform = "rotate(135deg)";
    document.querySelector(".frac-line").style.width = "78px";
    document.querySelector(".frac-point").style.marginRight = "150px";
    document.querySelector(".frac-arrow span").style.left = "-29px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(45deg)";
    document.querySelector(".arrow2").style.left = "346px";
    document.querySelector(".arrow2").style.top = "297px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-45deg)";
    document.querySelector('.arrow4').style.left = '339px';
    document.querySelector(".arrow4 span").style.left = "-98px";
    document.querySelector(".arrow4 span").style.top = "39px";
    document.querySelector(".arrow4 span").style.transform = "rotate(313deg)";
    document.getElementById("arcs").style.marginLeft = "2px";
    document.getElementById("arcs").style.marginTop = "282px";
    document.querySelector(".line2").style.width = "208px";
    document.querySelector(".point2").style.marginRight = "20px";
    document.querySelector(".arrow2 span").style.left = "92px";
    document.querySelector('.arrow4').style.top = '408px';
    document.querySelector('.arrow4').style.marginLeft = '86px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '140px';
    document.querySelector('.point4').style.marginRight = '77px';
    document.querySelector('.arrow4').style.transform = 'rotate(46deg)';
    document.querySelector('.line5').style.marginLeft = '-175px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '160px';
    document.querySelector('.arrow5').style.top = '388px';
    document.querySelector('.arrow5').style.transform = 'rotate(-47deg)';
    document.querySelector('.line6').style.marginLeft = '-165px';
    document.querySelector('.line6').style.marginTop = '147px';
    document.querySelector('.line6').style.width = '146px';
    document.querySelector('.arrow6').style.transform = 'rotate(48deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-46deg)';
    document.querySelector('.arrow7').style.top = '144px';
    document.querySelector('.arrow7').style.marginLeft = '126px';
    document.querySelector('.arrow7').style.left = '45%';
    document.querySelector('.line7').style.marginLeft = '-438px';
    document.querySelector('.line7').style.width = '139px';
    document.querySelector('.point7').style.marginRight = '382px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '144px';
        document.querySelector('.arrow7').style.marginLeft = '126px';
        document.querySelector('.arrow7').style.left = '45%';
        document.querySelector('.line7').style.marginLeft = '-438px';
        document.querySelector('.line7').style.width = '139px';
        document.querySelector('.point7').style.marginRight = '382px';
      } else {
        document.querySelector('.arrow7').style.top = '319px';
        document.querySelector('.arrow7').style.marginLeft = '126px';
        document.querySelector('.arrow7').style.left = '19%';
        document.querySelector('.line7').style.marginLeft = '-298px';
        document.querySelector('.line7').style.width = '139px';
        document.querySelector('.point7').style.marginRight = '275px';
        document.querySelector('.point7').style.marginLeft = '-51px';
      }
    }

    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }

    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "393px";
      document.querySelector(".line3").style.width = "136px";
      document.querySelector(".point3").style.marginRight = "95px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "20px";
      document.querySelector(".arrow3").style.transform = "rotate(494deg)";
      document.querySelector(".arrow3").style.marginLeft = "-16px";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "78px";
      document.querySelector(".point3").style.marginRight = "159px";
      document.querySelector(".arrow3").style.transform = "rotate(495deg)";
      document.querySelector(".arrow3").style.marginLeft = "-16px";
      document.querySelector(".arrow3").style.top = "392px";
      document.querySelector(".arrow3 span").style.transform = "rotate(230deg)";
      document.querySelector(".arrow3 span").style.left = "-43px";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.width = "29px";
      document.querySelector(".point3").style.marginRight = "208px";
      document.querySelector(".arrow3").style.transform = "rotate(493deg)";
      document.querySelector(".arrow3").style.marginLeft = "-15px";
      document.querySelector(".arrow3").style.top = "395px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "-96px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

  }
  else if (mass == 3 && angle == 50) {
    document.getElementById('box').src = './images/Box-3.png';
    document.querySelector(".line1").style.width = "145px";
    document.querySelector(".point1").style.marginRight = "84px";
    document.querySelector(".arrow1 span").style.left = "29px";
    document.querySelector(".arrow1 span").style.transform = "rotate(140deg)";
    document.querySelector(".frac-line").style.width = "68px";
    document.querySelector(".frac-point").style.marginRight = "160px";
    document.querySelector(".frac-arrow span").style.left = "-37px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(50deg)";
    document.querySelector(".arrow2").style.left = "346px";
    document.querySelector(".arrow2").style.top = "292px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-50deg)";
    document.getElementById("arcs").style.marginTop = "278px";
    document.getElementById("arcs").style.marginLeft = "2px";
    document.querySelector(".line2").style.width = "207px";
    document.querySelector(".point2").style.marginRight = "22px";
    document.querySelector(".arrow2 span").style.left = "88px";
    document.querySelector('.arrow4').style.top = '408px';
    document.querySelector('.arrow4').style.marginLeft = '86px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '132px';
    document.querySelector('.point4').style.marginRight = '84px';
    document.querySelector(".arrow4 span").style.left = "-98px";
    document.querySelector(".arrow4 span").style.top = "39px";
    document.querySelector(".arrow4 span").style.transform = "rotate(313deg)";
    document.querySelector('.arrow4').style.transform = 'rotate(46deg)';
    document.querySelector('.line5').style.marginLeft = '-175px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '160px';
    document.querySelector('.arrow5').style.top = '388px';
    document.querySelector('.arrow5').style.transform = 'rotate(-47deg)';
    document.querySelector('.line6').style.marginLeft = '-165px';
    document.querySelector('.line6').style.marginTop = '147px';
    document.querySelector('.line6').style.width = '146px';
    document.querySelector('.arrow6').style.transform = 'rotate(48deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-50deg)';
    document.querySelector('.arrow7').style.top = '130px';
    document.querySelector('.arrow7').style.marginLeft = '6px';
    document.querySelector('.arrow7').style.left = '62%';
    document.querySelector('.line7').style.marginLeft = '-438px';
    document.querySelector('.line7').style.width = '139px';
    document.querySelector('.point7').style.marginRight = '387px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '130px';
        document.querySelector('.arrow7').style.marginLeft = '6px';
        document.querySelector('.arrow7').style.left = '62%';
        document.querySelector('.line7').style.marginLeft = '-438px';
        document.querySelector('.line7').style.width = '139px';
        document.querySelector('.point7').style.marginRight = '387px';
      } else {
        document.querySelector('.arrow7').style.top = '317px';
        document.querySelector('.arrow7').style.marginLeft = '6px';
        document.querySelector('.arrow7').style.left = '38%';
        document.querySelector('.line7').style.marginLeft = '-403px';
        document.querySelector('.line7').style.width = '139px';
        document.querySelector('.point7').style.marginRight = '387px';
        document.querySelector('.point7').style.marginLeft = '-51px';
        document.querySelector('.arrow4').style.marginLeft = '100px';
      }
    }
    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }

    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "397px";
      document.querySelector(".line3").style.width = "136px";
      document.querySelector(".point3").style.marginRight = "93px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "22px";
      document.querySelector(".arrow3").style.transform = "rotate(490deg)";
      document.querySelector(".arrow3").style.marginLeft = "-10px";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "99px";
      document.querySelector(".point3").style.marginRight = "138px";
      document.querySelector(".arrow3").style.transform = "rotate(490deg)";
      document.querySelector(".arrow3").style.marginLeft = "-9px";
      document.querySelector(".arrow3").style.top = "396px";
      document.querySelector(".arrow3 span").style.transform = "rotate(230deg)";
      document.querySelector(".arrow3 span").style.left = "-23px";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.width = "46px";
      document.querySelector(".point3").style.marginRight = "183px";
      document.querySelector(".arrow3").style.transform = "rotate(491deg)";
      document.querySelector(".arrow3").style.marginLeft = "-11px";
      document.querySelector(".arrow3").style.top = "395px";
      document.querySelector(".arrow3 span").style.transform = "rotate(230deg)";
      document.querySelector(".arrow3 span").style.left = "-67px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

  }
  else if (mass == 3 && angle == 55) {
    document.getElementById('box').src = './images/Box-3.png';
    document.querySelector(".line1").style.width = "145px";
    document.querySelector(".point1").style.marginRight = "84px";
    document.querySelector(".arrow1 span").style.left = "29px";
    document.querySelector(".arrow1 span").style.transform = "rotate(150deg)";
    document.querySelector(".frac-line").style.width = "58px";
    document.querySelector(".frac-point").style.marginRight = "170px";
    document.querySelector(".frac-arrow span").style.left = "-45px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(55deg)";
    document.querySelector(".arrow2").style.left = "346px";
    document.querySelector(".arrow2").style.top = "287px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-55deg)";
    document.querySelector(".arrow4 span").style.left = "-98px";
    document.querySelector(".arrow4 span").style.top = "39px";
    document.querySelector(".arrow4 span").style.transform = "rotate(313deg)";
    document.getElementById("arcs").style.marginLeft = "1px";
    document.getElementById("arcs").style.marginTop = "273px";
    document.querySelector(".line2").style.width = "207px";
    document.querySelector(".point2").style.marginRight = "22px";
    document.querySelector(".arrow2 span").style.left = "88px";
    document.querySelector('.arrow4').style.top = '380px';
    document.querySelector('.arrow4').style.marginLeft = '99px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '132px';
    document.querySelector('.point4').style.marginRight = '84px';
    document.querySelector('.arrow4').style.transform = 'rotate(37deg)';
    document.querySelector('.line5').style.marginLeft = '-196px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '174px';
    document.querySelector('.arrow5').style.top = '361px';
    document.querySelector('.arrow5').style.transform = 'rotate(-53deg)';
    document.querySelector('.line6').style.marginLeft = '-161px';
    document.querySelector('.line6').style.marginTop = '130px';
    document.querySelector('.line6').style.width = '141px';
    document.querySelector('.arrow6').style.transform = 'rotate(41deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-52deg)';
    document.querySelector('.arrow7').style.top = '108px';
    document.querySelector('.arrow7').style.marginLeft = '171px';
    document.querySelector('.arrow7').style.left = '37%';
    document.querySelector('.line7').style.marginLeft = '-489px';
    document.querySelector('.line7').style.width = '160px';
    document.querySelector('.point7').style.marginRight = '417px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '108px';
        document.querySelector('.arrow7').style.marginLeft = '171px';
        document.querySelector('.arrow7').style.left = '37%';
        document.querySelector('.line7').style.marginLeft = '-489px';
        document.querySelector('.line7').style.width = '160px';
        document.querySelector('.point7').style.marginRight = '417px';
      } else {
        document.querySelector('.arrow7').style.top = '318px';
        document.querySelector('.arrow7').style.marginLeft = '171px';
        document.querySelector('.arrow7').style.left = '12%';
        document.querySelector('.line7').style.marginLeft = '-438px';
        document.querySelector('.line7').style.width = '160px';
        document.querySelector('.point7').style.marginRight = '417px';
        document.querySelector('.point7').style.marginLeft = '-60px';
      }
    }
    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }

    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "397px";
      document.querySelector(".line3").style.width = "156px";
      document.querySelector(".point3").style.marginRight = "82px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "39px";
      document.querySelector(".arrow3").style.transform = "rotate(488deg)";
      document.querySelector(".arrow3").style.marginLeft = "-9px";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "122px";
      document.querySelector(".point3").style.marginRight = "119px";
      document.querySelector(".arrow3").style.transform = "rotate(488deg)";
      document.querySelector(".arrow3").style.marginLeft = "-9px";
      document.querySelector(".arrow3").style.top = "395px";
      document.querySelector(".arrow3 span").style.transform = "rotate(230deg)";
      document.querySelector(".arrow3 span").style.left = "-4px";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.width = "71px";
      document.querySelector(".point3").style.marginRight = "159px";
      document.querySelector(".arrow3").style.transform = "rotate(487deg)";
      document.querySelector(".arrow3").style.marginLeft = "-6px";
      document.querySelector(".arrow3").style.top = "395px";
      document.querySelector(".arrow3 span").style.transform = "rotate(230deg)";
      document.querySelector(".arrow3 span").style.left = "-43px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

  }
  else if (mass == 3 && angle == 60) {
    document.getElementById('box').src = './images/Box-3.png';
    document.querySelector(".line1").style.width = "145px";
    document.querySelector(".point1").style.marginRight = "84px";
    document.querySelector(".arrow1 span").style.left = "30px";
    document.querySelector(".arrow1 span").style.transform = "rotate(150deg)";
    document.querySelector(".frac-line").style.width = "65px";
    document.querySelector(".frac-point").style.marginRight = "172px";
    document.querySelector(".frac-arrow span").style.left = "-53px";
    document.querySelector(".frac-arrow span").style.transform = "rotate(60deg)";
    document.querySelector(".arrow2").style.left = "353px";
    document.querySelector(".arrow2").style.top = "293px";
    document.querySelector(".surface-container").style.transform =
      "rotate(-60deg)";
    document.querySelector(".arrow4 span").style.left = "-108px";
    document.querySelector(".arrow4 span").style.top = "39px";
    document.querySelector(".arrow4 span").style.transform = "rotate(313deg)";
    document.getElementById("arcs").style.marginTop = "267px";
    document.getElementById("arcs").style.marginLeft = "1px";
    document.querySelector(".line2").style.width = "207px";
    document.querySelector(".point2").style.marginRight = "22px";
    document.querySelector(".arrow2 span").style.left = "88px";
    document.querySelector('.arrow4').style.top = '368px';
    document.querySelector('.arrow4').style.marginLeft = '105px';
    document.querySelector('.arrow4').style.width = '96px';
    document.querySelector('.line4').style.width = '132px';
    document.querySelector('.point4').style.marginRight = '90px';
    document.querySelector('.arrow4').style.transform = 'rotate(33deg)';
    document.querySelector('.line5').style.marginLeft = '-172px';
    document.querySelector('.line5').style.marginTop = '-4px';
    document.querySelector('.line5').style.width = '185px';
    document.querySelector('.arrow5').style.top = '361px';
    document.querySelector('.arrow5').style.transform = 'rotate(-53deg)';
    document.querySelector('.line6').style.marginLeft = '-155px';
    document.querySelector('.line6').style.marginTop = '118px';
    document.querySelector('.line6').style.width = '134px';
    document.querySelector('.arrow6').style.transform = 'rotate(36deg)';
    document.querySelector('.arrow7').style.transform = 'rotate(-56deg)';
    document.querySelector('.arrow7').style.top = '90px';
    document.querySelector('.arrow7').style.marginLeft = '167px';
    document.querySelector('.arrow7').style.left = '36%';
    document.querySelector('.line7').style.marginLeft = '-520px';
    document.querySelector('.line7').style.width = '174px';
    document.querySelector('.point7').style.marginRight = '434px';

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        document.querySelector('.arrow7').style.top = '90px';
        document.querySelector('.arrow7').style.marginLeft = '167px';
        document.querySelector('.arrow7').style.left = '36%';
        document.querySelector('.line7').style.marginLeft = '-520px';
        document.querySelector('.line7').style.width = '174px';
        document.querySelector('.point7').style.marginRight = '434px';
      } else {
        document.querySelector('.arrow7').style.top = '262px';
        document.querySelector('.arrow7').style.marginLeft = '167px';
        document.querySelector('.arrow7').style.left = '19%';
        document.querySelector('.line7').style.marginLeft = '-520px';
        document.querySelector('.line7').style.width = '174px';
        document.querySelector('.point7').style.marginRight = '434px';
        document.querySelector('.point7').style.marginLeft = '-139px';
      }
    }

    if (document.getElementById("showForce").checked == true) {
      document.querySelector(".arrow3").style.display = "block";
    }
    else {
      document.querySelector(".arrow3").style.display = "none";
    }

    if (sufId == "surf_1") {
      document.querySelector(".arrow3").style.top = "400px";
      document.querySelector(".line3").style.width = "158px";
      document.querySelector(".point3").style.marginRight = "72px";
      document.querySelector(".arrow3 span").style.transform = "rotate(201deg)";
      document.querySelector(".arrow3 span").style.left = "45px";
      document.querySelector(".arrow3").style.transform = "rotate(484deg)";
      document.querySelector(".arrow3").style.marginLeft = "-3px";
    }

    if (sufId == "surf_2") {
      document.querySelector(".line3").style.width = "125px";
      document.querySelector(".point3").style.marginRight = "113px";
      document.querySelector(".arrow3").style.transform = "rotate(484deg)";
      document.querySelector(".arrow3").style.marginLeft = "-2px";
      document.querySelector(".arrow3").style.top = "398px";
      document.querySelector(".arrow3 span").style.transform = "rotate(230deg)";
      document.querySelector(".arrow3 span").style.left = "19px";
    }
    if (sufId == "surf_3") {
      document.querySelector(".line3").style.width = "90px";
      document.querySelector(".point3").style.marginRight = "139px";
      document.querySelector(".arrow3").style.transform = "rotate(484deg)";
      document.querySelector(".arrow3").style.marginLeft = "-2px";
      document.querySelector(".arrow3").style.top = "396px";
      document.querySelector(".arrow3 span").style.transform = "rotate(230deg)";
      document.querySelector(".arrow3 span").style.left = "-16px";
      document.querySelector(".arrow3").style.left = "40.2%";
    }

  }
}

function selectSurface(e) {
  sufId = e.target.id;
  degree = angle * 0.01745;
  norValue = mass * 10 * Math.cos(degree);
  idealForce = mass * 10 * Math.sin(degree);
  forceVal = idealForce - fracValue;

  if (sufId == 'surf_1') {
    document.querySelector('.surface').style.backgroundImage = "url('./images/G1.png')";
    document.querySelector('.surface').style.height = "100%";
    fracValue = thisRef.frictionless_const * norValue;
    forceVal = idealForce - fracValue;
    //renu
    fracValue = parseInt(parseFloat(fracValue.toString()) * 100) / 100;
    document.querySelector('.fraction-value').innerHTML = fracValue.toFixed(2) + ' N';
    document.querySelector('.force-value').innerHTML = forceVal.toFixed(2) + ' N';
    document.querySelector('#frac-arrow-cont').style.display = "none";
  }
  else if (sufId == 'surf_2') {
    if (angle > 25) {
      fracValue = thisRef.rough_const * norValue;
      forceVal = idealForce - fracValue;
    }
    else {
      fracValue = mass * 10 * Math.sin(degree);
      forceVal = idealForce - fracValue;
    }

    document.querySelector('.surface').style.backgroundImage = "url('./images/G2.png')";
    document.querySelector('.surface').style.height = "100%";
    //renu
    fracValue = parseInt(parseFloat(fracValue.toString()) * 100) / 100;
    document.querySelector('.fraction-value').innerHTML = fracValue.toFixed(2) + ' N';
    document.querySelector('.force-value').innerHTML = forceVal.toFixed(2) + ' N';
    document.querySelector('#frac-arrow-cont').style.display = "block";

  }
  else if (sufId == 'surf_3') {
    if (angle > 35) {
      fracValue = thisRef.veryRough_const * norValue;
      forceVal = idealForce - fracValue;
    }
    else {
      fracValue = mass * 10 * Math.sin(degree);
      forceVal = idealForce - fracValue;
    }

    document.querySelector('.surface').style.backgroundImage = "url('./images/G3.png')";
    document.querySelector('.surface').style.height = "100%";
    //renu
    fracValue = parseInt(parseFloat(fracValue.toString()) * 100) / 100;
    document.querySelector('.fraction-value').innerHTML = fracValue.toFixed(2) + ' N';
    document.querySelector('.force-value').innerHTML = forceVal.toFixed(2) + ' N';
    document.querySelector('#frac-arrow-cont').style.display = "block";
  }
  selectSlider();
}

function selectCheckBox(e) {
  const { id, checked } = e.target;
  switch (id) {
    case 'showWeight':
      checkboxIdWeight = id;
      chechboxCheckedWeight = checked;
      if (checked) {
        document.getElementById('axis3').style.display = 'block';
        document.getElementById('axis4').style.display = 'block';
        document.getElementById('axis5').style.display = 'block';
        document.getElementById('axis6').style.display = 'block';
      }
      else {
        document.getElementById('axis3').style.display = 'none';
        document.getElementById('axis4').style.display = 'none';
        document.getElementById('axis5').style.display = 'none';
        document.getElementById('axis6').style.display = 'none';
      }
      break;
    case "showForce":
      checkboxIdForce = id;
      chechboxCheckedForce = checked;
      if (checked) {
        document.querySelector(".net-force").style.display = "block";
        document.querySelector(".arrow1 span").style.display = "none";
        document.querySelector(".arrow1 span").style.color = "#80b3e6";
        document.querySelector(".line1").style.backgroundColor = "#80b3e6";
        document.querySelector(".point1").style.borderLeft = "14px solid #80b3e6";
        document.querySelector(".line2").style.backgroundColor = "#569654";
        document.querySelector(".point2").style.borderLeft = "14px solid #569654";
        document.querySelector(".arrow2 span").style.display = "none";
        document.querySelector(".frac-arrow span").style.display = "none";
        document.querySelector(".arrow2 span").style.color = "#569654";
        document.querySelector(".frac-line").style.backgroundColor = "#f879f8";
        document.querySelector(".frac-point").style.borderLeft = "14px solid #f879f8";
        document.querySelector(".frac-arrow span").style.display = "none";
        document.querySelector(".arrow4 span").style.display = "none";
        document.getElementById("arcs").style.display = "none";
        if (sufId == "surf_1") {
          document.getElementById("axis2").style.display = "block";
        }

        if (angle >= 30 && sufId == "surf_2") {
          document.getElementById("axis2").style.display = "block";
        }
        else {
          document.getElementById("axis2").style.display = "none";

        }
        if (angle == 30 && angle == 35 && sufId == "surf_3") {
          document.getElementById("axis2").style.display = "none";
        }
        else {
          document.getElementById("axis2").style.display = "block";
        }

      }
      else {
        document.querySelector(".net-force").style.display = "none";
        document.querySelector(".arrow1 span").style.display = "block";
        document.querySelector(".arrow2 span").style.display = "block";
        document.querySelector(".frac-arrow span").style.display = "block";
        document.querySelector(".line1").style.backgroundColor = "#0066cc";
        document.querySelector(".point1").style.borderLeft =
          "14px solid #0066cc";
        document.querySelector(".arrow1 span").style.color = "#0066cc";
        document.querySelector(".line2").style.backgroundColor = "#008000";
        document.querySelector(".point2").style.borderLeft =
          "14px solid #008000";
        document.querySelector(".arrow2 span").style.color = "#008000";
        document.querySelector(".frac-line").style.backgroundColor = "#ff01ff";
        document.querySelector(".frac-point").style.borderLeft =
          "14px solid #ff01ff";
        document.querySelector(".frac-arrow span").style.color = "#ff01ff";
        document.querySelector(".frac-arrow span").style.display = "block";
        document.getElementById("axis2").style.display = "none";
        document.querySelector(".arrow4 span").style.display = "block";
        document.getElementById("arcs").style.display = "inline-block";
      }
      break;

    default:
      break;
  }
  selectSlider();
}

function play() {
  i = 0;
  document.querySelector('.reset').style.opacity = 1;
  document.querySelector('.reset').style.pointerEvents = 'auto';
  document.querySelector('.play').style.opacity = 0.5;
  document.querySelector('.play').style.pointerEvents = 'none';
  degree = angle * 0.01745;
  norValue = mass * 10 * Math.cos(degree);
  idealForce = mass * 10 * Math.sin(degree);
  document.querySelector('.box-status').style.display = 'block';
  document.querySelector('#inc-slider').style.pointerEvents = 'none';
  document.querySelector('#mass-slider').style.pointerEvents = 'none';
  document.querySelector('.radio-btn').style.pointerEvents = 'none';
  document.querySelector('#showWeight').disabled = true;
  document.querySelector('#showForce').disabled = true;
  document.querySelector('.box-container img').style.position = 'relative';
  document.getElementById('arrow1').style.display = 'none';
  document.getElementById('frac-arrow-cont').style.display = 'none';
  document.getElementById('axis1').style.display = 'none';
  document.getElementById('axis2').style.display = 'none';
  document.getElementById('axis3').style.display = 'none';
  document.getElementById('axis4').style.display = 'none';
  document.getElementById('axis5').style.display = 'none';
  document.getElementById('axis6').style.display = 'none';

  if (sufId == 'surf_1') {
    fracValue = thisRef.frictionless_const * norValue;
    fracValue = mass * 10 * Math.sin(degree);
    forceVal = idealForce - fracValue;
    netForce = idealForce - forceVal;
    if (netForce > 0) {
      document.querySelector('.box-status').innerHTML = "The box accelerates."
      var netMul = 0.5 * netForce
      var slideTime = 500 / netMul
      let timeEA = 40;
      let splitTime = 500;
      let backBoxId = 0;
      let startLeftPosition = 358;
      let animInterval = Math.sqrt(slideTime);
      boxSlide = setInterval(() => {
        if (timeEA - (splitTime * backBoxId) >= 0) {
          // show image background images
          if (backBoxId < 9) {
            backBoxId++;
            let currentBox = document.getElementById('back' + backBoxId)
            currentBox.style.display = 'block';
            currentBox.style.left = startLeftPosition + i + 'px';
          }
        }
        timeEA += animInterval;
        i = -0.50 * (netForce / mass) * ((timeEA * timeEA) / 100).toFixed(2) / 124;
        document.querySelector('.box-container img').style.left = i + 'px';
        if (i < -530) {
          clearInterval(boxSlide);
        }
      }, Math.sqrt(slideTime) * 2);
    }
    else {
      document.querySelector('.box-status').innerHTML = "The box is at rest."
    }
  }
  else if (sufId == 'surf_2') {
    if (angle > 25) {
      fracValue = thisRef.rough_const * norValue;
      netForce = idealForce - forceVal;
      if (netForce > 0) {
        document.querySelector('.box-status').innerHTML = "The box accelerates.";
        var netMul = 0.5 * netForce
        var slideTime = 500 / netMul
        let timeEA = 40;
        let splitTime = 500;
        let backBoxId = 0;
        let startLeftPosition = 358;
        let animInterval = Math.sqrt(slideTime);
        boxSlide = setInterval(() => {
          if (timeEA - (splitTime * backBoxId) >= 0) {
            // show image background images
            if (backBoxId < 9) {
              backBoxId++;
              let currentBox = document.getElementById('back' + backBoxId)
              currentBox.style.display = 'block';
              currentBox.style.left = startLeftPosition + i + 'px';

            }
          }
          timeEA += animInterval;
          i = -0.50 * (netForce / mass) * ((timeEA * timeEA) / 100).toFixed(2) / 124;
          document.querySelector('.box-container img').style.left = i + 'px';
          if (i < -525) {
            clearInterval(boxSlide);
          }
        }, Math.sqrt(slideTime) * 2);
      }
      else {
        document.querySelector('.box-status').innerHTML = "The box is at rest."
      }
    }
    else {
      fracValue = mass * 10 * Math.sin(degree);
      forceVal = idealForce - fracValue;
      if (forceVal > 0) {
        document.querySelector('.box-status').innerHTML = "The box accelerates."
        boxSlide = setInterval(() => {
          i = -0.50 * (netForce / mass) * ((timeEA * timeEA) / 10000).toFixed(2);
          document.querySelector('.box-container img').style.left = i + 'px';
          if (i == -500) {
            clearInterval(boxSlide);
          }
        }, Math.sqrt(slideTime) * 2);
      }
      else {
        document.querySelector('.box-status').innerHTML = "The box is at rest."
      }

    }
  }
  else if (sufId == 'surf_3') {
    if (angle > 35) {
      fracValue = thisRef.veryRough_const * norValue;
      netForce = idealForce - forceVal;
      if (netForce > 0) {
        document.querySelector('.box-status').innerHTML = "The box accelerates."
        var netMul = 0.5 * netForce
        var slideTime = 500 / netMul
        let timeEA = 40;
        let splitTime = 500;
        let backBoxId = 0;
        let startLeftPosition = 358;
        let animInterval = Math.sqrt(slideTime);
        boxSlide = setInterval(() => {
          if (timeEA - (splitTime * backBoxId) >= 0) {
            // show image background images
            if (backBoxId < 13) {
              backBoxId++;
              let currentBox = document.getElementById('back' + backBoxId)
              currentBox.style.display = 'block';
              currentBox.style.left = startLeftPosition + i + 'px';
            }
          }
          timeEA += animInterval;
          i = -0.50 * (netForce / mass) * ((timeEA * timeEA) / 100).toFixed(2) / 122;
          document.querySelector('.box-container img').style.left = i + 'px';
          if (i < -530) {
            clearInterval(boxSlide);
          }
        }, Math.sqrt(slideTime) * 3);
      }
      else {
        document.querySelector('.box-status').innerHTML = "The box is at rest."
      }
    }
    else {
      fracValue = mass * 10 * Math.sin(degree);
      forceVal = idealForce - fracValue;
      if (forceVal > 0) {
        document.querySelector('.box-status').innerHTML = "The box accelerates."
        boxSlide = setInterval(() => {
          i = -0.50 * (netForce / mass) * ((timeEA * timeEA) / 10000).toFixed(2);
          document.querySelector('.box-container img').style.left = i + 'px';
          if (i == -500) {
            clearInterval(boxSlide);
          }
        }, Math.sqrt(slideTime) * 3);
      }
      else {
        document.querySelector('.box-status').innerHTML = "The box is at rest."
      }
    }
  }
}
function reset() {
  document.querySelector('.play').style.opacity = 1;
  document.querySelector('.play').style.pointerEvents = 'auto';
  document.querySelector('.reset').style.opacity = 0.5;
  document.querySelector('.reset').style.pointerEvents = 'none';
  document.querySelector('.box-status').style.display = 'none';
  document.querySelector('#inc-slider').style.pointerEvents = 'auto';
  document.querySelector('#mass-slider').style.pointerEvents = 'auto';
  document.querySelector('.radio-btn').style.pointerEvents = 'auto';
  document.querySelector('#showWeight').disabled = false;
  document.querySelector('#showForce').disabled = false;
  document.querySelector('.box-container img').style.position = 'relative';
  document.querySelector('.box-container img').style.left = '0px';
  document.getElementById('arrow1').style.display = 'block';
  document.getElementById('frac-arrow-cont').style.display = 'block';
  document.getElementById('axis1').style.display = 'block';
  document.getElementById('axis2').style.display = 'block';
  document.getElementById('axis3').style.display = 'block';
  document.getElementById('axis4').style.display = 'block';
  document.getElementById('axis5').style.display = 'block';
  document.getElementById('axis6').style.display = 'block';
  document.querySelector('.box-container img').style.left = '0px';
  $('.back-image img').css('display', 'none');
  clearInterval(boxSlide);

  if (chechboxCheckedWeight) {
    document.getElementById('axis2').style.display = 'block';
    document.getElementById('axis3').style.display = 'block';
    document.getElementById('axis4').style.display = 'block';
    document.getElementById('axis5').style.display = 'block';
    document.getElementById('axis6').style.display = 'block';
  }
  else {
    document.getElementById('axis2').style.display = 'none';
    document.getElementById('axis3').style.display = 'none';
    document.getElementById('axis4').style.display = 'none';
    document.getElementById('axis5').style.display = 'none';
    document.getElementById('axis6').style.display = 'none';
  }
  if (chechboxCheckedForce) {
    document.getElementById('axis2').style.display = 'block';
    document.querySelector('.net-force').style.display = 'block';
    document.querySelector('.arrow1 span').style.display = 'none';
    document.querySelector('.arrow2 span').style.display = 'none';
    document.querySelector('.frac-arrow span').style.display = 'none';
    document.querySelector('.line1').style.backgroundColor = '#80b3e6';
    document.querySelector('.point1').style.borderLeft = '14px solid #80b3e6';
    document.querySelector('.arrow1 span').style.color = '#80b3e6';
    document.querySelector('.line2').style.backgroundColor = '#569654';
    document.querySelector('.point2').style.borderLeft = '14px solid #569654';
    document.querySelector('.arrow2 span').style.color = '#569654';
    document.querySelector('.frac-line').style.backgroundColor = '#f879f8';
    document.querySelector('.frac-point').style.borderLeft = '14px solid #f879f8';
    document.querySelector('.frac-arrow span').style.display = 'none';
  }
  else {
    document.querySelector('.net-force').style.display = 'none';
    document.querySelector('.arrow1 span').style.display = 'block';
    document.querySelector('.arrow2 span').style.display = 'block';
    document.querySelector('.frac-arrow span').style.display = 'block';
    document.querySelector('.line1').style.backgroundColor = '#0066cc';
    document.querySelector('.point1').style.borderLeft = '14px solid #0066cc';
    document.querySelector('.arrow1 span').style.color = '#0066cc';
    document.querySelector('.line2').style.backgroundColor = '#008000';
    document.querySelector('.point2').style.borderLeft = '14px solid #008000';
    document.querySelector('.arrow2 span').style.color = '#008000';
    document.querySelector('.frac-line').style.backgroundColor = '#ff01ff';
    document.querySelector('.frac-point').style.borderLeft = '14px solid #ff01ff';
    document.querySelector('.frac-arrow span').style.color = '#ff01ff';
    document.querySelector('.frac-arrow span').style.display = 'block';
  }

}

////renu
function zoomOutMobile() {
  var viewport = document.querySelector('meta[name="viewport"]');

  if (viewport) {
    viewport.content = "initial-scale=0.1";
    viewport.content = "width=1200";
  }
}

zoomOutMobile();