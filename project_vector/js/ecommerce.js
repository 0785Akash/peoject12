let a=['slider_img1.png','slider_img2.png']
i=0
function fun()
{
    let ir=document.getElementById('img1')
    i++
    if(i>=a.length)
    {
        i=0
    }
    ir.src=a[i]
}
function fun1()
{
    let ir=document.getElementById('img1')
    i--
    if(i<0)
    {
        i=a.length-1
    }
    ir.src=a[i]
}
// setInterval(fun,3000)
// multiple img
let b=['p1.jpg','p2.jpeg','p3.jpeg','p4.jpeg','p5.jpeg','p6.jpeg','p7.jpeg','p8.jpeg','p9.jpeg']
// let c=['ADIDAS SHOES','SPARX SHOES','CAMPUS SHOES','PUMA SHOES','NIKE SHOES','HRX SHOES','BATA SHOES','PARAGON','ASIAN']
j=0
function fun2()
{
    let iir=document.getElementsByClassName('i2')
   
    j++
    j=j%9
    iir[0].src=b[j%9]
    iir[1].src=b[(j+1)%9]
    iir[2].src=b[(j+2)%9]
    iir[3].src=b[(j+3)%9]
    
}
setInterval(fun2,2000)
function fun3()
{
    let iir=document.getElementsByClassName('i2')
    j--
    if(j<0)
    {
        j=b.length-1
    }
    j=j%9
    iir[0].src=b[j%9]
    iir[1].src=b[(j+1)%9]
    iir[2].src=b[(j+2)%9]
    iir[3].src=b[(j+3)%9]
   
}
function like(a)
{
//    alert("hello")
    a.classList.toggle("like");
}
function signuppopup()
{
    document.getElementById("popup").style.display="block";
    
//    document.getElementById("wrapper").style.opacity="0.3"
}
function signuppopupclose()
{
    document.getElementById("popup").style.display="none";
    
}
function signuppopup1()
{
    document.getElementById("popup1").style.display="block";
    
//    document.getElementById("wrapper").style.opacity="0.3"
}
function signuppopupclose1()
{
    document.getElementById("popup1").style.display="none";
    
}
function loginfun(){
    document.getElementById("popup").style.display="none";
    document.getElementById('popup1').style.display='block'
}
function loginpopupclose()
{
    document.getElementById("popup1").style.display="none";
    
}
// function drpdown(){
//     document.getElementById('nbrand').style.display='block'
    
// }
function fpass()
{
    document.getElementById('popup1').style.display='none'
    document.getElementById('popup2').style.display='block'
}
function fpassclse()
{
    document.getElementById('popup2').style.display='none'
}