//comparator function for priority
const greaterThan = (a,b) => {
  //prio map for comparison as ints
  const prioMap = {
    "high" : 3,
    "medium": 2,
    "low": 1,
  }

  //if obj a's prio is higher than obj b's, then return true (1)
  if (prioMap[a.priority] > prioMap[b.priority]){
    return 1
  }

  //else return false (for == case, or < case) (-1)
  else {
    return -1
  }
}

//speed up making a list
//element = <ul>/<ol>/<menu> 
//finalArray = array you want to pin
const makeList = (element, finalArray) => {
  element.innerHTML = ""

  for (temp of finalArray){
    console.log(temp)
    let tempTask = document.createElement('li')
    //fill inside of the <li> along with an edit button
    tempTask.innerHTML = temp.description + '<button id="edit">x</button>'
    element.append(tempTask)
  }
}


document.addEventListener("DOMContentLoaded", () => {
  //grab relevant elements
  let form = document.getElementById("create-task-form")
  let taskList = document.getElementById("tasks")
  let dropDown = document.getElementById("priority")
  let sort = document.getElementById("sort")
  let sortType = document.getElementById('sort-type')
  

  //make an array  (you will task custom objects to this)
  const taskArray = []
  
  //submit event fired off
  form.addEventListener('submit', function(event){
    //NOTE: event is an object that holds every data item of submit
    // event[0] = task description
    // event[1] = priority

    event.preventDefault()

    //make task object that has user input from submit event
    let taskInput = {
      priority: event.target[1].value,
      description: `${event.target[0].value}`,
    }
    
    //push task into array
    taskArray.push(taskInput)

    //create list element
    let task = document.createElement('li')
    //fill inside of the <li> along with an edit button
    task.innerHTML = event.target[0].value + '<button id="edit">x</button>'
    taskList.append(task)

    //clear the type zone
    event.target[0].value = ''
  })

  //sorting event listener
  sort.addEventListener('click', () => {

    //check sort type and do appropriate sorting
    if (sortType.value == 'ascending'){
      console.log('ascendingArray')
      //sort needs 2 params, but it just really needs boolean, so we pass boolean from function
      ascendingArray = taskArray.sort((a,b) => greaterThan(a,b))
      makeList(taskList, ascendingArray)
    }
    
    if (sortType.value == 'descending'){
      console.log('descendingArray')
      descendingArray = taskArray.sort((a,b) => !greaterThan(a,b))
      makeList(taskList, descendingArray)
    } 
    
    if (sortType.value == 'date'){
      makeList(taskList, taskArray)
    }
  })

})
