import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router';

const Home: FC = () => {
  useEffect(() => {
    const history = useHistory();
    console.log(history);
  });

  return <div>home</div>;
};

export default Home;
