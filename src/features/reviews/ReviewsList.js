import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchReviews,selectError, selectStatus, selectReviews, selectPagination} from './reviewsSlice';
import { Table, message} from 'antd';
import { ReviewsModal } from '../../conponents/ReviewModal';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'ProductId',
    dataIndex: 'productId',
    key: 'productId',
  },
  {
    title: 'Reviwer',
    dataIndex: 'profileName',
    key: 'profileName',
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: 'Summary',
    dataIndex: 'summary',
    key: 'summary',
  },
  {
    title: 'View',
    dataIndex: 'view',
    render: (_, record) =>
    <ReviewsModal review={record}/>
  },
];
export function ReviewsList() {
  const reviewStatus = useSelector(selectStatus);
  const errorMessage = useSelector(selectError);
  const reviews = useSelector(selectReviews);
  const pagination = useSelector(selectPagination);
  const dispatch = useDispatch();

  const handleTableChange = (event) => {
      dispatch(fetchReviews(event))
  };

  useEffect(() => {
    if (reviewStatus === 'init') {
      dispatch(fetchReviews())
    }else if(reviewStatus === 'failed'){
      message.error(errorMessage);
    }
  }, [reviewStatus, errorMessage, dispatch])

  return (
    <div>
        <Table
        columns={columns}
        rowKey={record => record.id}
        dataSource={reviews.reviews}
        pagination={pagination}
        loading={reviewStatus === "loading"}
        onChange={handleTableChange}
      />
    </div>
  );
}


