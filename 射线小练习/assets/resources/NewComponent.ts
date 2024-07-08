import { _decorator, Component, geometry, Mask, Node, physics, PhysicsSystem, PhysicsSystem2D, v2, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NewComponent')
export class NewComponent extends Component {
    //定义初始方向
    dir = v2(0,1);
    start() {
        //定义初始位置
        this.node.setPosition(0,0);
    }

    update(deltaTime: number) {
        let pos = this.node.position;
        //移动 x轴不变我直接简写了，y轴为pos.y每次加上y轴方向*速度100*dt(把每帧100变成每秒100)
        this.node.setPosition(pos.x , pos.y + this.dir.y *100 *deltaTime);

        //射线检测
        //3.8开始射线检测要用世界坐标系
        let start = new Vec2(this.node.getWorldPosition().x,this.node.getWorldPosition().y);
        let end = new Vec2(start.x , start.y + this.dir.y*80);//射线长度设为80
        let res = PhysicsSystem2D.instance.raycast(start,end);
        
        if(res.length==1){
            this.dir.y *=-1;
        }
    
    
    
    }
}

