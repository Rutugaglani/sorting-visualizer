import React, {Component} from 'react';
import bubbleSort from './bubblesort';

function randomIntFromInterval (min,max){
    return Math.floor(Math.random() * (max - min +1)+min)
}
class SortingVisualizer extends Component{
    constructor(props){
        super(props);
        this.state={
            array:[],
            color:'#af3861'
        };
    }
componentDidMount(){
    this.resetArray();
    
}
resetArray()
{
    const array=[];
    for(let i=0;i<25;i++){
        array.push(randomIntFromInterval(5,600));
    }
    this.setState({
        array:array,
        color:'#af3861'
    })
   
}  


BubbleSort()
{      
    
    const sortedArray=bubbleSort(this.state.array);
    //  for (let i = 0; i < sortedArray.length; i++) {
    //     const bar = document.getElementsByClassName('arr');
    //     //if (bar[i]==sortedArray[i]) {
         
    //       const barStyle = bar[i].style;
    //        const color = '#131c4d'
    //        setTimeout(() => {
    //          barStyle.backgroundColor = color;
         
    //        }, i * 1000);
          
    //      }
         
      //}
    //  for(let i=0;i<sortedArray.length;i++)
    //  {
    //      const bar= document.getElementsByClassName('arr');
    //      let promise=new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //              resolve();
    //          },10000)
    //       });
    //       promise.then(()=> {return (bar)})}

    //     const style1=bar[i].style;
    //     style1.backgroundColor='#0f3b11';
    //      if(bar[i]===sortedArray[i])
    //      {
    //          setTimeout(()=>{
    //              style1.backgroundColor='red';
    //          },i*1000)
    //      }
             
    // } 
  //  console.log(sortedArray);
    //   let promise=new Promise((resolve,reject)=>{
    //                        setTimeout(()=>{
    //                             resolve();
    //                         },10000)
    //                      });
    //                      promise.then(()=> {return (sortedArray)} );
   
    this.setState({
        array:sortedArray,
         color:'#0f3b11' 
     })

}
QuickSort()
{

}

render(){
    const{array}=this.state;
    const {color}=this.state;
    return(
        <div className="grid-container">
             <div>
           <div className="pink" ></div> <br/>
            <div className="blue"></div><br/>
            <div className="green"></div>
        </div>
        <div className="text">
           <div className="text1" >Given Array</div> <br/><br/>
            <div className="text1">Swap</div><br/><br/>
            <div className="text1">Sorted Array</div>
        </div>

        
        <div className="arr-container">
            {array.map((value,id)=>(
                <div className="arr" key={id} style={{height:` ${value}px`, backgroundColor:color}}>    
                </div>
            ))}
<br/><br/>
<button className="btn" onClick={()=>this.BubbleSort()}>BubbleSort</button>
<button className="btn" onClick={()=>this.resetArray()}>RESET</button>
        </div>
       
        </div>
    )
}
}
export default SortingVisualizer;