
/*
var myController = function ($scope) {
    $scope.result = `AngularCalculator `;
};
*/
var myApp = angular
                   .module(`AngularCalculator`, []);
                   .controller(`myController`, function ($scope) {

    var x, y, ; {
        x, y = `result`
    }
}

                       $scope.result = `AngularCalculator `;
});

function setValues() {
    x = Number(document.getElementById("x").value);
    y = Number(document.getElementById("y").value);
}
function sum() {
    setValues();
    result = x + y;
    alert("the add is equals to " + result);

 function sub() {
     setValues();
     result = x - y;
     alert("the sub is equals to " + result);

  function sum() {
      setValues();
      result = x * y;
      alert("the mult is equals to " + result);

  function sum() {
       setValues();
       result = x / y;
       alert("the div is equals to " + result);