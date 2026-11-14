# Workout-Generator

Würfelt aus deinen eigenen Übungslisten ein Workout nach dem Muster
**20× Übung → 10× Burpee-Variante → 20× Übung → …**

Die ganze App steckt in einer einzigen Datei: `Workout-Generator.html`.
Doppelklick genügt, sie läuft im Browser. Kein Server, keine Installation,
**keine Verbindung nach außen** – auch nicht zum Lesen von Excel-Dateien oder
zum Erzeugen des PDFs.

---

## Loslegen

1. `Workout-Generator.html` doppelklicken.
2. In Schritt 1 bei beiden Feldern auf **„Beispiel laden"** tippen – dann siehst
   du sofort, wie es aussieht.
3. Später die eigenen Listen über **„Datei wählen"** hochladen (oder die Datei
   einfach auf das Feld ziehen).

Die Listen bleiben gespeichert. Du lädst sie **einmal** hoch, danach sind sie
bei jedem Öffnen wieder da – ebenso deine Einstellungen und das zuletzt
gewürfelte Workout.

---

## Wie die Listen aussehen müssen

Eine Spalte mit Namen genügt. Erlaubt sind **.xlsx**, **.csv** und **.txt**.

Diese vier Dateien ergeben alle dasselbe Ergebnis:

| Variante | Inhalt |
|---|---|
| Nur Namen | `Kniebeuge` ⏎ `Klimmzug` ⏎ `Dips` |
| Mit Kopfzeile | `Übung` ⏎ `Kniebeuge` ⏎ `Klimmzug` |
| Mit Nummerierung | `Nr;Übung` ⏎ `1;Kniebeuge` ⏎ `2;Klimmzug` |
| Mit weiteren Spalten | `Übung;Muskelgruppe` ⏎ `Kniebeuge;Beine` |

Die App erkennt selbst:

- **Kopfzeilen** wie „Nr", „Übung", „Name", „Variante" – die werden übersprungen.
  Ein Eintrag, der schlicht `Burpee` heißt, bleibt dagegen erhalten: er steht
  bewusst nicht auf der Liste der Kopfzeilen-Wörter.
- **Nummernspalten** – steht in der ersten Spalte nur eine Zahl, zählt die nächste.
- **Trennzeichen** – Semikolon, Komma oder Tabulator. Ein Komma *im Namen*
  (`Burpee, einbeinig`) wird nicht als Trenner missverstanden, solange die Datei
  einspaltig ist.
- **Umlaute**, auch wenn Excel die CSV im alten Windows-Zeichensatz speichert.
- **Doppelte Einträge** – werden zusammengefasst, Groß- und Kleinschreibung egal.
  Die App sagt dir, wie viele es waren.

Bei Excel-Dateien wird immer das **erste Tabellenblatt** gelesen.

Die beiden mitgelieferten Dateien `Beispiel-Uebungen.csv` und
`Beispiel-Burpee-Varianten.csv` kannst du als Vorlage nehmen: in Excel öffnen,
Namen austauschen, speichern.

---

## Einseitige Übungen

Übungen, die nur eine Körperseite trainieren, erkennt die App an der
**Seitenangabe am Ende des Namens**. Beide Seiten werden zu einem Paar
verbunden – und das Paar wird immer am Stück gezogen:

```
Runde 1    20 ×  Ausfallschritt links
           10 ×  Burpee mit Klimmzug
Runde 2    20 ×  Ausfallschritt rechts
           10 ×  Devil Press
Runde 3    20 ×  Klimmzug
```

Die rechte Seite ist also **immer die nächste Übung**, mit dem Burpee-Block
dazwischen. Ein Seitenpaar verbraucht damit zwei deiner Runden. So kann keine
Seite mehr fehlen und es entsteht kein Ungleichgewicht.

**Erkannt werden** (Groß- und Kleinschreibung egal):

| Schreibweise | Beispiel |
|---|---|
| `links` / `rechts` | `Ausfallschritt links` |
| `li` / `re` | `Rudern einarmig re` |
| `l` / `r` | `Ausfallschritt L` |
| `left` / `right` | `Side Plank left` |
| in Klammern | `Seitstütz (rechts)` |
| mit Trennzeichen | `Split Squat / links`, `Ausfallschritt – rechts` |

Vor der Seitenangabe muss ein **Leerzeichen oder ein Satzzeichen** stehen.
Deshalb bleibt `Bizepscurl` eine ganz normale Übung und wird nicht als
„Bizepscur, linke Seite" missverstanden.

**Wenn etwas nicht aufgeht:**

