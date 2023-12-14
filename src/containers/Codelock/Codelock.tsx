import { RootState } from '../../app/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { add, check, deleteSymbol, reset } from './codelockSlice.ts';

const Codelock = () => {
  const codelockValue = useSelector((state: RootState) => state.codelock.value);
  const numbersDisabled = useSelector(
    (state: RootState) => state.codelock.isNumbersDisabled,
  );
  const checkDisabled = useSelector(
    (state: RootState) => state.codelock.isCheckDisabled,
  );
  const deleteDisabled = useSelector(
    (state: RootState) => state.codelock.isDeleteDisabled,
  );
  const dispatch = useDispatch();
  const btnStyle = 'basis-1/3 border rounded p-1 disabled:bg-neutral-300';

  const handleClick = () => {
    dispatch(check());
    setTimeout(() => dispatch(reset()), 2000);
  };

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
            disabled={numbersDisabled}
          >
            7
          </button>
          <button
            onClick={() => dispatch(add(8))}
            className={btnStyle}
            type="button"
            disabled={numbersDisabled}
          >
            8
          </button>
          <button
            onClick={() => dispatch(add(9))}
            className={btnStyle}
            type="button"
            disabled={numbersDisabled}
          >
            9
          </button>
          <button
            onClick={() => dispatch(add(4))}
            className={btnStyle}
            type="button"
            disabled={numbersDisabled}
          >
            4
          </button>
          <button
            onClick={() => dispatch(add(5))}
            className={btnStyle}
            type="button"
            disabled={numbersDisabled}
          >
            5
          </button>
          <button
            onClick={() => dispatch(add(6))}
            className={btnStyle}
            type="button"
            disabled={numbersDisabled}
          >
            6
          </button>
          <button
            onClick={() => dispatch(add(1))}
            className={btnStyle}
            type="button"
            disabled={numbersDisabled}
          >
            1
          </button>
          <button
            onClick={() => dispatch(add(2))}
            className={btnStyle}
            type="button"
            disabled={numbersDisabled}
          >
            2
          </button>
          <button
            onClick={() => dispatch(add(3))}
            className={btnStyle}
            type="button"
            disabled={numbersDisabled}
          >
            3
          </button>
          <button
            onClick={() => dispatch(deleteSymbol())}
            className={btnStyle}
            type="button"
            disabled={deleteDisabled}
          >
            del
          </button>
          <button
            onClick={() => dispatch(add(0))}
            className={btnStyle}
            type="button"
            disabled={numbersDisabled}
          >
            0
          </button>
          <button
            onClick={handleClick}
            className="basis-1/3 border rounded p-1 disabled:bg-neutral-300 enabled:bg-emerald-300"
            disabled={checkDisabled}
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
