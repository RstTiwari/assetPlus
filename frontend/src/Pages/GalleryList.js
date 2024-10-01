import React, { useEffect, useState } from "react";
import { Row, Col, Input, Button, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import contentData from "../Data/content";
import ContentCard from "../Component/ContentCard";
import Taglabel from "../Component/Taglabel";
import { useNavigate } from "react-router-dom";
import { apiCall } from "../Api/api";

const GalleryList = () => {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [filteredContent, setFilteredContent] = useState(contentData); // State for filtered content

    const handleSearchPost = (event) => {
        const query = event.target.value.toLowerCase(); // Get the search query
        setSearchQuery(query);

        // Filter content based on search query
        const filtered = contentData.filter(
            (content) => content.description.toLowerCase().includes(query) // Adjust the filtering logic as needed
        );

        setFilteredContent(filtered); // Update the state with filtered content
    };
    const getContentData = async () => {
        let response = await apiCall("get", "read", {});
        if (response.success) {
            setFilteredContent(response?.data);
        }
    };
    useEffect(() => {
        getContentData();
    }, []); // as now filtering on fronend side

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px 0",
            }}
        >
            {/* Container with width 80vw */}
            <div style={{ width: "80vw" }}>
                {/* First Row: Button on left, Text in center, Search on right */}
                <Row
                    gutter={[16, 16]}
                    justify="space-between"
                    align="middle"
                    style={{ marginBottom: 16 }}
                >
                    <Col xs={6} sm={4} onClick={() => navigate("/contnet")}>
                        <Button icon={<PlusOutlined />} />
                    </Col>
                    <Col
                        xs={12}
                        sm={8}
                        style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                        <Taglabel text={"Content Gallery"} weight={800} />
                    </Col>
                    <Col xs={6} sm={8}>
                        <Input
                            placeholder="SEARCH"
                            onChange={handleSearchPost}
                        />
                    </Col>
                </Row>
                <Divider />

                {/* Second Row: Content Section */}
                <Row
                    gutter={[16, 16]}
                    justify="center"
                    style={{ width: "80vw" }}
                >
                    {filteredContent.map((content, index) => (
                        <Col
                            key={index}
                            xs={24} // 1 card on small screens (xs)
                            sm={12} // 2 cards on medium screens (sm)
                            lg={8} // 3 cards on large screens (lg)
                        >
                            <ContentCard
                                description={content?.description}
                                img={content?.image}
                                date={content?.date}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default GalleryList;
