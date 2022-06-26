import { useForm } from 'react-hook-form';
import './Form.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button, Label, Panel } from '../../store/interfaces';

type FormInputs = {
  path: string;
  newValue: string;
};

const Form = () => {
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => {
    const pathArray = data.path.split(/[.[\]]/g).filter((item) => item);

    const newContent = [...content];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore element implicitly has an 'any' type
    const destination = pathArray.slice(1, -1).reduce((acc, index) => acc[index], newContent);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore element implicitly has an 'any' type
    // destination[pathArray.slice(-1)] = 'new test';
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore element implicitly has an 'any' type
    console.log(destination[pathArray.slice(-1)]);
    // console.log(content[`3[content]`]);
    // console.log(content[`3`][`content`]);
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
