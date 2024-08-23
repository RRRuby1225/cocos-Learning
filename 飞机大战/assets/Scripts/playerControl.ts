import { _decorator, Component, director, Input, input, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('playerControl')
export class playerControl extends Component {

    @property(Prefab)
    bulletPre : Prefab = null;

    start() {

        //事件监听 鼠标移动
        this.node.on(Node.EventType.TOUCH_MOVE,(event)=>{
            let pos = event.getUILocation();//用UI坐标
            this.node.setPosition(pos.x-240,pos.y-400);//屏幕的（0，0）点在左下角，所以需要减去一半的长和宽
        });

        //攻击 计时器
        this.schedule(()=>{
            //创建子弹
            let bullet = instantiate(this.bulletPre);
            bullet.setParent(this.node.getParent());
            //子弹位置
            let pos = this.node.getPosition();
            bullet.setPosition(pos.x,pos.y+60);
            

        },0.5);

        //开启碰撞检测(在ui勾选的)
        
    }

    update(deltaTime: number) {
        
    }
}


