import PropTypes from 'prop-types';
import { Stats, StatBox } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatBox>
      <Stats>Good: {good}</Stats>
      <Stats>Neutral: {neutral}</Stats>
      <Stats>Bad: {bad}</Stats>
      <Stats>Total: {total}</Stats>
      <Stats>Positive feedbacks: {positivePercentage}%</Stats>
    </StatBox>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
