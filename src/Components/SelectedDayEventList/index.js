import React                    from 'react';
import PropTypes                from 'prop-types';
import moment                   from 'moment';
import SelectedDayEventListItem from '../SelectedDayEventListItem';
import styles                   from './SelectedDayEventList.module.sass';

function SelectedDayEventList(props) {
  const { selectedDayEvents: { date, events } } = props;
  const { selectedDayEventList, selectedDayHeader } = styles;
  const eventsComponents = events.map(
      event => <SelectedDayEventListItem event={event}/> );
  return (
      <>
        <h3 className={selectedDayHeader}>{moment( date )
            .format( 'dddd, DD MMMM' )}</h3>
        <ul className={selectedDayEventList}>
          {eventsComponents}
        </ul>
      </>
  );
}

SelectedDayEventList.propTypes = {
  selectedDayEvents: PropTypes.object.isRequired
};

export default SelectedDayEventList;