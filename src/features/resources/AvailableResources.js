import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getResources } from "./availableResourcesSlice";
import styles from "./AvailableResources.module.css";

export function AvailableResources() {
  const resources = useSelector((state) => state.resources);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResources());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2>Available Resources</h2>
      <ul>
        {Object.keys(resources).map((key) => (
          <li key={key}>
            <strong>{`${key.toUpperCase()}: `}</strong>
            {`${resources[key]}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
