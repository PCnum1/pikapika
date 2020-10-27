let string = 
`
.skin *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.skin *::before,*::after{
    box-sizing: border-box;
}
.skin{
    position: relative;
    background: #ffe600;
    height: 100vh;
}
.nose{
    border: 10px solid  #2e2e2e;
    border-color:  #2e2e2e transparent transparent;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}
@keyframes wave{
    0%{
        transform: rotate(0);
    }
    34%{
        transform: rotate(15deg);
    }
    67%{
        transform: rotate(-15deg);
    }
    100%{
        transform: rotate(0);
    }
}
.nose:hover{
    transform-origin: 50% 100%;
    animation: wave 0.3s infinite linear;
}
.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background:  #2e2e2e;
}
.eye{
    border: 2px solid #000;
    background: #2e2e2e;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top : 100px;
    margin-left: -32px;
    border-radius: 50%;
}
.eye::before{
    content: '';
    display: block;
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 4px;
    top: 2px;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top: -20px;
    z-index: 1;
}
.mouth .up .lip{
    border: 3px solid #000;
    height: 30px;
    width: 100px;
    background: #ffe600;
    border-top-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    border-left-color: transparent;
    transform: rotate(-20deg) translateX(-53px);
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    border-right-color: transparent;   
    transform: rotate(20deg) translateX(53px);
}
.mouth .up .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background-color: #ffe600;
}
.mouth .up .lip.left::before{
    right: -6px;
}

.mouth .up .lip.right::before{
    left: -6px;
}
.mouth .down{
    height: 180px;
    width: 100%;
    position: absolute;
    top: 5px;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid #000;
    width: 150px;
    height: 1000px;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    background: #ff485f;
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}
.face{
    position: absolute;
    left: 50%;
    border: 3px solid #000;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
}
.face > img{
    position: absolute;
    left: 50%;
    top : 44px
}
.face.left > img{
    transform: rotateY(180deg);
    transform-origin: 0 0;
}
.face.left{
    transform: translateX(-180px);
    background-color: #ff0000;
    border-radius: 50%;
}
.face.right{
    transform: translateX(180px);
    background-color: #ff0000;
    border-radius: 50%;
}
`


const player = {
    n : 1,
    time : 100,
    id : undefined,
    sty : document.getElementById('sty'),
    txt : document.getElementById('txt'),
    init : ()=>{
        player.sty.innerHTML = string.substr(0,player.n)
        player.txt.innerText = string.substr(0,player.n)
        player.clickEvent()
        player.play1()
    },
    hashClick : {
            '#pause' : 'pause1',
            '#play' : 'play1',
            '#slow' : 'slow1',
            '#normal' : 'normal1',
            '#fast' : 'fast1'
        },
    clickEvent : ()=>{
        for(let key in player.hashClick){
            if(player.hashClick.hasOwnProperty(key)){
                const value = player.hashClick[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run : ()=>{
        player.n += 1
        if(player.n > string.length){
            window.clearInterval(player.id)
        }
        player.sty.innerHTML = string.substr(0,player.n)
        player.txt.innerText = string.substr(0,player.n)
        player.txt.scrollTop = player.txt.scrollHeight
    },
    play1 : ()=>{
        player.id = setInterval(player.run,player.time)
    },
    pause1 : ()=>{
        window.clearInterval(player.id)
    },
    slow1 : ()=>{
        player.pause1()
        player.time = 300
        player.play1()
    },
    normal1 : ()=>{
        player.pause1()
        player.time = 100
        player.play1()
    },
    fast1 : ()=>{
        player.pause1()
        player.time = 0
        player.play1()
    },

}
player.init()





