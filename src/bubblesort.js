
       const bubbleSort=(array)=>{
        const bar= document.getElementsByClassName('arr');

                for(let i=0;i<array.length;i++)
                {    
            
                  for(let j=0;j<array.length-i-1;j++)
                   {
                    // bar[j].style.backgroundColor = "#FF4949";
                    // bar[j + 1].style.backgroundColor = "#FF4949";
                  //      const bar= document.getElementsByClassName('arr');
                  //          setTimeout(()=>{
                             
                  //              const style1=bar[j].style;
                  //               style1.backgroundColor='red';
                  //         },j*1000)  
                 
                   
                      if(array[j]>array[j+1])
                       {  
                        // let promise=new Promise((resolve,reject)=>{
                        //     setTimeout(()=>{
                        //         resolve();
                        //     },2000)
                        // });
                        // promise.then(()=> {
                              let temp=array[j];
                              
                                 array[j]=array[j+1];
                                array[j+1]=temp;
                        // })
          
                          }
                  } 
                }
                return (array); 
            }
      
        
// const bubbleSort=(array)=>{array.map(a1=>array.map((a2,i)=>{
//     if (array[ i ] > array[i + 1]) {
//         array[ i ] = array[i + 1];
//         array[i + 1] = a2;
//     }
// }))
// return (array);
// }
export default bubbleSort;