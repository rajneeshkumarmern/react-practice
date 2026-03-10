import Leads from "../Leads/Leads";
import Enrollments from "../Enrollments/Enrollments";

function DashBoard() {

  return (

    <div className="container">

      <div className="alert alert-primary">
        <h3 className="text-center">My DashBoard</h3>
      </div>

      <div className="row">

        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">

              <h4 className="card-title">Leads Data</h4>

              <Leads />

            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">

              <h4 className="card-title">
                Enrollment Data
              </h4>

              <Enrollments />

            </div>
          </div>
        </div>

      </div>

    </div>

  );
}

export default DashBoard;