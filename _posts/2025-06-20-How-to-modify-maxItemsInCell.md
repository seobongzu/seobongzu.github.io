---
layout: rimworld-post
title: "How to modify maxItemsInCell"
date: 2025-06-20
category: rimworld
keywords: "rimworld, mod, patch, Neat Storage, 림월드, 모드, 패치, 니트 스토리지"
image: "https://seobongzu.com/assets/images/rimworld/MechanoidBench3/MechanoidBench3.webp"
---
<p>
1.<br>
Open Neat Storage folder<br>
(.../SteamLibrary/steamapps/workshop/content/294100/3416243474)
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
2.<br>
Open your version folder<br>
(ex: 1.5)
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
3.<br>
Open the <span class="weight-bold">Patches</span> folder
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
4.<br>
Copy and paste <span class="weight-bold">Template.xml</span><br>
(Don't change Template.xml directly)
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
5.<br>
<span class="weight-bold">Rename</span> the copied file to whatever you want.<br>
I changed it to seobongzu.xml
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
6.<br>
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
7.<br>
```xml
</p>
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
8.<br>
Type <span class="weight-bold">the number you want</span> in maxItemsInCell and save.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
9.<br>
It's working well.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
10.<br>
You can change other furniture the same way,<br>
but if you don't also change the stackOffset and drawOffset,<br>
it will look messy in the game.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
11.<br>
If you want to learn more about patches,<br>
check out https://rimworldwiki.com/wiki/Modding_Tutorials/PatchOperations
</p>