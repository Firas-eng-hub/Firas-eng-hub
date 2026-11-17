<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/header.svg" />
  <source media="(prefers-color-scheme: light)" srcset="assets/header-light.svg" />
  <img alt="Mohamed Firas Berriri — Cloud & DevOps Engineering Student at ENIT — open to a PFE internship from February 2027" src="assets/header.svg" width="100%" />
</picture>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mohamed_Firas_Berriri-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohamed-firas-berriri-287b06337/)
[![Email](https://img.shields.io/badge/Email-mohamedfiras.berriri@etudiant--enit.utm.tn-30363d?style=flat-square&logo=maildotru&logoColor=white)](mailto:mohamedfiras.berriri@etudiant-enit.utm.tn)
[![PFE](https://img.shields.io/badge/PFE-open_·_Feb_2027-3fb950?style=flat-square)](#-connect---pfe-2027)

</div>

### `$ cat profile.yaml`

```yaml
apiVersion: v1
kind: Engineer
metadata:
  name: mohamed-firas-berriri
  location: tunisia
spec:
  school: ENIT — Telecommunications Engineering, Cloud specialization (2024–2027)
  focus: [kubernetes, docker, ci-cd, ai-automation, tinyml]
  languages: { arabic: native, french: fluent, english: B2, german: A2 }
status:
  phase: Seeking
  lookingFor: 6-month PFE · from February 2027 · Cloud / DevOps / MLOps
```

### `$ traceroute pfe-2027`

```text
traceroute to your-company (?.?.?.?), 6 hops max
 1  ipei-monastir.prepa      2022–2024   ✓  maths & physics
 2  enit.telecom.cloud       2024–2027   ✓  engineering degree
 3  l2t.sousse.k8s           Jun 2025    ✓  multi-node Kubernetes · Kubespray · Ansible
 4  actia.pfa2.tinyml        2025–2026   ✓  IDS on STM32 · 87.25% acc · ~1 KB RAM
 5  draxlmaier.automation    Jul 2026    ✓  badge workflow · adopted in production
 6  * * *  your-company                  ←  PFE · February 2027
```

<details>
<summary><code>$ kubectl describe experience</code></summary>
<br>

**DRÄXLMAIER Group (METS)** — Process Automation Intern · *Jul–Aug 2026*<br>
Designed and deployed a visitor & intern badge workflow — Microsoft Forms → SharePoint → Power Automate → Word → Outlook — centralizing records, badge generation, status tracking and email notifications. **Adopted by the company.**

**ACTIA Engineering Services** — Year-End Project (PFA2) · *Dec 2025–May 2026*<br>
TinyML network intrusion detector: Random Forest trained on CSE-CIC-IDS2018, quantized to INT16 and running in C on an STM32 — **87.25 % accuracy, ~100 KB flash, ~1 KB RAM**.

**L2T, Sousse** — Cloud Infrastructure Intern · *Jun–Jul 2025*<br>
Deployed and configured multi-node Kubernetes clusters with Kubespray and Ansible; Docker for containerized workloads, Lens for cluster management.

</details>

### `$ kubectl get projects`

```text
NAME             STATUS      STACK                                   NOTES
enit-connect     Running     React · Express · PostgreSQL · Docker   deployed on OVHcloud via GitHub CI/CD
nids-tinyml      Completed   Python · Random Forest · C · STM32      87.25% accuracy in ~1 KB RAM
ai-assistant     Running     n8n · Groq · Telegram · WhatsApp        email & calendar by natural language
utopia-hire      Completed   Python · pdfplumber · NLTK              IEEE TSYP 13 · pitched at CSTAM
sakina           Completed   Flutter · RAG                           emotion-aware Quranic guidance
easy-nmap        Running     Python · Nmap · LLM                     Nmap made easier with AI
```

<details>
<summary><code>$ kubectl describe project nids-tinyml</code></summary>
<br>

Trains a network-flow classifier on CSE-CIC-IDS2018, exports the Random Forest to C, and evaluates STM32 predictions over UART, with a local Flask dashboard. → [repo](https://github.com/Firas-eng-hub/NIDS-TinyML)

```mermaid
flowchart LR
    A[(CSE-CIC-IDS2018<br/>flow CSVs)] --> B[Random Forest<br/>training]
    B --> C[INT16 quantization<br/>+ export to C]
    C --> D[STM32<br/>inference]
    D -- UART --> E[Flask<br/>dashboard]
```

</details>

<details>
<summary><code>$ kubectl describe project enit-connect</code></summary>
<br>

ENIT career platform connecting students, companies and administrators. I built the React frontend and deployed the stack on OVHcloud with Docker and GitHub CI/CD. → [repo](https://github.com/Firas-eng-hub/Enit_Connect)

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
<summary><code>$ kubectl describe project ai-assistant utopia-hire sakina easy-nmap</code></summary>
<br>

- **AI Workflow Assistant** — assistant on Telegram and WhatsApp that executes natural-language email and scheduling requests through Gmail and Google Calendar tools (n8n + Groq API).
- **UtopiaHire** — CV parsing and skills-extraction pipeline for an AI recruitment platform with job matching and interview simulation; selected to pitch at CSTAM (IEEE TSYP 13). → [repo](https://github.com/Firas-eng-hub/Utopia)
- **Sakina** — Flutter app using retrieval-augmented generation to surface Quranic verses matching the emotion you express. *(private repo)*
- **EasyNmap** — AI layer that makes Nmap easier to drive. → [repo](https://github.com/Firas-eng-hub/EasyNmap)

</details>

### `$ curl -sI` — live deployments

<table>
  <tr>
    <td colspan="2" align="center">
      <a href="https://olivesoft-lime.vercel.app"><img src="assets/demo-olivebranch.jpg" alt="OliveBranch — RFP intelligence platform" width="70%" /></a><br>
      <code>200 OK</code> <b>OliveBranch</b> — RFP intelligence: scans public tenders daily, scores them against internal CVs &amp; references, drafts an editable PPTX/PDF proposal<br>
      <sub><a href="https://olivesoft-lime.vercel.app">live</a> · private repo</sub>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <a href="https://optical-power-budget-simulator.vercel.app"><img src="assets/demo-optical.jpg" alt="Optical Lab — fiber-optic link simulator" /></a><br>
      <code>200 OK</code> <b>Optical Lab</b> — fiber-link power budget, dispersion &amp; max reach<br>
      <sub><a href="https://optical-power-budget-simulator.vercel.app">live</a> · <a href="https://github.com/Firas-eng-hub/Optical-power-budget-simulator">source</a></sub>
    </td>
    <td width="50%" valign="top">
      <a href="https://lo-l-assistant.vercel.app"><img src="assets/demo-lol.jpg" alt="LaneForge — matchup build assistant" /></a><br>
      <code>200 OK</code> <b>LaneForge</b> — matchup build assistant<br>
      <sub><a href="https://lo-l-assistant.vercel.app">live</a> · <a href="https://github.com/Firas-eng-hub/LoL-assistant">source</a></sub>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <a href="https://coffee-3-d.vercel.app"><img src="assets/demo-coffee.jpg" alt="Frappuccino Atelier — 3D coffee site" /></a><br>
      <code>200 OK</code> <b>Frappuccino Atelier</b> — 3D scroll-animated brand site<br>
      <sub><a href="https://coffee-3-d.vercel.app">live</a> · <a href="https://github.com/Firas-eng-hub/Coffee-3D">source</a></sub>
    </td>
    <td width="50%" valign="top">
      <a href="https://mercedes-lux.vercel.app"><img src="assets/demo-mercedes.jpg" alt="S-Class showcase landing page" /></a><br>
      <code>200 OK</code> <b>S-Class Showcase</b> — cinematic product landing page<br>
      <sub><a href="https://mercedes-lux.vercel.app">live</a> · <a href="https://github.com/Firas-eng-hub/Mercedes-Website">source</a></sub>
    </td>
  </tr>
</table>

### `$ helm list -A` — stack

| Namespace | Tools |
|---|---|
| **cloud-devops** | ![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Ansible](https://img.shields.io/badge/Ansible-EE0000?style=flat-square&logo=ansible&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) ![NGINX](https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=nginx&logoColor=white) ![OVHcloud](https://img.shields.io/badge/OVHcloud-123F6D?style=flat-square&logo=ovh&logoColor=white) ![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black) |
| **ai-automation** | ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![n8n](https://img.shields.io/badge/n8n-EA4B71?style=flat-square&logo=n8n&logoColor=white) ![Groq](https://img.shields.io/badge/Groq_API-F55036?style=flat-square) ![RAG](https://img.shields.io/badge/RAG-6E40C9?style=flat-square) ![TinyML](https://img.shields.io/badge/TinyML-03234B?style=flat-square&logo=stmicroelectronics&logoColor=white) ![NLP](https://img.shields.io/badge/NLP-2E7D32?style=flat-square) |
| **development** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white) ![Java](https://img.shields.io/badge/Java_/_JEE-ED8B00?style=flat-square&logo=openjdk&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![C](https://img.shields.io/badge/C_/_C++-00599C?style=flat-square&logo=cplusplus&logoColor=white) |
| **network-ms365** | ![Cisco](https://img.shields.io/badge/CCNA_ITN-1BA0D7?style=flat-square&logo=cisco&logoColor=white) ![TCP/IP](https://img.shields.io/badge/TCP%2FIP_·_IPv4%2FIPv6-555555?style=flat-square) ![Power Automate](https://img.shields.io/badge/Power_Automate-0066FF?style=flat-square&logo=powerautomate&logoColor=white) ![SharePoint](https://img.shields.io/badge/SharePoint-0078D4?style=flat-square&logo=microsoftsharepoint&logoColor=white) ![Microsoft 365](https://img.shields.io/badge/Microsoft_365-D83B01?style=flat-square&logo=microsoftoffice&logoColor=white) |

### `$ ls ~/certs ~/leadership`

```text
certs/
  fundamentals-of-mlops            KodeKloud               2026
  ccna-introduction-to-networks    Cisco / ENIT            2025
  efficient-llm-customization      NVIDIA / DeepLearning   2024

leadership/
  treasurer                        IEEE Computer Society Chapter · ENIT SB
  organizer                        IEEEXtreme · WIEAct · IEEE LUMEN
  pitch                            UtopiaHire @ CSTAM · IEEE TSYP 13
```

### `$ git log -5` — recently pushed
<sub>Refreshed daily by a GitHub Action.</sub>

<!-- RECENT:START -->
| Repository | Description | Language | Last push |
|---|---|---|---|
| [Enit_Connect](https://github.com/Firas-eng-hub/Enit_Connect) | TIC-Connect is a full-stack web platform designed to connect students, companies, and a… | `HTML` | 2026-11-16 |
| [Olivesoft-Pres](https://github.com/Firas-eng-hub/Olivesoft-Pres) | Olivesoft presentation | `JavaScript` | 2026-11-12 |
| [NIDS-TinyML](https://github.com/Firas-eng-hub/NIDS-TinyML) | A research prototype for training a network-flow classifier on CSE-CIC-IDS2018 CSVs, ex… | `Python` | 2026-11-10 |
| [Portfolio](https://github.com/Firas-eng-hub/Portfolio) | — | `JavaScript` | 2026-10-19 |
| [Utopia](https://github.com/Firas-eng-hub/Utopia) | Your career guide | `Python` | 2026-10-18 |
<!-- RECENT:END -->

### `$ top` — activity

<div align="center">

<img height="180" src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Firas-eng-hub&theme=github_dark" alt="GitHub stats" />
<img height="180" src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Firas-eng-hub&theme=github_dark" alt="Repos per language" />

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Firas-eng-hub/Firas-eng-hub/output/github-contribution-grid-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Firas-eng-hub/Firas-eng-hub/output/github-contribution-grid-snake.svg" />
  <img alt="Contribution graph" src="https://raw.githubusercontent.com/Firas-eng-hub/Firas-eng-hub/output/github-contribution-grid-snake.svg" />
</picture>

</div>

<details>
<summary><code>$ export LANG=fr_FR.UTF-8</code> — version française</summary>
<br>

**Mohamed Firas Berriri** — élève ingénieur en dernière année de Télécommunications à l'**ENIT**, spécialité Cloud.<br>
Je recherche un **PFE de 6 mois à partir de février 2027** en **Cloud, DevOps ou MLOps**.

- **DRÄXLMAIER Group (METS)** — Stage automatisation des processus · juil.–août 2026 : workflow de gestion des badges visiteurs et stagiaires (Forms, SharePoint, Power Automate, Word, Outlook), adopté par l'entreprise.
- **ACTIA Engineering Services** — PFA2 · déc. 2025–mai 2026 : détecteur d'intrusions réseau TinyML (Random Forest, CSE-CIC-IDS2018) quantifié en INT16 sur STM32 — **87,25 %** de précision, ~100 Ko de flash, ~1 Ko de RAM.
- **L2T, Sousse** — Stage infrastructure cloud · juin–juil. 2025 : déploiement de clusters Kubernetes multi-nœuds avec Kubespray, Ansible et Docker.

**Projets** — EnitConnect (React, Docker, CI/CD GitHub, OVHcloud) · Assistant IA n8n + Groq (Telegram, WhatsApp) · UtopiaHire (IEEE TSYP 13, pitch au CSTAM) · Sakina (Flutter + RAG).

</details>

### `$ ./connect --pfe 2027`

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohamed-firas-berriri-287b06337/)
[![Email](https://img.shields.io/badge/Email-Get_in_touch-30363d?style=for-the-badge&logo=maildotru&logoColor=white)](mailto:mohamedfiras.berriri@etudiant-enit.utm.tn)

</div>
