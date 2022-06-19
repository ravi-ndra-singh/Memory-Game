// finding image tags using ids
var img1cont = document.getElementById("img1");
var img2cont = document.getElementById("img2");
var img3cont = document.getElementById("img3");
var img4cont = document.getElementById("img4");
var img5cont = document.getElementById("img5");
var img6cont = document.getElementById("img6");
var img7cont = document.getElementById("img7");
var img8cont = document.getElementById("img8");
var img9cont = document.getElementById("img9");
var img10cont = document.getElementById("img10");
var img11cont = document.getElementById("img11");
var img12cont = document.getElementById("img12");
var img13cont = document.getElementById("img13");
var img14cont = document.getElementById("img14");
var img15cont = document.getElementById("img15");
var img16cont = document.getElementById("img16");

var score = 0;
var chances = 10;

var mem1;
var mem2;
var mem1_block_id;
var mem2_block_id;
var img1_block_id;
var img2_block_id;


// list of images
const img_coll = ["imgs/airplane.png", "imgs/monster.png", "imgs/basketball.png", "imgs/balloon.png", "imgs/gift.png", "imgs/tree.png", "imgs/pizza.png", "imgs/burger.png"];

//list of image tags
const block_coll = [img1cont, img2cont, img3cont, img4cont, img5cont, img6cont, img7cont, img8cont, img9cont, img10cont, img11cont, img12cont, img13cont, img14cont, img15cont, img16cont];

var allBlocks = document.getElementsByClassName("block");

// selecting random images and then removing them from list
for (let i=0; i<8; i++){
    var img = img_coll[Math.floor(Math.random()*img_coll.length)];
    img_coll.splice(img_coll.indexOf(img), 1);
    var randomBlock1 = block_coll[Math.floor(Math.random()*block_coll.length)];
    block_coll.splice(block_coll.indexOf(randomBlock1), 1);
    var randomBlock2 = block_coll[Math.floor(Math.random()*block_coll.length)];
    block_coll.splice(block_coll.indexOf(randomBlock2), 1);
    randomBlock1.src = img;
    randomBlock2.src = img;
}






function newGame(){
    location.reload();
}





function checkEmpty(imageTag, B_id){
    if (mem1 == undefined){
        mem1 = imageTag.src;
        mem1_block_id = B_id;
        img1_block_id = imageTag.id;
    }
    else{
        mem2 = imageTag.src;
        mem2_block_id = B_id;
        img2_block_id = imageTag.id;
    }
}




function flip(ele){
    var block_id = ele.id;
    if (block_id == "1"){
        document.getElementById("1").style.animation = "flip 1s forwards";
        img1cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[0].disabled = true;
        checkEmpty(img1cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "2"){
        document.getElementById("2").style.animation = "flip 1s forwards";
        img2cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[1].disabled = true;
        checkEmpty(img2cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "3"){
        document.getElementById("3").style.animation = "flip 1s forwards";
        img3cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[2].disabled = true;
        checkEmpty(img3cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "4"){
        document.getElementById("4").style.animation = "flip 1s forwards";
        img4cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[3].disabled = true;
        checkEmpty(img4cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "5"){
        document.getElementById("5").style.animation = "flip 1s forwards";
        img5cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[4].disabled = true;
        checkEmpty(img5cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "6"){
        document.getElementById("6").style.animation = "flip 1s forwards";
        img6cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[5].disabled = true;
        checkEmpty(img6cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "7"){
        document.getElementById("7").style.animation = "flip 1s forwards";
        img7cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[6].disabled = true;
        checkEmpty(img7cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "8"){
        document.getElementById("8").style.animation = "flip 1s forwards";
        img8cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[7].disabled = true;
        checkEmpty(img8cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "9"){
        document.getElementById("9").style.animation = "flip 1s forwards";
        img9cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[8].disabled = true;
        checkEmpty(img9cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "10"){
        document.getElementById("10").style.animation = "flip 1s forwards";
        img10cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[9].disabled = true;
        checkEmpty(img10cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "11"){
        document.getElementById("11").style.animation = "flip 1s forwards";
        img11cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[10].disabled = true;
        checkEmpty(img11cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "12"){
        document.getElementById("12").style.animation = "flip 1s forwards";
        img12cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[11].disabled = true;
        checkEmpty(img12cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "13"){
        document.getElementById("13").style.animation = "flip 1s forwards";
        img13cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[12].disabled = true;
        checkEmpty(img13cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "14"){
        document.getElementById("14").style.animation = "flip 1s forwards";
        img14cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[13].disabled = true;
        checkEmpty(img14cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "15"){
        document.getElementById("15").style.animation = "flip 1s forwards";
        img15cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[14].disabled = true;
        checkEmpty(img15cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    else if (block_id == "16"){
        document.getElementById("16").style.animation = "flip 1s forwards";
        img16cont.style.animation = "visibility 1s forwards, flip 1s forwards";
        allBlocks[15].disabled = true;
        checkEmpty(img16cont, block_id);
        if (mem1!=undefined && mem2!=undefined){
            checkSimilar(mem1, mem2, mem1_block_id, mem2_block_id, img1_block_id, img2_block_id);
        }
    }
    
}




function checkSimilar(firstimg, secondimg, firstBlockId, secondBlockId, firstImgId, secondImgId){
    if (firstimg!=secondimg){
        chances-=1;
        document.getElementById("chances").innerHTML = "Chances Left: "+chances;
        document.getElementById(firstBlockId).style.animation = "flipAgain 1s forwards";
        document.getElementById(secondBlockId).style.animation = "flipAgain 1s forwards";
        document.getElementById(firstImgId).style.animation = "invisibility 1s forwards", "flipAgain 1s forwards";
        document.getElementById(secondImgId).style.animation = "invisibility 1s forwards", "flipAgain 1s forwards";
        mem1 = undefined;
        mem2 = undefined;
        mem1_block_id = undefined;
        mem2_block_id = undefined;
        img1_block_id = undefined;
        img2_block_id = undefined;

        document.getElementById(firstBlockId).disabled = false;
        document.getElementById(secondBlockId).disabled = false;

        if (chances==0){
            document.getElementById("comment").style.visibility = "visible";
            document.getElementById("comment").innerHTML = "💔You Lose💔";
            for (i in allBlocks){
                allBlocks[i].disabled = true;
            }
        }
    }
    else{
        score+=1;
        document.getElementById("score").innerHTML = "Score: "+score;
        document.getElementById(firstBlockId).style.backgroundColor = "rgb(153,255,0)";
        document.getElementById(secondBlockId).style.backgroundColor = "rgb(153,255,0)";
        document.getElementById(firstBlockId).disabled = true;
        document.getElementById(secondBlockId).disabled = true;
        mem1 = undefined;
        mem2 = undefined;
        mem1_block_id = undefined;
        mem2_block_id = undefined;
        img1_block_id = undefined;
        img2_block_id = undefined;
        if (score==8){
            document.getElementById("comment").style.visibility = "visible";
            document.getElementById("comment").innerHTML = "🎉You Win🎉";
        }
    }
}