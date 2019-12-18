import React, {Component} from 'react';


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
 pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));

 async BubbleSort()
{      
  let  array= this.state.array;
    const bar= document.getElementsByClassName('arr');
            for(let i=0;i<array.length;i++)
            {   await this.pause(100);
              for(let j=0;j<array.length-i-1;j++)
               { 
                await this.pause(100);
                
                  if(array[j]>array[j+1])
                   {  
                    bar[j].style.backgroundColor = "#131c4d ";
                    bar[j + 1].style.backgroundColor = "#131c4d ";
                    setTimeout(()=> {
                        let temp=array[j];
                        array[j]=array[j+1];
                        array[j+1]=temp;
                    },100) ;
                    }
                setTimeout(()=> {
                    bar[j].style.backgroundColor = "#af3861";
                    bar[j + 1].style.backgroundColor = "#af3861";
                 
                },100)
              }
              setTimeout(()=> {
                if(array[array.length-i-1]>=array[array.length-i-2])
              {
                  bar[array.length-i-1].style.backgroundColor ="#0f3b11";
              }
            },100)
             
              this.setState({
                array:array,
                
             })
                
              
            } 
     this.setState({
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
