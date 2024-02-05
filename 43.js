var arr = [
    {name:"Harsh sharma",img:"https://images.unsplash.com/photo-1704636487588-9f39a8781dd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",status:"stranger"},
    {name:"Harshita sharma",img:"https://images.unsplash.com/photo-1683009427598-9c21a169f98f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",status:"stranger"},
    {name:"Sonu sharma",img:"https://images.unsplash.com/photo-1682685797703-2bb22dbb885b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",status:"stranger"}
]
var clutter = "";

arr.forEach(function(val){
    clutter += `<div id="card">
    <div id="img">
    <img src="${val.img}" 
    </div>
    <h2>${val.name}</h2>
    <h3>${val.status}</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, modi!</p>
    <button>Add Friend</button>
</div>`;
});

document.querySelector("#main").innerHTML = clutter;
