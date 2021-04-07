
import React from 'react';
import { Table, Tag, Space, Button } from 'antd';

const { Column} = Table;


const product=(props) =>
    {
      return(
          <div className ="">
<Table className="pt-20 p-8 w-auto content-center" >

  <Column title="Id" dataIndex="firstName" key="firstName" />
  <Column title="Name" dataIndex="lastName" key="lastName" />

<Column title="category" dataIndex="age" key="age" />
<Column title="Created_at" dataIndex="address" key="address" />

<Column
  title="Action"
  key="action"
  
/>
</Table>

          </div>
      )
    }
    export default(product)