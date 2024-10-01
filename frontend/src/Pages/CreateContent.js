import React from "react";
import { Row, Col, Button, Form } from "antd";
import ContentForm from "../Form/ContentForm"; // Import the form component
import { useNavigate } from "react-router-dom";
import { apiCall } from "../Api/api";

const CreateContent = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    // Function to handle form submission
    const handleSave = () => {
        form.submit(); // Trigger form submission when "Save" is clicked
        // Before Submitt I will uplaod thew image
    };

    const onFinish = async (values) => {
        let response = await apiCall("post", "create", { data: values });
        if (!response.success) {
            console.log("error", response.message);
        }
    };

    return (
        <div style={{ width: "80vw", margin: "0 auto", padding: "20px" }}>
            {/* Row for title and Save button */}
            <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: "20px" }}
            >
                {/* Save button on the left */}
                {/* Spacer on the right to align title in the center */}
                <Col onClick={() => navigate("/")}>
                    <Button>BACK</Button>
                </Col>

                {/* Title in the center */}
                <Col style={{ textAlign: "center", flex: 1 }}>
                    <h2>Create Content</h2>
                </Col>

                <Col>
                    <Button type="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Col>
            </Row>

            {/* Render the ContentForm component */}
            <ContentForm form={form} onFinish={onFinish} />
        </div>
    );
};

export default CreateContent;
