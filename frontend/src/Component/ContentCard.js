import React from "react";
import { Card } from "antd";
import { convertEpochToDate } from "../Helper/epochConveter";
import Taglabel from "./Taglabel";

const { Meta } = Card;

const ContentCard = ({ description, img, date }) => {
    return (
        <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="img" src={img} />}
        >
            <Meta description={<Taglabel text={description} weight={1000} />} />
            <Meta description={convertEpochToDate(date)} />
        </Card>
    );
};

export default ContentCard;
