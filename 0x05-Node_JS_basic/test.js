function fun(x, callback) {
  if (x <= 0)
      setTimeout(() =>
          callback(new Error("Square dimensions should be greater than zero: s = " + x),
          null), 2000);
  else
      setTimeout(() =>
          callback(null, {
              perimeter: () => (4*(x)),
              area:() => (x*x)
          }), 2000);
}

fun(5, console.log)
