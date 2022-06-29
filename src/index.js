document.addEventListener("DOMContentLoaded", () => {
  //grab relevant elements
  let form = document.getElementById("create-task-form")
  let taskList = document.getElementById("tasks")
  let dropDown = document.getElementById("priority")
  let sortType = document.getElementById("sort-type")
  let sort = document.getElementById("sort")

  //listen for submission button
  form.addEventListener('submit', function(event) {
    event.preventDefault()
    let taskDescription = document.getElementById("new-task-description")

    //if user inputs nothing, alert 
    if (taskDescription.value == ""){
        alert("Invalid task description!")
        //if valid input
      } else {
        //create new list element
        let newTask = document.createElement('li')
        
        //grab priority from dropdown
        let priority = dropDown.options[dropDown.selectedIndex].value;
        //append string with prio and task
        newTask.append(dropDown.options[dropDown.selectedIndex].value.toUpperCase()+": "+taskDescription.value)
        //set color based on prio
        if (priority == "high") {
          newTask.style.color = "red" 
        } else if (priority == "medium"){
          newTask.style.color = "#ffcc00"
        } else if (priority == "low") {
          newTask.style.color = "green"
        } else {
          newTask.style.color = "black" //this should never occur
        }

        taskList.append(newTask)
        //empty out string
        taskDescription.value = ""

        //create remove button
        let rmvBtn = document.createElement('button')
        rmvBtn.innerHTML = 'x'
        newTask.append(rmvBtn)
        rmvBtn.onclick = function () {
          newTask.remove(taskDescription)
        }
      }
  })

  //listen for sort button 
  sort.addEventListener('click', async () => {
    
  })
});
