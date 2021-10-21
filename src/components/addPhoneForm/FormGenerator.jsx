import React from 'react';

const FormGenerator = ({obj, formikSettings = {}}) => {
  const {handleChange, handleBlur, errors, touched, values} = formikSettings ;
  const entries = Object.entries(obj);

  const getTypeFromValue = (entry) => {
    let type 
    if(entry[0] === 'email'){
      type = 'email'
    }
    if(typeof entry[1] === 'string'){
      type = 'text'
    }
    if(typeof entry[1] === 'number'){
      type = 'number'
    }

    return type;
  };
  
  return (
    <>
    {
      entries.map(entry => {
        if(entry[0] === 'id' || entry[0] === '_id'){
          return(null);
        }else{
          return (
            <React.Fragment key={entry[0]}>
              <label className="add-form__label capitalize" htmlFor={entry[0]}>{entry[0]}</label>
              <input
                type={getTypeFromValue(entry)}
                name={entry[0]}
                onChange={handleChange}
                onBlur={handleBlur}
                readOnly={entry[0] === 'imageFileName'}
                value={values[entry[0]]}
                className="add-form__input"
              />
              <p className="add-form__error">{errors[entry[0]] && touched[entry[0]] && errors[entry[0]]}</p>

            </React.Fragment>
          )
        }
      })
    }
    </>
  )
}

export default FormGenerator;


