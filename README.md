Ovo je aplikacija napravljena u React.js-u.

Uputstvo:
U konzoli morate doći u folder u kome se nalazi ova aplikacija. Folder se zove hidroplast2020.
Ukoliko u aplikaciji ne postoji folder pod imenom node_modules treba instalirati sve pakete u konzoli komandom npm install ili yarn install.
Da bi se aplikacija otvorila u brauzeru (localhost:3000), koristi se komanda npm start ili yarn start. Na taj način se mogu pratiti sve promene koje se naprave u aplikaciji, dovoljno je sačuvati ih. Za izlazak iz ovoga se ukuca u konzoli Ctrl+c, a na pitanje koje se pojavi se odgovori kucanjem y (za yes).
Da bi se aplikacija podigla na lajv, u package.json fajlu se ispod reda "name" doda:
"homepage": "https://imedomena.nešto",
 a zatim se mora uraditi bildanje za produkciju komandom npm run build ili yarn build. Pritom se generiše build folder koji sadži sve što je potrebno za aplikaciju na hostingu. Ako takav folder već postoji, taj stari se zameni novim sa svim promenama koje su načinjene u medjuvremenu. (Jednostavan primer na linku: https://stackoverflow.com/questions/44594500/can-i-deploy-my-reactjs-app-on-a-regular-host/44594670). Sadržaj ovog foldera se kopira u root na hostingu. 
U cPanelu sadržaj build foldera (zipovano) kopira se u public_html folder. U istom folderu (public_html) se mora generisati i .htaccess fajl sledeće sadržine:
<IfModule mod_rewrite.c>

  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]

</IfModule>
Malo detaljnije ima na https://dev.to/crishanks/deploy-host-your-react-app-with-cpanel-in-under-5-minutes-4mf6

Ovo bi trebalo da omogući da se aplikacija prebaci na hosting i poseti na odgovarajućoj adresi.
