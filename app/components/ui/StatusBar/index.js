import React from 'react';
import PropTypes from 'prop-types';

import Text from 'components/ui/Text';

import Bar from './Bar';
import Status from './Status';

function StatusBar({ percentage }) {
  return (
    <Bar alignItems="center">
      <Status
        alignItems="center"
        justifyContent="flex-end"
        percentage={percentage}
      >
        {percentage > 10 && <Text padding="sm">{Math.round(percentage)}%</Text>}
      </Status>

      {percentage < 10 && <Text padding="sm">{Math.round(percentage)}%</Text>}
    </Bar>
  );
  // return (
  //   <div className={classes.wrapper}>
  //     <div className={classes.progress}>
  //       {percentage !== 0 && (
  //         <p
  //           className={classNames([classes.text, classes.textInside])}
  //         >{`${Math.round(percentage)}%`}</p>
  //       )}
  //     </div>
  //     {percentage < 10 && (
  //       <p
  //         className={classNames([classes.text, classes.textOutside])}
  //       >{`${Math.round(percentage)}%`}</p>
  //     )}
  //   </div>
  // );
}

StatusBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default StatusBar;
