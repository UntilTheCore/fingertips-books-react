import Layout from 'components/Layout';
import React from 'react';
import Nav from 'components/Nav';
import { useRecord } from 'hooks/useRecord';
import { useTags } from '../hooks/useTags';

const Bill = () => {
    const { records } = useRecord();
    console.log(records);
    const { findTagName } = useTags(null);
    let arrList: any = [];
    records?.forEach((item) => {
        arrList.push(
            <div key={ item.createAt }>{ findTagName(item.tag, item.type) }</div>
        );
    });
    console.log(arrList);
    return (
        <Layout footerSlot={ <Nav /> }>
            {/*<div>{ JSON.stringify(records) }</div>*/ }
            { arrList }
        </Layout>
    );
};

export default Bill;