import { _decorator, BoxCollider, BoxCollider2D, Component, Node, resources, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('enemyControl')
export class enemyControl extends Component {
    start() {
    }

    update(deltaTime: number) {
    }
    
    //死亡
    die(){
        console.log("==============die================");

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


