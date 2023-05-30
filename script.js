<script>
    function myFunction() {
      document.getElementById("compute").value += '1';
}

    function myFunction2() {
      document.getElementById("compute").value += '2';
}

    function myFunction3() {
      document.getElementById("compute").value += '3';
}

    function myFunction4() {
      document.getElementById("compute").value += '4';
}

    function myFunction5() {
      document.getElementById("compute").value += '5';
}

    function myFunction6() {
      document.getElementById("compute").value += '6';
}

    function myFunction7() {
      document.getElementById("compute").value += '7';
}

    function myFunction8() {
      document.getElementById("compute").value += '8';
}

    function myFunction9() {
      document.getElementById("compute").value += '9';
}

    function myFunction0() {
      document.getElementById("compute").value += '0';
}

    function myFunctionDot() {
      document.getElementById("compute").value += '.';
}

    function myFunctionPlus() {
      document.getElementById("compute").value += ' + ';
}

    function myFunctionMinus() {
      document.getElementById("compute").value += ' - ';
}

    function myFunctionMulti() {
      document.getElementById("compute").value += ' * ';
}

    function myFunctionDivi() {
      document.getElementById("compute").value += ' / ';
}

    function myFunctionO() {
      document.getElementById("compute").value += ' ( ';
}

    function myFunctionC() {
      document.getElementById("compute").value += ' ) ';
}  


    function myFunctionCl() {
      document.getElementById("compute").value = "";
      document.getElementById("final").value = "";
}


    function myFunctionEquals() {
      var evaluate =             eval(document.getElementById("compute").value);
      document.getElementById("final").value = evaluate;
}



