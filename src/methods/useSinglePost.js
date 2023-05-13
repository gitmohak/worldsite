import { useContext } from "react";
import articleData from "../data/postsData.json";
import aboutData from "../data/aboutData.json";
import stopScrollContext from '../contexts/stopScrollContext';

function useSinglePost(articleNum, aboutNum) {
    const { stopScroll } = useContext(stopScrollContext);
    let postNum, date, data;

    if (articleNum) {
        data = articleData;
        postNum = articleNum;
        date = new Date(data[postNum].date).toUTCString().slice(0, 16);
    }

    else if (aboutNum) {
        data = aboutData;
        postNum = aboutNum;
    }

    setTimeout(() => {
        if (stopScroll === false) {
            window.scrollTo(0, 0);
        }
    }, 0);

    return {
        postNum, date, data
    }
}

export default useSinglePost