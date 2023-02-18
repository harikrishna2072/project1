function col()
{
    var col=["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","h.jpg"]
    var len=col.length;
    var ran=Math.random()*len;
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../asset/images/"+col[rannum]+")"
    var updatethetime=setTimeout(function(){colo()},5000)
}
//from here Gallery code starts
function imgK(pic,heading,discription)
{
    document.getElementById("bigscreen").removeAttribute("style")
    document.getElementById("imgheading").innerHTML=discription;
                bigscreen.style.display="flex"
                fullImg.src=pic;
}
function imgV()
{
    document.getElementById("bigscreen").removeAttribute("style","display:none") 
    console.log("calling")
}