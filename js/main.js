
fetch('https://api.unsplash.com/search/photos?query=india&client_id=bMgrmPc0UCSyR9cf_y9RRAP9QyM6w0gwfZ6JXSKpiPM')

.then(data=>{
    return data.json();
})
.then(({results})=>{
    
    var node = document.querySelector(".grid-1"); 
    
                                
    
    results.forEach(element => {
        var div = document.createElement("div"); 
        var img = document.createElement("img"); 
        div.appendChild(img)
        node.appendChild(div);                         
        img.src = element.urls.small;
        div.className = "img-style"

    });
    document.querySelector('.grid-1').appendChild(node);
})

.catch(err => {
    console.log(err.message);
})






fetch('https://api.unsplash.com/search/photos?query=canada&client_id=bMgrmPc0UCSyR9cf_y9RRAP9QyM6w0gwfZ6JXSKpiPM')

.then(data=>{
    return data.json();
})
.then(({results})=>{
    
    var node = document.querySelector(".grid-2"); 

                                
    
    results.forEach(element => {
        var img = document.createElement("img"); 
        var div = document.createElement("div"); 

        div.appendChild(img);  
        node.appendChild(div);                         

        img.src = element.urls.small;
        div.className = "img-style"

    });
    document.querySelector('.grid-2').appendChild(node);
})

.catch(err => {
    console.log(err.message);
})




fetch('https://api.unsplash.com/search/photos?query=usa&client_id=bMgrmPc0UCSyR9cf_y9RRAP9QyM6w0gwfZ6JXSKpiPM')

.then(data=>{
    return data.json();
})
.then(({results})=>{
    
    var node = document.querySelector(".grid-3"); 
                                
    
    results.forEach(element => {
        var img = document.createElement("img"); 
        var div = document.createElement("div"); 

        div.appendChild(img); 
        node.appendChild(div); 
        img.src = element.urls.small;
        div.className = "img-style"

    });
    document.querySelector('.grid-3').appendChild(node);
})

.catch(err => {
    console.log(err.message);
})


