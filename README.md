# Scare Waves

Scare Waves is a client-side playlist-maker and audio player for a curated collection of horror, weird fiction, and SFF audiobooks and radio plays. It has no dependencies/is built on the web platform. Once a small project, it's since become a rough testbed for simple web platform features and coding tests, including, at one point or another:

* styling native range inputs
* basic string similarity algorithms (Levenshtein Distance, then Jaro Similarity)
* `forced-colors` CSS for accessibility
* ensuring consistent state across browsing contexts in the same group
* building out a web feed into an HTML DOM via XSLT, in the browser

## Removed/rejected features

These are significant features I've considered and decided not to implement, or implemented and removed.

### Download links

Links to download individual shows, present in any or all of: the Archive, the Booth, and the Player. These could allow users to download shows for later listening. However, the audio used in Scare Waves is optimised for small filesizes rather than quality; better-quality versions can be found at the sources. Show info's also tightly laid out and adding a download link in such a small space tends to complicate it or obstruct other content.

A determined user could still download all audio files using a combination of the browser inspector (to find the `<audio>` element and its `[href]`, which contains the audio filepath), queue export (to get IDs for filepaths), and their own terminal (to retrieve all the audio files programmatically from the list of IDs).

### Sync all instances of a show's content notes

Synchronising a show's content notes in the Archive, Booth, and Player, so that when you open/close its notes in one place, they change in any other places the show info exists.

Tested, but I couldn't see a clear value.

### Recording audio volume in `localStorage`

Adding volume to settings so a listener can effectively set a personal volume that's re-applied on pageload.

The levels of the show audio files aren't consistent enough (due to their separate origins) for this to be set automatically, and can't easily be evened out due to the degradation of many of the older audio before it was digitised (baseline noise is too high to compress-and-amplify quieter files without using professional noise reduction plugins).

### Increase seek bar resolution

Setting the seek bar's maximum to equal the audio's duration in seconds (rounded up) would increase the resolution to perfect 1-second intervals for every show of any length, and would simplify any script where the seek bar is updated (instead of having to calculate the time as a percentage, all values would just be the audio's current time).

This has limited benefit when seeking with pointer controls, because the seek bar's resolution is partly limited by the screen resolution. For example, the show audio may be 1800 seconds long, but the seek bar may only be 300 pixels wide and therefore can't represent all possible timepoints (in seconds) through pixel-level pointer interactions alone (perhaps even assuming sub-pixels).

Increasing the resolution also makes seeking with keyboard controls *much* slower. An extra keyboard control could be added, e.g. holding Shift to change from 1-second intervals to 10-second intervals, but no other part of the app deviates from expected keyboard controls and the extra control would have to be clearly explained to all users.