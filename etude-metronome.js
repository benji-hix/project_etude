
class Metronome
{
    constructor(tempo = 120) {
        this.audioContext = null; // API will initialize once "start" is triggered by button press
        this.intervalID = null;
        this.isRunning = false;
        this.tempo = tempo;
        this.lookAheadTime = 25; //in ms | how far we look ahead
        this.scheduleAheadTime = .1; // in sec | how often we look ahead
        this.nextNoteTime = 0; //in sec | how long before next note needs to play
    }
    // using bpm, calculate seconds before next note and schedule 
    calculateNextNote() {
        var secondsPerBeat = 60 / currentTempo; 
        this.nextNoteTime += secondsPerBeat;
    }
    // use an oscilattor to play a scheduled note
    scheduleNote(time) {
        const osc = this.audioContext.createOscillator();
        const envelope = this.audioContext.createGain();

        osc.frequency.value = metronomeFrequency;
        envelope.gain.value = .15;
        envelope.gain.exponentialRampToValueAtTime(0.1, time + 0.001);
        envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.02);

        osc.connect(envelope);
        envelope.connect(this.audioContext.destination); 

        osc.start(time);
        osc.stop(time + 0.01);
    }
    // trigger the oscillator using current scheduled note, then calculate/schedule a new note
    scheduler() {
        while (this.nextNoteTime < this.audioContext.currentTime + this.scheduleAheadTime) {
            this.scheduleNote(this.nextNoteTime);
            this.calculateNextNote();
        }
    }

    start() {
        if (this.isRunning) return;
        // intitialize Web Audio API based on browser
        if (this.audioContext == null) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        this.isRunning = true;
        this.nextNoteTime = this.audioContext.currentTime + 0.05;
        this.intervalID = setInterval(() => this.scheduler(), this.lookAheadTime); // starts the repeated calling of scheduler, constantly looking 
                                                                                   // ahead to see if new notes are needed
    }

    stop() {
        this.isRunning = false;
        clearInterval(this.intervalID); // cancels the repeated calling of scheduler
    }

    startStop() {
        if (this.isRunning) this.stop();
        else this.start();
    }
}

/* Credit to Dylan Paulus, Grant James, and Music and Coding on youtube for all their resources regarding javascript metronomes*/