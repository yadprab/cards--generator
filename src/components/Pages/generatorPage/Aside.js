import React, { useContext } from "react";
import { Column } from "./aside/Column";
import { Box } from "./aside/Box";

import { dataContext } from "./conetext";
import { SkeletonInput } from "../Skeleton";
import { Button } from "./aside/Button";
import { ButtonSkl } from "../Buttonskl";
import { Select } from "./aside/Select";
import { Text } from "./aside/Text";
import { TextArea } from "./aside/TextArea";

function Aside({ id }) {
  // importing context and  using useContext
  const { Loading, StyleObject } = useContext(dataContext);

  return (
    <>
      <aside>
        <Text />
        {/* checking loading state if loading is true loading skeleton is render else necessary components */}
        {Loading ? <SkeletonInput /> : <Column id={id} />}
        {Loading ? <SkeletonInput /> : <Select id={id} />}
        {Loading ? <SkeletonInput /> : <Box />}
        {Loading ? <ButtonSkl /> : <Button value="get code" />}
        {/* if user clicks get code button this component will appear  */}
        {StyleObject.code ? <TextArea /> : null}
      </aside>
    </>
  );
}

export { Aside };
