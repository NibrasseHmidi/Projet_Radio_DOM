// class buttons

class Audio_player{
constructor(){
this.audio_file=document.getElementById("audio_file");
this.title_audio=document.getElementById("title_radio");
this.play_pause_button=document.getElementById("play_pause");
this.images_radio=document.getElementById("images");
this.isPlayed;
this.play_pause_button.addEventListener("click",()=>{
  this.play_pause();
});

document.getElementById("img_nav1").addEventListener("click" , ()=>{
  
    this.audio_file.src = this.source_audio [0];
    this.title_audio.innerHTML = this.names_radio [0];
    this.images_radio.src = this.images [0];
    this.play_pause();
});
document.getElementById("img_nav2").addEventListener("click" , ()=>{
  this.audio_file.src = this.source_audio [1];
    this.title_audio.innerHTML = this.names_radio [1];
    this.images_radio.src = this.images [1];
    this.play_pause();
          
});
document.getElementById("img_nav3").addEventListener("click" , ()=>{
  this.audio_file.src = this.source_audio [2];
    this.title_audio.innerHTML = this.names_radio [2];
    this.images_radio.src = this.images [2];
    this.play_pause();
          
});
document.getElementById("img_nav4").addEventListener("click" , ()=>{
  this.audio_file.src = this.source_audio [3];
    this.title_audio.innerHTML = this.names_radio [3];
    this.images_radio.src = this.images [3];
    this.play_pause();
          
});
document.getElementById("img_nav5").addEventListener("click" , ()=>{
  this.audio_file.src = this.source_audio [4];
    this.title_audio.innerHTML = this.names_radio [4];
    this.images_radio.src = this.images [4];
    this.play_pause();
          
});
document.getElementById("img_nav6").addEventListener("click" , ()=>{
  this.audio_file.src = this.source_audio [5];
    this.title_audio.innerHTML = this.names_radio [5];
    this.images_radio.src = this.images [5];
    this.play_pause();
          
});

this.images = [];
    this.images[0] = "./img/na.png";
    this.images[1] = "./img/mo.jpg";
    this.images[2] = "./img/je.png";
    this.images[3] = "./img/ga.png";
    this.images[4] = "./img/cha.jpg";
    this.images[5] = "./img/jaw.jpg";

this.names_radio = [];
  this.names_radio[0] = " Radio Tunis Nationale ";
  this.names_radio[1] = "Mosaique FM ";
  this.names_radio[2] = "Radio Jeunes Tunisie";
  this.names_radio[3] = "Radio Gafsa ";
  this.names_radio[4] = "Shems FM";
  this.names_radio[5] = "Jawhara FM";

this.source_audio = [];
    this.source_audio[0] = "http://rtstream.tanitweb.com/nationale";
    this.source_audio[1] = "https://radio.mosaiquefm.net/mosalive";
    this.source_audio[2] = "http://rtstream.tanitweb.com/jeunes";
    this.source_audio[3] = "http://rtstream.tanitweb.com/gafsa";
    this.source_audio[4] = "https://radio.shemsfm.net/shems";
    this.source_audio[5] = "https://streaming2.toutech.net/jawharafm";

    this.server =0;

    this.setResourse();

    document.getElementById("next").addEventListener("click" , ()=>{
        if(this.server < this.source_audio.length-1){
            ++this.server;
            this.isPlayed = false;
        }  
        else{
            this.server=0;
        }

localStorage.setItem("save_postion", this.server);
    this.setResourse();
    });

     document.getElementById("back").addEventListener("click" , ()=>{
if(this.server > 0){
            --this.server;
               this.isPlayed = false;
        }
        else{
            this.server=this.source_audio.length-1;
        }
localStorage.setItem("save_postion", this.server);
    this.setResourse();
    });

    }


setResourse(){
    if(localStorage.getItem("save_postion") !=null){
        this.server=localStorage.getItem("save_postion");
    }
    this.audio_file.src = this.source_audio [this.server];
    this.title_audio.innerHTML = this.names_radio [this.server];
    this.images_radio.src = this.images [this.server];
    this.play_pause();
}    



play_pause(){
if(this.isPlayed == false){
   this.play_pause_button.src="./img/3.png";
   this.audio_file.play();
   this.isPlayed = true; 
}
 else{
   this.play_pause_button.src="./img/4.png";
    this.audio_file.pause();
    this.isPlayed = false;
}
    }

}
onload= new Audio_player();