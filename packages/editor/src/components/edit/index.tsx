import Drop from 'components/drop/drop';
import { TemplateEntities } from 'entities/template';
import { EnumComponentsTypes } from 'enums';
import { inject } from 'mobx-react';
import React from 'react';
import Layout from './layout';
import styles from './style.module.less';
export interface IAppProps {
    TemplateExample?: TemplateEntities;
}
@inject('TemplateExample')
export default class App extends React.Component<IAppProps> {
    ref = React.createRef<HTMLDivElement>();
    componentDidMount() {
        // console.log(dragula)
        // dragula([this.ref.current])
    }
    onDrop(item) {
        console.log("TCL: App -> handleDrop -> item", item)
    }
    public render() {
        return (
            <Drop
                type={EnumComponentsTypes.Layout}
                onDrop={this.props.TemplateExample.onPush}
            >
                <div ref={this.ref} className={styles.edit} >
                    <Layout />
                </div>
            </Drop>
            // <div ref={this.ref} className={styles.edit}>
            //     {/* <Exeample />
            //     <Dustbin /> */}
            //     <div>

            //         <Divider />
            //         <Drop
            //             accepts={["sourceTags", "readyTags"]}
            //             onDrop={item => this.handleDrop(item)}
            //         >
            //             <div style={{ width: 400, height: 200 }}></div>
            //         </Drop>
            //         <Drop
            //             accepts={["sourceTags"]}
            //             onDrop={item => this.handleDrop(item)}
            //         >
            //             <div style={{ width: 400, height: 200 }}></div>
            //         </Drop>
            //     </div>
            // </div>
        );
    }
}
