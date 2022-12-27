import { Title, List, Section, StatisticsItem } from "./Statistics.styled";

export const Statistics = ({ data }) => {
    return (
        <Section>
            <Title>Upload stats</Title>
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

