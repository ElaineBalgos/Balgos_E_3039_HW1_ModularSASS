(() => {
    // make an AJAX request using the fetch API
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {

            // debugger;
            // console.log(data);
            //handleData
            //here's where you would call the function that puts the pieces on the page
            loadDataSet(data);
        })
    .catch((err) => {
        console.log(err);
    })

    // set the data
    let classData = document.querySelector(".profPanelText"),
    courseTemplate = document.querySelector("#course-template").content;


    // make a functiongit 
    function loadDataSet(data) {

        // make an action: get the object/s from the template
        let currentCourse = courseTemplate.cloneNode(true),
            currentCourseText = currentCourse.querySelector(".classData").children;
            
        let panel = document.querySelector("#course-template"),
            classID = panel.content.querySelector(".text-primary")
        
        let get = classID;
            get.innerHTML = "" + data.coursecode;
            
        currentCourseText[0].innerHTML = data.coursename;
        currentCourseText[0].appendChild(get);
        currentCourseText[1].innerHTML += data.profname;
        currentCourseText[2].innerHTML += data.classtime;
        
        // print the data
        classData.appendChild(currentCourse);
    } 

})();