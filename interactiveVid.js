
var videoPlayer;        //updated to point to video player object
var videoSeqeunce = []; //stores all of the video and interactive information
var currentVideo = 0;   //indicates with index in the video sequence array is the current video


//Array structure:
//videoSequencevideoSquence number then 
//  [number of branches/choices in this node, video file name (str), Choice 1 text (str), Choice 1 index (int), Choice 2 text (str), Choice 2 index (int)... repeat choice text index until max 4)
//  e.g. videoSequence[0] = [3, "video.mp4", "button 1 text", 1, "button 2 text", 2, "button 3 text", 3];
//  NOTE: there must be at least 1 choice - things won't neceessarily break, but it'll be a dead end for the audience
//        if you see "undefined" on any button, the text is missing from this area
videoSeqeunce[0] = [2, "media/First Clip.mp4", "Travel", 1, "Not Travel", 2];
videoSeqeunce[1] = [3, "media/Travel Choice.mp4", "Travel to Mexico", 3, "Travel to Guatemala", 4, "Travel to Peru", 5];
videoSeqeunce[2] = [1, "media/Dont Travel Choice.mp4", "Try again", 0];
videoSeqeunce[3] = [3, "media/Sydney to Mexico.mp4", "Travel to Colombia", 6, "Travel to Galapagos", 7, "Travel to Argentina", 8];
videoSeqeunce[4] = [3, "media/Sydney to Guatemala.mp4", "Travel to Colombia", 9, "Travel to Galapagos", 10, "Travel to Argentina", 11];
videoSeqeunce[5] = [3, "media/Sydney to Peru.mp4", "Travel to Colombia", 12, "Travel to Galapagos", 13, "Travel to Argentina", 14];
videoSeqeunce[6] = [1, "media/Mexico to Colombia.mp4", "Keep Travelling", 1];
videoSeqeunce[7] = [1, "media/Mexico to Galapagos.mp4", "Keep Travelling", 1];
videoSeqeunce[8] = [1, "media/Mexico to Argentina.mp4", "Keep Travelling", 1];
videoSeqeunce[9] = [1, "media/Guatemala to Colombia.mp4", "Keep Travelling", 1];
videoSeqeunce[10] = [1, "media/Guatemala to Galapagos.mp4", "Keep Travelling", 1];
videoSeqeunce[11] = [1, "media/Guatemala to Argentina.mp4", "Keep Travelling", 1];
videoSeqeunce[12] = [1, "media/Peru to Colombia.mp4", "Keep Travelling", 1];
videoSeqeunce[13] = [1, "media/Peru to Galapagos.mp4", "Keep Travelling", 1];
videoSeqeunce[14] = [1, "media/Peru to Argentina.mp4", "Keep Travelling", 1];

//This loads when the page first opens and sets the video player to contain the first item in the video sequence
window.onload = function () {
    "use strict";
    
    buttonReset();
    
    //set video to the starter vid
    document.getElementById('player').src = videoSeqeunce[currentVideo][1];
    
    
    
};


//This function triggers when you press one of the choice buttons.
function makeChoice(clickedID) {
    "use strict";
    videoPlayer = document.getElementById('player');
    
    var nextVideo;
   
    //Check what choice was pressed - either c1 or c2
    //It sets the 'next video' to be either the item in position 2 (i.e. Choice 1 index) or position 4 (choice 2 index)
    // and sets the text of the buttons to the appropriate element in the array.

    if(videoSeqeunce[currentVideo][0] > 0){
        switch (clickedID) {
            case "c1":
                nextVideo = videoSeqeunce[currentVideo][3];
                break;
            case "c2":
                nextVideo = videoSeqeunce[currentVideo][5];
                break;
            case "c3":
                nextVideo = videoSeqeunce[currentVideo][7];
                break;
            case "c4":
                nextVideo = videoSeqeunce[currentVideo][9];
        }
    }
        
    
    //overwrite the current video with the next to be played as assigned by the test above
    currentVideo = nextVideo;
    
    //call the button reset function to reprocess the button text and availablility based on current video
    buttonReset();

    //set the video player's  source to be the file name listed in the current video index of videosequence
    videoPlayer.src = videoSeqeunce[currentVideo][1];
    videoPlayer.play(); //play the video

}

//This function resets the button display based on the number specified in the current video sequence
function buttonReset () {
    
    //hide all of the buttons
    document.getElementById('c1').style.display = "none";
    document.getElementById('c2').style.display = "none";
    document.getElementById('c3').style.display = "none";
    document.getElementById('c4').style.display = "none";
    //check the number of choices specified for first video and enable buttons - this is a brute force approach
    if(videoSeqeunce[currentVideo][0] >= 1) {
        document.getElementById('c1').innerHTML = videoSeqeunce[currentVideo][2];
        document.getElementById('c1').style.display = "block";
    }
    
    if(videoSeqeunce[currentVideo][0] >= 2) {
        document.getElementById('c2').innerHTML = videoSeqeunce[currentVideo][4];
        document.getElementById('c2').style.display = "block";
    }
    
    if(videoSeqeunce[currentVideo][0] >= 3) {
        document.getElementById('c3').innerHTML = videoSeqeunce[currentVideo][6];
        document.getElementById('c3').style.display = "block";
    }
    
    if(videoSeqeunce[currentVideo][0] == 4) {
        document.getElementById('c4').innerHTML = videoSeqeunce[currentVideo][8];
        document.getElementById('c4').style.display = "block";
    }
}