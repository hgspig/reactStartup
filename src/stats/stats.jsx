import React from 'react';

// go back to minute 32 (I stopped after minute 35)

// const [stats, setStats] = React.useState([])

// React.useEffect(() => {
//   fetch('/api/stats' + currentUser)
//   .then((response) => response.json())
//   .then((stats) => {
//     setStats(stats);
//     localStorage.setItem('scores', JSON>stringify(stats));
//   })
//   .catch(() => {
//     const statsText = localStorage.getItem('stats');
//     if (statsText) {
//       setStats(JSON.parse(statsText));
//     }
//   });
//   }, []);

// async function statsLoad() {
//   let schooltaskscompleted = 0;
//   let schooltaskstotal = 0;
//   let worktaskscompleted = 0;
//   let worktaskstotal = 0;
//   let othertaskscompleted = 0;
//   let othertaskstotal = 0;
//   let currentUser = localStorage.getItem("userName");
//   const response = await fetch("/api/task/" + currentUser);
//   const tasks = await response.json();
//   for (i in tasks) {
//     let task = tasks[i];
//     if (task.category == "school") {
//       schooltaskstotal += 1;
//       if (task.completed == true) {
//         schooltaskscompleted += 1;
//       }
//     }
//     if (task.category == "work") {
//       worktaskstotal += 1;
//       if (task.completed == true) {
//         worktaskscompleted += 1;
//       }
//     }
//     if (task.category == "other") {
//       othertaskstotal += 1;
//       if (task.completed == true) {
//         othertaskscompleted += 1;
//       }
//     }
//   }
//   main();
// }



export function Stats() {
  return (
    <main classNameName='container-fluid text-center'>
      <div className="removescrolling-sm removescrolling">
      <div className="row">
        <section className="col-sm">
          <div className="container py-4 h-100">
            <div className="shadow card">
              <div className="second-color card-header">School</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p id="schooltaskmessage">
                    Your currently <span id="schoolpercent"></span> through your
                    tasks in school
                  </p>
                  <div className="progress">
                    <div
                      className="third-color progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      id="schoolpercentagevalueHTML"
                      aria-label="Animated striped example"
                    ></div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="row">
        <section className="col-sm">
          <div className="container py-4 h-100">
            <div className="shadow card">
              <div className="second-color card-header">Work</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p id="worktaskmessage">
                    Your currently <span id="workpercent"></span> through your
                    tasks in work
                  </p>
                  <div className="progress">
                    <div
                      className="third-color progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      id="workpercentagevalueHTML"
                      aria-label="Animated striped example"
                    ></div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="row">
        <section className="col-sm">
          <div className="container py-4 h-100">
            <div className="shadow card">
              <div className="second-color card-header">Other</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p id="othertaskmessage">
                    Your currently <span id="otherpercent"></span> through your
                    other tasks
                  </p>
                  <div className="progress">
                    <div
                      className="third-color progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      id="otherpercentagevalueHTML"
                      aria-label="Animated striped example"
                    ></div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </main>
  );
}