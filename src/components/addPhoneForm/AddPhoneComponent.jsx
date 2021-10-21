import { useDispatch, useSelector } from 'react-redux';
import { addPhoneAction } from '../../redux/phones/phonesActions';
import { Formik } from 'formik';
import { generateId } from '../../services/generator';
import FormGenerator from './FormGenerator';
import { formikErrorManager } from '../../services/formUtils';
import { validationSettings } from '../../constants/formValidationConstants';
import Snackbar from '../commons/Snackbar';
import useSnackbar from '../../hooks/useSnackbar';



const AddPhoneForm = () => {
  const phones = useSelector(store => store.phones.phones);
  const customId = generateId(phones);
  const dispatch = useDispatch();
  const { isActive, message, openSnackBar } = useSnackbar();
  const _showSnackBarHandler = () => {
    openSnackBar('You have add a phone');
  }
  return (
    <div className="add-form__container">
      <h1>Add a phone</h1>
      <Formik
        initialValues = {{
                   id: customId,
                   name: '',
                   manufacturer: '',
                   description: '',
                   color: '',
                   price: 0,
                   imageFileName: 'default.jpeg',
                   screen: '',
                   processor: '',
                   ram: 0,
        }}
        enableReinitialize={false}
        validate={values => {
          
          return formikErrorManager(values, validationSettings)
        }
      }
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            _showSnackBarHandler();
            dispatch(addPhoneAction(values));
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
          <form className="add-form__form" onSubmit={handleSubmit}>
            <FormGenerator 
              obj={phones[0]}
              formikSettings={{handleBlur,handleChange,errors,touched,values}}
            />
            <button className="btn add-form__submit-bt" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
      <Snackbar isActive={isActive} message={message} />
 
    </div>
  )
} ;

export default AddPhoneForm;