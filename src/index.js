
// You should implement your task here.

module.exports = function towelSort (matrix){
  if(matrix){
    matrix.filter((el, i)=> i % 2 == 1 ? el.reverse() : 0);
     return matrix.reduce((acc, elar) => acc.concat(elar), []);
    }
    return [];
  };
  
