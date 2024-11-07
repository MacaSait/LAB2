sheep.addEventListener("click",function(){
    console.log("sheep");
    document.getElementById("photography").src="sheep.webp"; //this is for change photo, DEFAULT es el ID que le puse a las fotos//
    element.classList.add('sheep');
    element.classList.remove('bear');
    element.classList.remove("moose");
    element.classList.remove('wolf');;
    element.classList.remove('elk');
    //correct.innerHTML="sheep"; //this is for change text: SEASON es el Id que le puse al titulo
    })


   bear.addEventListener("click",function(){
        console.log("bear");
        document.getElementById("photography").src="bear.webp"; //this is for change photo, DEFAULT es el ID que le puse a las fotos//
        element.classList.add('bear');
        element.classList.remove('sheep');
        element.classList.remove("moose");
        element.classList.remove('wolf');;
        element.classList.remove('elk');
        }) 
    
     moose.addEventListener("click",function(){
            console.log("moose");
            document.getElementById("photography").src="moose.webp"; //this is for change photo, DEFAULT es el ID que le puse a las fotos//
            element.classList.add('moose');
            element.classList.remove('sheep');
            element.classList.remove("bear");
            element.classList.remove('wolf');;
            element.classList.remove('elk');
            }) 


            wolf.addEventListener("click",function(){
                console.log("wolf");
                document.getElementById("photography").src="wolf.webp"; //this is for change photo, DEFAULT es el ID que le puse a las fotos//
                element.classList.add('wolf');
                element.classList.remove('sheep');
                element.classList.remove("moose");
                element.classList.remove('moose');;
                element.classList.remove('elk');
                }) 


 elk.addEventListener("click",function(){
    console.log("elk");
    document.getElementById("photography").src="elk.webp"; //this is for change photo, DEFAULT es el ID que le puse a las fotos//
    element.classList.add('elk');
    element.classList.remove('sheep');
    element.classList.remove("moose");
    element.classList.remove('wolf');;
    element.classList.remove('wolf');
     }) 
