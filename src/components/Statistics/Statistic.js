import { List, Title, Section, StatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ data, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {data.map(item => (
          <StatisticsItem key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </StatisticsItem>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
