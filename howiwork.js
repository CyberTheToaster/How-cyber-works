class CyberTheToaster {
    constructor(sexuality,gender,neurodiversity,hyperfocus) {
        this.sexuality = sexuality
        this.gender = gender
        this.neurodiversity = neurodiversity
        this.hyperfocus = hyperfocus
    }
    happy() {
        console.log("Cyber is happy!")
        if (this.neurodiversity == "ADHD") {
            console.warn("HAPPI HAPPI HAPPI")
        }
    }
    focus(medicated,isDoingWork) {
        this.medicated = medicated
        this.isDoingWork = isDoingWork
        if (this.medicated == false && this.neurodiversity == "ADHD") {
            console.warn("*Visibly Spacing out*")
        }
        else if (this.medicated == true && this.isDoingWork == false) {
            if (this.hyperfocus == "Programming") {
                console.log("*audible clacking*")
            }
        }
        else if (this.medicated == true && this.isDoingWork == true) {
            console.log("*works hard*")
        }

    }
    playgame(game,isModerating) {
        this.game = game
        this.isModerating = isModerating
        if (this.game == "UTPRC" && this.isModerating == true) {
            console.error("You have been kicked from this experience: Banned for exploiting")
        }
        else if (this.game == "Minecraft") {
            console.info("So we back in the mines; got our pickaxe swinging from siiiiiide to siide, side side to siide")
        }
        else if(this.game === "Genshin Impact") {
          console.log("Venti is my favorite drunk twink femboy bard.")
        }
        else if (this.game === "UTPRC" && this.isModerating === false) {
          console.info("We did a little trolling...")
        }
        else {
          console.warn("e")
        }

    }
    interact(relationship,type,person) {
    if (relationship == "Partner") {
        if (type == "Platonic") {
        console.log("Hey " + person + ", ")
        console.info("You are literally the best person ever and I love you platonically!") 
      }
      else if (type == "Romantic") {
        console.log("I love you very much and I care about you above everything! ")
      }
      else if (type == "Sexual") {
        console.warn("░░░░░░░")
      }
    }
    else {
      console.error(undefined)
    }
    }
}
function newCyber(){
  let me = new CyberTheToaster("Pansexual","Trans fem","ADHD","Programming")
me.happy()
me.focus(false,undefined)
me.playgame("UTPRC",true)
me.playgame("UTPRC",false)
me.interact("Partner","Platonic","Redacted")
}