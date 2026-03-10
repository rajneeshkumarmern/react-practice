import React, { useContext } from "react";
import MyContext from "../appContext";
import Lead from "./Lead";

const LeadsList = () => {

  const { myleadsList } = useContext(MyContext);

  return (
    <div>

      {myleadsList.map((lead) => (
        <Lead key={lead.leadId} lead={lead} />
      ))}

    </div>
  );
};

export default LeadsList;