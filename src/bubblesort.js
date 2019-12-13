
       const bubbleSort=(array)=>{

            if(array.length===1)
            return (array);
            else
            {   
                for(let i=0;i<array.length;i++)
                {
                    for(let j=0;j<array.length-i-1;j++)
                    {
                        if(array[j]>array[j+1])
                         {  
                             // setTimeout(()=>{
                    //     const bar= document.getElementsByClassName('arr');
                    //     const style1=bar[j].style;
                    //     style1.backgroundColor='red';
                        
                    // },j*1000)
                    let temp=array[j];
                    array[j]=array[j+1];
                    array[j+1]=temp;

                           
                            }
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