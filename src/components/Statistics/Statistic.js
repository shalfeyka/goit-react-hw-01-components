import { List, Section, StatisticsItem } from "./Statistics.styled";
import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
    return (
        <Section>
            {/* <Title>Upload stats</Title>  я если честно не могу понять типа это надо удалить))*/}
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
  data: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }) 
}
