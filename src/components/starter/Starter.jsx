import './starter.scss';
import { init } from 'ityped';
import { useRef } from 'react';
import { useEffect } from 'react';

const Starter = () => {
  const ref = useRef();

  useEffect(() => {
    init(ref.current, {
      showCursor: false,
      backDelay: 1500,
      strings: ['Programmer', 'Designer', 'Developer'],
    });
  }, []);
  return (
    <div className="starter">
      <div className="left">
        <div className="starter-container">
          <div className="title">Hi,there.it's me</div>
          <div className="name">Ashik Rana</div>

          <div className="skill">
            Passionate <span ref={ref}></span>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="asset/one-draw.svg" alt="" />
      </div>
    </div>
  );
};

export default Starter;
