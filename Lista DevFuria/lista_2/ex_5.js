 let a,b,c;
 
 let calcBask=(a,b,c)=>{
     let delta = (b*b) - (4*a*c);
     let x1 = ((-b+(Math.sqrt(delta))/2*a));
     let x2 = ((-b-(Math.sqrt(delta))/2*a))

     return x1 + " "+x2;
 }