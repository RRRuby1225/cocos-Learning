import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MsgControl')
export class MsgControl extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }


    //刷新消息
    setMessage(name:string,content:string){
        this.node.children[0].getComponent(Label).string = name;
        this.node.children[1].getComponent(Label).string = content;
    }





}


