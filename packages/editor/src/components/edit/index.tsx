import React from 'react';
import { Divider } from 'antd';
import styles from './style.module.less';
import Exeample from './sortable/exeample';
import Dustbin from './dustbin/exeample';
import Drag from 'components/drop/drag';
import Drop from 'components/drop/drop';
export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
    ref = React.createRef<HTMLDivElement>();
    componentDidMount() {
        // console.log(dragula)
        // dragula([this.ref.current])
    }
    private handleDrop(item) {
        console.log("TCL: App -> handleDrop -> item", item)
    }
    public render() {
        return (
            <div ref={this.ref} className={styles.edit}>
                {/* <Exeample />
                <Dustbin /> */}
                <div>
                  
                    <Divider />
                    <Drop
                        accepts={["sourceTags", "readyTags"]}
                        onDrop={item => this.handleDrop(item)}
                    >
                        <div style={{ width: 400, height: 200 }}></div>
                    </Drop>
                    <Drop
                        accepts={["sourceTags"]}
                        onDrop={item => this.handleDrop(item)}
                    >
                        <div style={{ width: 400, height: 200 }}></div>
                    </Drop>
                </div>
            </div>
        );
    }
}
