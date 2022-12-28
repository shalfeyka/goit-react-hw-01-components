import { List, Title, Section, StatisticsItem } from "./Statistics.styled";
import PropTypes from 'prop-types';

export const Statistics = ({ data, title }) => {
    return (
        <Section>
        {data.title ?
          (<Title>{data.title}</Title>)
          : (<Title>{title}</Title>)
        }
                <List>
                 {data.map( item => 
                    <StatisticsItem key={item.id}>
                         <span>{item.label}</span>
                         <span>{item.percentage}%</span>
                    </StatisticsItem>
                        )}
                </List>
        </Section>
    );
};

Statistics.protoTypes = {
    title: PropTypes.string,
    data: PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }) 
}
