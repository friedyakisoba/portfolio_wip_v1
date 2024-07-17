// global variable locations
const linkedin = document.getElementById("linkedin");
const github = document.getElementById("git");



// github 
document.addEventListener("DOMContentLoaded", function() {
    
    github.addEventListener('click', goToGit);

    function goToGit(event) {
        event.preventDefault(); // Prevent default behavior of the <a> tag
        window.location.href = "https://github.com/friedyakisoba";
    }
});


// linkedin  
document.addEventListener("DOMContentLoaded", function () {
    
    linkedin.addEventListener('click', goToLinkedIn);
    
    function goToLinkedIn(event){
        event.preventDefault();

        // add a profile here or something 
        window.location.href = "https://www.linkedin.com/in/hans-beuren-rambayon-41904331a/"
    }
});