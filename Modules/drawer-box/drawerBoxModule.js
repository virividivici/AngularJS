// drawer info box module

angular.module('drawerBoxModule', [])

    .filter('grouped', function() {
      
      return function(input, itemsPerRow) {
           
          
          if (itemsPerRow === undefined) {
        
            itemsPerRow = 1;
          }
      
        var out = [];
        
        for (var i = 0; i < input.length; i++) {
        
          var rowElementIndex = i % itemsPerRow;
          var indexRow = (i - rowElementIndex) / itemsPerRow;
          var row;
          
          if (rowElementIndex === 0) {
            
              row = [];
              out[indexRow] = row;
          
          } else {
              
              row = out[indexRow];
          }
        
          row[rowElementIndex] = input[i];
        }
        
      return out;
    };
  }); 