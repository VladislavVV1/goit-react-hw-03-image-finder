import React from "react";
import { Button } from "./LoadMoreButton.styled";
export const LoadMoreButton = ({onLoadMoreClick}) => (
    <Button className="Button" onClick={onLoadMoreClick}>Load more</Button>
)

