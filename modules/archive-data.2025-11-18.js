/*
	archive data module:
		* contains series and show metadata
		* performs basic processing before export
*/

// bitrate: constant 24kbps
// sample rate: max of 22050Hz or existing sample rate

const archiveData = [
{
"code": `Black-Chapel`,
"heading": `<cite>The Black Chapel</cite>`,
"blurb": `A 1937–39 horror series hosted and narrated by the insane organist of a derelict church (played by Ted Osbourne); only two episodes survive.`,
"source": `<a href="https://www.radioechoes.com/?page=series&genre=OTR-Thriller&series=The%20Black%20Chapel">Radio Echoes</a>`,
"shows": [
	{
	"code": `The-Mahogany-Coffin`,
	"heading": `<cite>The Mahogany Coffin</cite>`,
	"blurb": `A gravedigger makes lavish preparations for his own burial… and an unlikely graveyard friend of his takes ghoulish revenge when a rival thwarts his plans.`,
	"notes": `entombment`,
	},
],
},
{
"code": `Black-Mass`,
"heading": `<cite>The Black Mass</cite>`,
"blurb": `A 1963–67 anthology of mostly gothic and cosmic horror stories adapted for radio, largely performed by Erik Bauersfeld.`,
"source": `<a href="https://web.archive.org/web/20240812113659/http://www.kpfahistory.info/black_mass_home.html"><abbr>KPFA</abbr> History</a> (via Wayback)<!--the site of John Whiting, technical producer-->`,
"shows": [
	{
	"code": `07-Oil-of-Dog`,
	"heading": `7: <cite>Oil of Dog</cite>`,
	"blurb": `A young man helps his father make dog oil and his mother dispose of unwanted babies—and combines his duties to disastrous effect. Adapted from a story by Ambrose Bierce.`,
	"notes": `animal abuse, infanticide, kidnapping, murder-suicide`,
	},
	{
	"code": `09-A-Haunted-House`,
	"heading": `9: <cite>A Haunted House</cite>`,
	"blurb": `A house is haunted by the memory of the lovers who lived there. Adapted from a story by Virginia Woolf.`,
	"notes": ``,
	},
	{
	"code": `15-A-Country-Doctor`,
	"heading": `15: <cite>A Country Doctor</cite>`,
	"blurb": `A doctor makes a surreal journey through winter weather for a patient on his deathbed. Adapted from a story by Franz Kafka.`,
	"notes": `abduction, bite injury, description of open wound, insects, rape`,
	},
	{
	"code": `16-The-Witch-of-the-Willows`,
	"heading": `16: <cite>The Witch of the Willows</cite>`,
	"blurb": `A traveller seeking wonder and danger finds it in an eerie willow-marsh and its resident witch. Adapted from a story by Lord Dunsany.`,
	"notes": ``,
	},
],
},
{
"code": `CAS-selection`,
"heading": `<abbr>CAS</abbr> selection`,
"blurb": `Collected readings of the weird fiction of Clark Ashton Smith.`,
"source": `<a href="http://www.eldritchdark.com/writings/spoken-word/">The Eldritch Dark</a>`,
"shows": [
	{
	"code": `The-City-of-the-Singing-Flame`,
	"heading": `<cite>The City of the Singing Flame</cite>`,
	"blurb": `A writer walks between worlds to a city where people sacrifice themselves to a vast, singing flame. First published in 1931, read by Mike Cothran.`,
	"notes": `mental compulsion`,
	},
	{
	"code": `The-Door-to-Saturn`,
	"heading": `<cite>The Door to Saturn</cite>`,
	"blurb": `An inquisitor and his occult quarry must unite to survive on an alien world. First published in 1932, read by Zilbethicus.`,
	"notes": `alcohol`,
	},
	{
	"code": `The-Dark-Eidolon`,
	"heading": `<cite>The Dark Eidolon</cite>`,
	"blurb": `A necromancer takes exquisite revenge upon the ruler who wronged him. First published in 1935, read by Mike Cothran.`,
	"notes": `crush death, descriptions of gore, horse trampling, hypnosis, misogyny, poisoning, possession`,
	},
],
},
{
"code": `CBS-Radio-Workshop`,
"heading": `<cite><abbr>CBS</abbr> Radio Workshop</cite>`,
"blurb": `A brief 1956–57 revival of the <cite>Columbia Workshop</cite> series' experimental radio tradition, by the Columbia Broadcasting System.`,
"source": `<a href="https://archive.org/details/OTRR_CBS_Radio_Workshop_Singles">Internet Archive</a>`,
"shows": [
	{
	"code": `66-Nightmare`,
	"heading": `66: <cite>Nightmare</cite>`,
	"blurb": `A tired, sick man has a surreal nightmare that shifts from memory to memory like a kaleidoscope.`,
	"notes": `gaslighting, mob violence, parental death, seizure`,
	},
],
},
{
"code": `Columbia-Workshop`,
"heading": `<cite>Columbia Workshop</cite>`,
"blurb": `A 1936–47 anthology of experimental radio plays organised by Irving Reis to push the boundaries of the medium; succeeded by the <cite><abbr>CBS</abbr> Radio Workshop</cite>.`,
"source": `<a href="https://www.radioechoes.com/?page=series&genre=OTR-Drama&series=Columbia%20Workshop">Radio Echoes</a>`,
"shows": [
	{
	"code": `A034-The-Fall-of-the-City`,
	"heading": `A34: <cite>The Fall of the City</cite>`,
	"blurb": `Prophets, hierophants, and generals give grandiose speeches while the master of war descends on their “free” city. Featuring a young Orson Welles.`,
	"notes": `human sacrifice, mass panic`,
	},
	{
	"code": `D27-The-City-Wears-a-Slouch-Hat`,
	"heading": `D27: <cite>The City Wears a Slouch Hat</cite>`,
	"blurb": `An omniscient man slips between surreal scenes in a city pelted by cacophonous downpour. Scored by John Cage, for household objects.`,
	"notes": `car crash, kidnapping, mugging`,
	},
],
},
{
"code": `Dimension-X`,
"heading": `<cite>Dimension X</cite>`,
"blurb": `(X X x x x…) A 1950–51 sci-fi series of adaptations and originals mostly scripted by George Lefferts and Ernest Kinoy; fore-runner to <cite>X Minus One</cite>.`,
"source": `<a href="https://archive.org/details/OTRR_Dimension_X_Singles">Internet Archive</a>`,
"shows": [
	{
	"code": `26-And-the-Moon-be-Still-as-Bright`,
	"heading": `26: <cite>And the Moon be Still as Bright</cite>`,
	"blurb": `The final human expedition to Mars discovers why the red planet is dead; one man abandons humanity in turn. Adapted from a story by Ray Bradbury.`,
	"notes": `alcohol, death, genocide, gunshots (17:20, 17:54, 19:46, 20:06, 25:47, 26:50)`,
	},
	{
	"code": `36-Nightmare`,
	"heading": `36: <cite>Nightmare</cite>`,
	"blurb": `All technology, from computers to door handles, conspires against its human masters. Adapted from a poem by Stephen Vincent Benét.`,
	"notes": `industrial deaths, institutionalisation, paranoia, traffic deaths`,
	},
	{
	"code": `48-Kaleidoscope`,
	"heading": `48: <cite>Kaleidoscope</cite>`,
	"blurb": `A spaceship is destroyed, leaving the survivors to drift apart with nothing to do but talk, think, and die. Adapted from a story by Ray Bradbury.`,
	"notes": `isolation, parental negligence, suicide`,
	},
	{
	"code": `50-Nightfall`,
	"heading": `50: <cite>Nightfall</cite>`,
	"blurb": `Astronomers on a world ringed by six suns declare a doomsday prophecy: Night will fall, cities will burn. Adapted from a story by Isaac Asimov.`,
	"notes": `alcohol, cult belief, mental breakdown`,
	},
],
},
{
"code": `Escape`,
"heading": `<cite>Escape</cite>`,
"blurb": `A 1947–54 anthology of escapist radio plays that shared its talent with <cite>Suspense</cite>, and more often delved into horror and science fiction.`,
"source": `<a href="https://archive.org/details/OTRR_Escape_Singles">Internet Archive</a>`,
"shows": [
	{
	"code": `015-Casting-the-Runes`,
	"heading": `15: <cite>Casting the Runes</cite>`,
	"blurb": `A scholar pens a scathing review of a crackpot's work, inciting arcane revenge. Adapted from a story by M.&nbsp;R.&nbsp;James.`,
	"notes": `stalking`,
	},
	{
	"code": `052-A-Dream-of-Armageddon`,
	"heading": `52: <cite>A Dream of Armageddon</cite>`,
	"blurb": `A man dreams of a world rolling inevitably towards annihilation. Adapted from a story by H.&nbsp;G.&nbsp;Wells.`,
	"notes": `being eaten while conscious, death, explosions (13:56–14:08), gunshots (14:43, 19:48–50, 22:47–50), poison gas, stab death, starvation`,
	},
	{
	"code": `053-Evening-Primrose`,
	"heading": `53: <cite>Evening Primrose</cite>`,
	"blurb": `A poet rejects society to live unseen in a department store—but he's not the first. Adapted from a story by John Collier, starring William Conrad.`,
	"notes": `death, entombment`,
	},
],
},
{
"code": `Hall-of-Fantasy`,
"heading": `<cite>The Hall of Fantasy</cite>`,
"blurb": `A series of supernatural stories broadcast in Utah in 1949 and nationally in 1952–53. The series was written and directed by Richard Thorne.`,
"source": `<a href="https://archive.org/details/470213ThePerfectScript">Internet Archive</a>`,
"shows": [
	{
	"code": `A21-The-Judges-House`,
	"heading": `A21: <cite>The Judge's House</cite>`,
	"blurb": `An exam student rents a malignant old house and comes face to face with the hanging judge who once lived there. Adapted from a story by Bram Stoker.`,
	"notes": `animal swarm, death`,
	},
	{
	"code": `B3-The-Shadow-People`,
	"heading": `B3: <cite>The Shadow People</cite>`,
	"blurb": `A young woman is targeted by murderous living shadows that extinguish her family one by one.`,
	"notes": ``,
	},
],
},
{
"code": `LibriVox-selection`,
"heading": `LibriVox selection`,
"blurb": `LibriVox is a catalogue of public domain audiobook readings, including many weird fiction and horror classics from decades and centuries ago.`,
"source": `<a href="https://librivox.org">LibriVox</a>`,
"shows": [
	{
	"code": `The-Nameless-City`,
	"heading": `<cite>The Nameless City</cite>`,
	"blurb": `An archaeologist journeys to, and within, an ancient, nameless city not built to human proportions. Written by H.&nbsp;P.&nbsp;Lovecraft, first published in 1921, read by Dean Delp.`,
	"notes": `claustrophobia, darkness`,
	},
	{
	"code": `An-Occurrence-at-Owl-Creek-Bridge`,
	"heading": `<cite>An Occurrence at Owl Creek Bridge</cite>`,
	"blurb": `A Confederate slave owner and attempted saboteur has a miraculous, harrowing escape from execution. Written by Ambrose Bierce, first published in 1890, read by Elise Sauer.`,
	"notes": `entrapment, facial wounds, hallucination?, hanging, near-drowning`,
	},
	{
	"code": `The-Horror-of-the-Heights`,
	"heading": `<cite>The Horror of the Heights</cite>`,
	"blurb": `An aviator investigates the unsolved deaths of pilots who broke the altitude record—and discovers an ecosystem in the sky. Written by Arthur Conan Doyle, first published in 1913, read by Mike Harris.`,
	"notes": `being hunted, death, decapitation, isolation, jellyfish`,
	},
	{
	"code": `Idle-Days-on-the-Yann`,
	"heading": `<cite>Idle Days on the Yann</cite>`,
	"blurb": `A dreamer travels the river Yann aboard the ship <i>Bird of the River</i>, stopping in bizarre cities of wonders and monsters along the way. Written by Lord Dunsany, first published in 1910, read by Alex Clarke.`,
	"notes": `alcohol`,
	},
	{
	"code": `Nyarlathotep`,
	"heading": `<cite>Nyarlathotep</cite>`,
	"blurb": `A performer of scientific mysteries puts on a jaw-dropping, world-ending show. Written by H.&nbsp;P.&nbsp;Lovecraft, first published in 1920, read by Tom Hackett.<!--“Nyarlathotep” reader's name on LibriVox site (Tom Hackett) is different to the one given in the file (Peter Bianzo(?))-->`,
	"notes": `nightmares, racism`,
	},
	{
	"code": `The-Night-Wire`,
	"heading": `<cite>The Night Wire</cite>`,
	"blurb": `Graveyard shift telegram operators receive reports from an unknown town beset by mist and monsters. Written by H.&nbsp;F.&nbsp;Arnold, first published in 1926, read by Dan Gurzynski.`,
	"notes": `death`,
	},
	{
	"code": `The-Repairer-of-Reputations`,
	"heading": `<cite>The Repairer of Reputations</cite>`,
	"blurb": `A man losing touch with reality plots to overthrow the aristocratic-fascist government and declare himself supreme leader. Written by Robert W.&nbsp;Chambers, first published in 1895, read by Eva Staes.`,
	"notes": `ableism, animal attack, hallucination?, institutionalisation, suicide`,
	},
	{
	"code": `The-Mask`,
	"heading": `<cite>The Mask</cite>`,
	"blurb": `Bohemians experiment with drugs, art, and a concoction that turns anything into solid marble. Written by Robert W.&nbsp;Chambers, first published in 1895, read by Eva Staes.`,
	"notes": `suicide`,
	},
	{
	"code": `The-Court-of-the-Dragon`,
	"heading": `<cite>The Court of the Dragon</cite>`,
	"blurb": `After reading the banned play <cite>The King in Yellow</cite>, a man is haunted by a sinister organist and visions of the living god. Written by Robert W.&nbsp;Chambers, first published in 1895, read by Eva Staes.`,
	"notes": ``,
	},
	{
	"code": `The-Yellow-Sign`,
	"heading": `<cite>The Yellow Sign</cite>`,
	"blurb": `A painter and his model encounter an abomination after reading the banned play <cite>The King in Yellow</cite>. Written by Robert W.&nbsp;Chambers, first published in 1895, read by Eva Staes.`,
	"notes": ``,
	},
	{
	"code": `The-Masque-of-the-Red-Death`,
	"heading": `<cite>The Masque of the Red Death</cite>`,
	"blurb": `A prince seals up his palace as plague ravages the outside world—but an unwelcome guest is already inside. Written by Edgar Allen Poe, first published in 1842, read by manyanemones.`,
	"notes": `death`,
	},
	{
	"code": `Carcassonne`,
	"heading": `<cite>Carcassonne</cite>`,
	"blurb": `A young king and his warriors attempt to conquer the unconquerable. Written by Lord Dunsany, first published in 1910, read by Daniel Davison.`,
	"notes": ``,
	},
	{
	"code": `The-Doom-That-Came-to-Sarnath`,
	"heading": `<cite>The Doom That Came to Sarnath</cite>`,
	"blurb": `A young city rises by exterminating its neighbours, until doom descends upon it in turn. Written by H.&nbsp;P.&nbsp;Lovecraft, first published in 1920, read by Glen Hallstrom.`,
	"notes": ``,
	},
	{
	"code": `The-Kingdom-of-the-Worm`,
	"heading": `<cite>The Kingdom of the Worm</cite>`,
	"blurb": `A travelling knight offends the king of worms and is imprisoned in its kingdom. Written by Clark Ashton Smith, first published in 1933, read by Ben Tucker.`,
	"notes": `claustrophobia, darkness`,
	},
	{
	"code": `An-Inhabitant-of-Carcosa`,
	"heading": `<cite>An Inhabitant of Carcosa</cite>`,
	"blurb": `A man wakes in a dark wilderness and seeks his home city of Carcosa. Written by Ambrose Bierce, first published in 1886, read by G.&nbsp;C.&nbsp;Fournier.`,
	"notes": ``,
	},
	{
	"code": `The-Music-of-Erich-Zann`,
	"heading": `<cite>The Music of Erich Zann</cite>`,
	"blurb": `A musician plays nightly eldritch harmonies for the void beyond his window. Written by H.&nbsp;P.&nbsp;Lovecraft, first published in 1921, read by Cameron Halket.`,
	"notes": `ableism`,
	},
	{
	"code": `Before-the-Law`,
	"heading": `<cite>Before the Law</cite>`,
	"blurb": `A man seeks entry to “the law”, but bureaucracy denies him at the gate. Written by Franz Kafka, first published in 1915, read by Availle.`,
	"notes": ``,
	},
	{
	"code": `The-Abominations-of-Yondo`,
	"heading": `<cite>The Abominations of Yondo</cite>`,
	"blurb": `A tortured prisoner is released into a wasteland haunted by wild demons and grotesques. Written by Clark Ashton Smith, first published in 1926, read by Ben Tucker.`,
	"notes": ``,
	},
	{
	"code": `The-Machine-Stops`,
	"heading": `<cite>The Machine Stops</cite>`,
	"blurb": `A mother and son's bond is tested by the Machine that governs life in the future. Written by E.&nbsp;M.&nbsp;Forster, first published in 1909, read by Elizabeth Klett.`,
	"notes": `death, denialism`,
	},
	{
	"code": `The-City-of-Blood`,
	"heading": `<cite>The City of Blood</cite>`,
	"blurb": `A dreamer finds herself in a city that exposes the depths of human cruelty. Written by Anna Bonus Kingsford, first published in 1888, read by Claudia Caldi.`,
	"notes": `domestic abuse`,
	},
	{
	"code": `The-Man-Who-Wanted-To-Be-Safe`,
	"heading": `<cite>The Man Who Wanted To Be Safe</cite>`,
	"blurb": `A man builds a safe and quiet paradise in his own home. Written by Alice Brown, first published in 1907, read by Aileen.`,
	"notes": ``,
	},
	{
	"code": `The-Moonstone-Mass`,
	"heading": `<cite>The Moonstone Mass</cite>`,
	"blurb": `Dark heavens and brilliant ice drive a polar explorer to madness. Written by Harriet Prescott Spofford, first published in 1868, read by Ben Tucker.`,
	"notes": `animal death, isolation`,
	},
	{
	"code": `In-the-Dark`,
	"heading": `<cite>In the Dark</cite>`,
	"blurb": `An industrialist sneaks into his chemical plant in the dead of night to make a deadly confession. Written by Dale Clark<!--under the name Ronal Kayser-->, first published in 1936, read by sdlavender.`,
	"notes": `adultery, blackmail, disfigurement, suicide`,
	},
	{
	"code": `The-Haunted-Palace`,
	"heading": `<cite>The Haunted Palace</cite>`,
	"blurb": `A poem telling the tale of a fae palace consumed by grief and horror. Written by Edgar Allen Poe, first published in 1839, read by Newgatenovelist.`,
	"notes": ``,
	},
],
},
{
"code": `Lights-Out`,
"heading": `<cite>Lights Out</cite>`,
"blurb": `A foundational horror series, began by Wyllis Cooper in 1934, headed by Arch Oboler until 1947.`,
"source": `<a href="https://archive.org/details/LightsOutoldTimeRadio">Internet Archive</a>`,
"shows": [
	{
	"code": `A040-Chicken-Heart`,
	"heading": `A40: <cite>Chicken Heart</cite>`,
	"blurb": `A biological sample of chicken heart grows out of all proportion. The surviving fragment of a lost episode.`,
	"notes": `body horror, plane crash`,
	},
	{
	"code": `A072-The-Dark`,
	"heading": `A72: <cite>The Dark</cite>`,
	"blurb": `Carnivorous darkness hunts down all who cross its path. The surviving fragment of a lost episode.`,
	"notes": `body horror`,
	},
],
},
{
"code": `Mercury-Theatre`,
"heading": `<cite>The Mercury Theatre</cite>`,
"blurb": `A 1938 extension of Orson Welles' Mercury Theatre; adapted classic fiction to the airwaves, with Welles starring in each show.`,
"source": `<a href="https://archive.org/details/OrsonWelles_MercuryTheatre">Internet Archive</a>`,
"shows": [
	{
	"code": `17-The-War-of-the-Worlds`,
	"heading": `17: <cite>The War of the Worlds</cite>`,
	"blurb": `An adaptation of H.&nbsp;G.&nbsp;Wells' story of Martians invading Earth; some listeners infamously believed it was a description of real current events.`,
	"notes": `asphyxiation, cannon-fire (30:39, 30:55, 31:15, 31:49), death, plane crash, poison-gassing`,
	},
],
},
{
"code": `Mindwebs`,
"heading": `<cite>Mindwebs</cite>`,
"blurb": `A 1975–84 series of sci-fi, fantasy, and horror short story readings by Michael Hanson, who also chose the often-jazzy musical accompaniment.`,
"source": `<a href="https://archive.org/details/MindWebs_201410">Internet Archive</a>`,
"shows": [
	{
	"code": `001-Carcinoma-Angels`,
	"heading": `1: <cite>Carcinoma Angels</cite>`,
	"blurb": `A genius billionaire with unnatural luck desperately uses a cocktail of hallucinogens to cure his cancer. Written by Norman Spinrad, first published in 1967.`,
	"notes": `injection, institutionalisation, racism, sterilisation`,
	},
	{
	"code": `003-Descending`,
	"heading": `3: <cite>Descending</cite>`,
	"blurb": `A bullshit artist on a department store spending spree winds up in a never-ending escalator ride… Written by Thomas M.&nbsp;Disch, first published in 1964.`,
	"notes": `head injury, mental breakdown, starvation`,
	},
	{
	"code": `012-The-Swimmer`,
	"heading": `12: <cite>The Swimmer</cite>`,
	"blurb": `A man lounging in a friend's garden pool decides on a whim to swim home through his neighbours' pools. Written by John Cheever, first published in 1964.`,
	"notes": `alcohol, dementia?, foot injury, humiliation`,
	},
	{
	"code": `025-The-Garden-of-Time`,
	"heading": `25: <cite>The Garden of Time</cite>`,
	"blurb": `A nobleman and his wife cut the flowers of time to set back the vast waves of humanity that press down on their villa. Written by J.&nbsp;G.&nbsp;Ballard, first published in 1962.`,
	"notes": ``,
	},
	{
	"code": `026-Test-and-The-Nine-Billion-Names-of-God`,
	"heading": `26: <cite>Test</cite> + <cite>The Nine Billion Names of God</cite>`,
	"blurb": `A man passes, then fails, a driving test. Written by Theodore Thomas, first published in 1962. Technology helps Tibetan monks write the many names of god. Written by Arthur C.&nbsp;Clarke, first published in 1953.`,
	"notes": `car crash, institutionalisation`,
	},
	{
	"code": `033-The-Top`,
	"heading": `33: <cite>The Top</cite>`,
	"blurb": `An advertiser for a colossal corporation discovers the secret at the summit of its pyramidal headquarters. Written by George Sumner Albee, first published in 1962.`,
	"notes": `overwork death`,
	},
	{
	"code": `051-The-Evergreen-Library`,
	"heading": `51: <cite>The Evergreen Library</cite>`,
	"blurb": `A lawyer visiting a dead client's estate loses himself in the old man's library. Written by Bill Pronzini and Jeffrey Wallmann, first published in 1970.`,
	"notes": `derealisation`,
	},
	{
	"code": `057-The-End`,
	"heading": `57: <cite>The End</cite>`,
	"blurb": `One man keeps building, at the end of all things. Written by Ursula K.&nbsp;Le Guin, first published in 1970.`,
	"notes": ``,
	},
	{
	"code": `066-Desertion`,
	"heading": `66: <cite>Desertion</cite>`,
	"blurb": `Human minds are transposed into Jupiter's fauna to explore and colonise the planet—but they all desert the mission. Written by Clifford Simak, first published in 1944.`,
	"notes": ``,
	},
	{
	"code": `071-Gas-Mask`,
	"heading": `71: <cite>Gas Mask</cite>`,
	"blurb": `A massive city descends into total merciless gridlock. Written by James Houston, first published in 1964.`,
	"notes": `asphyxiation`,
	},
	{
	"code": `082-The-Plot-is-the-Thing-and-Midnight-Express`,
	"heading": `82: <cite>The Plot is the Thing</cite> + <cite>Midnight Express</cite>`,
	"blurb": `Doctors lobotomise a film-obsessed woman, with bizarre results. Written by Robert Block, first published in 1967. A young man meets his childhood terror at a train station. Written by Alfred Noyes, first published in 1935.`,
	"notes": `derealisation, injection, institutionalisation, lobotomy, nightmares`,
	},
	{
	"code": `118-Island-of-Fear`,
	"heading": `118: <cite>Island of Fear</cite>`,
	"blurb": `An art collector obsesses over the perfect statuary beyond the monolithic wall on a tiny Greek island. Written by William Sambrot, first published in 1958.`,
	"notes": `near-drowning`,
	},
	{
	"code": `125-The-Rules-of-the-Road`,
	"heading": `125: <cite>The Rules of the Road</cite>`,
	"blurb": `An alien ship lands in the desert. None who enter survive—until one man finds within it the awful secrets of the universe. Written by Norman Spinrad, first published in 1964.`,
	"notes": `imprisonment, psychological torture`,
	},
	{
	"code": `147-The-Maze`,
	"heading": `147: <cite>The Maze</cite>`,
	"blurb": `A stranded scientist experimenting on mice finds herself slipping into the centre of the maze. Written by Stuart Dybek, first published in 1975.`,
	"notes": `animal cannibalism, bestiality, imprisonment, rape, rotting animals, torture`,
	},
	{
	"code": `160-Letter-to-a-Phoenix`,
	"heading": `160: <cite>Letter to a Phoenix</cite>`,
	"blurb": `An immortal writes a letter of advice from over a hundred millennia of solitude and thought. Written by Fredric Brown, first published in 1949.`,
	"notes": ``,
	},
	{
	"code": `162-The-Vertical-Ladder`,
	"heading": `162: <cite>The Vertical Ladder</cite>`,
	"blurb": `A young boy, dared by his peers, climbs the ladder of a towering gasometer. Written by William Sansom, first published in 1947.`,
	"notes": `abandonment, ableism, child endangered`,
	},
],
},
{
"code": `Nightfall`,
"heading": `<cite>Nightfall</cite>`,
"blurb": `A 1980–83 Canadian series of original and adapted horror stories created by Bill Howell.`,
"source": `<a href="https://archive.org/details/CBC_NightfallOTR">Internet Archive</a>`,
"shows": [
	{
	"code": `003-Welcome-to-Homerville`,
	"heading": `3: <cite>Welcome to Homerville</cite>`,
	"blurb": `A trucker follows a sinister radio siren's call.`,
	"notes": `truck crash`,
	},
	{
	"code": `018-Ringing-the-Changes`,
	"heading": `18: <cite>Ringing the Changes</cite>`,
	"blurb": `Honeymooners in tiny coastal town find the ocean missing, the people unwelcoming, and the bells all ringing louder every hour.`,
	"notes": `break-in, forced stripping, mob attack, sexual assault (themes?)`,
	},
	{
	"code": `034-The-Book-of-Hell`,
	"heading": `34: <cite>The Book of Hell</cite>`,
	"blurb": `Three publishers read the “Book of Hell”, an account of infernal torment written by a man who's been dead for years.`,
	"notes": `explosion (24:56), injections, involuntary medical experiments`,
	},
	{
	"code": `042-In-the-Name-of-the-Father`,
	"heading": `42: <cite>In the Name of the Father</cite>`,
	"blurb": `A grieving writer recovers in an old fishing town with a deep link to the sharks that swim its waters.`,
	"notes": `implied bestiality, parental death, pregnancy`,
	},
],
},
{
"code": `Quiet-Please`,
"heading": `<cite>Quiet, Please</cite>`,
"blurb": `A 1947–49 radio horror anthology written by Wyllis Cooper, starring radio announcer Ernest Chappell in roles speaking directly to the audience.`,
"source": `<a href="https://www.quietplease.org">quietplease.org</a>`,
"shows": [
	{
	"code": `001-Nothing-Behind-the-Door`,
	"heading": `1: <cite>Nothing Behind the Door</cite>`,
	"blurb": `Bank robbers try to hide the money in a mountain shed that contains—literally—nothing.`,
	"notes": ``,
	},
	{
	"code": `007-Inquest`,
	"heading": `7: <cite>Inquest</cite>`,
	"blurb": `A heartless man faces a murder inquest like no other—a jury in costume, an audience of millions, and the mysterious Coroner…`,
	"notes": `ableism, broken arm (poorly healed), death, domestic abuse, financial abuse`,
	},
	{
	"code": `037-Whence-Came-You`,
	"heading": `37: <cite>Whence Came You?</cite>`,
	"blurb": `An archaeologist meets the past in Cairo and entombed below the desert.`,
	"notes": `bite injury, claustrophobia, darkness, death`,
	},
	{
	"code": `038-Wear-the-Dead-Mans-Coat`,
	"heading": `38: <cite>Wear the Dead Man's Coat</cite>`,
	"blurb": `A homeless beggar kills a man for his coat, then remembers a saying: “Wear the dead man's coat, none will take note”.`,
	"notes": `alcohol, betrayal`,
	},
	{
	"code": `047-Thirteen-and-Eight`,
	"heading": `47: <cite>Thirteen and Eight</cite>`,
	"blurb": `An opportunistic news photographer is plagued by a photobomber only he can see.`,
	"notes": `fall injury, gunshots (7:47), traffic death`,
	},
	{
	"code": `060-The-Thing-on-the-Fourble-Board`,
	"heading": `60: <cite>The Thing on the Fourble Board</cite>`,
	"blurb": `An oil derrick pulls an invisible creature from the depths of the earth.`,
	"notes": `betrayal, fall death, gunshots (18:58–18:59), spiders?`,
	},
	{
	"code": `076-My-Son-John`,
	"heading": `76: <cite>My Son, John</cite>`,
	"blurb": `A bereaved father begs a wise woman for any way to bring his son back—no matter the danger, the cost.`,
	"notes": `animal attacks, bite injury, death`,
	},
	{
	"code": `085-Northern-Lights`,
	"heading": `85: <cite>Northern Lights</cite>`,
	"blurb": `Inventors of a time machine discover the monstrous song of the aurora borealis.`,
	"notes": `caterpillars, mind control`,
	},
	{
	"code": `092-The-Smell-of-High-Wines`,
	"heading": `92: <cite>The Smell of High Wines</cite>`,
	"blurb": `A distillery worker recalls the dark moments of his life where the smell of high wines presaged death.`,
	"notes": `blood, stab death, strangulation, suicide?`,
	},
	{
	"code": `099-The-Other-Side-of-the-Stars`,
	"heading": `99: <cite>The Other Side of the Stars</cite>`,
	"blurb": `A treasure hunter and his companion investigate an ancient well and find music from beyond the stars.`,
	"notes": `animal deaths, gunshots (13:07), possession?`,
	},
],
},
{
"code": `Radio-City-Playhouse`,
"heading": `<cite>Radio City Playhouse</cite>`,
"blurb": `A 1948–50 anthology of original radio dramas and adaptations, including a few with a touch of the supernatural.`,
"source": `<a href="https://archive.org/details/radio_city_playhouse_202008">Internet Archive</a>`,
"shows": [
	{
	"code": `58-The-Wind`,
	"heading": `58: <cite>The Wind</cite>`,
	"blurb": `A former pilot is deathly afraid of the wind, which he believes is out to kill him, but his friends can't—or won't—help. Adapted from a story by Ray Bradbury.`,
	"notes": `sanism`,
	},
],
},
{
"code": `Seeing-Ear-Theater`,
"heading": `<cite>Seeing Ear Theater</cite>`,
"blurb": `A turn-of-the-millennium online sci-fi and horror radio play revival that produced both originals and adaptations.<!--episode numbers are taken from the internet archive (from actual file names, not the numbers in the audio player's file list), but may be incorrect-->`,
"source": `<a href="https://archive.org/details/SETheater">Internet Archive</a>`,
"shows": [
	{
	"code": `Greedy-Choke-Puppy`,
	"heading": `<cite>Greedy Choke Puppy</cite>`,
	"blurb": `A fiery student of Trinidadian folklore investigates the tale of the soucouyant, a skin-stealing vampire her grandma warns about. Adapted from a story by Nalo Hopkinson.`,
	"notes": `child killed by parent, infanticide`,
	},
	{
	"code": `The-Oblivion-Syndrome`,
	"heading": `<cite>The Oblivion Syndrome</cite>`,
	"blurb": `A void-cartographer gives up on survival when his ship is damaged, leaving it to the ship's <abbr>AI</abbr> and an interstellar freakshow to restore his will to live.`,
	"notes": `ableism, voice removal`,
	},
	{
	"code": `An-Elevator-and-a-Pole`,
	"heading": `<cite>An Elevator and a Pole</cite>`,
	"blurb": `One group gathers round a weird pole in the middle of nowhere; another's stuck in an elevator. They all struggle to understand and control their fates.`,
	"notes": `broken neck, descriptions of gore, fall death, mental breakdown, falling elevator, vomiting, suicide`,
	},
	{
	"code": `Facade`,
	"heading": `<cite>Facade</cite>`,
	"blurb": `Young hotshot advertisers snort their dead friend's ashes to receive creative inspiration, to bring her back, to help their pitches, to take over their lives.`,
	"notes": `ableism, addiction, car accident, death, human sacrifice, possession, sexual exploitation`,
	},
	{
	"code": `In-the-Shade-of-the-Slowboat-Man`,
	"heading": `<cite>In the Shade of the Slowboat Man</cite>`,
	"blurb": `A vampire returns to her mortal love on his nursing-home deathbed to reminisce and say goodbye. Adapted from a story by Dean Wesley Smith.`,
	"notes": `abandonment, infertility`,
	},
	{
	"code": `Emily-501`,
	"heading": `<cite>Emily 501</cite>`,
	"blurb": `An exo-archaeologist discovers that the ancient language she's found isn't as dead as it seems.`,
	"notes": `body horror, language loss, mental breakdown`,
	},
	{
	"code": `Titanic-Dreams`,
	"heading": `<cite>Titanic Dreams</cite>`,
	"blurb": `A survivor of the Titanic drifts into the future, where she contemplates her regrets of that disastrous night. Adapted from a story by Robert Olen Butler.`,
	"notes": `suicide?`,
	},
],
},
{
"code": `Sleep-No-More`,
"heading": `<cite>Sleep No More</cite>`,
"blurb": `A 1956–57 anthology of short horror stories read by actor Nelson Olmsted after tightening budgets started to make full radio dramas infeasible.`,
"source": `<a href="https://archive.org/details/sleep_no_more_radio">Internet Archive</a>`,
"shows": [
	{
	"code": `15-Thus-I-Refute-Beelzy-and-The-Bookshop`,
	"heading": `15: <cite>Thus I Refute Beelzy</cite><!--Note: show title in source uses the wrong name ("Bealsley" instead of "Beelzy")--> + <cite>The Bookshop</cite>`,
	"blurb": `A boy's imaginary friend takes offense at his cruel father. Written by John Collier, first published in 1940. A struggling writer finds a shop of impossible books. Written by Nelson S.&nbsp;Bond, first published in 1941.`,
	"notes": `child abuse, dismemberment, traffic accident`,
	},
	{
	"code": `17-The-Woman-in-Gray-and-A-Suspicious-Gift`,
	"heading": `17: <cite>The Woman in Gray</cite> + <cite>A Suspicious Gift</cite>`,
	"blurb": `A man invents a spectre of hatred. Written by Walker G.&nbsp;Everett, first published in 1935. A stranger gives a too-perfect gift. Written by Algernon Blackwood, first published in 1906.`,
	"notes": `apparent suicide, fall death, traffic accidents`,
	},
],
},
{
"code": `Suspense`,
"heading": `<cite>Suspense</cite>`,
"blurb": `A 1940–62 anthology made by a bevy of talent. Most shows featured ordinary people thrust into suspenseful—even supernatural—situations.`,
"source": `<a href="https://archive.org/details/OTRR_Suspense_Singles">Internet Archive</a>`,
"shows": [
	{
	"code": `011-The-Hitch-Hiker`,
	"heading": `11: <cite>The Hitch-Hiker</cite>`,
	"blurb": `A man sees the same hitch-hiker calling for him again and again… and again… Written by Lucille Fletcher, introduction by and starring Orson Welles.`,
	"notes": `car crash, death, obsession, traffic death`,
	},
	{
	"code": `059-The-Most-Dangerous-Game`,
	"heading": `59: <cite>The Most Dangerous Game</cite>`,
	"blurb": `A big-game hunter has the tables turned when he washes up on an island owned by a man-hunter. Starring Orson Welles.`,
	"notes": `ableism, animal death, man devoured by dogs, racism, stab death`,
	},
	{
	"code": `094-Fugue-in-C-Minor`,
	"heading": `94: <cite>Fugue in C Minor</cite>`,
	"blurb": `A music-loving widower remarries a woman who shares his passion… his children have other ideas. Written by Lucille Fletcher, starring Vincent Price and Ida Lupino.`,
	"notes": `alcohol adverts, asphyxiation, claustrophobia, death, heart attack`,
	},
	{
	"code": `222-The-House-in-Cypress-Canyon`,
	"heading": `222: <cite>The House in Cypress Canyon</cite>`,
	"blurb": `A couple takes possession of a renovated house, only to find a dark presence taking possession of <em>them</em>.`,
	"notes": `alcohol adverts, bite injury, blood, murder-suicide`,
	},
	{
	"code": `300-The-Yellow-Wallpaper`,
	"heading": `300: <cite>The Yellow Wallpaper</cite>`,
	"blurb": `A woman confined by her husband after a nervous breakdown starts to see things behind the wallpaper. Adapted from a story by Charlotte Perkins Gilman.`,
	"notes": `domestic abuse, mental breakdown`,
	},
	{
	"code": `346-Ghost-Hunt`,
	"heading": `346: <cite>Ghost Hunt</cite>`,
	"blurb": `A skeptical radio <abbr>DJ</abbr> and a psychic investigator spend a night in a house nicknamed the “Death Trap”.`,
	"notes": `blood, hallucination?, suicide?`,
	},
	{
	"code": `648-The-Waxwork`,
	"heading": `648: <cite>The Waxwork</cite>`,
	"blurb": `A nervy, desperate freelance journalist resolves to write about spending the night in a museum of wax serial killers. Starring William Conrad.`,
	"notes": `anxiety, claustrophobia, hallucinations?, hypnosis, panic attack, paranoia`,
	},
	{
	"code": `674-The-Long-Night`,
	"heading": `674: <cite>The Long Night</cite>`,
	"blurb": `A night shift air traffic controller must help a lost, scared, untested pilot who's running out of fuel and trapped above the clouds. Starring Frank Lovejoy.`,
	"notes": `implied child death, parental recklessness, smoking`,
	},
	{
	"code": `927-That-Real-Crazy-Infinity`,
	"heading": `927: <cite>That Real Crazy Infinity</cite>`,
	"blurb": `Two beatniks out of money take on a simple delivery job that ends up involving esoteric electronics and the voices of the past.`,
	"notes": `explosion (20:02–20:09)`,
	},
],
},
{
"code": `Weird-Circle`,
"heading": `<cite>The Weird Circle</cite>`,
"blurb": `A 1943–45 anthology that adapted classic horror and supernatural tales to the airwaves, with low budgets limiting the use of music and sound effects.`,
"source": `<a href="https://archive.org/details/OTRR_Weird_Circle_Singles">Internet Archive</a>`,
"shows": [
	{
	"code": `43-The-Bell-Tower`,
	"heading": `43: <cite>The Bell Tower</cite>`,
	"blurb": `An arrogant architect brings doom upon himself in the creation of an “impossible” bell tower. Adapted from a story by Herman Melville.`,
	"notes": `bludgeon death, crush death`,
	},
],
},
{
"code": `X-Minus-One`,
"heading": `<cite>X Minus One</cite>`,
"blurb": `5, 4, 3, 2… x minus 1. A 1955–58 sci-fi series of adaptions and originals mostly scripted by George Lefferts and Ernest Kinoy; successor to <cite>Dimension X</cite>.`,
"source": `<a href="https://archive.org/details/OTRR_X_Minus_One_Singles">Internet Archive</a>`,
"shows": [
	{
	"code": `037-The-Cave-of-Night`,
	"heading": `37: <cite>The Cave of Night</cite>`,
	"blurb": `The world unites to rescue an astronaut adrift in the void—but he may not want to return. Adapted from a story by James E.&nbsp;Gunn.`,
	"notes": `suicide`,
	},
	{
	"code": `068-The-Lifeboat-Mutiny`,
	"heading": `68: <cite>The Lifeboat Mutiny</cite>`,
	"blurb": `Two planetary surveyors buy an <abbr>AI</abbr> lifeboat that once belonged to an alien navy—and doesn't know the war's over. Adapted from a story by Robert Sheckley.`,
	"notes": `confinement, suicide threat`,
	},
	{
	"code": `071-Colony`,
	"heading": `71: <cite>Colony</cite>`,
	"blurb": `Everyday objects turn deadly against colonists on an alien planet. Adapted from a story by Philip K.&nbsp;Dick.`,
	"notes": `being digested alive, gunshots (10:28, 15:24–34, 19:16), strangulation`,
	},
],
},
]
// remove invalid series data
.filter(series => {
	const valid = isObject(series) && validateObject(series, {
		"code": [`string`, true],
		"heading": [`string`, true],
		"blurb": [`string`, true],
		"source": [`string`, true],
		"shows": [`array`, true],
	});

	if (!valid) console.warn(`Invalid series filtered out of archive.
Required props:
	code (string)
	heading (string)
	blurb (string)
	source (string)
	shows (array)
`, series);

	return valid;
})
// remove invalid show data
.map(series => {
	series.shows = series.shows.filter(show => {
		const valid = isObject(show) && validateObject(show, {
			"code": [`string`, true],
			"heading": [`string`, true],
			"blurb": [`string`, true],
			"notes": [`string`, true],
		});

		if (!valid) console.warn(`Invalid show filtered out of archive series "${series.code}".
Required props:
	code (string)
	heading (string)
	blurb (string)
	notes (string)
`, show);

		return valid;
	});
	return series;
});

// build series element id for linking
// build show id for each show (helps during archive-building, because all relevant data is inside each show object instead of split between show object and series metadata)
for (const series of archiveData) {
	series.elementId = `archive-${series.code}`;
	for (const show of series.shows) show.id = `${series.code}-${show.code}`;
}

export {
	archiveData,
};
