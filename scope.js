

var a = 1
//console.log(b)   // ReferenceError: variables only hoisted within the scope
console.log(d)    // undefined

var foo = function()  {
  var a = 2
  var b = 3
  console.log(a === window.a)
}

var d = 4

foo()

console.log(a)




var obj = {

  bar: function() {
    console.log("does this === obj? ", this === obj);
    console.log("does this === window? ", this === window);
    function hello() {
      console.log("context of hello is window? ", this === window)
    };
    hello();
  }


}


obj.bar()
obj.bar.call(window)

var boundBar = obj.bar.bind(window)
boundBar()


var boundBar = obj.bar.bind()
boundBar()
