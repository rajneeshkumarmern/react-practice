import React, { useState } from "react";
import PropTypes from "prop-types";

const Lead = ({ lead, mydeleteClickHandler }) => {

  const [showLeadInfo, setShowLeadInfo] = useState(false);

  const onShowClick = () => {
    setShowLeadInfo(!showLeadInfo);
  };

  return (
    <div className="card card-body mb-4">

      <h4>
        {lead.name} - Interested for {lead.course}

        <i
          onClick={onShowClick}
          className="fas fa-sort-down"
          style={{ cursor: "pointer", color: "green", fontSize: "50px" }}
        />

        <i
          onClick={mydeleteClickHandler}
          className="fas fa-times"
          style={{ cursor: "pointer", float: "right", color: "red" }}
        />

      </h4>

      {showLeadInfo && (
        <ul className="list-group display-6">
          <li className="list-group-item">
            Email : {lead.email}
          </li>
          <li className="list-group-item">
            Phone : {lead.phone}
          </li>
        </ul>
      )}

    </div>
  );
};

Lead.propTypes = {
  lead: PropTypes.object.isRequired,
  mydeleteClickHandler: PropTypes.func.isRequired
};

export default Lead;