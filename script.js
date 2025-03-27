// ===================== 1
name = 'Miras';
admin = name;

alert(admin);

// ===================== 2
contry = prompt('В каком городе вы живете?');
contryAge = prompt('В каком году был основан город?');
contryPopulation = prompt('Сколько людей живет в городе?');

alert(`Городу ${contry} уже ${2025 - contryAge} лет с момента его появления, ${contryPopulation} человек.`);

// ===================== 3
R = prompt('Введите радиус окружности: ');
S = Math.PI * R * R;
alert(`Площадь окружности = ${S}`);

// ===================== 4
a = prompt('Введите первое число: ');
b = prompt('Введите второе число: ');

alert(`Сумма чисел = ${Number(a) + Number(b)} `);
alert(`Разность чисел = ${Number(a) - Number(b)}`);
alert(`Частное чисел = ${Number(a) / Number(b)}`);
alert(`Произведение чисел = ${Number(a) * Number(b)}`);
