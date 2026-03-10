import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import MyContext from "../appContext";

const Lead = ({ lead }) => {

  const [showLeadInfo, setShowLeadInfo] = useState(false);

  const { dispatch } = useContext(MyContext);

  const onShowClick = () => {
    setShowLeadInfo(!showLeadInfo);
  };

  const onDeleteClick = () => {
    console.log("[Lead] delete click");

    dispatch({
      type: "DELETE_LEAD",
      payload: lead.leadId
    });
  };

  return (
    <div className="card card-body mb-3">

      <h4>

        {lead.name} - Interested for {lead.course}

        <i
          onClick={onShowClick}
          className="fas fa-sort-down"
          style={{ cursor: "pointer", color: "green", fontSize: "35px" }}
        />

        <i
          onClick={onDeleteClick}
          className="fas fa-times"
          style={{ cursor: "pointer", float: "right", color: "red" }}
        />

      </h4>

      {showLeadInfo && (
        <ul className="list-group">

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
  lead: PropTypes.object.isRequired
};

export default Lead;