import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Startup = () => {
  return (
    <>

<div class="container-fluid">
  
</div>
      <div className="d-flex flex-column align-items-start mb-4">
        <div className="card text-uppercase rounded-pill text-center overflow-hidden mb-2" style={{ width: "18rem" }}>
          <h1>Innovations</h1>
        </div>
        <div className="card text-uppercase rounded-pill text-center overflow-hidden mb-2" style={{ width: "18rem" }}>
          <h1>Business Plan</h1>
        </div>
        <div className="card text-uppercase rounded-pill text-center overflow-hidden mb-2" style={{ width: "18rem" }}>
          <h1>Business Model</h1>
        </div>
        <div className="card text-uppercase rounded-pill text-center overflow-hidden mb-2" style={{ width: "18rem" }}>
          <h1>Coworking</h1>
        </div>
      </div>

      <div className="target">
        <div className="startup">
          <h1 className="text-uppercase fs-1">Startup</h1>
          <div className="d-flex justify-content-between">
            <div className="circle rounded-circle border-radius inovations"></div>
            <div className="circle rounded-circle border-radius plan"></div>
            <div className="circle rounded-circle border-radius model"></div>
            <div className="circle rounded-circle border-radius coworking"></div>
            <div className="circle rounded-circle border-radius capital"></div>
            <div className="circle rounded-circle border-radius tasks"></div>
            <div className="circle rounded-circle border-radius deadline"></div>
            <div className="circle rounded-circle border-radius motivation"></div>
          </div>
        </div>
      </div>

      <div className="line"></div>
    </>
  );
};

export default Startup;
