import { useState } from "react";

function Leads() {

  const [leadCount] = useState(5);

  const [leadShow] = useState(true);

  const [leadList] = useState([
    { leadId:101,name:'Sri',email:'sri@jlc',phone:11111,course:'Angular'},
    { leadId:102,name:'Vas',email:'vas@jlc',phone:22222,course:'React'},
    { leadId:103,name:'Sri',email:'sri@jlc',phone:11111,course:'Angular'},
    { leadId:104,name:'Vas',email:'vas@jlc',phone:22222,course:'React'},
    { leadId:105,name:'Sri',email:'sri@jlc',phone:11111,course:'Angular'},
  ]);

  let myleadsToDisplay = null;

  if (leadShow === true) {

    myleadsToDisplay = leadList.map((lead) => (

      <table
        key={lead.leadId}
        className="table table-striped table-light table-bordered"
      >

        <tbody>

          <tr>

            <td><h6>{lead.leadId}</h6></td>

            <td><h6>{lead.name}</h6></td>

            <td><h6>{lead.email}</h6></td>

            <td><h6>{lead.phone}</h6></td>

            <td><h6>{lead.course}</h6></td>

          </tr>

        </tbody>

      </table>

    ));
  }

  return (

    <div>

      <h5>Total Leads : {leadCount}</h5>

      {myleadsToDisplay}

    </div>

  );

}

export default Leads;