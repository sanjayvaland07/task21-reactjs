
import './App.css'
import Card from './component/card.jsx'
import laptop1 from './assets/laptop1.png'
import laptop2 from './assets/laptop2.png'
import laptop3 from './assets/laptop3.png'
import laptop4 from './assets/laptop4.png'
import laptop5 from './assets/laptop5.png'
import laptop6 from './assets/laptop6.png'
import laptop7 from './assets/laptop7.png'
import laptop8 from './assets/laptop8.png'

const data = [
  {id:0,name:"Hp laptop",image : laptop1,decr : "this is a hp laptop"},
  {id:1,name:"Lenovo laptop",image : laptop2,decr : "this is a lenovo laptop"},
  {id:2,name:"Acer laptop",image : laptop3,decr : "this is a acer laptop"},
  {id:3,name:"Dell laptop",image : laptop4,decr : "this is a dell laptop"},
  {id:4,name:"Acer Nitro gaming",image : laptop5,decr : "this is a acer gaming laptop"},
  {id:5,name:"Asus ROG gaming",image : laptop6,decr : "this is a asus gaming laptop"},
  {id:6,name:"Hp victus gaming",image : laptop7,decr : "this is a hp gaming laptop"},
  {id:7,name:"Lenovo legion gaming",image : laptop8,decr : "this is a lenovo gaming laptop"},
  {id:8,name:"Lenovo laptop",image : laptop2,decr : "this is a lenovo laptop"},
  {id:9,name:"Acer laptop",image : laptop3,decr : "this is a acer laptop"},
  {id:10,name:"Dell laptop",image : laptop4,decr : "this is a dell laptop"},
  {id:11,name:"Acer Nitro gaming",image : laptop5,decr : "this is a acer gaming laptop"},
  {id:12,name:"Asus ROG gaming",image : laptop6,decr : "this is a asus gaming laptop"},
  {id:13,name:"Hp victus gaming",image : laptop7,decr : "this is a hp gaming laptop"},
  {id:14,name:"Lenovo legion gaming",image : laptop8,decr : "this is a lenovo gaming laptop"}
]

function App() {

  return (
    <>
      <h1>All cards is here</h1>
      <div className="container">
      {
        data.map((dt)=>{
          return (
            <Card props={dt} key={dt.id}/>
          )
        })
      }
      </div>
    </>
  )
}

export default App
