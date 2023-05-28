// Custom Scroll Spy functions that detect the current position on the webpage for highlighting the navbar
// scrollSpy initializes the correct useful settings.
const scrollSpy = (myHome = null, myCarousel = null, myHighlights = null, myAbout = null, myAllArticles = null, setmarkSection) => {
    let myHomeValue = myHighlightsValue = myAboutValue = myAllArticlesValue = myCarouselValue = Infinity;

    const myContactValue = document.getElementById("myContact").offsetTop;

    if (myHome)
        myHomeValue = document.getElementById("myHome").offsetTop;

    if (myCarousel)
        myCarouselValue = document.getElementById("myCarousel").offsetTop;

    if (myHighlights)
        myHighlightsValue = document.getElementById("myHighlights").offsetTop;

    if (myAbout)
        myAboutValue = document.getElementById("myAbout").offsetTop;

    if (myAllArticles)
        myAllArticlesValue = document.getElementById("myAllArticles").offsetTop;

    //Mark the correct Navbar items
    if (window.scrollY + 20 >= myContactValue || window.scrollY + window.innerHeight >= document.body.offsetHeight - 30)
        setmarkSection("myContact");

    else if (window.scrollY + 20 >= myAboutValue)
        setmarkSection("myAbout");

    else if (window.scrollY + 20 >= myHighlightsValue)
        setmarkSection("myHighlights");

    else if (window.scrollY + 20 >= myCarouselValue)
        setmarkSection("myCarousel");

    else if (window.scrollY + 20 >= myHomeValue)
        setmarkSection("myHome");

    else if (window.scrollY + 20 >= myAllArticlesValue)
        setmarkSection("myAllArticles");
}

// doScrollSpy performs the required action.
const doScrollSpy = (location, setmarkSection) => {
    if (location.pathname === "/")
        scrollSpy(true, true, true, true, false, setmarkSection);

    else if (location.pathname === "/all")
        scrollSpy(false, true, false, true, true, setmarkSection);

    else if (location.pathname.slice(0, 9) === "/articles") {
        setmarkSection(null);
        scrollSpy(false, false, true, true, false, setmarkSection);
    }

    else if (location.pathname.slice(0, 6) === "/about") {
        setmarkSection(null);
        scrollSpy(false, true, true, false, false, setmarkSection);
    }
}

export default doScrollSpy;