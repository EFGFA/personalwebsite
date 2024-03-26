import '../App.css'

   import React, { useState } from 'react';

   const DynamicDelayAction = () => {
     const [actionStatus, setActionStatus] = useState('Idle');
     const [delayDuration, setDelayDuration] = useState(3000);
   
     const handleButtonClick = () => {
       setActionStatus('Action in progress...');
   
       // Use setTimeout with dynamically set delay duration
       setTimeout(() => {
         setActionStatus('Action completed!');
       }, delayDuration);
     };
   
     const handleInputChange = (e) => {
       const value = parseInt(e.target.value, 10);
       setDelayDuration(isNaN(value) ? 0 : value); // Set delayDuration to 0 if NaN
     };
   
     return (
       <div>
         <h2>Action Status: {actionStatus}</h2>
         <label>
           Delay Duration (milliseconds):
           <input type="text" value={delayDuration} onChange={handleInputChange} />
         </label>
         <button onClick={handleButtonClick}>Trigger Delayed Action</button>
       </div>
     );
   };
   
   function Home() {
     return (
       <div className="App">
         <DynamicDelayAction />
       </div>
     );
   }
   
export default Home;

