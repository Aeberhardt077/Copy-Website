let images = ["https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10", "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"]
let sidebarDisplayed = true;
let hidden = true;
function openWindow(url) {
    window.open(url, "_blank")
}

function nextImage() {
    let innerText = JSON.parse(sessionStorage.getItem('session'));
    innerText += 1;
    innerText += check(innerText);
    let newt = JSON.stringify(innerText);
    sessionStorage.setItem('session', newt);
    document.getElementById('super').src = images[newt];
}

function prevImage() {
    let innerText = JSON.parse(sessionStorage.getItem('session'));
    innerText -= 1;
    innerText += check(innerText);
    let newt = JSON.stringify(innerText);
    sessionStorage.setItem('session', newt);
    document.getElementById('super').src = images[newt];
}

function check(curr) {
    if (curr < 0) {
        return 3;
    }
    if (curr > 2) {
        return -3;
    }
    return 0;
}

function displaySidebar() {
    let content = document.getElementById("Course_content");
    let sidebar = document.getElementById("Sidebar");
    if (sidebarDisplayed) {
        content.style.display = "none";
        sidebar.style.backgroundColor = "clear";
        sidebar.style.width = "0px";
        sidebar.style.height = "0px";
        sidebarDisplayed = false;
    } else {
        content.style.display = "block";
        sidebar.style.height = "100vh";
        sidebar.style.width = "275px";

        sidebarDisplayed = true;
    }
}

    function hidedisplaycontent() {
        let content = document.getElementById("Hidden_Cources");
        if (hidden) {
            content.style.display = "block";
            content.style.visibility = "visible";
            content.style.opacity = "100";
            content.style.position = "relative";
            hidden = false;
        }
        else {
            content.style.display = "none";
            content.style.visibility = "hidden";
            content.style.opacity = "0";
            content.style.position = "absolute";
            hidden = true;
        }
}