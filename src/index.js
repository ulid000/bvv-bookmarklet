    var add = document.createElement("a");
    add.href = "javascript:(function(){s=document.createElement('script');s.type='text/javascript';s.src='bookmarklet.js';document.body.appendChild(s);})()";
    add.innerHTML = "Click me now";
    document.body.appendChild(add);
