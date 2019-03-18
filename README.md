# bvv-bookmarklet
Bookmarklet für eine verbesserte Anzeige von Inhalten des Ratsinformationssystems der Berliner Bezirksverordnetenversammlungen BVV.

### Problem:
Das in das Informationsangebot des Landes Berlin [https://www.berlin.de]() eingebundene Ratsinformationssytem ALLRIS ist auf Smartphones und anderen kleinen Displays nicht nutzbar, da weder Zoomen noch horizontales Scrollen unterstützt werden.

Beispiel: [BVV Charlottenburg-Wilmersdorf](https://www.berlin.de/ba-charlottenburg-wilmersdorf/politik/bezirksverordnetenversammlung/online/si010.asp)

### Features
* Horizontales Scrollen möglich, damit dargestellte Seiten nicht abgeschnitten werden. Damit ist das Lesen zwar immer noch nicht konfortabel aber zumindest möglich.

## Installation

Die Installatoon kann über [http://github.io/bvv-bookmarklet]() erfolgen.

## Nutzung

Auf der jeweiligen Seite den angelegten Bookmark ```BVV Fix``` aufrufen.

## Build

Der Build verwendet ```npm``` und ```webpack```. Es werden zwei Konfigurationen eingesetzt, um sowohl ads Bookmarklet als auch die Webseite für die Installation zu bauen. 

```
npm install
npx webpack --config-name=bookmarklet
npx webpack --config-name=webpage
```
