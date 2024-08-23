import { _decorator, BoxCollider2D, Collider, Collider2D, Component, Contact2DType, IPhysics2DContact, Node, Sprite} from 'cc';
import { enemyControl } from './enemyControl';
const { ccclass, property } = _decorator;

@ccclass('bulletControl')
export class bulletControl extends Component {
    @property
    Current_speed : number = 20;

    start() {
        //3.8需要先注册回调函数，这里使用BEGIN_CONTACT
        let collider = this.getComponent(Collider2D);
        if(collider){
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    update(deltaTime: number) {
        //出屏幕销毁
        if (this.node.position.y > 820){
            this.node.destroy();
        }
    }

    //调用onBeginContact
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if(otherCollider.tag == 1){
            console.log("================碰到了===============");
            //如果碰到敌人，让敌人死亡，销毁自己
            //销毁敌人,这里不用destroy因为很多时候敌人不是直接销毁的
            //而是有其他行为，所以应该通知other死亡即可。
            otherCollider.getComponent(enemyControl).die();
            
            //销毁自己,必须延时销毁，否则回调会报错
            setTimeout(() => {
                this.node.destroy();
            }, 100);
            
        }
        
    }
}