- Steht in der Liste nur eine Seite (`Beinheben links` ohne `Beinheben rechts`),
  sagt die App das beim Hochladen und zieht den Eintrag einzeln.
- Bestehen deine Listen **ausschließlich** aus Seitenpaaren, braucht der Plan
  eine gerade Rundenzahl. Aus 5 Runden werden dann 6 – mit einem Hinweis, warum.
- Das **↻** an einer Zeile tauscht bei einem Seitenpaar immer **beide Seiten**
  zusammen aus. Gibt es kein freies Paar mehr, treten zwei Einzelübungen an
  seine Stelle.

---

## Die Einstellungen

| Feld | Bedeutung |
|---|---|
| **Runden** | Wie viele Übungen der Plan hat. 5 Runden = 5 Übungen + 5 Burpee-Blöcke. Ein Seitenpaar belegt zwei Runden. |
| **Wiederholungen je Übung** | Die große Zahl vor dem Übungsnamen. |
| **Wiederholungen je Burpee** | Dasselbe für die Burpee-Zeilen. |
| **Burpees dazwischen** | Aus = reiner Übungsplan ohne Burpees. |
| **Keine Übung doppelt** | An = jede Runde eine andere Übung. |

**„Keine Übung doppelt"** heißt im Detail: Die Liste wird gemischt und der Reihe
nach abgearbeitet – Seitenpaare zählen dabei als ein Eintrag. Erst wenn sie aufgebraucht ist, wird neu gemischt – und dabei
verhindert, dass dieselbe Übung zweimal direkt hintereinander kommt.

Ist deine Liste kürzer als die Rundenzahl, sagt die App das offen:
*„Nur 3 Übungen in der Liste bei 5 Runden – einige wiederholen sich."*

Gewürfelt wird mit dem Zufallsgenerator des Browsers (`crypto`), nicht mit dem
schwächeren Standard-Zufall.

---

## Der fertige Plan

Oben die Zusammenfassung, darunter die Blöcke in der Reihenfolge, in der du sie
machst. Übungen blau, Burpees orange und eingerückt.

| Knopf | Was er tut |
|---|---|
| **↻ an einer Zeile** | Tauscht **nur diese eine** Übung gegen eine andere aus der Liste. Bei einem Seitenpaar immer beide Seiten zusammen. |
| **Neu würfeln** | Kompletter neuer Plan. |
| **PDF herunterladen** | Legt `Workout_2026-11-02.pdf` in deinen Download-Ordner. |
| **Drucken** | Druckansicht des Browsers – ohne Knöpfe und Upload-Felder. |

Das PDF ist A4, nutzt die Standardschrift Helvetica und bricht bei langen Plänen
automatisch um. Eine Runde wird dabei nie auf zwei Seiten zerrissen.

---

## Aufs Handy holen

Die App liegt unter

```
https://jlesny.github.io/workout/
```

Dort im Handy-Browser öffnen und auf den Startbildschirm legen – *App
installieren* (Android, Chrome) oder *Teilen → Zum Home-Bildschirm* (iPhone,
Safari). Danach startet sie im Vollbild und läuft **auch ohne Internet**, im
Keller oder im Flugmodus. Kein Apple- oder Google-Entwicklerkonto, keine
Store-Prüfung, keine Kosten.

Die Einzelheiten stehen in **`ANLEITUNG-Hochladen.md`** – auch, was zu tun
ist, wenn sich an der App etwas ändert.

Im Netz steht nur die **leere App**. Die Übungslisten lädst du erst danach ins
Handy, und sie verlassen das Gerät nie.

**Was auf dem Handy anders aussieht**

- Die Plan-Zeilen sind zweizeilig: oben Runde und Wiederholungen, darunter der
  Name über die ganze Breite. So bleibt auch `Einbeinige Kniebeuge rechts` auf
  einer Zeile – bei Seitenpaaren kommt es genau darauf an.
- Alle Knöpfe, Schalter und Felder sind mindestens 44 Pixel groß, also mit dem
  Daumen zu treffen. Das **↻** ist dauerhaft sichtbar, weil es auf einem
  Touchscreen kein Überfahren mit der Maus gibt.
- Sehr lange Burpee-Namen wie `Half Burpee (ohne Liegestütz)` brechen auf
  schmalen Geräten auf zwei Zeilen um. Übungsnamen nicht.

**Was gleich bleibt:** alles andere. Es ist dieselbe Datei – `Workout-Generator.html`
läuft auf dem PC weiterhin per Doppelklick, ganz ohne die Handy-Teile.

