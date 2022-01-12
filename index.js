let getLocalStorageData = localStorage.getItem("allTask"); // get data from localstorage
listArray = JSON.parse(getLocalStorageData);

var myAllTask = listArray || [];

function renderAlltask() {
    for (let task of myAllTask) {
        document.getElementById(
            "Grocery List"
        ).innerHTML += `<li> <div class='eachTask'>  ${task}  </div> </li>`;
    }
}
renderAlltask()

function addnewTask() {
    let newTask = document.getElementById("newtaskInput").value;
    if (newTask === "") {
        alert("Please Add task");
    } else {
        myAllTask.push(newTask);
        localStorage.setItem("allTask", JSON.stringify(myAllTask));
        document.getElementById("Grocery List").innerHTML = "";
        renderAlltask();
        document.getElementById("newtaskInput").value = '';
    }
}