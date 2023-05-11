export const locationUI = (location, setmarkSection) =>{
    if (location.pathname === "/") {
        setmarkSection("myHome");
    }
    else if (location.pathname === "/all") {
        setmarkSection("myAllArticles");
    }
    else if (location.pathname.slice(0, 9) === "/articles" || location.pathname.slice(0, 6) === "/about") {
        setmarkSection(null);
    }

    if (location.hash === "#myCarousel" || location.hash === "#myHighlights" || location.hash === "#myAbout" || location.hash === "#myContact") {

        document.getElementById(`${location.hash.slice(1)}-link`).click();
    }
}

export const darkModeFunc = (setstopScroll, mode, setMode, ref) => {
    setstopScroll(true);

    if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "black";
    }
    else {
        setMode("light");
        document.body.style.backgroundColor = "white";
    }

    if (window.innerWidth <= 991.5) {
        ref.current.click();
    }
}

export const doDecoration = (markSection, mode, ms) => {
    let design = "";

    if (markSection === ms) {
        if (mode === "light") {
            design = "text-decoration-underline text-success";
        }
        else if (mode === "dark") {
            design = "text-decoration-underline darkModeGreen";
        }
    }

    if (mode === "light") {
        return "lightModeBlue " + design;
    }
    else if (mode === "dark") {
        return "darkModeBlue " + design;
    }
}