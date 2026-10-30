# STREAMLORE — koncepcja produktu

## Obietnica
Dobre streamy się kończą. Wspólne momenty zostają.
StreamLore tworzy osobisty album historii kanału. Przedmiotem kolekcji jest wydarzenie i wspomnienie, a nie towar. Prototyp wykorzystuje oryginalną postać NOVA i animowane ilustracje SVG. Nie są to nagrane klipy ani działający influencer AI.

## Pętla zaangażowania
1. Twórca zapowiada następny rozdział na naturalną przerwę w programie, np. po rundzie. Bez wymuszania wielu godzin oglądania.
2. Trzy różne osoby piszą !moment. Próg trzech służy demonstracji; w produkcie byłby konfigurowalny i jawny.
3. Społeczność odblokowuje tę samą kartę. Nie ma losowania ani lepszych szans za płatność.
4. Każdy może odebrać kopię przez !claim. !claim first-light pozwala wrócić do poprzedniego odblokowanego rozdziału.
5. Streamer otwiera następny rozdział komendą !next. Tylko jego Twitch ID może to zrobić.
6. Album pokazuje pozostałe rozdziały i zachęca do powrotu po dalszą część opowieści. Nie kasujemy serii ani zdobytych kart za nieobecność.

Rarity ORIGIN / RARE / EPIC / LEGENDARY to redakcyjne nazwy kategorii wydarzeń. Nie deklarujemy nakładów, cen, unikatowych egzemplarzy ani sztucznej podaży. Numer na karcie to numer rozdziału, a nie dowód rzadkości majątkowej.

## Dlaczego wracać
Tożsamość członka społeczności, domknięcie sześcioczęściowej historii i wspólne odkrywanie. Oczekiwany efekt jest hipotezą: brak danych potwierdzających wzrost retencji. Nie nagradzamy spamowania, botów, sztucznego ruchu ani samego otwarcia karty przeglądarki. Prototyp nie mierzy czasu oglądania i nie potrafi potwierdzić, czy osoba rzeczywiście ogląda obraz.

## Kierunek rozwoju
Etap 1: prototyp jednego kanału, model rozdziałów, kolekcja lokalna, EventSub bridge i OBS overlay.
Etap 2: prawdziwe klipy za zgodą twórcy, metadane momentu, autoryzacja widza i prywatny album. Moderacja oraz usuwanie materiałów i danych na żądanie.
Etap 3: edytor sezonów, szablony graficzne, jawny harmonogram rozdziałów, głosowanie na najlepszy moment streama bez płatnych głosów.
Etap 4: wspólne historie kilku kanałów, za zgodą twórców i widzów. Synchronizacja kolekcji wymaga osobnego backendu i kontroli dostępu.
Możliwy przyszły model biznesowy: stała opłata twórcy za narzędzie do produkcji sezonów. Bez sprzedaży kart widzom i bez przewagi płacących. Nie ma go w prototypie; wymaga osobnej analizy zasad i popytu.

## Granice
Brak handlu, transferu, NFT, wymiany, płatności, Bitsów, subów, Channel Points, nagród rzeczowych lub gotówkowych. Brak lootboxów i płatnego losowania. Odblokowane rozdziały nie wygasają. Nie obiecujemy akceptacji Twitcha. To niezależne narzędzie, nie oficjalny Twitch Drops.

## Plan oceny, bez wymyślonych wyników
Zgoda twórcy; dwa podobne streamy bazowe i dwa z prototypem. Za zgodą i z minimalizacją danych porównać udział różnych uczestników czatu, powroty do kolejnych rozdziałów, ukończenie albumu i deklarowaną satysfakcję. Nie przedstawiać tych danych jako czasu oglądania; kontrolować temat i długość streama. Nie wyciągać wniosku o przyczynowości z małej próby.

## Zweryfikowane źródła 30.10.2026
- https://dev.twitch.tv/docs/drops/ : oficjalne Drops są dla nagród powiązanych z grą. Dokumentacja wyklucza nagrody o wartości pieniężnej; nie należy traktować tego jako ogólnego zakazu wszystkich płatności i handlu na całym Twitchu. Nasz zakres jest świadomie węższy.
- https://dev.twitch.tv/docs/chat/authenticating/ : lokalny bot może działać z user access token i user:read:chat; odbiór EventSub przez WebSocket.
- https://dev.twitch.tv/docs/eventsub/handling-websocket-events/ : handshake, keepalive, reconnection i ponowne subskrybowanie po utracie sesji; brak odtwarzania utraconych zdarzeń.
- https://dev.twitch.tv/docs/authentication/register-app/ : rejestracja aplikacji i 2FA.
- https://twitchcon-codex.devpost.com/rules : wymagany działający projekt i testowalne repo GitHub/GitLab/Bitbucket, film poniżej 3 min pokazujący Twitch i użycie Codex, session ID; deadline 02.11.2026 23:00 Warszawa.
Nie zamieszczamy kwalifikacji jako opinii prawnej; przed wydaniem produkcyjnym trzeba sprawdzić pełne Developer Services Agreement, Community Guidelines i ochronę danych. Prototyp nie jest produkcyjną usługą.
