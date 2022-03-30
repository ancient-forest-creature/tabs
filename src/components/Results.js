import React from 'react';

const Results = (props) => {
  const { allTabs, curTabIndex } = props;

  return (
    <div className="results">
      { allTabs[curTabIndex].content }
    </div>
  )
}

export default Results;