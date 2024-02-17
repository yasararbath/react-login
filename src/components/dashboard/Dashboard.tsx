import { DyanmicForms } from "../common/complex.forms/Dynamic.forms";
import { DyanmicForms as SimpleForm } from "../common/forms/Dynamic.forms";
import { fields } from "../common/complex.forms/data";
import { fields as simpleFormFields } from "../common/forms/data";
import './Dashboard.css'
import { useState } from "react";

export const Dashboard=()=> {
  const [typeForm, SetTypeForm]= useState('');
    return (
      <div className="dashboard">
       <div className={typeForm ? 'header-tag' : ''}>
       <h1>{typeForm ? typeForm.toUpperCase() : 'DYNAMIC'} FORM</h1>
        { typeForm && <div><button className="button" onClick={e=>{SetTypeForm('')}}>Back</button></div>}
       </div>
        {!typeForm && <div  className="button-container">
          <span className="button" onClick={e=>{SetTypeForm('simple')}} >Simple</span>
          <span className="button" onClick={e=>{SetTypeForm('complex')}}>Complex</span>
        </div>}
        { typeForm === 'simple' && <SimpleForm fields={simpleFormFields} />}
        { typeForm === 'complex' && <DyanmicForms fields={fields} />}
      </div>
    );
  }