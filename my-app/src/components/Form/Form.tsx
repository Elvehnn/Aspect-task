import { useForm } from 'react-hook-form';
import './Form.scss';
import { useAppDispatch } from '../../store/hooks';

type FormInputs = {
  path: string;
  newValue: string;
};

const Form = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    const pathArray = data.path.split(/[.[\]]/g).filter((item) => item);

    dispatch({
      type: 'content/change',
      payload: {
        path: pathArray,
        newValue: data.newValue,
      },
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Path
        <input {...register('path')} className="form__path-input" />
      </label>
      <label>
        New value
        <input {...register('newValue')} className="form__new-value-input" />
      </label>

      <input className="form__submit" type="submit" value="Apply" />
    </form>
  );
};

export default Form;
