import React from 'react'

function Articles() {
  return (
    <section className='container articles'>
        <h1>Articles</h1>
        <ul className='d-flex myHeaders'>
            <li><a href="/">All Countries</a></li>
            <li><a href="/">India</a></li>
            <li><a href="/">America</a></li>
            <li><a href="/">England</a></li>
            <li><a href="/">Australia</a></li>
        </ul>

        <section className='main-articles d-flex flex-row justify-content-between flex-wrap'>
            <div>
                <h3>Some Text Here</h3>
                <img className='w-100 h-100' src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="" />
            </div>
            <div>
                <h3>Some Text Here</h3>
                <img className='w-100 h-100' src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="" />
            </div>
            <div>
                <h3>Some Text Here</h3>
                <img className='w-100 h-100' src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="" />
            </div>
            <div>
                <h3>Some Text Here</h3>
                <img className='w-100 h-100' src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="" />
            </div>
            <div>
                <h3>Some Text Here</h3>
                <img className='w-100 h-100' src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="" />
            </div>
            <div>
                <h3>Some Text Here</h3>
                <img className='w-100 h-100' src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="" />
            </div>
        </section>
    </section>
  )
}

export default Articles