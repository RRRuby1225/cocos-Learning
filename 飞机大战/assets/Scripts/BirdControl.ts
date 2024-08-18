import { _decorator, Collider2D, Component, Contact2DType, IPhysics2DContact, Node, RigidBody2D, v2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BirdControl')
export class BirdControl extends Component {
    start() {
        // 注册单个碰撞体的回调函数
            let collider = this.getComponent(Collider2D);
            if (collider) {
                // 只在两个碰撞体开始接触时被调用一次
                collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
                }
        }

    fly(){
        this.node.getComponent(RigidBody2D).linearVelocity=v2(0,10);
    }

    update(deltaTime: number) {
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.tag == 1){
            console.log("加分");
        }else{
            console.log("死亡");
        }
    }
}


