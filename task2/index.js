function alphabet(n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newArray = [];
  
    if (n < 0) return null;
  
    for (let i = 0; i < n; i++) {
      if (i > -1) {
        newArray.push('\n');
      }
    
      for (let j = 0; j < n; j++) {
        newArray.push(alphabet[i + j]);
      }
    }
  
    return newArray.join(' ');
  }
  
  console.log(alphabet(4)); 

  // a b c d 
  // b c d e 
  // c d e f 
  // d e f g
