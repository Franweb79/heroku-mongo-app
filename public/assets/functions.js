function countDown()
{
    let cont=5;
 
    setInterval(function(){
 
       if(cont>0)
       {
         $("#countDownText").html(`You will be redirected on ${cont} seconds` );
 
       }
       else
       {
         window.location.href="/";
       }
 
   --cont;
    },1000);
}

countDown();