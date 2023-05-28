// Custom Scroll Spy function that detects the current position on the webpage for highlighting the appropriate Navbar items.
const scrollSpy = (location, setmarkSection) => {

    // Initialize the correct useful settings.
    const myHome = document.getElementById("myHome");
    const myCarousel = document.getElementById("myCarousel");
    const myHighlights = document.getElementById("myHighlights");
    const myAbout = document.getElementById("myAbout");
    const myAllArticles = document.getElementById("myAllArticles");

    let [myHomeValue, myHighlightsValue, myAboutValue, myAllArticlesValue, myCarouselValue] = Array(5).fill(Infinity);

    const myContactValue = document.getElementById("myContact").offsetTop;

    if (myHome)
        myHomeValue = myHome.offsetTop;

    if (myCarousel)
        myCarouselValue = myCarousel.offsetTop;

    if (myHighlights)
        myHighlightsValue = myHighlights.offsetTop;

    if (myAbout)
        myAboutValue = myAbout.offsetTop;

    if (myAllArticles)
        myAllArticlesValue = myAllArticles.offsetTop;

    //Mark the appropriate Navbar items according to location & scroll position
    if (location.pathname.slice(0, 9) === "/articles" || location.pathname.slice(0, 6) === "/about")
        setmarkSection(null);

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

export default scrollSpy;