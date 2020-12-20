var x1 = document.getElementById("x1");
var y1 = document.getElementById("y1");
var z1 = document.getElementById("z1");
var x2 = document.getElementById("x2");
var y2 = document.getElementById("y2");
var z2 = document.getElementById("z2");
var x = document.getElementById("x");
var y = document.getElementById("y");
var z = document.getElementById("z");
var answer_1 = document.getElementById("answer_1");
var answer_2 = document.getElementById("answer_2");
var dis_1 = document.getElementById("dis_1");
var dis_2 = document.getElementById("dis_2");

// SQUARE
var square = document.getElementById("square");
var sqSide = document.getElementById("sqSide");
var answer_sqA = document.getElementById("answer_sqA");

// RECTANGLE
var rectangle = document.getElementById("rectangle");
var rectLength = document.getElementById("rectLength");
var rectWidth = document.getElementById("rectWidth");

// TRIANGLE
var triangle = document.getElementById("triangle");
var triBase = document.getElementById("triBase");
var triHeight = document.getElementById("triHeight");
var triSide1 = document.getElementById("triSide1");
var triSide2 = document.getElementById("triSide2");
var triSide3 = document.getElementById("triSide3");

// Circle
var circle = document.getElementById("circle");
var circRadius = document.getElementById("circRadius");

// Lines
let lines = document.getElementById("lines");
let slope = document.getElementById("lineSlope")
let yIntercept = document.getElementById("yIntercept")

let lx1 = document.getElementById("lx1");
let ly1 = document.getElementById("ly1");
let lz1 = document.getElementById("lz1");
let lx2 = document.getElementById("lx2");
let ly2 = document.getElementById("ly2");
let lz2 = document.getElementById("lz2");

let slope_SP = document.getElementById("lineSlope_SP")
let lx = document.getElementById("lx");
let ly = document.getElementById("ly");

let a = document.getElementById("a");
let b = document.getElementById("b");

// LINES(3D) AND PLANES

let lines3d = document.getElementById("lines3d");
let planes = document.getElementById("planes");


function pointsShow(){
  dis_1.style.display = "block";
  dis_2.style.display = "block";
  square.style.display = "none";
  rectangle.style.display = "none";
  triangle.style.display = "none";
  circle.style.display = "none";
  lines.style.display = "none";
  planes.style.display = "none"
  lines3d.style.display = "none"
}

function squareShow(){
  dis_1.style.display = "none";
  dis_2.style.display = "none";
  rectangle.style.display = "none";
  triangle.style.display = "none";
  circle.style.display = "none";
  lines.style.display = "none"
  planes.style.display = "none"
  lines3d.style.display = "none"
  square.style.display = "block";
}

function rectShow(){
  dis_1.style.display = "none";
  dis_2.style.display = "none";
  square.style.display = "none";
  triangle.style.display = "none";
  circle.style.display = "none";
  lines.style.display = "none";
  planes.style.display = "none"
  lines3d.style.display = "none"
  rectangle.style.display = "block";
}

function triShow(){
  dis_1.style.display = "none";
  dis_2.style.display = "none";
  square.style.display = "none";
  rectangle.style.display = "none";
  circle.style.display = "none";
  lines.style.display = "none"
  planes.style.display = "none"
  lines3d.style.display = "none"
  triangle.style.display = "block";
}

function circShow(){
  dis_1.style.display = "none";
  dis_2.style.display = "none";
  square.style.display = "none";
  rectangle.style.display = "none";
  triangle.style.display = "none";
  lines.style.display = "none"
  planes.style.display = "none"
  lines3d.style.display = "none"
  circle.style.display = "block";
}

function linesShow(){
  dis_1.style.display = "none";
  dis_2.style.display = "none";
  square.style.display = "none";
  rectangle.style.display = "none";
  triangle.style.display = "none";
  circle.style.display = "none";
  planes.style.display = "none"
  lines3d.style.display = "none"
  lines.style.display = "block"
}

function lines3dShow(){
  dis_1.style.display = "none";
  dis_2.style.display = "none";
  square.style.display = "none";
  rectangle.style.display = "none";
  triangle.style.display = "none";
  circle.style.display = "none";
  lines.style.display = "none"
  planes.style.display = "none"
  lines3d.style.display = "block"

}

function planesShow(){
  dis_1.style.display = "none";
  dis_2.style.display = "none";
  square.style.display = "none";
  rectangle.style.display = "none";
  triangle.style.display = "none";
  circle.style.display = "none";
  lines.style.display = "none"
  lines3d.style.display = "none"
  planes.style.display = "block"

}
 // BREAK
