import React, { useState } from 'react';
import { Modal, Button, Rate, Divider  } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

export const ReviewsModal = ({review}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <EyeOutlined onClick={showModal}/>
      <Modal title={`Review: ${review.summary}`}  
      visible={isModalVisible} 
      onOk={handleOk} 
      onCancel={handleCancel}
      footer={[
        <Button key="close" onClick={handleCancel}>
          Close
        </Button>
      ]}
      >
        <p><strong>Id: </strong>{review.id}</p>
        <Divider />
        <p><strong>ProductId: </strong>{review.productId}</p>
        <Divider />
        <p><strong>Reviewer: </strong>{review.profileName}</p>
        <Divider />
        <p><strong>Score: </strong><Rate defaultValue={review.score} disabled/></p>
        <Divider />
        <p><strong>Review: </strong> </p>
        <Divider />
        <p>{review.text}</p>
      </Modal>
    </>
  );
};