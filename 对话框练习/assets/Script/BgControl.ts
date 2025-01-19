import { _decorator, Component, Input, Node } from 'cc';
import { PaoJieControl } from './PaoJieControl';
import { MsgControl } from './MsgControl';
const { ccclass, property } = _decorator;

class Message{
    name : string;
    content : string;
    face : string;
    mouth : string;

    constructor(name:string, content:string, face:string, mouth:string){
        this.name = name;
        this.content = content;
        this.face = face;
        this.mouth = mouth;
    }
}

@ccclass('BgControl')
export class BgControl extends Component {
    
    //人物和消息的控制器
    @property(PaoJieControl)
    paojieControl:PaoJieControl = null;
    @property(MsgControl)
    msgControl:MsgControl = null;

    //消息数组
    msgs:Message[] = null;
    //当前是第几条消息
    index:number = 0;


    start() {
        //初始化数组
        this.msgs=[
            new Message("御坂美琴","今天天气不错",".paojieface_02/spriteFrame","paojiemouth_02/spriteFrame"),
            new Message("御坂美琴","来喝点饮料","paojieface_01/spriteFrame","paojiemouth_01/spriteFrame"),
            new Message("御坂美琴","可惜贩卖机又坏了","paojieface_01/spriteFrame","paojiemouth_02/spriteFrame"),
        ]

        //点击鼠标进行对话
        this.node.on(Input.EventType.TOUCH_START,(event)=>{
        if(this.index < this.msgs.length){
            //如果对话框没显示，显示
            if(this.msgControl.node.active == false){
                this.msgControl.node.active = true;
            }
            //读消息
            let message = this.msgs[this.index++];
            //显示消息
            this.paojieControl.setImage(message.face,message.mouth);
            this.msgControl.setMessage(message.name,message.content);
        }
        });
    }

    update(deltaTime: number) {
        
    }
}


