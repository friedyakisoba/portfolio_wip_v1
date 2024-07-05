


// github 
document.addEventListener("DOMContentLoaded", function() {
    const github = document.getElementById("git");

    github.addEventListener('click', goToGit);

    function goToGit(event) {
        event.preventDefault(); // Prevent default behavior of the <a> tag
        window.location.href = "https://github.com/friedyakisoba";
    }
});


// linkedin  
document.addEventListener("DOMContentLoaded", function () {
    const linkedin = document.getElementById("linkedin");

    linkedin.addEventListener('click', goToLinkedIn);
    
    function goToLinkedIn(event){
        event.preventDefault();

        // add a profile here or something 
        window.location.href = "https://www.linkedin.com/"
    }
});