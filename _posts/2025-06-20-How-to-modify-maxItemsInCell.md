---
layout: rimworld-post
title: "How to modify maxItemsInCell"
date: 2025-06-20
category: rimworld
keywords: "rimworld, mod, patch, Neat Storage, 림월드, 모드, 패치, 니트 스토리지"
image: "https://seobongzu.com/assets/images/rimworld/HowToModifyMaxItemsInCell/8.webp"
---
<p>
1.<br>
<img src="https://seobongzu.com/assets/images/rimworld/HowToModifyMaxItemsInCell/1.PNG" alt="Neat Storage folder" width=248px height=144px>
Open Neat Storage folder.<br>
(.../SteamLibrary/steamapps/workshop/content/294100/3416243474)
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
2.<br>
<img src="https://seobongzu.com/assets/images/rimworld/HowToModifyMaxItemsInCell/2.PNG" alt="Version folder" width=248px height=144px>
Open your version folder.<br>
(ex: 1.5)
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
3.<br>
<img src="https://seobongzu.com/assets/images/rimworld/HowToModifyMaxItemsInCell/3.PNG" alt="Patches folder" width=248px height=64px>
Open the <span class="weight-bold">Patches</span> folder.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
4.<br>
<img src="https://seobongzu.com/assets/images/rimworld/HowToModifyMaxItemsInCell/4.PNG" alt="Template file" width=248px height=64px>
Copy and paste <span class="weight-bold">Template.xml</span>,<br>
then <span class="weight-bold">rename</span> the copied file to whatever you want.<br>
I changed it to seobongzu.xml.<br>
(Don't change Template.xml directly)<br>
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
5.<br>
</p>
```xml
<?xml version="1.0" encoding="utf-8"?>
<Patch>
	<!-- Crate and Pallet maxItemsInCell -->
	<!--
	<Operation Class="PatchOperationReplace">
		<xpath>Defs/ThingDef[@Name = "sbzCrateBase"]/building/maxItemsInCell</xpath>
		<value>
			<maxItemsInCell>6</maxItemsInCell>
		</value>
	</Operation>
	-->

	<!-- Corpse dump spot maxItemsInCell -->
	<!--
	<Operation Class="PatchOperationReplace">
		<xpath>Defs/ThingDef[defName = "sbz_CorpseSpot"]/building/maxItemsInCell</xpath>
		<value>
			<maxItemsInCell>12</maxItemsInCell>
		</value>
	</Operation>
	-->	
</Patch>
```
<p>
When you open seobongzu.xml with a text editor, you'll see this content.<br>
The top code is for <span class="weight-bold">Crate and Pallet</span>, the bottom is for <span class="weight-bold">Corpse dump spot</span>.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
6.<br>
</p>
```xml
<?xml version="1.0" encoding="utf-8"?>
<Patch>
	<!-- Crate and Pallet maxItemsInCell -->
	<Operation Class="PatchOperationReplace">
		<xpath>Defs/ThingDef[@Name = "sbzCrateBase"]/building/maxItemsInCell</xpath>
		<value>
			<maxItemsInCell>6</maxItemsInCell>
		</value>
	</Operation>

	<!-- Corpse dump spot maxItemsInCell -->
	<!--
	<Operation Class="PatchOperationReplace">
		<xpath>Defs/ThingDef[defName = "sbz_CorpseSpot"]/building/maxItemsInCell</xpath>
		<value>
			<maxItemsInCell>12</maxItemsInCell>
		</value>
	</Operation>
	-->
</Patch>
```
<p>
If you want to change Crate and Pallet amounts,<br>
remove the comments to make it like this.<br>
If you don't know how, just copy what I do.<br>
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
7.<br>
Type <span class="weight-bold">the number you want</span> in maxItemsInCell and save.<br>
(ex: &lt;maxItemsInCell&gt;50&lt;/maxItemsInCell&gt;)
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
8.<br>
<img src="https://seobongzu.com/assets/images/rimworld/HowToModifyMaxItemsInCell/8.webp" alt="Applied image" width=343px height=659px>
It's working well.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
9.<br>
<img src="https://seobongzu.com/assets/images/rimworld/HowToModifyMaxItemsInCell/9.webp" alt="Messy image" width=576px height=204px>
You can change other furniture the same way,<br>
but if you don't also change the <span class="weight-bold">stackOffset</span> and <span class="weight-bold">drawOffset</span>,<br>
it will look messy in the game.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
10.<br>
If you want to learn more about <span class="weight-bold">patches</span>,<br>
check out <a href="https://rimworldwiki.com/wiki/Modding_Tutorials/PatchOperations">Rimworldwiki</a>!
</p>