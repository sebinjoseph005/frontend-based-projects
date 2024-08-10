function buttonclick(val)
{
    document.getElementById("screen").value+=val
}
function cleardisplay()
{
    document.getElementById("screen").value=""
}
function equalto()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
