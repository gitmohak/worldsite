/* A few custom Navbar methods.
locationUI - a custom method that intitially highlights the user position according to URL location and redirects the user to the correct section if the user directly wants to go there using URL.

darkModeFunc - a custom Navbar method to toggle dark mode of the website.
doDecoration - to decorate the correct point of the Navbar. */
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

        let a = document.createElement("a");
        a.href = location.hash;
        a.click();
        a.remove();
    }
}

export const darkModeFunc = (setstopScroll, mode, setMode, ref) => {
    setstopScroll(true);

    if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "black";

        document.getElementById("myCSS").innerHTML = `input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active  {
            -webkit-box-shadow: 0 0 0 30px black inset !important;
        }
        
        input:-webkit-autofill{
          -webkit-text-fill-color: #f8f9fa !important;
        }`;
    }
    else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.getElementById("myCSS").innerHTML = "";
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