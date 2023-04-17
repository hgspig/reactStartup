let schooltaskscompleted = 0;
let schooltaskstotal = 0;
let worktaskscompleted = 0;
let worktaskstotal = 0;
let othertaskscompleted = 0;
let othertaskstotal = 0;
let currentUser = localStorage.getItem("userName"); //change this later to be the variable I need

async function statsLoad() {
  console.log("in statsLoad");
  //     const response = await fetch('/api/task', {
  //         method: 'PUT',
  //         headers: { 'content-type': 'application/json' },
  //         body: JSON.stringify({ email: currentUser })
  //   });
  const response = await fetch("/api/task/" + currentUser);
  const tasks = await response.json();
  for (i in tasks) {
    let task = tasks[i];
    if (task.category == "school") {
      schooltaskstotal += 1;
      if (task.completed == true) {
        schooltaskscompleted += 1;
      }
    }
    if (task.category == "work") {
      worktaskstotal += 1;
      if (task.completed == true) {
        worktaskscompleted += 1;
      }
    }
    if (task.category == "other") {
      othertaskstotal += 1;
      if (task.completed == true) {
        othertaskscompleted += 1;
      }
    }
  }
  main();
}
function main() {
  function percentageCompleteCalculator(taskscompleted, taskstotal) {
    let percentDone = (taskscompleted / taskstotal) * 100;
    return percentDone;
  }

  if (schooltaskstotal == 0) {
    let schoolpercent = document.querySelector("#schooltaskmessage");
    schoolpercent.innerHTML = "You have no school tasks!";
  } else {
    let schoolpercent = document.querySelector("#schoolpercent");
    let schoolpercentvalue = Math.round(
      percentageCompleteCalculator(schooltaskscompleted, schooltaskstotal)
    );
    schoolpercent.innerHTML = schoolpercentvalue + "%";
    const overallschoolperecent = document.querySelector(
      "#schoolpercentagevalueHTML"
    );
    overallschoolperecent.style.width = schoolpercentvalue + "%";
  }

  if (worktaskstotal == 0) {
    let workpercent = document.querySelector("#worktaskmessage");
    workpercent.innerHTML = "You have no work tasks!";
  } else {
    let workpercent = document.querySelector("#workpercent");
    let workpercentvalue = Math.round(
      percentageCompleteCalculator(worktaskscompleted, worktaskstotal)
    );
    workpercent.innerHTML = workpercentvalue + "%";
    const overallworkperecent = document.querySelector(
      "#workpercentagevalueHTML"
    );
    overallworkperecent.style.width = workpercentvalue + "%";
  }

  if (othertaskstotal == 0) {
    let otherpercent = document.querySelector("#othertaskmessage");
    otherpercent.innerHTML = "You have no other tasks!";
  } else {
    let otherpercent = document.querySelector("#otherpercent");
    let otherpercentvalue = Math.round(
      percentageCompleteCalculator(othertaskscompleted, othertaskstotal)
    );
    otherpercent.innerHTML = otherpercentvalue + "%";
    const overallotherperecent = document.querySelector(
      "#otherpercentagevalueHTML"
    );
    overallotherperecent.style.width = otherpercentvalue + "%";
  }
}
statsLoad();
