const MakeTaskEvent = "taskMade";
const CompleteTaskEvent = "taskCompleted";

let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let taskList = {};
let taskListNum = 0
let currentUser = localStorage.getItem('userName'); //change this later to be the variable I need

async function origionalListLoad(){
    const response = await fetch('/api/task/' + currentUser);
    let tasks = await response.json();
    for (i in tasks){
        let task = tasks[i]
        taskList[taskListNum] = task._id;
        console.log(task);
        let curElement;
        if (task.category == 'school'){
            curElement = createListElement(task.title, "schoolMasterList",task._id);
        }
        else if (task.category == 'work'){
            curElement = createListElement(task.title, "workMasterList",task._id);
            console.log("got to work")
        }
        else if (task.category == 'other'){
            console.log("got to other")
            curElement = createListElement(task.title, "otherMasterList", task._id);
        }
        taskListNum = taskListNum + 1;
        if (task.completed == true){
            curElement.classList.toggle("done");
        }
    }
    console.log(taskList);
    //this.configureWebSocket();
}

function createListElement(newTaskText, idToUse, ID ) {
    // <li class="list-group-item">Also do this</li>
	let li = document.createElement("li"); // creates an element "li"
    li.classList.add("list-group-item");
	li.appendChild(document.createTextNode(newTaskText)); //makes text from input field the li text
	let ul = document.getElementById(idToUse);
    ul.appendChild(li); //adds li to ul
	ul.value = ""; //Reset text input field
        //broadcast event task created via websocket
	
        //START STRIKETHROUGH
	async function crossOut() {
        console.log("Crossout function called");
		li.classList.toggle("done");
        const response = await fetch('/api/task/' + ID, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
      });
        //broadcast event task completed via websocket
	}
	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH

    // START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
    dBtn.classList = "deleteButton"
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON

	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
        console.log(ID);
        console.log("^first ID");
        const response = fetch('/api/task/' + ID, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
      });

		li.classList = "delete"
        // li.classList.remove("done");
        li.remove();
	}
	//END ADD CLASS DELETE
    return li;
}


// input.addEventListener("keypress", addListAfterKeypress);
//school
async function addSchoolTask(event) {
    event.preventDefault();
    const newTask = document.querySelector("#SchoolTask");
    const newTaskFull = {title: newTask.value, completed:false, category:"school", user:currentUser};
    const response = await fetch('/api/task', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newTaskFull),
    });
    let tasks = await response.json();
    createListElement(newTask.value, "schoolMasterList", tasks[tasks.length-1]._id);
    newTask.value = "";
    taskList[taskListNum] = tasks[tasks.length-1]._id; //how do I get the id from the response?
    console.log(taskList);
  }
const schoolTaskAdder = document.getElementById("newSchoolTask");
schoolTaskAdder.addEventListener("submit", addSchoolTask);


//creating the checking off function
async function schoolTaskCompleter(event) {
    const completedTask = document.querySelector("#SchoolTask"); // change the query selector
    const newTaskFull = {title: newTask.value, completed:true, category:"school", user:currentUser};
    const response = await fetch('/api/task', {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newTaskFull),
    });
    createListElement(newTask.value,"schoolMasterList",taskList.taskListNum);
    newTask.value = "";
    console.log("continuing on");
  }



//work

async function addWorkTask(event) {
    event.preventDefault();
    const newTask = document.querySelector("#WorkTask");
    const newTaskFull = {title: newTask.value, completed:false, category:"work", user:currentUser};    const response = await fetch('/api/task', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newTaskFull),
    });
    let tasks = await response.json();
    createListElement(newTask.value, "workMasterList", tasks[tasks.length-1]._id);
    newTask.value = "";
    taskList[taskListNum] = tasks[tasks.length-1]._id; //how do I get the id from the response?
    console.log(taskList);
  }
const workTaskAdder = document.getElementById("newWorkTask");
workTaskAdder.addEventListener("submit", addWorkTask);


//creating the checking off function
async function workTaskCompleter(event) {
    const completedTask = document.querySelector("#WorkTask"); // change the query selector
    const newTaskFull = {title: newTask.value, completed:true, category:"work", user:currentUser};    const response = await fetch('/api/task', {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newTaskFull),
    });
    createListElement(newTask.value,"workMasterList",taskList.taskListNum);
    newTask.value = "";
    console.log("continuing on");
  }

//other
async function addOtherTask(event) {
    event.preventDefault();
    const newTask = document.querySelector("#OtherTask");
    const newTaskFull = {title: newTask.value, completed:false, category:"other", user:currentUser};    const response = await fetch('/api/task', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newTaskFull),
    });
    let tasks = await response.json();
    createListElement(newTask.value, "otherMasterList", tasks[tasks.length-1]._id);
    newTask.value = "";
    taskList[taskListNum] = tasks[tasks.length-1]._id; //how do I get the id from the response?
    console.log(taskList);
  }
const otherTaskAdder = document.getElementById("newOtherTask");
otherTaskAdder.addEventListener("submit", addOtherTask);


//creating the checking off function
async function otherTaskCompleter(event) {
    const completedTask = document.querySelector("#OtherTask"); // change the query selector
    const newTaskFull = {title: newTask.value, completed:true, category:"other", user:currentUser};    const response = await fetch('/api/task', {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newTaskFull),
    });
    createListElement(newTask.value,"otherMasterList",taskList.taskListNum);
    newTask.value = "";
    console.log("continuing on");
  }

  // Functionality for peer communication using WebSocket

//   configureWebSocket() {
//     const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
//     this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
//     this.socket.onopen = (event) => {
//       this.displayMsg('system', 'game', 'connected');
//     };
//     this.socket.onclose = (event) => {
//       this.displayMsg('system', 'game', 'disconnected');
//     };
//     this.socket.onmessage = async (event) => {
//       const msg = JSON.parse(await event.data.text());
//       if (msg.type === GameEndEvent) {
//         this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
//       } else if (msg.type === GameStartEvent) {
//         this.displayMsg('player', msg.from, `started a new game`);
//       }
//     };
//   };

//   displayMsg(cls, from, msg) {
//     const chatText = document.querySelector('#player-messages');
//     chatText.innerHTML =
//       `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
//   };

//   broadcastEvent(from, type, value) {
//     const event = {
//       from: from,
//       type: type,
//       value: value,
//     };
//     this.socket.send(JSON.stringify(event));
//   };

origionalListLoad();

