import { Link } from "react-router-dom";

const myEnter = (setHover, num) => {
    setHover(num);
}

const myLeave = (setHover) => {
    setHover(-1);
}

const showHighlights = (place, data, arr, hover, setHover, setstopScroll) => {
    let choices = [];
    switch (place) {
        default:
            choices = [2, 15, 7, 9, 17, 4];
            break;

        case "india":
            choices = [0, 1, 2, 3, 4, 5];
            break;

        case "america":
            choices = [6, 7, 8, 9, 10, 11];
            break;

        case "england":
            choices = [12, 13, 14, 15, 16, 17];
    }

    for (let i = 0; i < data.length; i++) {
        for (let j of choices) {

            if (i === j) {
                arr.push(
                    <div key={i} onMouseEnter={() => {
                        myEnter(setHover, i);
                    }}

                        onMouseLeave={() => {
                            myLeave(setHover);
                        }}>

                        <Link onClick={() => {
                            setstopScroll(false);
                        }}
                            to={`/articles/${i}`}>
                            <h3 className='d-flex align-items-center justify-content-center'>{data[i].region}</h3>
                        </Link>
                        <img className={`w-100 h-100 ${hover === i ? "hoverEffect" : ""}`} src={place === "all" ? data[i].image2 : data[i].image1} alt="Terrific Location" />
                    </div>
                )
            }
        }
    }
}

export default showHighlights;