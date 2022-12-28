import { List, Title, Section, StatisticsItem } from "./Statistics.styled";
import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
    return (
        <Section>
        {/* <Title>Upload stats</Title>  */}
        {data.title ?
          (<Title>{data.title}</Title>)
          : (<Title>Upload stats</Title>)
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

// const Mailbox = ({ username, unreadMessages }) => {
//   return (
//     <div>
//       <h1>Hello {username}</h1>
//       {unreadMessages.length > 0 ? (
//         <p>You have {unreadMessages.length} unread messages.</p>
//       ) : (
//         <p>No unread messages.</p>
//       )}
//     </div>
//   );
// };

Statistics.protoTypes = {
  data: PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }) 
}
