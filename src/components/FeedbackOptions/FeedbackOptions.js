import PropTypes from 'prop-types';
import { BtnBox, Buttons } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnBox>
      {options.map(option => (
        <Buttons key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Buttons>
      ))}
    </BtnBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
