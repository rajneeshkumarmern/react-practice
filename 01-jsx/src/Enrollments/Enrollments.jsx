import { useState } from "react";

function Enrollments() {

  const [enrollmentCount] = useState(5);

  const [enrollmentShow] = useState(true);

  const [enrollmentList] = useState([
    {leadId:101,sid:501,sname:'Sri',course:'Angular',feepaid:10000,feebal:5000},
    {leadId:102,sid:502,sname:'Vas',course:'React',feepaid:10000,feebal:5000},
    {leadId:103,sid:503,sname:'Sri',course:'Angular',feepaid:10000,feebal:5000},
    {leadId:104,sid:504,sname:'Vas',course:'React',feepaid:10000,feebal:5000},
    {leadId:105,sid:505,sname:'Sri',course:'Angular',feepaid:10000,feebal:5000},
  ]);

  let myenrollsToDisplay = null;

  if (enrollmentShow === true) {

    myenrollsToDisplay = enrollmentList.map((enrollment) => (

      <table
        key={enrollment.sid}
        className="table table-striped table-light table-bordered"
      >

        <tbody>

          <tr>

            <td><h6>{enrollment.leadId}</h6></td>

            <td><h6>{enrollment.sid}</h6></td>

            <td><h6>{enrollment.course}</h6></td>

            <td><h6>{enrollment.feepaid}</h6></td>

            <td><h6>{enrollment.feebal}</h6></td>

          </tr>

        </tbody>

      </table>

    ));
  }

  return (

    <div>

      <h5>Total Enrollments : {enrollmentCount}</h5>

      {myenrollsToDisplay}

    </div>

  );

}

export default Enrollments;