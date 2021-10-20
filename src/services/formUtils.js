export const formikErrorManager = (values, settings) => {
  const errors = {};

  Object.entries(values).forEach(entry => {

    if (!values[entry[0]] && settings[entry[0]]?.required) {
      errors[entry[0]] = 'Required';
    }
    
    if(settings[entry[0]]?.type === 'text' && 
      !/^[a-zA-ZÀ-ÿ\s]{1,40}$/i.test(values[entry[0]])
    ) {
      errors[entry[0]] = 'Invalid field';
    }

    if(settings[entry[0]]?.type === 'number' && 
      !/^\d+(,\d{1,2})?$/i.test(values[entry[0]])
    ) {
      errors[entry[0]] = 'Invalid field';
    }
  });
  
  return errors;
}