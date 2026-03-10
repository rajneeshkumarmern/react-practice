import React, { useState } from "react";
import Lead from "./Lead";

const LeadsList = () => {

  const [myleadsList, setMyleadsList] = useState([
    { leadId: 101, name: "Sri", email: "sri@jlc", phone: 12345, course: "Java FSD" },
    { leadId: 102, name: "vas", email: "vas@jlc", phone: 55555, course: "Angular" },
    { leadId: 103, name: "srinivas", email: "srinivas@jlc", phone: 99999, course: "React" }
  ]);

  const deleteMyLead = (leadId) => {
    const myleads = myleadsList.filter(
      (lead) => lead.leadId !== leadId
    );

    setMyleadsList(myleads);
  };

  return (
    <div>

      {myleadsList.map((lead) => (
        <Lead
          key={lead.leadId}
          lead={lead}
          mydeleteClickHandler={() => deleteMyLead(lead.leadId)}
        />
      ))}

    </div>
  );
};

export default LeadsList;