function distance(){
  var x1_x2 = Number(x1.value) - Number(x2.value);
  var y1_y2 = Number(y1.value) - Number(y2.value);
  var z1_z2 = Number(z1.value) - Number(z2.value);

  var sq_x = x1_x2**2;
  var sq_y = y1_y2**2;
  var sq_z = z1_z2**2;
  // Square of Answer
  var add = sq_x + sq_y + sq_z;

  var ans = add**0.5;

  answer_dis.innerHTML = "The Distance Between the Points " + "(" + Number(x1.value) + ", " + Number(y1.value) + ", " +  Number(z1.value) + ") and " + "(" + Number(x2.value) + ", " + Number(y2.value) + ", " + Number(z2.value) + ") " + "is " + ans;
}

function midPoint(){
  var xMid = (Number(x1.value) + Number(x2.value))/2;
  var yMid = (Number(y1.value) + Number(y2.value))/2;
  var zMid = (Number(z1.value) + Number(z2.value))/2;
  answer_mid.innerHTML = `The Mid Point of (${Number(x1.value)}, ${Number(y1.value)}, ${Number(z1.value)}) and (${Number(x2.value)}, ${Number(y2.value)}, ${Number(z2.value)} is (${xMid}, ${yMid}, ${zMid})`
}

function dis_origin(){
  var sq_x = x.value**2;
  var sq_y = y.value**2;
  var sq_z = z.value**2;
  // Square of Answer
  var add = sq_x + sq_y + sq_z;

  var ans = add**0.5;

  answer_2.innerHTML = "The Distance of the Point " + "(" + Number(x.value) + ", " + Number(y.value) + ", " +  Number(z.value) + ") from Origin is " + ans;
}

function squareArea(){
  var ans = sqSide.value**2;

  answer_sqA.innerHTML = "Area of Square is " + ans;
}

function squarePeri(){
  var ans = sqSide.value * 4;

  answer_sqP.innerHTML = "Perimeter of Square is " + ans;
}

function rectArea(){
  var ans = rectLength.value * rectWidth.value;

  answer_rectA.innerHTML = "Area of Rectangle is " + ans;
}

function rectPeri(){
  var ans = 2 * (Number(rectLength.value) + Number(rectWidth.value));

  answer_rectP.innerHTML = "Perimeter of Rectangle is " + ans;

}

function triArea(){
  var ans = 0.5 * triBase.value * triHeight.value;

  answer_triA.innerHTML = "Area of Triangle is " + ans;

}

function triPeri(){
  var ans = Number(triSide1.value) + Number(triSide2.value) + Number(triSide3.value);

  answer_triP.innerHTML = "Perimeter of Triangle is " + ans;

}

function circArea(){
  var ans = Math.PI * circRadius.value ** 2;

  answer_circA.innerHTML = "The Area of Circle is " + ans;
}

function circPeri(){
  var ans = 2 * Math.PI * circRadius.value;

  answer_circP.innerHTML = "The Circumference of Circle is " + ans;

}

function lineEquationSI(){
  if (slope.value == 1) {
    if(yIntercept.value > 0){
      answer_lineEqu_SI.innerHTML = `The Equation of Line is y = x + ${yIntercept.value}`;
    } else {
      answer_lineEqu_SI.innerHTML = `The Equation of Line is y = x  ${yIntercept.value}`;
    }
  } else {

    if(yIntercept.value > 0){
      answer_lineEqu_SI.innerHTML = `The Equation of Line is y = ${slope.value}x + ${yIntercept.value}`;
    } else {
      answer_lineEqu_SI.innerHTML = `The Equation of Line is y = ${slope.value}x  ${yIntercept.value}`;
    }

  }
}

function changeLineForm_SI(){
  if(slope.value == 1) {

    if(yIntercept.value > 0){
      answer_lineEqu_SI.innerHTML = `The Equation of Line is x - y + ${yIntercept.value} = 0`;
    } else {
      answer_lineEqu_SI.innerHTML = `The Equation of Line is x - y   ${yIntercept.value} = 0`;
    }

  } else {

    if(yIntercept.value > 0){
      answer_lineEqu_SI.innerHTML = `The Equation of Line is ${slope.value}x - y + ${yIntercept.value} = 0`;
    } else {
      answer_lineEqu_SI.innerHTML = `The Equation of Line is ${slope.value}x - y   ${yIntercept.value} = 0`;
    }
  }

}

function lineEquationTP(){
  let m = (ly1.value - ly2.value) / (lx1.value - lx2.value)
  let c = ((lx1.value * ly2.value) - (lx2.value * ly1.value)) / (lx1.value - lx2.value)
  if (!(isNaN(m)) && !(isNaN(c))) {

    if (c >= 0) {

      if (m == 1) {
        answer_lineEqu_TP.innerHTML = `The Equation of Line is y = x + ${c}`;
      } else {
        answer_lineEqu_TP.innerHTML = `The Equation of Line is y = ${m}x + ${c}`;
      }

    } else {

      if (m == 1) {
        answer_lineEqu_TP.innerHTML = `The Equation of Line is y = x  ${c}`;
      } else {
        answer_lineEqu_TP.innerHTML = `The Equation of Line is y = ${m}x  ${c}`;
      }

    }

  } else {
    answer_lineEqu_TP.innerHTML = 'Invalid Input';
  }

}

