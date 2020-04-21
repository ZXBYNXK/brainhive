import React from "react";
import Form from "../Form";
import { resourceInputs } from "../../mock/inputs";

function ShareResourcePage() {

return (
    <div className="ShareResourcePage">
    <h1>Share a resource</h1>
      <Form
        styleRef={"Form"}
        inputs={resourceInputs}
        afterSubmit={() => {}}
        submitText={"Submit Resource"}
      />
    </div>
  );

}

export default ShareResourcePage;
