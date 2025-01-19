import { _decorator, Component, Node, resources, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PaoJieControl')
export class PaoJieControl extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    //设置表情
    setImage(face:string,mouth:string){
        //加载素材
        resources.load(face, SpriteFrame, (err, sp) => {
            if (err) {
                console.error(`加载 ${face} 失败:`, err);
                return;
            }
            this.node.children[0].getComponent(Sprite).spriteFrame = sp;
            console.log(this.node.children[0]);
        });

        resources.load(mouth, SpriteFrame, (err, sp) => {
            if (err) {
                console.error(`加载 ${face} 失败:`, err);
                return;
            }
            this.node.children[1].getComponent(Sprite).spriteFrame = sp;
        });
    }

}