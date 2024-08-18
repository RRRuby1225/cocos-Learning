import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PipeControl')
export class PipeControl extends Component {

    @property
    speed:number = 50;

    start() {

    }

    update(deltaTime: number) {
        for(let item of this.node.children){
            let x = item.position.x;
            let y = item.position.y;
            //移动
            item.setPosition(x-this.speed*deltaTime,y);
            //循环
            if (x<=-190){
                x += 288*2;
                y = Math.random()*400+100;//100~500的随机数
                item.setPosition(x,y);
            }
        }
    }
}
