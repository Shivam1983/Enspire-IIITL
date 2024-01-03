import React from 'react'
import './Event.css'
import {motion , useScroll ,useSpring} from "framer-motion"
import { useRef } from 'react'

const intems = [
  {
    id:1,
    title:"AD-Arena",
    img:"/green1.jpg",
    desc:"Startup Expo is a one-day startup showcase fest during Enspire of IIIT Lucknow.",
  },
  {
    id:2,
    title:"Venturer",
    img:"/green2.jpg",
    desc:"The Entrepreneurial Showdown is an exciting game where participants receive a base investment and must strategically acquire undisclosed companies using provided product, sales, and dissolution data.",
  },
  {
    id:3,
    title:"Crypto",
    img:"/green3.jpg",
    desc:"Talent wins games, but teamwork and intelligence win championships. If you are wondering if this seems simple enough, here`s a twist. You dont know who your teammates are until the end. So, beware of who you help and who you don`t.",
  },
  {
    id:4,
    title:"IPL auction" ,
    img:"/green4.jpg",
    desc:"Always thought that you could create the best IPL team if only you had the money? Here is a chance to put yourself in the shoes of a bidder and build the team you always wanted to lift the coveted IPL trophy. This fun-filled event is a must for cricket lovers."
  },
]

const Single = ({item}) =>{
  const ref = useRef();

  const {scrollYProgress} = useScroll({ 
    target:ref,
    offset: ["start start" , "end start"]
  })

  return <section ref={ref}>
    <div className="eventcontainer">
      <div className="eventwrapper">

        <div className="eventimagecontainer">
      <img className='eventimg' src={item.img} alt="" />
        </div>
      <motion.div className='eventtextContainer' >
                <h2 className='Event-h2'>{item.title}</h2>
        <p className='Event-p'>{item.desc}</p>
        <button className='Event-button'>Read more</button>
      </motion.div>
      </div>
    </div>
  </section>
  
}

function Event () {

  const ref=useRef()

  const {scrollYProgress} = useScroll({target:ref,offset: ["end end","start start"], })

  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  });

  return (
    <div className='Event'>
      <div className="progress">
        <h1 id='Event-h1'>Events</h1>
        <motion.div style={{ scaleX}} className="progressBar"></motion.div>
      </div>
      {intems.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Event