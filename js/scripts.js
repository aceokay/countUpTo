var countUpTo = function(counter, ceiling) {
  var numbers = [];

  for(var i = counter; i <= ceiling; i+=counter) {
    numbers.push(i);
  };
  return numbers;
};
