---
layout: post
title: "Endless Recreation"
date: 2025-01-19
category: rimworld
---
<img src="https://i.imgur.com/FBdtfiZ.png">
<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3410477716" target="_blank">https://steamcommunity.com/sharedfiles/filedetails/?id=3410477716</a>  
<br>
Two months ago when Do Recreation When Idle appeared on the Workshop, I couldn't help but shout. This mod was exactly what I wanted, but it didn't work perfectly in my colony. Thanks to publicly shared source code, I learned the basics of Harmony and conducted some experiments.  
<br>
Here's what I discovered: colonists will seek recreation when idle if their joy is below 90%. If we prevent them from reaching 90%, they will forever seek recreation. Since there's a +10 mood buff at 85% joy, I chose 87% as the threshold (though 87.5% might have been more appropriate). This mod reduces joy gain to 1/1000 at 87%. I didn't set it to zero because the arrow (shown in the picture below) would flicker, which might bother perfectionists.  
<br>
<img src="https://i.imgur.com/vDkkMSi.png">
<br>
If a colonist's joy somehow reaches 100%, they might briefly wander. To prevent this, the joy decay rate increases tenfold above 90%. Thus, any wandering will be very brief, and we can observe our colonists enjoying endless recreation.  
<br>
The mod only affects joy gain and decay, so it works with any recreation-adding mods. If I have time, I'd like to make recreation or musical instrument mods for this mod. I'm thinking about gym equipment or band instruments, but I'm not confident in texture creation, so I'm not sure when I'll make them.  
<br>
Thanks to Xercaine's mod, I was finally able to complete the mod I'd always dreamed of. My large colony now has a natural vitality.