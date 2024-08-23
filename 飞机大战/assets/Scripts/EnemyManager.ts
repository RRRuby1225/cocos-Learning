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
            //this.node的坐标是enemymanager相对于UICanvas的坐标，也就是（0，400），而我们现在要生成的敌机的父节点是this.node,我们要在this.node位置一横排生成敌机，所以纵坐标是0，横坐标是[-240，240]
            enemy.setPosition(Math.random() * 470 -240 ,0);
        },2);
    }

    update(deltaTime: number) {
        
    }
}


