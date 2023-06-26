import { Div, Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

// Компонент фільтрації контактів
const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  // Обробник зміни значення фільтра
  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <Div>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </Div>
  );
};

export default Filter;
