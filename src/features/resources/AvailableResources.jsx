import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getResources } from "./availableResourcesSlice";
import styles from "./AvailableResources.module.css";
import Card from "./components/Card";

export function AvailableResources() {
  const resources = useSelector((state) => state.resources);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResources());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {Object.keys(resources).map((key) => (
        <Card
          key={key}
          title={key}
          text={`Browse all Rick and Morty ${key}.`}
        />
      ))}
    </div>
  );
}
