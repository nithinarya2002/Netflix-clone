import React from 'react';
import ReactDOM from 'react-dom';
import Sdata from './components/Sdata';
import App from './components/App';


// function Card(props){
//   return (
//     <>
//     <div className='cards'>
//       <div className='card'>
//         <img src={props.imgsrc} alt='mypic' className='card_img'/>
//         <div className='card_info'>
//           <span className='card_category'>{props.sname}</span>
//           <h3 className='card_title'>{props.title}</h3>
//           <a href={props.link} target="__blank"><button>Watch Now!</button></a>
//         </div>
//       </div>
//     </div>
//   </>
//   );
// }

// function nCard(val){
//   return <>
//     <Card
//       imgsrc={val.image}
//       sname={val.sname}
//       title={val.title}
//       link={val.link}
//     />
//   </>
// }



ReactDOM.render(
  // <>
  // {Sdata.map(nCard)}
  // </>
  <App />
  ,document.getElementById('root')
);



{/* <Card 
    imgsrc={Sdata[0].image}
    sname={Sdata[0].sname}
    title={Sdata[0].title}
    link={Sdata[0].link}
  /> */}