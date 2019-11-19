import { Card } from 'antd';
import { TemplateEntities } from 'entities/template';
import { EnumComponentsTypes } from 'enums';
import update from 'immutability-helper';
import { BindAll } from 'lodash-decorators';
import { inject, observer } from 'mobx-react';
import React from 'react';
import Source from '../drop/source';
import Drop from '../drop/drop';

export interface IAppProps {
    TemplateExample?: TemplateEntities;
}
@inject('TemplateExample')
@observer
@BindAll()
export default class App extends React.Component<IAppProps> {
    moveCard(dragIndex: number, hoverIndex: number) {
        const { TemplateExample } = this.props;
        const data = TemplateExample.dataSource[dragIndex];
        TemplateExample.onUpdate(update([...TemplateExample.dataSource], {
            $splice: [[dragIndex, 1], [hoverIndex, 0, data]],
        }))
        console.log("TCL: App -> moveCard -> dragIndex")

    }
    public render() {
        const { TemplateExample } = this.props;
        return TemplateExample.dataSource.filter(Boolean).map((item, index) => {
            return <Source key={item.key} index={index} type={EnumComponentsTypes.LayoutSource} moveCard={this.moveCard}>
                <Card title={item.key} extra={<a href="#">More</a>} style={{ width: '100%' }}>
                    <Drop
                        type={EnumComponentsTypes.DataEntry}
                        // onDrop={this.props.TemplateExample.onPush}
                    >
                        <div style={{ height: 50 }}>

                        </div>
                    </Drop>
                </Card>
            </Source>
        })
    }
}
