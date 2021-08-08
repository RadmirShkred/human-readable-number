module.exports = function toReadable (number) {
    const nums = (n) => {
        switch(n) {
          case '0':
            return 'zero';
          case '1':
            return 'one';
          case '2':
            return 'two';
          case '3':
            return 'three';
          case '4':
            return 'four';
          case '5':
            return 'five';
          case '6':
            return 'six';
          case '7':
            return 'seven';
          case '8':
            return 'eight';
          case '9':
            return 'nine';
        }
      }
    
      const dozens = (n) => {
        switch(n) {
          case '1':
            return 'ten';
          case '2':
            return 'twenty';
          case '3':
            return 'thirty';
          case '4':
            return 'forty';
          case '5':
            return 'fifty';
          case '6':
            return 'sixty';
          case '7':
            return 'seventy';
          case '8':
            return 'eighty';
          case '9':
            return 'ninety';
        }
      }
    
      const teens = (n) => {
        switch(n) {
          case '1':
            return 'eleven';
          case '2':
            return 'twelve';
          case '3':
            return 'thirteen';
          case '4':
            return 'fourteen';
          case '5':
            return 'fifteen';
          case '6':
            return 'sixteen';
          case '7':
            return 'seventeen';
          case '8':
            return 'eighteen';
          case '9':
            return 'nineteen';
        }
      }
    
      const array = (`${number}`).split('');
    
      let result = '';
    
      if(array.length == 3) {
    
        result += `${nums(array[0])} hundred`;
    
        if(array[1] == '0' && array[2] !=0) {
          result += ` ${nums(array[2])}`;
        }
    
        if(array[1] == '1' && array[2] == '0') {
          result += ` ${dozens(array[1])}`;
        }
    
        if(array[1] == '1' && array[2] != '0') {
          result += ` ${teens(array[2])}`;
        }
    
        if(array[1] !== '1' && array[1] != '0' && array[2] == '0') {
          result += ` ${dozens(array[1])}`;
        }
    
        if(array[1] !== '1' && array[1] != '0' && array[2] != '0') {
          result += ` ${dozens(array[1])} ${nums(array[2])}`;
        }
      }
    
      if(array.length == 2) {
        if(array[1] == '0') {
          result += `${dozens(array[0])}`;
        }
    
        if(array[0] == '1' && array[1] !== '0') {
          result += `${teens(array[1])}`;
        }
    
        if(array[0] != '1' && array[1] != '0') {
          result += `${dozens(array[0])} ${nums(array[1])}`;
        }
      }
    
      if(array.length == 1) {
        result += `${nums(array[0])}`;
      }
    
      return result;
}
