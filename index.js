const todolist = []; //declaring a array
const todoListElement=document.querySelector("#todolist_ul");
class todoapplication{//class declaration
  constructor(todoListElement){//property of class
   this.todoListElement=todoListElement;
  }
   addToDo (){//method1-adding tasks to array
  this.todotext = document.querySelector("#todo-text").value;
  if (this.todotext == "") {//returning function when no task is entered
    return;
  }
   else {//creating object
    this.todoObject = {
      id: todolist.length,
      todotext: this.todotext,
      isdone: false,
    }; 
    todolist.unshift(this.todoObject);
    this.displaytodos();//refreshing page
  }
   }
displaytodos(){//method2-displaying the tasks in html page
  
todoListElement.innerHTML = "";
document.querySelector("#todo-text").value = "";
//render list items inside the ul tag
todolist.forEach((item) => {
  this.listelement = document.createElement("li");//creating list tags
  this.listelement.innerHTML = item.todotext;
  this.delBtn = document.createElement("i");
  this.delBtn.setAttribute("data-id",item.id);
  this.delBtn.classList.add("fa");//when we have more than one class name
  this.delBtn.classList.add("fa-trash-o");
  if (item.isdone) {//checking whether the the task is done or not
    this.listelement.setAttribute("class", "checked");
  }
  this.listelement.setAttribute("data-id", item.id);//setting attribute
  this.listelement.addEventListener("click", function (e) {
    this.selectedID = e.target.getAttribute("data-id");
    addtasks.doneToDo(this.selectedID);
  });
  this.delBtn.addEventListener("click",function(e){//adding event to html element
    this.delId =e.target.getAttribute("data-id")
    addtasks.deleteItem(this.delId)
  })
  todoListElement.appendChild(this.listelement);//linking li tag with ul lag
  this.listelement.appendChild(this.delBtn);//linking del id vth li tag
});
}
deleteItem(delId){//method3-creating fun for deleting elements
 this.deleteindex = todolist.findIndex((item)=>item.id==delId)
todolist.splice(this.deleteindex,1)
this.displaytodos();
}
doneToDo(selectedID){//method4-function is used to check whether task is done or not 
    this.selectIDindex = todolist.findIndex((item) => item.id == selectedID);
 if(this.selectIDindex==-1){//when array becomes null
   return;
 }
 else{
  todolist[this.selectIDindex].isdone? (todolist[this.selectIDindex].isdone = false)//using ternary operator
    : (todolist[this.selectIDindex].isdone = true);
  this.displaytodos();
}
}
}
const addtasks = new todoapplication(todoListElement)
//document.querySelector("#add_button").addEventListener("click", addToDo); //adding events on html elements
document.querySelector("#todo-text").addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {//key control for shift+enter
      addtasks.addToDo();
    }
  });


