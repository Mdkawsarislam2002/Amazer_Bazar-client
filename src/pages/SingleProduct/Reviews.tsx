import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ReviewsProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Reviews: FC<ReviewsProps> = ({ ...rest }) => {
    return <div {...rest}>index</div>;
};