function changeLineForm_TP(){
  let m = (ly1.value - ly2.value) / (lx1.value - lx2.value)
  let c = ((lx1.value * ly2.value) - (lx2.value * ly1.value)) / (lx1.value - lx2.value)

  if (!isNaN(m) && !isNaN(c)) {
    if (c > 0 ) {
      if (m == 1) {
        answer_lineEqu_TP.innerHTML = `The Equation of Line is x - y + ${c} = 0`;
      } else {
        answer_lineEqu_TP.innerHTML = `The Equation of Line is ${m}x - y + ${c} = 0`;
      }
    } else {
      if (m == 1) {
        answer_lineEqu_TP.innerHTML = `The Equation of Line is x - y ${c} = 0`;
      } else {
        answer_lineEqu_TP.innerHTML = `The Equation of Line is ${m}x - y  ${c} = 0`;
      }
    }
  }



}

function lineEquationSP(){
  let m = slope_SP.value
  let c = ly.value - (slope_SP.value * lx.value)
  if (m == 1) {
    if (c >= 0) {
      answer_lineEqu_SP.innerHTML = `The Equation of Line is y = x + ${c}`
    } else {
      answer_lineEqu_SP.innerHTML = `The Equation of Line is y = x  ${c}`
    }
  } else {
    if (c >= 0) {
      answer_lineEqu_SP.innerHTML = `The Equation of Line is y = ${m}x + ${c}`
    } else {
      answer_lineEqu_SP.innerHTML = `The Equation of Line is y = ${m}x  ${c} `
    }
  }
}

function changeLineForm_SP(){
  let m = slope_SP.value
  let c = ly.value - (slope_SP.value * lx.value)
  if (m == 1) {
    if (c >= 0) {
      answer_lineEqu_SP.innerHTML = `The Equation of Line is x - y + ${c} = 0`
    } else {
      answer_lineEqu_SP.innerHTML = `The Equation of Line is x - y  ${c} = 0`
    }
  } else {
    if (c >= 0) {
      answer_lineEqu_SP.innerHTML = `The Equation of Line is ${m}x - y + ${c} = 0`
    } else {
      answer_lineEqu_SP.innerHTML = `The Equation of Line is  ${m}x - y ${c} = 0`
    }
  }
}

function lineEquationDI(){
  let m = 0 - (b.value/a.value)
  let c = b.value
  if(!isNaN(m)) {
    if (m == 1) {
      if (c >= 0) {
        answer_lineEqu_DI.innerHTML = `The Equation of Line is y = x + ${c}`
      } else {
        answer_lineEqu_DI.innerHTML = `The Equation of Line is y = x  ${c}`
      }
    } else if(m == -1){
      if (c >= 0) {
        answer_lineEqu_DI.innerHTML = `The Equation of Line is y = -x + ${c}`
      } else {
        answer_lineEqu_DI.innerHTML = `The Equation of Line is y = -x  ${c} `
      }
    } else {
      if (c >= 0) {
        answer_lineEqu_DI.innerHTML = `The Equation of Line is y = ${m}x + ${c}`
      } else {
        answer_lineEqu_DI.innerHTML = `The Equation of Line is y = ${m}x  ${c} `
      }
    }
  } else {
    answer_lineEqu_DI.innerHTML = `Invalid Input`
  }
}


function changeLineForm_DI(){
  let m = 0 - (b.value/a.value)
  let c = b.value
  if (!isNaN(m)) {
    if (m == 1) {
      if (c >= 0) {
        answer_lineEqu_DI.innerHTML = `The Equation of Line is x - y + ${c} = 0`
      } else {
        answer_lineEqu_DI.innerHTML = `The Equation of Line is x - y  ${c} = 0`
      }
    } else if (m == -1) {

        if (c >= 0) {
          answer_lineEqu_DI.innerHTML = `The Equation of Line is -x - y + ${c} = 0`
        } else {
          answer_lineEqu_DI.innerHTML = `The Equation of Line is -x - y ${c} = 0`
        }

    } else {
      if (c >= 0) {
        answer_lineEqu_DI.innerHTML = `The Equation of Line is ${m}x - y + ${c} = 0`
      } else {
        answer_lineEqu_DI.innerHTML = `The Equation of Line is  ${m}x - y ${c} = 0`
      }
    }
  }
}

function comingSoon(){
  alert("Coming Soon, Stay Tuned")
}