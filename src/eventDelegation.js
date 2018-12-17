<ul id="todo-app">
  <li class="item">Walk the dog</li>
  <li class="item">Pay bills</li>
  <li class="item">Make dinner</li>
  <li class="item">Code for one hour</li>
</ul>;

document.addEventListener("DOMContentLoaded", function() {
  let app = document.getElementById("todo-app");
  let items = app.getElementsByClassName("item");

  // attach event listener to each item
  for (let item of items) {
    item.addEventListener("click", function() {
      alert("you clicked on item: " + item.innerHTML);
    });
  }
});
/* the problem is that you’re attaching an event listener to every single item individually. 
  This is fine for 4 elements, but what if someone adds 10,000 items 
  (they may have a lot of things to do) to their todo list? Then your function will
   create 10,000 separate event listeners and 
   attach each of them to the DOM. This isn’t very efficient.*/

/*If your application could end up with hundreds of event listeners, 
the more efficient solution would be to actually attach one event listener 
to the whole container, and then be able to access each item when it’s actually clicked.
This is called event delegation, */

//Here is the code for delegation

document.addEventListener("DOMContentLoaded", function() {
  let app = document.getElementById("todo-app");

  // attach event listener to whole container
  app.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "LI") {
      let item = e.target;
      alert("you clicked on item: " + item.innerHTML);
    }
  });
});