**Nach einer Änderung an der App** muss in `sw.js` oben die `VERSION` erhöht
werden, sonst halten die Handys an der gespeicherten alten Fassung fest.

---

## Wo etwas gespeichert wird

Alles bleibt **im Browser auf diesem Gerät** (`localStorage`). Nichts wird
übertragen, es gibt kein Konto und keinen Server.

Daraus folgt:

- Ein anderer Browser oder ein anderer Rechner kennt deine Listen nicht.
- Löschst du die Browser-Daten, sind auch die Listen weg.
- Sollte der Browser hier nichts speichern können, sagt die App das beim Öffnen
  in einer roten Leiste. Dann funktioniert alles weiter, nur eben ohne Gedächtnis.

Die App an jemanden weitergeben: einfach `Workout-Generator.html` verschicken
(66 KB, eine Datei). Listen wandern dabei **nicht** mit – die lädt der Empfänger
selbst hoch. Die Symbol- und Handy-Dateien braucht er nur, wenn er sie selbst
auf einen Startbildschirm legen will.

---

## Was die App ohne Fremdcode selbst erledigt

Zwei Dinge, für die man sonst Bibliotheken einbindet:

**Excel lesen.** Eine `.xlsx` ist im Kern eine ZIP-Datei mit XML darin. Das
Auspacken erledigt der Browser mit `DecompressionStream`, das XML liest der
`DOMParser`. Eine fertige Excel-Bibliothek wäre allein rund 1 MB groß gewesen.

**PDF schreiben.** Das PDF wird Byte für Byte selbst gebaut – Katalog,
Seitenbaum, Textbefehle, Querverweistabelle. Helvetica ist eine der 14
Standardschriften, die jedes PDF-Programm schon mitbringt, deshalb muss keine
Schrift eingebettet werden.

Beides braucht Chrome, Edge oder Firefox in einer halbwegs aktuellen Fassung.
Kann ein Browser keine ZIP-Dateien auspacken, sagt die App das und verweist auf
CSV.

---

## Fehlermeldungen im Klartext

| Meldung | Grund |
|---|---|
| „Die Datei ist leer." | Null Bytes. |
| „Das ist eine PDF-Datei." | Falsche Datei erwischt. |
| „Das ist das alte Excel-Format (.xls)." | In Excel als `.xlsx` oder CSV speichern. |
| „In der Datei war kein Eintrag zu finden." | Nur Kopfzeile, oder alle Zellen leer. |
| „Die Excel-Datei ist mit einem Passwort geschützt." | Schutz in Excel entfernen. |
| „Dafür fehlt noch eine Übungsliste …" | Schritt 1 ist noch nicht erledigt. |
| „… hat keine Gegenseite in der Liste" | Eine einseitige Übung steht allein da. Kein Fehler – sie wird einzeln gezogen. |
| „Der Plan hat 6 statt 5 Runden" | Deine Listen bestehen nur aus Seitenpaaren, die Rundenzahl war ungerade. |

---

## Etwas ändern

Die Voreinstellungen stehen oben im `<script>`-Block von
`Workout-Generator.html`:

- `BEISPIEL` – die eingebauten Beispiellisten
- `zustand.einst` – Startwerte für Runden und Wiederholungen
- `MAX_EINTRAEGE` – Obergrenze je Liste (2000)
- `KOPF_WOERTER` – welche Wörter als Kopfzeile gelten
- `SEITE_MUSTER`, `LINKE_WOERTER`, `RECHTE_WOERTER` – wie Seitenangaben
  erkannt werden

Die Farben liegen ganz oben im `<style>`-Block unter `:root`, für den dunklen
Modus noch einmal darunter.

---

## Dateien

| Datei | Zweck |
|---|---|
| `Workout-Generator.html` | **Die App.** Eine Datei, läuft per Doppelklick. |
| `Beispiel-Uebungen.csv` | 29 Übungen als Vorlage, darunter drei Seitenpaare |
| `Beispiel-Burpee-Varianten.csv` | 12 Burpee-Varianten als Vorlage |
| `ANLEITUNG-Hochladen.md` | Schritt für Schritt zur App auf dem Startbildschirm |

Nur für die Handy-Fassung, am PC ohne Bedeutung:

| Datei | Zweck |
|---|---|
| `index.html` | leitet die kurze Adresse auf die App weiter |
| `manifest.webmanifest` | Name, Farbe und Symbole der installierten App |
| `sw.js` | speichert die App im Handy, damit sie offline startet |
| `icon-192.png`, `icon-512.png` | App-Symbol für Android |
| `apple-touch-icon.png` | App-Symbol fürs iPhone |
