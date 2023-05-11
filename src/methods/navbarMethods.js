import { useLocation } from "react-router-dom";

const location = useLocation();

const locationUI = () =>{
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