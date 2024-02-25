function checkvalue(){
    const data= document.demoform.uname.value
    if (data=="")
    document.getElementById("show").innerHTML='Name cant be blank...!'
    console.log('data must be there')


}