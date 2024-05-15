import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyManager')
export class EnemyManager extends Component {

    @property(Prefab)
    enemyPre :Prefab = null;
    
    start() {
        //每2s创建一个敌机
        this.schedule(()=>{
            //创建敌机
            let enemy = instantiate(this.enemyPre);
            enemy.setParent (this.node);
            let pos = this.node.getPosition();
            enemy.setPosition(Math.random() * 470 -240 ,pos.y-400)//横坐标为[-240,240]，y的减400是试出来的
        },2);
    }

    update(deltaTime: number) {
        
    }
}


