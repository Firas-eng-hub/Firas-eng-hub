<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/title.svg" />
  <source media="(prefers-color-scheme: light)" srcset="assets/title-light.svg" />
  <img alt="Mohamed Firas Berriri — Class: Cloud & DevOps Engineer — Press Start" src="assets/title.svg" width="100%" />
</picture>

### ⚔️ NEW QUEST AVAILABLE ⚔️
**Seeking a 6-month PFE (end-of-studies internship) from February 2027 — Cloud · DevOps · MLOps**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Join_my_party-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohamed-firas-berriri-287b06337/)
[![Email](https://img.shields.io/badge/Email-Send_a_raven-D14836?style=for-the-badge&logo=maildotru&logoColor=white)](mailto:mohamedfiras.berriri@etudiant-enit.utm.tn)
![Profile views](https://komarev.com/ghpvc/?username=Firas-eng-hub&color=3fb950&style=for-the-badge&label=PLAYERS+MET)

</div>

---

## 🧙 Character Sheet

| | |
|---|---|
| **Player** | Mohamed Firas Berriri |
| **Class** | Cloud & DevOps Engineer *(subclass: AI Automation)* |
| **Guild** | ENIT — École Nationale d'Ingénieurs de Tunis · Telecommunications, Cloud specialization |
| **Origin** | Tunisia 🇹🇳 |
| **Level** | Final-year engineering student · `XP ██████████████████░░ 90%` → graduation 2027 |
| **Spoken spells** | Arabic (native) · French (fluent) · English (B2) · German (A2) |
| **Status** | 🟢 Looking for a party — PFE Feb 2027 |

## 📊 Stats

```text
KUBERNETES / DOCKER   ████████░░   Cluster tamer — Kubespray, Ansible, Lens
CI/CD                 ███████░░░   GitHub Actions → Docker → OVHcloud
AI AUTOMATION         ████████░░   n8n, Groq API, RAG, NLP
TINYML / EMBEDDED C   ███████░░░   Random Forest → C → STM32
WEB (REACT / TS)      ███████░░░   React, TypeScript, Express, PostgreSQL
NETWORKING            ███████░░░   TCP/IP, IPv4/IPv6, CCNA ITN
POWER PLATFORM        ██████░░░░   Power Automate, SharePoint, M365
```

---

## 🗺️ Quest Log

> ✅ **Lv 1 — Tutorial Island** · *IPEI Monastir · 2022–2024*<br>
> Preparatory studies in mathematics & physics. Unlocked: **ENIT**.

> ✅ **Quest: Tame the Cluster** · *L2T, Sousse — Cloud Infrastructure Intern · Jun–Jul 2025*<br>
> Deployed and configured multi-node **Kubernetes** clusters with **Kubespray** and **Ansible**; ran containerized workloads with **Docker** and managed them with **Lens**.<br>
> 🎁 *Reward:* `+ Kubernetes` `+ Infrastructure as Code`

> ✅ **⚔️ Boss Fight: An IDS in 1 KB of RAM** · *ACTIA Engineering Services — PFA2 · Dec 2025–May 2026*<br>
> Built a TinyML network intrusion detector (Random Forest, CSE-CIC-IDS2018), quantized to INT16 and running in C on an **STM32**.
>
> | 🎯 Accuracy | 💾 Flash | 🧠 RAM |
> |:---:|:---:|:---:|
> | **87.25 %** | **~100 KB** | **~1 KB** |

> ✅ **Side Quest: Automate the Badges** · *DRÄXLMAIER Group (METS) — Process Automation Intern · Jul–Aug 2026*<br>
> Designed and deployed a visitor & intern badge workflow — **Microsoft Forms → SharePoint → Power Automate → Word → Outlook** — centralizing records, badge generation, status tracking and notifications.<br>
> 🎁 *Reward:* **adopted by the company** 🏅

> ⏳ **Current Quest: PFE — February 2027 (6 months)**<br>
> Cloud · DevOps · MLOps. **Looking for a party to join →** [LinkedIn](https://www.linkedin.com/in/mohamed-firas-berriri-287b06337/) · [Email](mailto:mohamedfiras.berriri@etudiant-enit.utm.tn)

---

## 🏰 Dungeons Cleared

<details>
<summary><b>🛰️ NIDS-TinyML</b> — intrusion detection on a microcontroller</summary>
<br>

Trains a network-flow classifier on CSE-CIC-IDS2018, exports the Random Forest to C, and evaluates STM32 predictions over UART, with a local Flask dashboard for PC or device events.

**Loot:** `Python` `scikit-learn` `C` `STM32` `Flask` · [**Enter dungeon →**](https://github.com/Firas-eng-hub/NIDS-TinyML)

```mermaid
flowchart LR
    A[(CSE-CIC-IDS2018<br/>flow CSVs)] --> B[Random Forest<br/>training]
    B --> C[INT16 quantization<br/>+ export to C]
    C --> D[STM32<br/>inference]
    D -- UART --> E[Flask<br/>dashboard]
```

</details>

<details>
<summary><b>🎓 EnitConnect</b> — ENIT career platform, built & deployed</summary>
<br>

Career platform connecting students, companies and administrators: networking, internship/job offers and document sharing. I built the **React frontend** and **deployed** the stack on OVHcloud with Docker and GitHub CI/CD.

**Loot:** `React` `Express.js` `PostgreSQL` `Docker` `GitHub Actions` `OVHcloud` · [**Enter dungeon →**](https://github.com/Firas-eng-hub/Enit_Connect)

```mermaid
flowchart LR
    Dev[git push] --> CI[GitHub CI/CD<br/>build images]
    CI --> VPS
    subgraph VPS[OVHcloud · Docker]
        FE[React frontend] --> API[Express.js API] --> DB[(PostgreSQL)]
    end
    User((Students &<br/>companies)) --> FE
```

</details>

<details>
<summary><b>🤖 AI Workflow Assistant</b> — talk to your inbox and calendar</summary>
<br>

An AI assistant on **Telegram** and **WhatsApp** that executes natural-language email and scheduling requests through Gmail and Google Calendar tools.

**Loot:** `n8n` `Groq API` `Telegram` `WhatsApp` `Gmail` `Google Calendar`

</details>

<details>
<summary><b>🧭 UtopiaHire</b> — AI recruitment · IEEE TSYP 13</summary>
<br>

CV parsing and skills-extraction pipeline for an AI recruitment platform with job matching and interview simulation. **Selected to pitch at CSTAM.**

**Loot:** `Python` `pdfplumber` `NLTK` · [**Enter dungeon →**](https://github.com/Firas-eng-hub/Utopia)

</details>

<details>
<summary><b>🌙 Sakina</b> — emotion-aware Quranic guidance</summary>
<br>

Mobile app using retrieval-augmented generation to find Quranic verses that match the emotion you express, and deliver personalized spiritual guidance.

**Loot:** `Flutter` `RAG` · *private repo*

</details>

<details>
<summary><b>🔎 EasyNmap</b> — Nmap, made easier with AI</summary>
<br>

**Loot:** `Python` `Nmap` `LLM` · [**Enter dungeon →**](https://github.com/Firas-eng-hub/EasyNmap)

</details>

---

## 🕹️ Arcade — insert coin to play

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://optical-power-budget-simulator.vercel.app"><img src="assets/arcade-optical.jpg" alt="Optical Power Budget Simulator" /></a>
      <b>Optical Lab</b><br><sub>Fiber-link simulator: power budget, dispersion, max reach</sub><br>
      <a href="https://optical-power-budget-simulator.vercel.app">▶ PLAY</a> · <a href="https://github.com/Firas-eng-hub/Optical-power-budget-simulator">source</a>
    </td>
    <td align="center" width="50%">
      <a href="https://lo-l-assistant.vercel.app"><img src="assets/arcade-lol.jpg" alt="LaneForge — LoL matchup assistant" /></a>
      <b>LaneForge</b><br><sub>Matchup build assistant for League of Legends</sub><br>
      <a href="https://lo-l-assistant.vercel.app">▶ PLAY</a> · <a href="https://github.com/Firas-eng-hub/LoL-assistant">source</a>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="https://coffee-3-d.vercel.app"><img src="assets/arcade-coffee.jpg" alt="Frappuccino Atelier — 3D coffee site" /></a>
      <b>Frappuccino Atelier</b><br><sub>Coffee brand site with 3D scroll animation</sub><br>
      <a href="https://coffee-3-d.vercel.app">▶ PLAY</a> · <a href="https://github.com/Firas-eng-hub/Coffee-3D">source</a>
    </td>
    <td align="center" width="50%">
      <a href="https://mercedes-lux.vercel.app"><img src="assets/arcade-mercedes.jpg" alt="S-Class showcase site" /></a>
      <b>S-Class Showcase</b><br><sub>Cinematic luxury car landing page</sub><br>
      <a href="https://mercedes-lux.vercel.app">▶ PLAY</a> · <a href="https://github.com/Firas-eng-hub/Mercedes-Website">source</a>
    </td>
  </tr>
</table>

---

## 🎒 Inventory

**⚔️ Weapons — Cloud & DevOps**
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Ansible](https://img.shields.io/badge/Ansible-EE0000?style=flat-square&logo=ansible&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![NGINX](https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=nginx&logoColor=white)
![OVHcloud](https://img.shields.io/badge/OVHcloud-123F6D?style=flat-square&logo=ovh&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)

**🔮 Spells — AI & Automation**
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-EA4B71?style=flat-square&logo=n8n&logoColor=white)
![Groq](https://img.shields.io/badge/Groq_API-F55036?style=flat-square&logoColor=white)
![RAG](https://img.shields.io/badge/RAG-8A2BE2?style=flat-square)
![TinyML](https://img.shields.io/badge/TinyML-03234B?style=flat-square&logo=stmicroelectronics&logoColor=white)
![NLP](https://img.shields.io/badge/NLP-2E7D32?style=flat-square)

**🛠️ Tools — Development**
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)
![Java](https://img.shields.io/badge/Java_/_JEE-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![C](https://img.shields.io/badge/C_/_C++-00599C?style=flat-square&logo=cplusplus&logoColor=white)

**🛡️ Armor — Networking & Microsoft**
![Cisco](https://img.shields.io/badge/CCNA_ITN-1BA0D7?style=flat-square&logo=cisco&logoColor=white)
![TCP/IP](https://img.shields.io/badge/TCP%2FIP_·_IPv4%2FIPv6-555555?style=flat-square)
![Power Automate](https://img.shields.io/badge/Power_Automate-0066FF?style=flat-square&logo=powerautomate&logoColor=white)
![SharePoint](https://img.shields.io/badge/SharePoint-0078D4?style=flat-square&logo=microsoftsharepoint&logoColor=white)
![Microsoft 365](https://img.shields.io/badge/Microsoft_365-D83B01?style=flat-square&logo=microsoftoffice&logoColor=white)

---

## 🏆 Achievements Unlocked

| | Achievement | |
|:---:|---|---|
| 🎤 | **Pitched at CSTAM** | UtopiaHire, IEEE TSYP 13 competition |
| 💰 | **Treasurer** | IEEE Computer Society Chapter, ENIT Student Branch |
| 🎪 | **Event organizer** | IEEEXtreme · WIEAct · IEEE LUMEN |
| 📜 | **Fundamentals of MLOps** | KodeKloud · 2026 |
| 📜 | **CCNA: Introduction to Networks** | Cisco / ENIT · 2025 |
| 📜 | **Efficient LLM Customization** | NVIDIA / DeepLearning.AI · 2024 |

---

## 💾 Recent Saves
<sub>Auto-updated daily by a GitHub Action.</sub>

<!-- RECENT:START -->
| Save slot | Description | Lang | Last saved |
|---|---|---|---|
| 💾 [Enit_Connect](https://github.com/Firas-eng-hub/Enit_Connect) | TIC-Connect is a full-stack web platform designed to connect students, companies, and a… | `HTML` | 2026-11-16 |
| 💾 [Olivesoft-Pres](https://github.com/Firas-eng-hub/Olivesoft-Pres) | Olivesoft presentation | `JavaScript` | 2026-11-12 |
| 💾 [NIDS-TinyML](https://github.com/Firas-eng-hub/NIDS-TinyML) | A research prototype for training a network-flow classifier on CSE-CIC-IDS2018 CSVs, ex… | `Python` | 2026-11-10 |
| 💾 [Portfolio](https://github.com/Firas-eng-hub/Portfolio) | — | `JavaScript` | 2026-10-19 |
| 💾 [Utopia](https://github.com/Firas-eng-hub/Utopia) | Your career guide | `Python` | 2026-10-18 |
<!-- RECENT:END -->

---

## 📈 Player Stats

<div align="center">

<img height="180" src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Firas-eng-hub&theme=github_dark" alt="GitHub stats" />
<img height="180" src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Firas-eng-hub&theme=github_dark" alt="Repos per language" />


<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Firas-eng-hub/Firas-eng-hub/output/github-contribution-grid-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Firas-eng-hub/Firas-eng-hub/output/github-contribution-grid-snake.svg" />
  <img alt="Contribution snake" src="https://raw.githubusercontent.com/Firas-eng-hub/Firas-eng-hub/output/github-contribution-grid-snake.svg" />
</picture>

</div>

---

<details>
<summary><b>🇫🇷 Version française</b></summary>
<br>

**Mohamed Firas Berriri** — élève ingénieur en dernière année de Télécommunications à l'**ENIT**, spécialité Cloud.<br>
Je recherche un **PFE de 6 mois à partir de février 2027** en **Cloud, DevOps ou MLOps**.

**Parcours**
- **DRÄXLMAIER Group (METS)** — Stage automatisation des processus · juil.–août 2026 : workflow de gestion des badges visiteurs et stagiaires (Forms, SharePoint, Power Automate, Word, Outlook), adopté par l'entreprise.
- **ACTIA Engineering Services** — PFA2 · déc. 2025–mai 2026 : détecteur d'intrusions réseau TinyML (Random Forest, CSE-CIC-IDS2018) quantifié en INT16 sur STM32 — **87,25 %** de précision, ~100 Ko de flash, ~1 Ko de RAM.
- **L2T, Sousse** — Stage infrastructure cloud · juin–juil. 2025 : déploiement de clusters Kubernetes multi-nœuds avec Kubespray, Ansible et Docker.

**Projets** — EnitConnect (React, Docker, CI/CD GitHub, OVHcloud) · Assistant IA n8n + Groq (Telegram, WhatsApp) · UtopiaHire (IEEE TSYP 13, pitch au CSTAM) · Sakina (Flutter + RAG).

**Contact** — [LinkedIn](https://www.linkedin.com/in/mohamed-firas-berriri-287b06337/) · [mohamedfiras.berriri@etudiant-enit.utm.tn](mailto:mohamedfiras.berriri@etudiant-enit.utm.tn)

</details>

---

<div align="center">

```text
╔══════════════════════════════════════════╗
║            G A M E   O V E R ?           ║
║                                          ║
║     ▶ CONTINUE  — PFE · February 2027    ║
║       QUIT                               ║
╚══════════════════════════════════════════╝
```

[![Continue on LinkedIn](https://img.shields.io/badge/▶_CONTINUE-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohamed-firas-berriri-287b06337/)
[![Continue by email](https://img.shields.io/badge/▶_CONTINUE-Email-D14836?style=for-the-badge&logo=maildotru&logoColor=white)](mailto:mohamedfiras.berriri@etudiant-enit.utm.tn)

</div>
