import React, { useState } from "react";
import { Form, Input, Upload, Button, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { apiCall } from "../Api/api";

const { TextArea } = Input;

const ContnetCreationForm = ({ form, onFinish }) => {
    const [fileList, setFileList] = useState([]);

    // Handler for the file upload
    const handleChange = async ({ fileList }) => {
        // Sending file to th server
        let response = await apiCall("post", "upload", fileList);
        console.log(response, "===response");
        form.setFiledValue({ image: response?.result });
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            style={{
                width: "80vw",
                margin: "0 auto",
                padding: "20px",
                textAlign: "center",
            }}
        >
            <Row gutter={16}>
                {/* Title and Description on the Right */}
                <Col xs={24} sm={16}>
                    {/* Title Field */}
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: "Please input the title!",
                            },
                        ]}
                    >
                        <Input placeholder="Enter the title" />
                    </Form.Item>

                    {/* Description Field */}
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: "Please input the description!",
                            },
                        ]}
                    >
                        <TextArea
                            rows={4}
                            placeholder="Enter the description"
                        />
                    </Form.Item>
                    <Form.Item label="Poster" valuePropName="fileList">
                        <Upload
                            action="" // Specify the upload endpoint or leave it empty for now
                            listType="picture"
                            fileList={fileList}
                            onChange={handleChange}
                            beforeUpload={() => false} // Disable automatic upload
                        >
                            <Button icon={<UploadOutlined />}>
                                Click to Upload
                            </Button>
                        </Upload>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default ContnetCreationForm;
