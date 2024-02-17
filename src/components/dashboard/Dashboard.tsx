import { DyanmicForms } from "../common/complex.forms/Dynamic.forms";
import { fields } from "../common/complex.forms/data";


export const Dashboard=()=> {
    return (
      <div className="App">
        <h1>Dynamic form</h1>
        <DyanmicForms fields={fields} />
      </div>
    );
  }