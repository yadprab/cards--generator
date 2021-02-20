import React, { useContext } from "react";
import { Column } from "./aside/Column";
import { Box } from "./aside/Box";

import { dataContext } from "./conetext";
import { SkeletonInput } from "../Skeleton";
import {Button} from './aside/Button'
import {ButtonSkl} from '../Buttonskl'
import {Select} from './aside/Select'
import {Text} from './aside/Text'
import {TextArea} from './aside/TextArea'


function Aside() {
  const { Loading, StyleObject } = useContext(dataContext);

  return (
    <>
      <aside>
        <Text />
        {Loading ? <SkeletonInput /> : <Column />}
        {Loading ? <SkeletonInput /> : <Select />}

        {Loading ? <SkeletonInput /> : <Box />}
        {Loading ? <ButtonSkl /> : <Button value="get code" />}
        {StyleObject.code ? <TextArea /> : null}
      </aside>
    </>
  );
}

export { Aside };
