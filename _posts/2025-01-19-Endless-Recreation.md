---
layout: post
title: "Endless Recreation"
date: 2025-01-19
category: rimworld
---
<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3410477716"><img src="https://i.imgur.com/Zcv9uOx.png" alt="Thumbnail" /></a>
Two months ago when "Do Recreation When Idle" appeared on the Workshop, I silently shouted "Finally" This was exactly the mod I had been desperately wanting, but unfortunately, it didn't work perfectly in my colony. I couldn't stand it, so I studied the source code that Xercaine had kindly made public to learn the basics of Harmony, grasped the core idea of the mod, and conducted some experiments.  
<br>
What I discovered, though not entirely official, was that colonists will seek recreation when idle if their joy is below roughly 90%. Therefore, if we prevent them from reaching 90%, they will forever seek recreation. Since there's a +10 mood buff at 85% joy, I needed to choose a threshold between 85% and 90%, and I somewhat arbitrarily picked 87%. Looking back, 87.5% might have looked better. Anyway, this mod reduces joy gain to 1/1000 at 87%. The reason it's not zero is that when joy gain becomes zero, the arrow flickers left and right, which might bother perfectionists.
<br>
Due to this simple mechanism, if you somehow manage to boost a colonist's joy to 100%, they might wander for a brief moment. However, to handle such situations, the joy decay rate increases tenfold when joy is above 90%. Thus, any wandering will be very brief, and we can observe our colonists enjoying endless recreation.  
<br>
Since this mod only affects joy gain and decay, it naturally works with various recreation-adding mods. Having diverse recreation options would make things more interesting and visually appealing. If I have time, I'd like to make recreation or musical instrument mods for this mod. I'm thinking about things like gym equipment or band instruments, but I'm not very confident in texture creation, so I'm not sure when I'll make them.  
<br>
I also considered excluding recreation-enjoying pawns from the idle list but decided it wasn't that important. Thanks to Xercaine's mod, I was finally able to complete the mod I'd always dreamed of. At last, my large colony has gained a natural vitality.  
<img src="https://i.imgur.com/FBdtfiZ.png">