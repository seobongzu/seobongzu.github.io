---
layout: rimworld-post
title: "Endless Recreation"
date: 2025-01-19
category: rimworld
keywords: "rimworld, mod, 림월드, 모드"
image: "https://seobongzu.com/assets/images/rimworld/EndlessRecreation/EndlessRecreation.webp"
---
<iframe src="https://www.youtube-nocookie.com/embed/PEVDByjhJZc?si=auaYMaNTY9kto1uz" width=1280px height=720px title="Endless Recreation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<p>
<hr>
<div class="half-space"></div>
<span class="download-box"><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3410477716" target="_blank">[workshop]</a></span>
<div class="half-space"></div>
<hr>
</p>
<div class="half-space"></div>
<p>
1.<br>
창작마당에서 <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3368214339" target="_blank">Do Recreation When Idle</a>를 보자마자 박수를 쳤다.<br>
예전부터 정착민들이 방황할 시간에 오락이나 했으면... 했는데 드디어 모드로 나온 것이다.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
2.<br>
모드의 세부적인 작동 방식이 내가 생각한 것과 약간 달라서 그대로 쓸 순 없었지만<br>
핵심 메커니즘에서 힌트를 얻어 약간의 수정을 거쳐 내가 생각한 모드를 만들 수 있었다.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
3.<br>
모드를 뜯어보면서 정착민이 오락을 하는 두 가지 경우의 수를 알게 되었다.<br>
- 재미가 너무 낮으면 (정확한 수치는 모르겠다) 작업 도중에 오락¹을 한다.<br>
- 작업 중이 아닐 때 재미가 90% 미만이면 오락²을 한다.<br>
<div class="half-space"></div>
※일정을 오락으로 해두는 것이 어떤 영향을 끼치는진 잘 모르겠다.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
4.<br>
따라서 재미를 90% 미만으로 유지시킨다면 정착민은 할일이 없는 한 계속 오락²을 할 것이다.<br>
재미가 85%일 때 야호! 무드 버프가 있으므로 85%와 90%의 중간값인 87.5%를 기준으로 잡고<br>
재미가 87.5% 이상일 때의 재미 획득량을 1/1000로 줄였다.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
5.<br>
정착민은 오락을 하다가 할일(식사와 수면도 포함)이 생기면 하던 오락을 마치고 일을 하러 간다.<br>
모든 것이 바닐라와 동일하며 할일이 없을 때 방황 대신 오락을 한다는 점만 다르다.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
6.<br>
재미의 최대치를 12.5%나 줄였기 때문에 정착민이 바닐라보다 빠르게 오락¹을 찾는 문제가 생긴다.<br>
재미 감소량에 0.875를 곱해서 재미가 감소하는 시간을 바닐라와 동일하게 맞췄다.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
7.<br>
일반적으로 일어날 수 없는 일이지만 어떻게든 재미 90%를 넘기면 정착민이 잠시 방황하게 된다.<br>
내가 원하는 상황은 아니므로 재미가 90% 이상일 때의 재미 감소량을 10배로 높였다.<br>
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
8.<br>
이 모드는 재미의 획득량/감소량만 변경하므로 모든 오락 모드와 자연스럽게 호환되며<br>
바닐라 시스템을 이용하기 때문에 문제를 일으킬 소지가 적다. 적어도 지금(1.6)은 그렇다.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
9.<br>
단점이 하나 있다면 오락으로 취급되는 아이템을 너무 많이 사용한다는 것이다.<br>
연초, 맥주, 초콜렛을 동날 때까지 계속 피우고 마시고 먹는다. 플레이어의 개입이 필요하다.<br>
단점까진 아니지만 같은 맥락에서 눈사람도 엄청 만든다.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
10.<br>
가끔 정착민이 할일을 하지 않고 쓰러질 때까지 오락만 한다는 제보를 받는데<br>
경험상 흔한 경우는 아니며 재현하는 방법도 모르겠다. 순간적인 꼬임이나 모드 충돌이 아닐까?<br>
딱 한 번 경험해봤는데 내 경우에는 소집 및 소집 해제로 간단하게 해결됐다.
</p>
<div class="half-space"></div><hr><div class="half-space"></div>
<p>
11.<br>
처음에는 개인적으로 수정해서 혼자 쓰려고 했는데<br>
모드가 너무 만족스러워서 원작자 <a href="https://steamcommunity.com/profiles/76561198062265145/myworkshopfiles/?appid=294100" target="_blank">Xercaine</a>의 허락 아래 (감사합니다!) 창작마당에 업로드했다.<br>
그리 유명한 모드는 아니지만 누군가는 나만큼 만족하며 잘 쓰고 있지 않을까?
</p>