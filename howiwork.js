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
        if (this.medicated == false & this.neurodiversity == "ADHD") {
            console.warn("*Visibly Spacing out*")
        }
        else if (this.medicated == true & this.isDoingWork == false) {
            if (this.hyperfocus == "Programming") {
                console.log("*audible clacking*")
            }
        }
        else if (this.medicated == true & this.isDoingWork == true) {
            console.log("*works hard*")
        }

    }
    playgame(game,isModerating) {
        game = this.game
        isModerating = this.isModerating
        if (this.game == "UTPRC" & this.isModerating == true) {
            console.error("You have been kicked from this experience: Banned for exploiting")
        }
        else if (this.game == "Minecraft") {
            console.info("")
        }

    }
}
