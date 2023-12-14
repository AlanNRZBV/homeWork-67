import { RootState } from '../../app/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './codelockSlice.ts';
import { useEffect, useState } from 'react';

const Codelock = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [readyToCheck, setReadyToCheck] = useState(true);

  const codelockValue = useSelector((state: RootState) => state.codelock.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (codelockValue.length === 4) {
      setIsDisable((prevState) => !prevState);
      setReadyToCheck((prevState) => !prevState);
      console.log('DISABLED');
    }
  }, [codelockValue.length]);

  const btnStyle = 'basis-1/3 border rounded p-1 disabled:bg-neutral-300';

  return (
    <>
      <div className="flex flex-col border rounded mt-5 mx-auto p-1">
        <div className="border rounded mb-3 h-12 flex-none">
          <span>{codelockValue}</span>
        </div>
        <div className="flex flex-wrap border rounded p-2">
          <button
            onClick={() => dispatch(add(7))}
            className="basis-1/3 border rounded p-1 disabled:bg-neutral-300"
            type="button"
            disabled={isDisable}
          >
            7
          </button>
          <button
            onClick={() => dispatch(add(8))}
            className={btnStyle}
            type="button"
            disabled={isDisable}
          >
            8
          </button>
          <button
            onClick={() => dispatch(add(9))}
            className={btnStyle}
            type="button"
            disabled={isDisable}
          >
            9
          </button>
          <button
            onClick={() => dispatch(add(4))}
            className={btnStyle}
            type="button"
            disabled={isDisable}
          >
            4
          </button>
          <button
            onClick={() => dispatch(add(5))}
            className={btnStyle}
            type="button"
            disabled={isDisable}
          >
            5
          </button>
          <button
            onClick={() => dispatch(add(6))}
            className={btnStyle}
            type="button"
            disabled={isDisable}
          >
            6
          </button>
          <button
            onClick={() => dispatch(add(1))}
            className={btnStyle}
            type="button"
            disabled={isDisable}
          >
            1
          </button>
          <button
            onClick={() => dispatch(add(2))}
            className={btnStyle}
            type="button"
            disabled={isDisable}
          >
            2
          </button>
          <button
            onClick={() => dispatch(add(3))}
            className={btnStyle}
            type="button"
            disabled={isDisable}
          >
            3
          </button>
          <button className={btnStyle} type="button">
            del
          </button>
          <button
            onClick={() => dispatch(add(0))}
            className={btnStyle}
            type="button"
            disabled={isDisable}
          >
            0
          </button>
          <button
            className="basis-1/3 border rounded p-1 disabled:bg-neutral-300 enabled:bg-emerald-300"
            disabled={readyToCheck}
            type="button"
          >
            E
          </button>
        </div>
      </div>
    </>
  );
};

export default Codelock;
