import React from 'react';
import {useSelector} from 'react-redux';

const Error = () => {
  const {error} = useSelector((state) => state.APP);

  return (
    <div>
      <button>{error}, try again</button>
    </div>
  );
};

export default Error;
