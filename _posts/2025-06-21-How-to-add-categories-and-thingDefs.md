---
layout: rimworld-post
title: "How to add categories and thingDefs"
date: 2025-06-21
category: rimworld
keywords: "rimworld, mod, patch, Fridge, 림월드, 모드, 패치, 냉장고"
image: "https://seobongzu.com/assets/images/rimworld/HowToAddCategoriesAndThingDefs/MechaMinigun.webp"
---
<p>
1.<br>
<img src="https://seobongzu.com/assets/images/rimworld/HowToModifyMaxItemsInCell/1.PNG" alt="Fridge folder" width=248px height=144px>
Open [sbz] Fridge folder.<br>
(.../SteamLibrary/steamapps/workshop/content/294100/3486264784)
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
	<!--Template-->
	<!--
	<Operation Class="PatchOperationFindMod">
		<mods>
			<li>ModName</li>
		</mods>
		<match Class="PatchOperationSequence">
			<success>Always</success>
			<operations>			

				<li Class="PatchOperationAdd">
					<xpath>Defs/ThingDef[@Name = "sbzFridgeBase"]/building/fixedStorageSettings/filter/categories</xpath>
					<value>
						<li>ThingCategoryDef</li>
					</value>
				</li>

				<li Class="PatchOperationAdd">
					<xpath>Defs/ThingDef[@Name = "sbzFridgeBase"]/building/fixedStorageSettings/filter/thingDefs</xpath>
					<value>
						<li>ThingDef</li>
					</value>
				</li>

			</operations>
		</match>
	</Operation>
	-->
</Patch>
```
<p>
When you open seobongzu.xml with a text editor, you'll see this content.<br>
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
6.<br>
</p>
```xml
<?xml version="1.0" encoding="utf-8"?>
<Patch>
	<Operation Class="PatchOperationFindMod">
		<mods>
			<li>ModName</li>
		</mods>
		<match Class="PatchOperationSequence">
			<success>Always</success>
			<operations>			

				<li Class="PatchOperationAdd">
					<xpath>Defs/ThingDef[@Name = "sbzFridgeBase"]/building/fixedStorageSettings/filter/categories</xpath>
					<value>
						<li>ThingCategoryDef</li>
					</value>
				</li>

				<li Class="PatchOperationAdd">
					<xpath>Defs/ThingDef[@Name = "sbzFridgeBase"]/building/fixedStorageSettings/filter/thingDefs</xpath>
					<value>
						<li>ThingDef</li>
					</value>
				</li>

			</operations>
		</match>
	</Operation>
</Patch>
```
<p>
First, remove the comments.<br>
If you don't know how, just copy what I do.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
7.<br>
To find the mod details you need, open the folder of the mod you want.<br>
(.../SteamLibrary/steamapps/workshop/content/294100/modNumber)<br>
I'll use [sbz] Mechanoid Bench 3 as an example.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
8.<br>
<img src="https://seobongzu.com/assets/images/rimworld/HowToAddCategoriesAndThingDefs/modName.PNG" alt="Mod Name" width=649px height=263px>
Open About.xml in the About folder.<br>
Enter the <span class="weight-bold">name</span> between &lt;name&gt; and &lt;/name&gt; into <span class="weight-bold">ModName</span>.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
9.<br>
<img src="https://seobongzu.com/assets/images/rimworld/HowToAddCategoriesAndThingDefs/defName.PNG" alt="defName" width=649px height=261px>
Find the <span class="weight-bold">defName</span> of the ThingCategoryDef or ThingDef you want.
I'll find and add Mecha Minigun as an example.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
10.<br>
</p>
```xml
<?xml version="1.0" encoding="utf-8"?>
<Patch>
	<Operation Class="PatchOperationFindMod">
		<mods>
			<li>[sbz] Mechanoid Bench 3</li>
		</mods>
		<match Class="PatchOperationSequence">
			<success>Always</success>
			<operations>			

				<li Class="PatchOperationAdd">
					<xpath>Defs/ThingDef[@Name = "sbzFridgeBase"]/building/fixedStorageSettings/filter/thingDefs</xpath>
					<value>
						<li>Gun_MechaMinigun</li>
					</value>
				</li>

			</operations>
		</match>
	</Operation>
</Patch>
```
<p>
The completed code will look like this.<br>
In this example, I'm not adding ThingCategoryDef, so I deleted that part.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
11.<br>
<img src="https://seobongzu.com/assets/images/rimworld/HowToAddCategoriesAndThingDefs/MechaMinigun.webp" alt="Applied image" width=438px height=478px>
It's working well.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
12.<br>
If you want to learn more about <span class="weight-bold">patches</span>,<br>
check out <a href="https://rimworldwiki.com/wiki/Modding_Tutorials/PatchOperations">Rimworldwiki</a>!
</p>