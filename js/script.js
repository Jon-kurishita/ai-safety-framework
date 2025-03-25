const audioSelector = document.getElementById('audio-selector');
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');

audioSelector.addEventListener('change', function() {
    const selectedAudio = this.value;
    const fileType = selectedAudio.endsWith('.wav') ? 'audio/wav' : 'audio/mpeg';
    audioSource.src = selectedAudio;
    audioSource.type = fileType;
    audioPlayer.load(); // Important: Reload the audio player to apply the new source
});

// Initially load the first audio option
audioSource.src = audioSelector.value;
audioPlayer.load();