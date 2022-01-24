// import React from 'react';
// import {studentContext,employeeContext} from "./A"

// function D(props) {

//   return <studentContext.Consumer>
//             {(sname)=>
//             {
//                     return <employeeContext.Consumer>
//                         {(ename)=>
//                         {
//                             return <>
//                             <h1>D Component Student:{sname} Employee:{ename}</h1>
//                             </>
//                         }}
//                     </employeeContext.Consumer>
//             }}
//         </studentContext.Consumer>
   
      

// }

// export default D;

import React,{useContext} from 'react';
import {studentContext,employeeContext} from "./A"



function D() {

    let student=useContext(studentContext);
    let employee=useContext(employeeContext)

  return <div>
        <h1>I am D Component</h1>
        <h1>Student:{student} and Employee:{employee}</h1>
  </div>;
}

export default D;

