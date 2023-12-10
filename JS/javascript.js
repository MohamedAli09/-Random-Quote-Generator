var quoteDisplay =  document.getElementById('quoteDisplay');
var authorOutput =  document.getElementById('authorOutput');

 var quote = [

    ['"Be yourself; everyone else is already taken"' , "--Oscar Wilde"] ,
    ['"So many books, so little time"' , "--Frank Zappa"],
    ['"room without books is like a body without a soul"' , "--Mahatma Gandhi"],
    ['"Be the change that you wish to see in the world"' , "--Dr. Seuss"],
    ['"You only live once, but if you do it right, once is enough"', "--Mae West"]

 ]    
 
   
 var x  = Math.floor ((Math.random() * 20) )  % quote.length  ; //0  
 var y = x; //0 


  function newQuote( ) { 
 
 

    quoteDisplay.innerHTML = quote[x][0];      
    authorOutput.innerHTML = quote[x][1]; 


    if (quote.length > 1) {
        while (x == y) { 
        x  = Math.floor ((Math.random() * 20) )  % quote.length  ;  // 1
    }
    
    y = x;  

 }

 




    
    

 }


 