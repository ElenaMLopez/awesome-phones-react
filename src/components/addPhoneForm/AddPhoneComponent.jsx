import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { generateId } from '../../services/generator';
import FormGenerator from './FormGenerator';
import { formikErrorManager } from '../../services/formUtils';
import { validationSettings } from '../../constants/formValidationConstants';
import { v4 as uuidv4 } from 'uuid';

// const AddPhoneForm = () => (
//   <>
//     <h1>Add a new phone</h1>
//     <Formik
//       initialValues = {{
//         id: uuidv4(),
//         name: '',
//         manufacturer: '',
//         description: '',
//         color: '',
//         price: 0,
//         imageFileName: '',
//         screen: '',
//         processor: '',
//         ram: 0,
//       }}
//       validate={ values => {
//         const errors = {};
//         if (!values.name) {
//           errors.name = 'Please insert a phone name'
//         } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/i.test(values.name)) {
//           errors.name = 'Invalid name';
//         } 
//         return errors;
//       }}
//       onSubmit = {(values, { setSubmitting: setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400)
//       }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//         }) => (
//           <form onSubmit={ handleSubmit}>
//             <input 
//               type="text" 
//               name="phoneName" 
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.name} 
//             />
//             {errors.name && touched.name && errors.name}
//             <button type="submit" disabled={isSubmitting}>
//              Submit
//            </button>
//           </form>
//         )}

//       </Formik>
//   </>
// )
const AddPhoneForm = () => {
  const phones = useSelector(store => store.phones.phones)
  const customId = generateId(phones)

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
  }

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues = {{
                   id: customId,
                   name: '',
                   manufacturer: '',
                   description: '',
                   color: '',
                   price: 0,
                   imageFileName: 'https://media.istockphoto.com/vectors/smartphone-with-app-icons-vector-id511991248?k=6&m=511991248&s=612x612&w=0&h=CcU-fsebKpX4zlzoAbCNl-0ei9CZMukbo6KM4exarNk=',
                   screen: '',
                   processor: '',
                   ram: 0,
        }}
        enableReinitialize={false}
        validate={values => {
          
          return formikErrorManager(values, validationSettings)
          // const errors = {};
          // if (!values.name) {
          //   errors.name = 'Required';
          // } else if (
          //   !/^[a-zA-ZÀ-ÿ\s]{1,40}$/i.test(values.name)
          // ) {
          //   errors.name = 'Invalid field';
          // }
          // if (!values.manufacturer) {
          //   errors.manufacturer = 'Required';
          // } else if (
          //   !/^[a-zA-ZÀ-ÿ\s]{1,40}$/i.test(values.manufacturer)
          // ) {
          //   errors.manufacturer = 'Invalid field';
          // }
          // if (!values.description) {
          //   errors.description = 'Required';
          // } else if (
          //   !/^[a-zA-ZÀ-ÿ\s]{1,40}$/i.test(values.description)
          // ) {
          //   errors.description = 'Invalid field';
          // }
          // if (!values.color) {
          //   errors.color = 'Required';
          // } else if (
          //   !/^[a-zA-ZÀ-ÿ\s]{1,40}$/i.test(values.color)
          // ) {
          //   errors.color = 'Invalid field';
          // }
          // if (!values.price) {
          //   errors.price = 'Required';
          // } else if (
          //   !/^\d+(,\d{1,2})?$/i.test(values.price)
          // ) {
          //   errors.price = 'Invalid field';
          // }
          // if (!values.screen) {
          //   errors.screen = 'Required';
          // } else if (
          //   !/^[a-zA-ZÀ-ÿ\s]{1,40}$/i.test(values.screen)
          // ) {
          //   errors.screen = 'Invalid field';
          // }
          // if (!values.ram) {
          //   errors.ram = 'Required';
          // } else if (
          //   !/^\d+(,\d{1,2})?$/i.test(values.ram)
          // ) {
          //   errors.ram = 'Invalid field';
          // }
          
          // return errors;
        }
  
      }
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            console.log(JSON.stringify(values, null, 2))
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormGenerator 
              obj={phones[0]}
              formikSettings={{handleBlur,handleChange,errors,touched,values}}
            />
            
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>

    </div>
  )
} ;


export default AddPhoneForm;