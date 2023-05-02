import React, {useState} from 'react'

function Articles() {
    const [hover, setHover] = useState(null);

    const myEnter = () => {
        setHover(true);
    }

    const myLeave = () => {
        setHover(false);
    }

  return (
    <section className='container articles'>
        <h1>Articles</h1>
        <ul className='d-flex myHeaders'>
            <li><a href="/">All Countries</a></li>
            <li><a href="/">India</a></li>
            <li><a href="/">America</a></li>
            <li><a href="/">England</a></li>
        </ul>

        <section className='main-articles d-flex flex-row justify-content-between flex-wrap w-75 mx-auto'>
            <div onMouseEnter={myEnter} onMouseLeave={myLeave}>
            <a href='/'><h3 className='d-flex align-items-center justify-content-center'> Some Text Here</h3></a>
                <img className={`w-100 h-100 ${hover ? "hoverEffect": ""}`} src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"  alt=""/>
            </div>

            <div onMouseEnter={myEnter} onMouseLeave={myLeave}>
                <h3 className='d-flex align-items-center justify-content-center'>Some Text Here</h3>
                <img className={`w-100 h-100 ${hover ? "hoverEffect": ""}`} src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="" />
            </div>

            <div onMouseEnter={myEnter} onMouseLeave={myLeave}>
                <h3 className='d-flex align-items-center justify-content-center'>Some Text Here</h3>
                <img className={`w-100 h-100 ${hover ? "hoverEffect": ""}`} src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="" />
            </div>

            <div onMouseEnter={myEnter} onMouseLeave={myLeave}>
                <h3 className='d-flex align-items-center justify-content-center'>Some Text Here</h3>
                <img className={`w-100 h-100 ${hover ? "hoverEffect": ""}`} src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="" />
            </div>

            <div onMouseEnter={myEnter} onMouseLeave={myLeave}>
                <h3 className='d-flex align-items-center justify-content-center'>Some Text Here</h3>
                <img className={`w-100 h-100 ${hover ? "hoverEffect": ""}`} src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="" />
            </div>

            <div onMouseEnter={myEnter} onMouseLeave={myLeave}>
                <h3 className='d-flex align-items-center justify-content-center'>Some Text Here</h3>
                <img className={`w-100 h-100 ${hover ? "hoverEffect": ""}`} src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="" />
            </div>
        </section>
    </section>
  )
}

export default Articles