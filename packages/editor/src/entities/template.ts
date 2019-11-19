/**
 * @author 冷 (https://github.com/LengYXin)
 * @email lengyingxin8966@gmail.com
 * @create date 2018-09-12 18:52:54
 * @modify date 2018-09-12 18:52:54
 * @desc [description]
*/
import lodash from 'lodash';
import { action, observable, runInAction } from "mobx";
import { create, persist } from 'mobx-persist';
import globalconfig from 'global.config';
import { BindAll } from 'lodash-decorators';

// {
//     "template": [
//       "Nav0_0",
//       "Banner0_0",
//       "Content0_0",
//       "Content1_0",
//       "Content3_0",
//       "Footer0_0"
//     ],
//     "config": {
//       "Banner0_0": {
//         "dataSource": {
//           "wrapper": { "className": "banner0 k3431fgmr9t-editor_css" }
//         }
//       }
//     },
//     "style": [
//       {
//         "cssString":
//           "#Banner0_0.k3431fgmr9t-editor_css:hover {\n  cursor: crosshair;\n  display: inline-block;\n  left: 100rem;\n  float: left;\n  clear: left;\n  opacity: 0.36;\n  background-color: #f5317f;\n  background-blend-mode: screen;\n}\n",
//         "id": "Bannerkfgmrteditorcss",
//         "cid": "Banner0_0"
//       }
//     ],
//     "other": {},
//     "page": {}
//   }
@BindAll()
export class TemplateEntities {
    constructor() {
        globalconfig.createHydrate('TemplateEntities', this)
    }
    @persist('list')
    @observable
    dataSource = [];

    @action
    onPush(item) {
        console.log("TCL: TemplateEntities -> onPush -> item", item)
        this.dataSource.push({ item, key: lodash.uniqueId(Date.now().toString()) })
    };
    @action
    onRemove(item) {

    }
    @action
    onUpdate(dataSource) {
        this.dataSource = dataSource;
    }
}
export const TemplateExample = new TemplateEntities();