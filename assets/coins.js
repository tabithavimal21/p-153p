AFRAME.registerComponent("coins",{
    init:function(){
        for (var i=1; i<= 10; i++){
            const id=`coin$(i)`;

            const posX= Math.random()*100 + -50;
            const posY= Math.random()*5 + 5;
            const posZ= Math.random()* 60 + -40;

            const position={x:posX,y:posY,z:posZ};
            this.createcoins(id,position)
        }
    },
})