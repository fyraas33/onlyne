
import "./services.css";






export default function Services() {
 
    return (
     <div className="srvs">
        <div className="mainn">
      <h4 className="mb-4">Choose Service</h4>
     
      <div className="container mx-auto ">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 " >
      <span>
    <div  className="bxss lg:mb-6 md:mb-6  " >
  <div className="flex items-center  ">
  <input
      disabled=""
      id="box1"
      type="checkbox"
      defaultValue=""
      className=""
    />
    <label
      htmlFor="box1"
      className="inline-block align-middle "
      
    >
    <h2> Family financial planning <br /><p>1 hour</p></h2>
  
  
    </label>
  </div>
    </div>
    </span>
    <div className="bxss mb-6  " >
    <div className="flex items-center ">
  <input
      disabled=""
      id="box2"
      type="checkbox"
      defaultValue=""
      className=""
    />
    <label
      htmlFor="box2"
      className="inline-block align-middle"
    >
     <h2>Investment planning discussion <br /><p>1 hour</p></h2> 
  
  
    </label>
  </div>
    </div>
  
    </div>
  </div>
  <div className="container mx-auto ">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
    <div className="bxss  ">
    <div className="flex items-center  ">
  <input
      disabled=""
      id="box3"
      type="checkbox"
      defaultValue=""
      className=""
    />
    <label
      htmlFor="box3"
      className="inline-block align-middle"
    >
  <h2>Introductory personal financial <br /><p>45 minutes</p></h2> 
  
  
    </label>
  </div>
    </div>
    <div className="bxss  ">
    <div className="flex items-center ">
    <input
      disabled=""
      id="box4"
      type="checkbox"
      defaultValue=""
      className=" "
    />
    <label
      htmlFor="box4"
      className="inline-block align-middle"
    >
    <h2>Retirement planning<br /><p>45 minutes</p> </h2>  
    
    
  
  
    </label>
  </div>
    </div>
  
    </div>
  </div>
        </div>
     </div>
    );
  }
  