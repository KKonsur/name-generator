const male = ['Adam', 'Jan', 'Jakub', 'Andrzej', 'Dawid', 'Szymon', 'Konrad', 'Filip', 'Kamil', 'Damian', 'Adrian', 'Arek', 'Rafał',
   'Aleksander', 'Bartosz', 'Beniamin', 'Borys', 'Cezary', 'Błażej', 'Bartłomiej', 'Barnaba', 'Bolebor', 'Cyryl', 'Cyprian', 'Daniel',
   'Dominik', 'Dorian', 'Dimitr', 'Władimir', 'Dezyderiusz', 'Emil', 'Eustachy', 'Euzebiusz', 'Eryk', 'Fabian', 'Erwin', 'Abdo',
   'Florian', 'Franciszek', 'Gabriel', 'Gustaw', 'Grzegorz', 'Henryk', 'Mirosław', 'Hubert', 'Hipolit', 'Igor', 'Ignacy', 'Jarosław',
   'Jacek', 'Janusz', 'Jerzy', 'Joda', 'Szifu', 'Józef', 'Julian', 'Kacper', 'Klaudiusz', 'Kordian', 'Krzysztof', 'Ksawery', 'Lech',
   'Łukasz', 'Lucjan', 'Łazarz', 'Maks', 'Maciej', 'Mateusz', 'Marcin', 'Michał', 'Miron', 'Gandalf', 'Norbert', 'Olaf', 'Olgierd', 'Oskar',
   'Patryk', 'Przemysław', 'Piotr', 'Rumuald', 'Ryszard', 'Alojzy', 'Hubert', 'Sylwester', 'Sebastian', 'Syriusz', 'Szczepan', 'Tadeusz', 'Teodor',
   'Tyberiusz', 'Tomasz', 'Wacław', 'Zdzisław', 'Zbigniew', 'Zenon', 'Ziemowit', 'Alfred', 'Albert', 'Amadeusz', 'Artur', 'Bronimir',
   'Choroman', 'Dariusz', 'Gniewko', 'Gniewomir', 'Hieronim', 'Joachim', 'Kajetan', 'Lothar', 'Mariusz', 'Mikołaj', 'Orion', 'Remigiusz', 'Romuald']

const female = ['Aleksandra', 'Adela', 'Aldona', 'Adrianna', 'Amelia', 'Angelika', 'Anetla', 'Anita', 'Anna', 'Aurelia', 'Balbina',
   'Bożena', 'Bogumiła', 'Beata', 'Barbara', 'Bianka', 'Celina', 'Czesława', 'Dagmara', 'Diana', 'Debora', 'Dobrosława', 'Dorota', 'Daniela',
   'Edyta', 'Edmunda', 'Eleonora', 'Eliza', 'Elwira', 'Emilia', 'Ewa', 'Ewelina', 'Eryka', 'Faustyna', 'Florencja', 'Florentyna',
   'Felicja', 'Filomena', 'Gabriela', 'Gaja', 'Gizela', 'Greta', 'Genowefa', 'Halina', 'Helena', 'Henryka', 'Hermeneglida', 'Hortensja',
   'Honorata', 'Ida', 'Ingrid', 'Irena', 'Iris', 'Iwona', 'Iza', 'Izabela', 'Jadwiga', 'Jola', 'Jolanta', 'Julia', 'Justyna', 'Kaja',
   'Kamila', 'Klara', 'Klaudia', 'Kinga', 'Katarzyna', 'Karolina', 'Lucyna', 'Luna', 'Lena', 'Lidia', 'Liliana', 'Łucja', 'Magda',
   'Marcelina', 'Maria', 'Mariola', 'Marlena', 'Marta', 'Megan', 'Milena', 'Melisa', 'Miranda', 'Monika', 'Nadia', 'Natalia', 'Nikola',
   'Nina', 'Olga', 'Olimpia', 'Oliwia', 'Otylia', 'Pamela', 'Paulina', 'Regina', 'Rita', 'Róża', 'Sabina', 'Sonia', 'Samuela', 'Sylwia',
   'Sandra', 'Teresa', 'Tamara', 'Urszula', 'Walentyna', 'Wiktoria', 'Weronika', 'Patrycja', 'Zofia', 'Zuzanna', 'Żaneta']

const btn_male = document.querySelector('.btn_male')
const btn_female = document.querySelector('.btn_female')
const result = document.querySelector('.result')

const maleNameGenerator = () => {
   const index = Math.floor(Math.random() * male.length)
   result.textContent = male[index]
}

const femaleNameGenerator = () => {
   const index = Math.floor(Math.random() * female.length)
   result.textContent = female[index]
}

btn_male.addEventListener('click', maleNameGenerator)
btn_female.addEventListener('click', femaleNameGenerator)
