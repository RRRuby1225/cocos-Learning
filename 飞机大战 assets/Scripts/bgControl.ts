import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('bgControl')
export class bgControl extends Component {
    start() {

    }

    update(deltaTime: number) {
        //遍历子物体（即2个背景图片）
        for(let bgNode of this.node.children){
            //移动
            let bg_y = bgNode.position.y;
            bgNode.setPosition(0,bg_y-50*deltaTime);

            //第一张背景完全移动出画面时，就把它放到第二张的上面
            if (bgNode.position.y <= -800){
                bgNode.setPosition(0,800);
            }



        }

    }
}


