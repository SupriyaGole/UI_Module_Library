import React, {useState, useEffect} from "react";

const p1 = new Promise((resolve) => {
  return setTimeout(() => resolve("P1"), 1000);
});
const p2 = new Promise((resolve) => {
  return setTimeout(() => resolve("P2"), 1000);
});
const p3 = new Promise((resolve) => {
  return setTimeout(() => resolve("P3"), 1000);
});
const p4 = new Promise((resolve) => {
  return setTimeout(() => resolve("P4"), 2000);
});

const ParallelPromise = ({limit}) => {
  const allPromises = [p1, p2, p3, p4];
  const initialParallelPromises = allPromises.slice(0, limit);
  const [result, setResult] = useState([]);
  const [pendingPromises, setPendingPromises] = useState([...Array(limit).keys()]);
  const [lastPromise, setLastPromise] = useState(initialParallelPromises[initialParallelPromises.length -1]);

  useEffect(() => {
    initialParallelPromises.forEach((promise) => {
      promise.then((resolved) => {
        const promiseIndex = allPromises.indexOf(promise);
        const index = pendingPromises.indexOf(promiseIndex);
        pendingPromises.splice(index, 1);

        setPendingPromises([...pendingPromises]);
        setResult((prevResult) => [...prevResult, resolved]);
      });
    });
  }, []);

  const getNextPromise = (promises, currentPromise) => {
    const index = promises.indexOf(currentPromise);
    if (index === promises.length - 1) return null;
    return promises[index + 1];
  };

  useEffect(() => {
    if (pendingPromises.length <= 1) {
      const nextPromise = getNextPromise(allPromises, lastPromise);
      if (nextPromise) {
        setPendingPromises([...pendingPromises, allPromises.indexOf(nextPromise)]);
        setLastPromise(nextPromise);

        nextPromise.then((resolved) => {
          const nextPromiseIndex = allPromises.indexOf(nextPromise);
          const index = pendingPromises.indexOf(nextPromiseIndex);
          pendingPromises.splice(index, 1);

          setPendingPromises(pendingPromises);
          setResult((prevResult) => [...prevResult, resolved]);
        });
      }
    }
  }, [pendingPromises]);


  return (<div>
    <p>Print promises as they resolve</p>
    {result.map(item => (<p key={item}>{item}</p>))}
  </div>);
};

export default ParallelPromise;
