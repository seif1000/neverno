
var counter = 0;

window.onscroll = function() {

    if(counter == 0){
       if((window.pageYOffset + window.innerHeight)>= document.body.offsetHeight)  {
       // animateValue("value", 0, 35,1000);
       
       var demo1 = new CountUp("value", 0, 45, 0, 2.5);
       demo1.start()
       
       
       var demo2 = new CountUp("value1", 0, 21, 0, 2.5);
       demo2.start()

       var demo2 = new CountUp("value2", 0, 60000, 0, 2.5);
       demo2.start() 

         counter++;
    }
    
}
};

const coming  = document.querySelector(".countTimer");

const launchDate = new Date("jun 1,2019 00:00:00").getTime();

const inter = setInterval(()=>{
    const timeNow = new Date().getTime();
   
    let distanc =  launchDate - timeNow;
    const days = Math.floor(distanc / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanc % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60)  );
    const mins = Math.floor((distanc % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanc % (1000 * 60)) / 1000); 

    coming.innerHTML = `<div>${days}<span>Days</span></div> 
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

  if(distanc<0){
      clearInterval(inter);
  }

},1000)





