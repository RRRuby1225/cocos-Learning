import { _decorator, Component, EventMouse, input, Input, log} from 'cc';
import { BirdControl } from './BirdControl';
const { ccclass, property } = _decorator;

@ccclass('BgControl')
export class BgControl extends Component {
    //方便在面板修改
    @property
    speed:number = 4;
    @property
    width:number = 228;
    @property({type:BirdControl})
    bird:BirdControl = null;
    
    start() {
        //鼠标事件监听
        for (let item of this.node.children){
            item.on(Input.EventType.MOUSE_DOWN, (event) =>{ // Node.EventType.MOUSE_DOWN报错
                this.bird.fly();
            });
        }
        
    }

    update(deltaTime: number) {
        //背景 （目前有黑线）
        for(let item of this.node.children){
            let x = item.position.x;
            let y = item.position.y;
            //移动
            item.setPosition(x-this.speed*deltaTime,y);
            //循环
            if (x<=-this.width){
                x+=2*this.width-1;//直接在setPosition里赋值有黑线，不-1也有黑线
                item.setPosition(x,y);
            }
        }
    }
}
