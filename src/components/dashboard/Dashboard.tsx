import { DyanmicForms } from "../common/Dynamic.forms";
import { fields } from "../common/data";

export const Dashboard=()=> {
    return (
      <div className="App">
        <h1>Dynamic form</h1>
        <DyanmicForms fields={fields} />
      </div>
    );
  }