import { Wax } from 'wax-prosemirror-core';
 //import  MyLayout  from './layout';
 import  config  from './config/config';
import Layout from './layout/Layout';


const Editoria=()=>{
    return (
        <div>
            <Wax
     config={config}
     autoFocus
     placeholder="Type something..."
     value=''
     layout={Layout}
     onChange={source => console.log(source)}
   />
        </div>
    )
}
  

export default Editoria;