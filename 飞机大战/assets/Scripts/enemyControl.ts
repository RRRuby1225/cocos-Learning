import { _decorator, Component, resources, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('enemyControl')
export class enemyControl extends Component {

    //是否死亡
    isDie : boolean = false;

    start() {
    }

    update(deltaTime: number) {
        //这里可以设置敌机移动的速度
        //我在编辑器里设置的刚体线性速度为-5，这里就不用设置了
        
        if (this.node.position.y < -800){
            this.node.destroy();
        }
    }
    
    //死亡
    die(){
        this.isDie = true;

        //加载飞机爆炸图片
        //动态加载资源是真的坑！！！！！加载图片需要指定资源类型 /spriteFrame
        resources.load("enemy0_die/spriteFrame", SpriteFrame,(err,res)=>{
            this.node.getComponent(Sprite).spriteFrame = res;
        });
        
        //同样必须延时销毁
        setTimeout(() => {
            this.node.destroy();
        }, 300);
    }
}


