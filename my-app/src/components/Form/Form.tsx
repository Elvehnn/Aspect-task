import { useForm } from 'react-hook-form';
import './Form.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { validatePath } from '../../utils/validatePath';
import { ANY_OBJECT_REGEXP } from '../../store/constants';
import { getDestination } from '../../utils/getDestination';
import { getTypeOfValue } from '../../utils/getTypeOfValue';

type FormInputs = {
  path: string;
  newValue: string;
  pathError: string;
  valueError: string;
};

const Form = () => {
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    const pathArray = data.path.split(/[.[\]]/g).filter((item) => item);
    const typeOfValue = getTypeOfValue(data.newValue);
    const validatePathMessage = validatePath(pathArray, content);
    const destination = getDestination(pathArray, content);

    if (!validatePathMessage) {
      let valueErrorMessage = '';

      if (typeof destination === 'boolean' && typeOfValue !== 'boolean') {
        valueErrorMessage = 'Value must be true/false';
      }

      if (typeof destination === 'number' && typeOfValue !== 'number') {
        valueErrorMessage = 'Value must be a number';
      }

      if (typeof destination === 'string' && typeOfValue === 'object') {
        valueErrorMessage = `Value must be a string`;
      }

      if (typeof destination === 'object' && typeOfValue !== 'object') {
        valueErrorMessage = `Value must be an object`;
      }

      if (valueErrorMessage) {
        setError('valueError', {
          type: 'manual',
          message: valueErrorMessage,
        });

        return;
      }

      dispatch({
        type: 'content/change',
        payload: {
          path: pathArray,
          newValue: data.newValue,
          typeOfValue: typeOfValue,
        },
      });

      reset();
      return;
    }

    if (ANY_OBJECT_REGEXP.test(data.newValue) && validatePathMessage !== `Content doesn't exist`) {
      dispatch({
        type: 'content/add',
        payload: {
          path: pathArray,
          newValue: data.newValue,
        },
      });

      reset();
      return;
    }

    setError('pathError', {
      type: 'manual',
      message: validatePathMessage,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row-container">
        <label htmlFor="path">Path</label>
        <div className="column-container">
          <input
            id="path"
            {...register('path', { required: 'Path is required!' })}
            className={errors.path ? `form__path-input error` : `form__path-input`}
            onChange={() => clearErrors(['pathError', 'valueError'])}
          />
          {errors.path && <p>{errors?.path?.message}</p>}
          {errors.pathError && <p>{errors?.pathError?.message}</p>}
        </div>
      </div>
      <div className="row-container">
        <label htmlFor="newValue">New value</label>
        <div className="column-container">
          <input
            id="newValue"
            {...register('newValue', { required: 'Value is required!' })}
            className={errors.newValue ? `error` : ``}
            onChange={() => clearErrors(['pathError', 'valueError'])}
          />
          {errors.newValue && <p>Value is required!</p>}
          {errors.valueError && <p>{errors?.valueError?.message}</p>}
        </div>
      </div>

      <input className="form__submit" type="submit" value="Apply" />
    </form>
  );
};

export default Form;
