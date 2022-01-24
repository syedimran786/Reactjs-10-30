import React from 'react';
import D from './D';

export let studentContext=React.createContext("Jspiders")
export let employeeContext=React.createContext("Qspiders")

function A() {
  return <div>
      <studentContext.Provider value={"Dinga"}>

          <employeeContext.Provider value={"Raju"}>
                <D/>
          </employeeContext.Provider>
            
      </studentContext.Provider>
  </div>;
}

export default A;
